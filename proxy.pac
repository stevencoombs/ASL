function FindProxyForURL(url, host) {
    var bypassList = [
        "*.mosyle.com", 
        "maxcdn.bootstrapcdn.com",
        "*.googleapis.com",
        "*.nextdns.io",  
    ];
    
   
    return "PROXY filter.asl.org:8080";

}
