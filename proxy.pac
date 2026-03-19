function FindProxyForURL(url, host) {
    var bypassList = [
        "*.asl.org",
        "*.mosyle.com", 
        "maxcdn.bootstrapcdn.com",
        "*.googleapis.com",
        "*.nextdns.io",  
    ];
    
    for (var i = 0; i < bypassList.length; i++) {
        if (shExpMatch(host, bypassList[i])) {
            return "DIRECT";
        }
    }
    
    if (isInNet(host, "17.0.0.0", "255.0.0.0")) {
        return "DIRECT";
    }
    
    if (dnsResolve('internal_pac.asl.org') == '172.20.200.200') {
        return 'DIRECT';
    }
    
    return "PROXY filter.asl.org:8080";

}
