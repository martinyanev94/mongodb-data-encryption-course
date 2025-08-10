import json

def read_audit_log(file_path):
    with open(file_path) as f:
        logs = json.load(f)
        for log in logs:
            if 'alice' in log['users'][0]['user']:
                print(f"Action: {log['atype']} at {log['ts']}")
