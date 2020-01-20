function get_webhook_url() {
    if (window.location.host.includes('.github.io')) {
        // prod
        return 'https://lumi-webhook.herokuapp.com'
    }
    // dev
    return 'http://localhost:9000'
}
