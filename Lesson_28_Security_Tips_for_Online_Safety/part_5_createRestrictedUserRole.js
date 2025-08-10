db.createRole({
    role: "restrictedUser",
    privileges: [],
    roles: [],
    authenticationRestrictions: [
        {
            clientSource: ["192.168.1.1", "192.168.1.2"],
            serverAddress: ["192.168.1.100"]
        }
    ]
});
