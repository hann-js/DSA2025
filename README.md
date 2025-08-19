# DSA2025

This repo contains all the practice questions for DSA with necessary explaination wherever required.
//////////////////////////////////////////
........JS-ADVANCED-INTERVIEW PREP........
//////////////////////////////////////////
WebWorker..
main thread
web worker is a separate thread which can run in parallel with each other—used mainly to do computationally expensive work—so that main thread is not blocked for long for computational heavy task

WW cant access or manipulate DOM
const worker = new Worker(<workerscript-path>)
worker.postMessage(‘hello’)
worker.onmessage = function(msg) {} // to get back info from ww script

global object in WW script is the worker itself as window is not available

onmessage = function(message) {
postMessage(‘hi main’)
}
// only serializable items can be passed, fn, classes, dom elements, cant be passed

//heavy tasks eg: image processing, encryption-decryption, large data manipulation

types: dedicated: only attached to main thread
shared:shared across various open tabs or iframes, windows: but to same origin

==============================
service workers are used to cache resources of our web app and make it available offline
we can also store the user interaction offline and once we’re back online we can push that data to server

# Offline support/ smart caching-online/Push notifications-even when webapp is closed/Background sync/Background sync

map/set/weak map/weak set

map---
Keys can be any data type -even fn,obj,str,num
preserves the order
size property
methods>>
set(key, value)
get(key)
has(key)
delete(key)
clear()
size
keys()/values()/enteries() //returns keys/values/[k,v] array

WEAKmap
--WeakMap holds weak references — keys can be garbage collected if no other references exist
WeakMap keys must be objects
WeakMap cannot be iterated or checked for size
Useful for caching, memoization

SET
-unique/no duplicates allowed
methods>add(value)
has(value)
delete(value)
clear()
size //property
values() /keys()/entries() ////returns values/values/[v,v] array

WEAKset
only stores objects
holds weak references to those objects

===============================
memory leaks
--Global variables/Closures holding references/Event listeners not removed/Timers and intervals/Caches without limits

# memory leak means that app will become slow due to too much memory usage- not clearing unused items

indexedDB
client-side, NoSQL database inside the browser
Allows you to store large amounts of structured data
persists data even after the browser is closed,Good for offline apps, caching,
its operations run in background so doesnt block main thread
===============================
WebSockets
(two-way) communication
real-time, persistent communication..chat apps, live feeds, games

--WebSocket handshake request to upgrade the HTTP connection.
If the server agrees, the connection switches to the WebSocket protocol
Both client and server can then send messages independently at any time.
The connection stays open until either side closes it.
const socket = new WebSocket('wss://example.com/socket');

socket.onopen = () => {
socket.send('Hello Server!');
};

socket.onmessage = (event) => {
console.log('Received:', event.data);
};
===============================
server sent events
One-way (server → client) // only server can push data, client cant
Long-lived, persistent connection

> live news feeds, notifications

const eventSource = new EventSource('https://example.com/sse');
eventSource.onmessage = (event) => {
console.log('SSE message:', event.data);
};
===============================
Caching Strategies--network first or only, cache first or only, race,
===============================
Difference between fetch and XMLHttpRequest
Promise vs callback based
===============================
CORS:CORS is a browser security feature that restricts cross-origin HTTP requests unless the server explicitly allows them via headers like
Access-Control-Allow-Origin: \*
==============================

vulnerabilty
Cross-Site Scripting (XSS):::Injecting malicious JS into your site via user input:::Sanitize user input
Cross-Site Request Forgery::Attacker tricks a user into submitting a request on their behalf::CSRF tokens with server-side validation

Insecure Dependencies::outdated or vulnerable npm packages::npm audit fix
Hardcoding API keys, secrets::Never store secrets in JS/Store secrets in server-side code or use environment variables
=========
optimisation>> tree shaking/code splitting/lazy loading/caching
=========
webapis
app bundling
profiliing

Event loop, call stack, task queue, microtasks vs macrotasks

nodejs fundamentals
WebAssembly
Push API + Notification API
BroadcastChannel API
