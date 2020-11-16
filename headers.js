var myHeaders = new Headers()
myHeaders.set('Cache-control', 'no-cache');
myHeaders.append('X-Frame-Options', 'allow-from uri');
myHeaders.append('Content-Security-Policy', "base-uri 'self'");
myHeaders.append('Expires', 'Sun, 04 May 2021 00:00:01 GMT');
myHeaders.append('X-Content-Type-Options', "nosniff");
myHeaders.append('Access-Control-Allow-Origin', '*')

$.ajaxSetup({
    'headers': {
        '': ''
    }
})