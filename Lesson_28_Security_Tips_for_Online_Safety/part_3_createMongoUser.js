db.createUser({
    user: "CN=myUser,OU=orgUnit,O=org,L=locality,ST=state,C=country",
    roles: [
        { role: "readWrite", db: "myDatabase" }
    ]
});
mongosh --tls --tlsCertificateKeyFile /path/to/client.pem --tlsCAFile /path/to/CA.pem --authenticationDatabase '$external' --authenticationMechanism MONGODB-X509
