use std::{thread, time};
use reqwest::header::ACCEPT;
use std::collections::HashMap;
use reqwest::header::CONTENT_TYPE;
use serde::{Deserialize, Serialize};
use sysinfo::{ProcessExt, System, SystemExt};

#[derive(Serialize, Deserialize)]
struct APIResponse {
    Success: bool,
    Message: Option<String>,
}

#[tokio::main]
async fn main() {
    let delay = time::Duration::from_millis(100);
    let client = reqwest::Client::new();

    let mut processes: HashMap<String, String> = HashMap::new();
    let mut sys = System::new_all();

    for (pid, process) in sys.processes() {
        let data = serde_json:: json!({
            "pid": pid.to_string(),
            "name": process.name(),
            "disk_usage": {
                "read": process.disk_usage().total_read_bytes,
                "written": process.disk_usage().total_written_bytes,
            },
        });
        let stringy = serde_json::to_string(&data).unwrap();
        processes.insert(process.name().to_string(), stringy);
    }

    while true {
        sys.refresh_all();

        let mut body = serde_json:: json! ({
            "name": sys.name(),
            "host_name": sys.host_name(),
            "ip": public_ip::addr().await,
            "os": {
                "kernel_version": sys.kernel_version(),
                "version": sys.os_version(),
            },
            "memory": {
                "total": sys.total_memory(),
                "used": sys.used_memory(),
                "free": sys.free_memory(),
                "swap": sys.used_swap(),
            },
            "processes": processes,
        });

        let upload_res = client
            .post("http://127.0.0.1:3000/data")
            .header(CONTENT_TYPE, "application/json")
            .header(ACCEPT, "application/json")
            .body(serde_json::to_string(&body).unwrap())
            .send()
            .await
            .expect("failed to get response")
            .text()
            .await
            .expect("failed to get payload");
        let upload_data: APIResponse =
            serde_json::from_str(&upload_res).expect("failed to deserialize");
        if upload_data.Message != None {
            println!("{:?}", upload_data.Message.unwrap().to_string());
        }
        thread::sleep(delay);
    }
}
