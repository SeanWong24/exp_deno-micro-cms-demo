function u(r){var e=new Error(r);return e.source="ulid",e}var i="0123456789ABCDEFGHJKMNPQRSTVWXYZ",a=i.length,f=Math.pow(2,48)-1,c=10,s=16;function d(r){var e=Math.floor(r()*a);return e===a&&(e=a-1),i.charAt(e)}function m(r,e){if(isNaN(r))throw new Error(r+" must be a number");if(r>f)throw u("cannot encode time greater than "+f);if(r<0)throw u("time must be positive");if(Number.isInteger(r)===!1)throw u("time must be an integer");for(var t=void 0,n="";e>0;e--)t=r%a,n=i.charAt(t)+n,r=(r-t)/a;return n}function l(r,e){for(var t="";r>0;r--)t=d(e)+t;return t}function h(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=arguments[1];e||(e=typeof window<"u"?window:null);var t=e&&(e.crypto||e.msCrypto);if(t)return function(){var o=new Uint8Array(1);return t.getRandomValues(o),o[0]/255};try{var n=require("crypto");return function(){return n.randomBytes(1).readUInt8()/255}}catch(o){}if(r){try{console.error("secure crypto unusable, falling back to insecure Math.random()!")}catch(o){}return function(){return Math.random()}}throw u("secure crypto unusable, insecure Math.random not allowed")}function v(r){return r||(r=h()),function(t){return isNaN(t)&&(t=Date.now()),m(t,c)+l(s,r)}}var N=v();export{N as u};
