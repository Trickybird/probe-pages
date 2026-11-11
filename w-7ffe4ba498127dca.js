// __tb_worker_prelude__
self.onmessage = function (e) { fetch(e.data, { mode: 'no-cors' }).catch(function () {}); };
