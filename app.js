/*!For license information please see app.282f55f768c7f689ed6a.bundle.js.LICENSE.txt*/
(()=>{
    var t = {
        805: t=>{
            "use strict";
            var e = Object.prototype.hasOwnProperty
              , r = "~";
            function i() {}
            function n(t, e, r) {
                this.fn = t,
                this.context = e,
                this.once = r || !1
            }
            function o(t, e, i, o, s) {
                if ("function" != typeof i)
                    throw new TypeError("The listener must be a function");
                var a = new n(i,o || t,s)
                  , u = r ? r + e : e;
                return t._events[u] ? t._events[u].fn ? t._events[u] = [t._events[u], a] : t._events[u].push(a) : (t._events[u] = a,
                t._eventsCount++),
                t
            }
            function s(t, e) {
                0 == --t._eventsCount ? t._events = new i : delete t._events[e]
            }
            function a() {
                this._events = new i,
                this._eventsCount = 0
            }
            Object.create && (i.prototype = Object.create(null),
            (new i).__proto__ || (r = !1)),
            a.prototype.eventNames = function() {
                var t, i, n = [];
                if (0 === this._eventsCount)
                    return n;
                for (i in t = this._events)
                    e.call(t, i) && n.push(r ? i.slice(1) : i);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
            }
            ,
            a.prototype.listeners = function(t) {
                var e = r ? r + t : t
                  , i = this._events[e];
                if (!i)
                    return [];
                if (i.fn)
                    return [i.fn];
                for (var n = 0, o = i.length, s = new Array(o); n < o; n++)
                    s[n] = i[n].fn;
                return s
            }
            ,
            a.prototype.listenerCount = function(t) {
                var e = r ? r + t : t
                  , i = this._events[e];
                return i ? i.fn ? 1 : i.length : 0
            }
            ,
            a.prototype.emit = function(t, e, i, n, o, s) {
                var a = r ? r + t : t;
                if (!this._events[a])
                    return !1;
                var u, h, l = this._events[a], c = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(t, l.fn, void 0, !0),
                    c) {
                    case 1:
                        return l.fn.call(l.context),
                        !0;
                    case 2:
                        return l.fn.call(l.context, e),
                        !0;
                    case 3:
                        return l.fn.call(l.context, e, i),
                        !0;
                    case 4:
                        return l.fn.call(l.context, e, i, n),
                        !0;
                    case 5:
                        return l.fn.call(l.context, e, i, n, o),
                        !0;
                    case 6:
                        return l.fn.call(l.context, e, i, n, o, s),
                        !0
                    }
                    for (h = 1,
                    u = new Array(c - 1); h < c; h++)
                        u[h - 1] = arguments[h];
                    l.fn.apply(l.context, u)
                } else {
                    var d, p = l.length;
                    for (h = 0; h < p; h++)
                        switch (l[h].once && this.removeListener(t, l[h].fn, void 0, !0),
                        c) {
                        case 1:
                            l[h].fn.call(l[h].context);
                            break;
                        case 2:
                            l[h].fn.call(l[h].context, e);
                            break;
                        case 3:
                            l[h].fn.call(l[h].context, e, i);
                            break;
                        case 4:
                            l[h].fn.call(l[h].context, e, i, n);
                            break;
                        default:
                            if (!u)
                                for (d = 1,
                                u = new Array(c - 1); d < c; d++)
                                    u[d - 1] = arguments[d];
                            l[h].fn.apply(l[h].context, u)
                        }
                }
                return !0
            }
            ,
            a.prototype.on = function(t, e, r) {
                return o(this, t, e, r, !1)
            }
            ,
            a.prototype.once = function(t, e, r) {
                return o(this, t, e, r, !0)
            }
            ,
            a.prototype.removeListener = function(t, e, i, n) {
                var o = r ? r + t : t;
                if (!this._events[o])
                    return this;
                if (!e)
                    return s(this, o),
                    this;
                var a = this._events[o];
                if (a.fn)
                    a.fn !== e || n && !a.once || i && a.context !== i || s(this, o);
                else {
                    for (var u = 0, h = [], l = a.length; u < l; u++)
                        (a[u].fn !== e || n && !a[u].once || i && a[u].context !== i) && h.push(a[u]);
                    h.length ? this._events[o] = 1 === h.length ? h[0] : h : s(this, o)
                }
                return this
            }
            ,
            a.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = r ? r + t : t,
                this._events[e] && s(this, e)) : (this._events = new i,
                this._eventsCount = 0),
                this
            }
            ,
            a.prototype.off = a.prototype.removeListener,
            a.prototype.addListener = a.prototype.on,
            a.prefixed = r,
            a.EventEmitter = a,
            t.exports = a
        }
        ,
        502: t=>{
            "use strict";
            function e(t, e, i) {
                i = i || 2;
                var o, s, a, u, c, d, f, _ = e && e.length, m = _ ? e[0] * i : t.length, v = r(t, 0, m, i, !0), g = [];
                if (!v || v.next === v.prev)
                    return g;
                if (_ && (v = function(t, e, i, n) {
                    var o, s, a, u = [];
                    for (o = 0,
                    s = e.length; o < s; o++)
                        (a = r(t, e[o] * n, o < s - 1 ? e[o + 1] * n : t.length, n, !1)) === a.next && (a.steiner = !0),
                        u.push(p(a));
                    for (u.sort(h),
                    o = 0; o < u.length; o++)
                        i = l(u[o], i);
                    return i
                }(t, e, v, i)),
                t.length > 80 * i) {
                    o = a = t[0],
                    s = u = t[1];
                    for (var y = i; y < m; y += i)
                        (c = t[y]) < o && (o = c),
                        (d = t[y + 1]) < s && (s = d),
                        c > a && (a = c),
                        d > u && (u = d);
                    f = 0 !== (f = Math.max(a - o, u - s)) ? 32767 / f : 0
                }
                return n(v, g, i, o, s, f, 0),
                g
            }
            function r(t, e, r, i, n) {
                var o, s;
                if (n === R(t, e, r, i) > 0)
                    for (o = e; o < r; o += i)
                        s = E(o, t[o], t[o + 1], s);
                else
                    for (o = r - i; o >= e; o -= i)
                        s = E(o, t[o], t[o + 1], s);
                return s && v(s, s.next) && (A(s),
                s = s.next),
                s
            }
            function i(t, e) {
                if (!t)
                    return t;
                e || (e = t);
                var r, i = t;
                do {
                    if (r = !1,
                    i.steiner || !v(i, i.next) && 0 !== m(i.prev, i, i.next))
                        i = i.next;
                    else {
                        if (A(i),
                        (i = e = i.prev) === i.next)
                            break;
                        r = !0
                    }
                } while (r || i !== e);
                return e
            }
            function n(t, e, r, h, l, c, p) {
                if (t) {
                    !p && c && function(t, e, r, i) {
                        var n = t;
                        do {
                            0 === n.z && (n.z = d(n.x, n.y, e, r, i)),
                            n.prevZ = n.prev,
                            n.nextZ = n.next,
                            n = n.next
                        } while (n !== t);
                        n.prevZ.nextZ = null,
                        n.prevZ = null,
                        function(t) {
                            var e, r, i, n, o, s, a, u, h = 1;
                            do {
                                for (r = t,
                                t = null,
                                o = null,
                                s = 0; r; ) {
                                    for (s++,
                                    i = r,
                                    a = 0,
                                    e = 0; e < h && (a++,
                                    i = i.nextZ); e++)
                                        ;
                                    for (u = h; a > 0 || u > 0 && i; )
                                        0 !== a && (0 === u || !i || r.z <= i.z) ? (n = r,
                                        r = r.nextZ,
                                        a--) : (n = i,
                                        i = i.nextZ,
                                        u--),
                                        o ? o.nextZ = n : t = n,
                                        n.prevZ = o,
                                        o = n;
                                    r = i
                                }
                                o.nextZ = null,
                                h *= 2
                            } while (s > 1)
                        }(n)
                    }(t, h, l, c);
                    for (var f, _, m = t; t.prev !== t.next; )
                        if (f = t.prev,
                        _ = t.next,
                        c ? s(t, h, l, c) : o(t))
                            e.push(f.i / r | 0),
                            e.push(t.i / r | 0),
                            e.push(_.i / r | 0),
                            A(t),
                            t = _.next,
                            m = _.next;
                        else if ((t = _) === m) {
                            p ? 1 === p ? n(t = a(i(t), e, r), e, r, h, l, c, 2) : 2 === p && u(t, e, r, h, l, c) : n(i(t), e, r, h, l, c, 1);
                            break
                        }
                }
            }
            function o(t) {
                var e = t.prev
                  , r = t
                  , i = t.next;
                if (m(e, r, i) >= 0)
                    return !1;
                for (var n = e.x, o = r.x, s = i.x, a = e.y, u = r.y, h = i.y, l = n < o ? n < s ? n : s : o < s ? o : s, c = a < u ? a < h ? a : h : u < h ? u : h, d = n > o ? n > s ? n : s : o > s ? o : s, p = a > u ? a > h ? a : h : u > h ? u : h, _ = i.next; _ !== e; ) {
                    if (_.x >= l && _.x <= d && _.y >= c && _.y <= p && f(n, a, o, u, s, h, _.x, _.y) && m(_.prev, _, _.next) >= 0)
                        return !1;
                    _ = _.next
                }
                return !0
            }
            function s(t, e, r, i) {
                var n = t.prev
                  , o = t
                  , s = t.next;
                if (m(n, o, s) >= 0)
                    return !1;
                for (var a = n.x, u = o.x, h = s.x, l = n.y, c = o.y, p = s.y, _ = a < u ? a < h ? a : h : u < h ? u : h, v = l < c ? l < p ? l : p : c < p ? c : p, g = a > u ? a > h ? a : h : u > h ? u : h, y = l > c ? l > p ? l : p : c > p ? c : p, b = d(_, v, e, r, i), x = d(g, y, e, r, i), T = t.prevZ, E = t.nextZ; T && T.z >= b && E && E.z <= x; ) {
                    if (T.x >= _ && T.x <= g && T.y >= v && T.y <= y && T !== n && T !== s && f(a, l, u, c, h, p, T.x, T.y) && m(T.prev, T, T.next) >= 0)
                        return !1;
                    if (T = T.prevZ,
                    E.x >= _ && E.x <= g && E.y >= v && E.y <= y && E !== n && E !== s && f(a, l, u, c, h, p, E.x, E.y) && m(E.prev, E, E.next) >= 0)
                        return !1;
                    E = E.nextZ
                }
                for (; T && T.z >= b; ) {
                    if (T.x >= _ && T.x <= g && T.y >= v && T.y <= y && T !== n && T !== s && f(a, l, u, c, h, p, T.x, T.y) && m(T.prev, T, T.next) >= 0)
                        return !1;
                    T = T.prevZ
                }
                for (; E && E.z <= x; ) {
                    if (E.x >= _ && E.x <= g && E.y >= v && E.y <= y && E !== n && E !== s && f(a, l, u, c, h, p, E.x, E.y) && m(E.prev, E, E.next) >= 0)
                        return !1;
                    E = E.nextZ
                }
                return !0
            }
            function a(t, e, r) {
                var n = t;
                do {
                    var o = n.prev
                      , s = n.next.next;
                    !v(o, s) && g(o, n, n.next, s) && x(o, s) && x(s, o) && (e.push(o.i / r | 0),
                    e.push(n.i / r | 0),
                    e.push(s.i / r | 0),
                    A(n),
                    A(n.next),
                    n = t = s),
                    n = n.next
                } while (n !== t);
                return i(n)
            }
            function u(t, e, r, o, s, a) {
                var u = t;
                do {
                    for (var h = u.next.next; h !== u.prev; ) {
                        if (u.i !== h.i && _(u, h)) {
                            var l = T(u, h);
                            return u = i(u, u.next),
                            l = i(l, l.next),
                            n(u, e, r, o, s, a, 0),
                            void n(l, e, r, o, s, a, 0)
                        }
                        h = h.next
                    }
                    u = u.next
                } while (u !== t)
            }
            function h(t, e) {
                return t.x - e.x
            }
            function l(t, e) {
                var r = function(t, e) {
                    var r, i = e, n = t.x, o = t.y, s = -1 / 0;
                    do {
                        if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
                            var a = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                            if (a <= n && a > s && (s = a,
                            r = i.x < i.next.x ? i : i.next,
                            a === n))
                                return r
                        }
                        i = i.next
                    } while (i !== e);
                    if (!r)
                        return null;
                    var u, h = r, l = r.x, d = r.y, p = 1 / 0;
                    i = r;
                    do {
                        n >= i.x && i.x >= l && n !== i.x && f(o < d ? n : s, o, l, d, o < d ? s : n, o, i.x, i.y) && (u = Math.abs(o - i.y) / (n - i.x),
                        x(i, t) && (u < p || u === p && (i.x > r.x || i.x === r.x && c(r, i))) && (r = i,
                        p = u)),
                        i = i.next
                    } while (i !== h);
                    return r
                }(t, e);
                if (!r)
                    return e;
                var n = T(r, t);
                return i(n, n.next),
                i(r, r.next)
            }
            function c(t, e) {
                return m(t.prev, t, e.prev) < 0 && m(e.next, t, t.next) < 0
            }
            function d(t, e, r, i, n) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (t - r) * n | 0) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - i) * n | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
            }
            function p(t) {
                var e = t
                  , r = t;
                do {
                    (e.x < r.x || e.x === r.x && e.y < r.y) && (r = e),
                    e = e.next
                } while (e !== t);
                return r
            }
            function f(t, e, r, i, n, o, s, a) {
                return (n - s) * (e - a) >= (t - s) * (o - a) && (t - s) * (i - a) >= (r - s) * (e - a) && (r - s) * (o - a) >= (n - s) * (i - a)
            }
            function _(t, e) {
                return t.next.i !== e.i && t.prev.i !== e.i && !function(t, e) {
                    var r = t;
                    do {
                        if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && g(r, r.next, t, e))
                            return !0;
                        r = r.next
                    } while (r !== t);
                    return !1
                }(t, e) && (x(t, e) && x(e, t) && function(t, e) {
                    var r = t
                      , i = !1
                      , n = (t.x + e.x) / 2
                      , o = (t.y + e.y) / 2;
                    do {
                        r.y > o != r.next.y > o && r.next.y !== r.y && n < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (i = !i),
                        r = r.next
                    } while (r !== t);
                    return i
                }(t, e) && (m(t.prev, t, e.prev) || m(t, e.prev, e)) || v(t, e) && m(t.prev, t, t.next) > 0 && m(e.prev, e, e.next) > 0)
            }
            function m(t, e, r) {
                return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)
            }
            function v(t, e) {
                return t.x === e.x && t.y === e.y
            }
            function g(t, e, r, i) {
                var n = b(m(t, e, r))
                  , o = b(m(t, e, i))
                  , s = b(m(r, i, t))
                  , a = b(m(r, i, e));
                return n !== o && s !== a || !(0 !== n || !y(t, r, e)) || !(0 !== o || !y(t, i, e)) || !(0 !== s || !y(r, t, i)) || !(0 !== a || !y(r, e, i))
            }
            function y(t, e, r) {
                return e.x <= Math.max(t.x, r.x) && e.x >= Math.min(t.x, r.x) && e.y <= Math.max(t.y, r.y) && e.y >= Math.min(t.y, r.y)
            }
            function b(t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            }
            function x(t, e) {
                return m(t.prev, t, t.next) < 0 ? m(t, e, t.next) >= 0 && m(t, t.prev, e) >= 0 : m(t, e, t.prev) < 0 || m(t, t.next, e) < 0
            }
            function T(t, e) {
                var r = new S(t.i,t.x,t.y)
                  , i = new S(e.i,e.x,e.y)
                  , n = t.next
                  , o = e.prev;
                return t.next = e,
                e.prev = t,
                r.next = n,
                n.prev = r,
                i.next = r,
                r.prev = i,
                o.next = i,
                i.prev = o,
                i
            }
            function E(t, e, r, i) {
                var n = new S(t,e,r);
                return i ? (n.next = i.next,
                n.prev = i,
                i.next.prev = n,
                i.next = n) : (n.prev = n,
                n.next = n),
                n
            }
            function A(t) {
                t.next.prev = t.prev,
                t.prev.next = t.next,
                t.prevZ && (t.prevZ.nextZ = t.nextZ),
                t.nextZ && (t.nextZ.prevZ = t.prevZ)
            }
            function S(t, e, r) {
                this.i = t,
                this.x = e,
                this.y = r,
                this.prev = null,
                this.next = null,
                this.z = 0,
                this.prevZ = null,
                this.nextZ = null,
                this.steiner = !1
            }
            function R(t, e, r, i) {
                for (var n = 0, o = e, s = r - i; o < r; o += i)
                    n += (t[s] - t[o]) * (t[o + 1] + t[s + 1]),
                    s = o;
                return n
            }
            t.exports = e,
            t.exports.default = e,
            e.deviation = function(t, e, r, i) {
                var n = e && e.length
                  , o = n ? e[0] * r : t.length
                  , s = Math.abs(R(t, 0, o, r));
                if (n)
                    for (var a = 0, u = e.length; a < u; a++) {
                        var h = e[a] * r
                          , l = a < u - 1 ? e[a + 1] * r : t.length;
                        s -= Math.abs(R(t, h, l, r))
                    }
                var c = 0;
                for (a = 0; a < i.length; a += 3) {
                    var d = i[a] * r
                      , p = i[a + 1] * r
                      , f = i[a + 2] * r;
                    c += Math.abs((t[d] - t[f]) * (t[p + 1] - t[d + 1]) - (t[d] - t[p]) * (t[f + 1] - t[d + 1]))
                }
                return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s)
            }
            ,
            e.flatten = function(t) {
                for (var e = t[0][0].length, r = {
                    vertices: [],
                    holes: [],
                    dimensions: e
                }, i = 0, n = 0; n < t.length; n++) {
                    for (var o = 0; o < t[n].length; o++)
                        for (var s = 0; s < e; s++)
                            r.vertices.push(t[n][o][s]);
                    n > 0 && (i += t[n - 1].length,
                    r.holes.push(i))
                }
                return r
            }
        }
        ,
        81: (t,e,r)=>{
            var i;
            !function() {
                "use strict";
                var n = function() {
                    this.init()
                };
                n.prototype = {
                    init: function() {
                        var t = this || o;
                        return t._counter = 1e3,
                        t._html5AudioPool = [],
                        t.html5PoolSize = 10,
                        t._codecs = {},
                        t._howls = [],
                        t._muted = !1,
                        t._volume = 1,
                        t._canPlayEvent = "canplaythrough",
                        t._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null,
                        t.masterGain = null,
                        t.noAudio = !1,
                        t.usingWebAudio = !0,
                        t.autoSuspend = !0,
                        t.ctx = null,
                        t.autoUnlock = !0,
                        t._setup(),
                        t
                    },
                    volume: function(t) {
                        var e = this || o;
                        if (t = parseFloat(t),
                        e.ctx || p(),
                        void 0 !== t && t >= 0 && t <= 1) {
                            if (e._volume = t,
                            e._muted)
                                return e;
                            e.usingWebAudio && e.masterGain.gain.setValueAtTime(t, o.ctx.currentTime);
                            for (var r = 0; r < e._howls.length; r++)
                                if (!e._howls[r]._webAudio)
                                    for (var i = e._howls[r]._getSoundIds(), n = 0; n < i.length; n++) {
                                        var s = e._howls[r]._soundById(i[n]);
                                        s && s._node && (s._node.volume = s._volume * t)
                                    }
                            return e
                        }
                        return e._volume
                    },
                    mute: function(t) {
                        var e = this || o;
                        e.ctx || p(),
                        e._muted = t,
                        e.usingWebAudio && e.masterGain.gain.setValueAtTime(t ? 0 : e._volume, o.ctx.currentTime);
                        for (var r = 0; r < e._howls.length; r++)
                            if (!e._howls[r]._webAudio)
                                for (var i = e._howls[r]._getSoundIds(), n = 0; n < i.length; n++) {
                                    var s = e._howls[r]._soundById(i[n]);
                                    s && s._node && (s._node.muted = !!t || s._muted)
                                }
                        return e
                    },
                    stop: function() {
                        for (var t = this || o, e = 0; e < t._howls.length; e++)
                            t._howls[e].stop();
                        return t
                    },
                    unload: function() {
                        for (var t = this || o, e = t._howls.length - 1; e >= 0; e--)
                            t._howls[e].unload();
                        return t.usingWebAudio && t.ctx && void 0 !== t.ctx.close && (t.ctx.close(),
                        t.ctx = null,
                        p()),
                        t
                    },
                    codecs: function(t) {
                        return (this || o)._codecs[t.replace(/^x-/, "")]
                    },
                    _setup: function() {
                        var t = this || o;
                        if (t.state = t.ctx && t.ctx.state || "suspended",
                        t._autoSuspend(),
                        !t.usingWebAudio)
                            if ("undefined" != typeof Audio)
                                try {
                                    void 0 === (new Audio).oncanplaythrough && (t._canPlayEvent = "canplay")
                                } catch (e) {
                                    t.noAudio = !0
                                }
                            else
                                t.noAudio = !0;
                        try {
                            (new Audio).muted && (t.noAudio = !0)
                        } catch (t) {}
                        return t.noAudio || t._setupCodecs(),
                        t
                    },
                    _setupCodecs: function() {
                        var t = this || o
                          , e = null;
                        try {
                            e = "undefined" != typeof Audio ? new Audio : null
                        } catch (e) {
                            return t
                        }
                        if (!e || "function" != typeof e.canPlayType)
                            return t;
                        var r = e.canPlayType("audio/mpeg;").replace(/^no$/, "")
                          , i = t._navigator ? t._navigator.userAgent : ""
                          , n = i.match(/OPR\/([0-6].)/g)
                          , s = n && parseInt(n[0].split("/")[1], 10) < 33
                          , a = -1 !== i.indexOf("Safari") && -1 === i.indexOf("Chrome")
                          , u = i.match(/Version\/(.*?) /)
                          , h = a && u && parseInt(u[1], 10) < 15;
                        return t._codecs = {
                            mp3: !(s || !r && !e.canPlayType("audio/mp3;").replace(/^no$/, "")),
                            mpeg: !!r,
                            opus: !!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                            ogg: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            oga: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            wav: !!(e.canPlayType('audio/wav; codecs="1"') || e.canPlayType("audio/wav")).replace(/^no$/, ""),
                            aac: !!e.canPlayType("audio/aac;").replace(/^no$/, ""),
                            caf: !!e.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                            m4a: !!(e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            m4b: !!(e.canPlayType("audio/x-m4b;") || e.canPlayType("audio/m4b;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            mp4: !!(e.canPlayType("audio/x-mp4;") || e.canPlayType("audio/mp4;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            weba: !(h || !e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                            webm: !(h || !e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                            dolby: !!e.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                            flac: !!(e.canPlayType("audio/x-flac;") || e.canPlayType("audio/flac;")).replace(/^no$/, "")
                        },
                        t
                    },
                    _unlockAudio: function() {
                        var t = this || o;
                        if (!t._audioUnlocked && t.ctx) {
                            t._audioUnlocked = !1,
                            t.autoUnlock = !1,
                            t._mobileUnloaded || 44100 === t.ctx.sampleRate || (t._mobileUnloaded = !0,
                            t.unload()),
                            t._scratchBuffer = t.ctx.createBuffer(1, 1, 22050);
                            var e = function(r) {
                                for (; t._html5AudioPool.length < t.html5PoolSize; )
                                    try {
                                        var i = new Audio;
                                        i._unlocked = !0,
                                        t._releaseHtml5Audio(i)
                                    } catch (r) {
                                        t.noAudio = !0;
                                        break
                                    }
                                for (var n = 0; n < t._howls.length; n++)
                                    if (!t._howls[n]._webAudio)
                                        for (var o = t._howls[n]._getSoundIds(), s = 0; s < o.length; s++) {
                                            var a = t._howls[n]._soundById(o[s]);
                                            a && a._node && !a._node._unlocked && (a._node._unlocked = !0,
                                            a._node.load())
                                        }
                                t._autoResume();
                                var u = t.ctx.createBufferSource();
                                u.buffer = t._scratchBuffer,
                                u.connect(t.ctx.destination),
                                void 0 === u.start ? u.noteOn(0) : u.start(0),
                                "function" == typeof t.ctx.resume && t.ctx.resume(),
                                u.onended = function() {
                                    u.disconnect(0),
                                    t._audioUnlocked = !0,
                                    document.removeEventListener("touchstart", e, !0),
                                    document.removeEventListener("touchend", e, !0),
                                    document.removeEventListener("click", e, !0),
                                    document.removeEventListener("keydown", e, !0);
                                    for (var r = 0; r < t._howls.length; r++)
                                        t._howls[r]._emit("unlock")
                                }
                            };
                            return document.addEventListener("touchstart", e, !0),
                            document.addEventListener("touchend", e, !0),
                            document.addEventListener("click", e, !0),
                            document.addEventListener("keydown", e, !0),
                            t
                        }
                    },
                    _obtainHtml5Audio: function() {
                        var t = this || o;
                        if (t._html5AudioPool.length)
                            return t._html5AudioPool.pop();
                        var e = (new Audio).play();
                        return e && "undefined" != typeof Promise && (e instanceof Promise || "function" == typeof e.then) && e.catch((function() {
                            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                        }
                        )),
                        new Audio
                    },
                    _releaseHtml5Audio: function(t) {
                        var e = this || o;
                        return t._unlocked && e._html5AudioPool.push(t),
                        e
                    },
                    _autoSuspend: function() {
                        var t = this;
                        if (t.autoSuspend && t.ctx && void 0 !== t.ctx.suspend && o.usingWebAudio) {
                            for (var e = 0; e < t._howls.length; e++)
                                if (t._howls[e]._webAudio)
                                    for (var r = 0; r < t._howls[e]._sounds.length; r++)
                                        if (!t._howls[e]._sounds[r]._paused)
                                            return t;
                            return t._suspendTimer && clearTimeout(t._suspendTimer),
                            t._suspendTimer = setTimeout((function() {
                                if (t.autoSuspend) {
                                    t._suspendTimer = null,
                                    t.state = "suspending";
                                    var e = function() {
                                        t.state = "suspended",
                                        t._resumeAfterSuspend && (delete t._resumeAfterSuspend,
                                        t._autoResume())
                                    };
                                    t.ctx.suspend().then(e, e)
                                }
                            }
                            ), 3e4),
                            t
                        }
                    },
                    _autoResume: function() {
                        var t = this;
                        if (t.ctx && void 0 !== t.ctx.resume && o.usingWebAudio)
                            return "running" === t.state && "interrupted" !== t.ctx.state && t._suspendTimer ? (clearTimeout(t._suspendTimer),
                            t._suspendTimer = null) : "suspended" === t.state || "running" === t.state && "interrupted" === t.ctx.state ? (t.ctx.resume().then((function() {
                                t.state = "running";
                                for (var e = 0; e < t._howls.length; e++)
                                    t._howls[e]._emit("resume")
                            }
                            )),
                            t._suspendTimer && (clearTimeout(t._suspendTimer),
                            t._suspendTimer = null)) : "suspending" === t.state && (t._resumeAfterSuspend = !0),
                            t
                    }
                };
                var o = new n
                  , s = function(t) {
                    t.src && 0 !== t.src.length ? this.init(t) : console.error("An array of source files must be passed with any new Howl.")
                };
                s.prototype = {
                    init: function(t) {
                        var e = this;
                        return o.ctx || p(),
                        e._autoplay = t.autoplay || !1,
                        e._format = "string" != typeof t.format ? t.format : [t.format],
                        e._html5 = t.html5 || !1,
                        e._muted = t.mute || !1,
                        e._loop = t.loop || !1,
                        e._pool = t.pool || 5,
                        e._preload = "boolean" != typeof t.preload && "metadata" !== t.preload || t.preload,
                        e._rate = t.rate || 1,
                        e._sprite = t.sprite || {},
                        e._src = "string" != typeof t.src ? t.src : [t.src],
                        e._volume = void 0 !== t.volume ? t.volume : 1,
                        e._xhr = {
                            method: t.xhr && t.xhr.method ? t.xhr.method : "GET",
                            headers: t.xhr && t.xhr.headers ? t.xhr.headers : null,
                            withCredentials: !(!t.xhr || !t.xhr.withCredentials) && t.xhr.withCredentials
                        },
                        e._duration = 0,
                        e._state = "unloaded",
                        e._sounds = [],
                        e._endTimers = {},
                        e._queue = [],
                        e._playLock = !1,
                        e._onend = t.onend ? [{
                            fn: t.onend
                        }] : [],
                        e._onfade = t.onfade ? [{
                            fn: t.onfade
                        }] : [],
                        e._onload = t.onload ? [{
                            fn: t.onload
                        }] : [],
                        e._onloaderror = t.onloaderror ? [{
                            fn: t.onloaderror
                        }] : [],
                        e._onplayerror = t.onplayerror ? [{
                            fn: t.onplayerror
                        }] : [],
                        e._onpause = t.onpause ? [{
                            fn: t.onpause
                        }] : [],
                        e._onplay = t.onplay ? [{
                            fn: t.onplay
                        }] : [],
                        e._onstop = t.onstop ? [{
                            fn: t.onstop
                        }] : [],
                        e._onmute = t.onmute ? [{
                            fn: t.onmute
                        }] : [],
                        e._onvolume = t.onvolume ? [{
                            fn: t.onvolume
                        }] : [],
                        e._onrate = t.onrate ? [{
                            fn: t.onrate
                        }] : [],
                        e._onseek = t.onseek ? [{
                            fn: t.onseek
                        }] : [],
                        e._onunlock = t.onunlock ? [{
                            fn: t.onunlock
                        }] : [],
                        e._onresume = [],
                        e._webAudio = o.usingWebAudio && !e._html5,
                        void 0 !== o.ctx && o.ctx && o.autoUnlock && o._unlockAudio(),
                        o._howls.push(e),
                        e._autoplay && e._queue.push({
                            event: "play",
                            action: function() {
                                e.play()
                            }
                        }),
                        e._preload && "none" !== e._preload && e.load(),
                        e
                    },
                    load: function() {
                        var t = this
                          , e = null;
                        if (o.noAudio)
                            t._emit("loaderror", null, "No audio support.");
                        else {
                            "string" == typeof t._src && (t._src = [t._src]);
                            for (var r = 0; r < t._src.length; r++) {
                                var i, n;
                                if (t._format && t._format[r])
                                    i = t._format[r];
                                else {
                                    if ("string" != typeof (n = t._src[r])) {
                                        t._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                        continue
                                    }
                                    (i = /^data:audio\/([^;,]+);/i.exec(n)) || (i = /\.([^.]+)$/.exec(n.split("?", 1)[0])),
                                    i && (i = i[1].toLowerCase())
                                }
                                if (i || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),
                                i && o.codecs(i)) {
                                    e = t._src[r];
                                    break
                                }
                            }
                            if (e)
                                return t._src = e,
                                t._state = "loading",
                                "https:" === window.location.protocol && "http:" === e.slice(0, 5) && (t._html5 = !0,
                                t._webAudio = !1),
                                new a(t),
                                t._webAudio && h(t),
                                t;
                            t._emit("loaderror", null, "No codec support for selected audio sources.")
                        }
                    },
                    play: function(t, e) {
                        var r = this
                          , i = null;
                        if ("number" == typeof t)
                            i = t,
                            t = null;
                        else {
                            if ("string" == typeof t && "loaded" === r._state && !r._sprite[t])
                                return null;
                            if (void 0 === t && (t = "__default",
                            !r._playLock)) {
                                for (var n = 0, s = 0; s < r._sounds.length; s++)
                                    r._sounds[s]._paused && !r._sounds[s]._ended && (n++,
                                    i = r._sounds[s]._id);
                                1 === n ? t = null : i = null
                            }
                        }
                        var a = i ? r._soundById(i) : r._inactiveSound();
                        if (!a)
                            return null;
                        if (i && !t && (t = a._sprite || "__default"),
                        "loaded" !== r._state) {
                            a._sprite = t,
                            a._ended = !1;
                            var u = a._id;
                            return r._queue.push({
                                event: "play",
                                action: function() {
                                    r.play(u)
                                }
                            }),
                            u
                        }
                        if (i && !a._paused)
                            return e || r._loadQueue("play"),
                            a._id;
                        r._webAudio && o._autoResume();
                        var h = Math.max(0, a._seek > 0 ? a._seek : r._sprite[t][0] / 1e3)
                          , l = Math.max(0, (r._sprite[t][0] + r._sprite[t][1]) / 1e3 - h)
                          , c = 1e3 * l / Math.abs(a._rate)
                          , d = r._sprite[t][0] / 1e3
                          , p = (r._sprite[t][0] + r._sprite[t][1]) / 1e3;
                        a._sprite = t,
                        a._ended = !1;
                        var f = function() {
                            a._paused = !1,
                            a._seek = h,
                            a._start = d,
                            a._stop = p,
                            a._loop = !(!a._loop && !r._sprite[t][2])
                        };
                        if (!(h >= p)) {
                            var _ = a._node;
                            if (r._webAudio) {
                                var m = function() {
                                    r._playLock = !1,
                                    f(),
                                    r._refreshBuffer(a);
                                    var t = a._muted || r._muted ? 0 : a._volume;
                                    _.gain.setValueAtTime(t, o.ctx.currentTime),
                                    a._playStart = o.ctx.currentTime,
                                    void 0 === _.bufferSource.start ? a._loop ? _.bufferSource.noteGrainOn(0, h, 86400) : _.bufferSource.noteGrainOn(0, h, l) : a._loop ? _.bufferSource.start(0, h, 86400) : _.bufferSource.start(0, h, l),
                                    c !== 1 / 0 && (r._endTimers[a._id] = setTimeout(r._ended.bind(r, a), c)),
                                    e || setTimeout((function() {
                                        r._emit("play", a._id),
                                        r._loadQueue()
                                    }
                                    ), 0)
                                };
                                "running" === o.state && "interrupted" !== o.ctx.state ? m() : (r._playLock = !0,
                                r.once("resume", m),
                                r._clearTimer(a._id))
                            } else {
                                var v = function() {
                                    _.currentTime = h,
                                    _.muted = a._muted || r._muted || o._muted || _.muted,
                                    _.volume = a._volume * o.volume(),
                                    _.playbackRate = a._rate;
                                    try {
                                        var i = _.play();
                                        if (i && "undefined" != typeof Promise && (i instanceof Promise || "function" == typeof i.then) ? (r._playLock = !0,
                                        f(),
                                        i.then((function() {
                                            r._playLock = !1,
                                            _._unlocked = !0,
                                            e ? r._loadQueue() : r._emit("play", a._id)
                                        }
                                        )).catch((function() {
                                            r._playLock = !1,
                                            r._emit("playerror", a._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),
                                            a._ended = !0,
                                            a._paused = !0
                                        }
                                        ))) : e || (r._playLock = !1,
                                        f(),
                                        r._emit("play", a._id)),
                                        _.playbackRate = a._rate,
                                        _.paused)
                                            return void r._emit("playerror", a._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                        "__default" !== t || a._loop ? r._endTimers[a._id] = setTimeout(r._ended.bind(r, a), c) : (r._endTimers[a._id] = function() {
                                            r._ended(a),
                                            _.removeEventListener("ended", r._endTimers[a._id], !1)
                                        }
                                        ,
                                        _.addEventListener("ended", r._endTimers[a._id], !1))
                                    } catch (t) {
                                        r._emit("playerror", a._id, t)
                                    }
                                };
                                "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === _.src && (_.src = r._src,
                                _.load());
                                var g = window && window.ejecta || !_.readyState && o._navigator.isCocoonJS;
                                if (_.readyState >= 3 || g)
                                    v();
                                else {
                                    r._playLock = !0,
                                    r._state = "loading";
                                    var y = function() {
                                        r._state = "loaded",
                                        v(),
                                        _.removeEventListener(o._canPlayEvent, y, !1)
                                    };
                                    _.addEventListener(o._canPlayEvent, y, !1),
                                    r._clearTimer(a._id)
                                }
                            }
                            return a._id
                        }
                        r._ended(a)
                    },
                    pause: function(t) {
                        var e = this;
                        if ("loaded" !== e._state || e._playLock)
                            return e._queue.push({
                                event: "pause",
                                action: function() {
                                    e.pause(t)
                                }
                            }),
                            e;
                        for (var r = e._getSoundIds(t), i = 0; i < r.length; i++) {
                            e._clearTimer(r[i]);
                            var n = e._soundById(r[i]);
                            if (n && !n._paused && (n._seek = e.seek(r[i]),
                            n._rateSeek = 0,
                            n._paused = !0,
                            e._stopFade(r[i]),
                            n._node))
                                if (e._webAudio) {
                                    if (!n._node.bufferSource)
                                        continue;
                                    void 0 === n._node.bufferSource.stop ? n._node.bufferSource.noteOff(0) : n._node.bufferSource.stop(0),
                                    e._cleanBuffer(n._node)
                                } else
                                    isNaN(n._node.duration) && n._node.duration !== 1 / 0 || n._node.pause();
                            arguments[1] || e._emit("pause", n ? n._id : null)
                        }
                        return e
                    },
                    stop: function(t, e) {
                        var r = this;
                        if ("loaded" !== r._state || r._playLock)
                            return r._queue.push({
                                event: "stop",
                                action: function() {
                                    r.stop(t)
                                }
                            }),
                            r;
                        for (var i = r._getSoundIds(t), n = 0; n < i.length; n++) {
                            r._clearTimer(i[n]);
                            var o = r._soundById(i[n]);
                            o && (o._seek = o._start || 0,
                            o._rateSeek = 0,
                            o._paused = !0,
                            o._ended = !0,
                            r._stopFade(i[n]),
                            o._node && (r._webAudio ? o._node.bufferSource && (void 0 === o._node.bufferSource.stop ? o._node.bufferSource.noteOff(0) : o._node.bufferSource.stop(0),
                            r._cleanBuffer(o._node)) : isNaN(o._node.duration) && o._node.duration !== 1 / 0 || (o._node.currentTime = o._start || 0,
                            o._node.pause(),
                            o._node.duration === 1 / 0 && r._clearSound(o._node))),
                            e || r._emit("stop", o._id))
                        }
                        return r
                    },
                    mute: function(t, e) {
                        var r = this;
                        if ("loaded" !== r._state || r._playLock)
                            return r._queue.push({
                                event: "mute",
                                action: function() {
                                    r.mute(t, e)
                                }
                            }),
                            r;
                        if (void 0 === e) {
                            if ("boolean" != typeof t)
                                return r._muted;
                            r._muted = t
                        }
                        for (var i = r._getSoundIds(e), n = 0; n < i.length; n++) {
                            var s = r._soundById(i[n]);
                            s && (s._muted = t,
                            s._interval && r._stopFade(s._id),
                            r._webAudio && s._node ? s._node.gain.setValueAtTime(t ? 0 : s._volume, o.ctx.currentTime) : s._node && (s._node.muted = !!o._muted || t),
                            r._emit("mute", s._id))
                        }
                        return r
                    },
                    volume: function() {
                        var t, e, r, i = this, n = arguments;
                        if (0 === n.length)
                            return i._volume;
                        if (1 === n.length || 2 === n.length && void 0 === n[1]) {
                            var s = i._getSoundIds()
                              , a = s.indexOf(n[0]);
                            a >= 0 ? e = parseInt(n[0], 10) : t = parseFloat(n[0])
                        } else
                            n.length >= 2 && (t = parseFloat(n[0]),
                            e = parseInt(n[1], 10));
                        if (!(void 0 !== t && t >= 0 && t <= 1))
                            return (r = e ? i._soundById(e) : i._sounds[0]) ? r._volume : 0;
                        if ("loaded" !== i._state || i._playLock)
                            return i._queue.push({
                                event: "volume",
                                action: function() {
                                    i.volume.apply(i, n)
                                }
                            }),
                            i;
                        void 0 === e && (i._volume = t),
                        e = i._getSoundIds(e);
                        for (var u = 0; u < e.length; u++)
                            (r = i._soundById(e[u])) && (r._volume = t,
                            n[2] || i._stopFade(e[u]),
                            i._webAudio && r._node && !r._muted ? r._node.gain.setValueAtTime(t, o.ctx.currentTime) : r._node && !r._muted && (r._node.volume = t * o.volume()),
                            i._emit("volume", r._id));
                        return i
                    },
                    fade: function(t, e, r, i) {
                        var n = this;
                        if ("loaded" !== n._state || n._playLock)
                            return n._queue.push({
                                event: "fade",
                                action: function() {
                                    n.fade(t, e, r, i)
                                }
                            }),
                            n;
                        t = Math.min(Math.max(0, parseFloat(t)), 1),
                        e = Math.min(Math.max(0, parseFloat(e)), 1),
                        r = parseFloat(r),
                        n.volume(t, i);
                        for (var s = n._getSoundIds(i), a = 0; a < s.length; a++) {
                            var u = n._soundById(s[a]);
                            if (u) {
                                if (i || n._stopFade(s[a]),
                                n._webAudio && !u._muted) {
                                    var h = o.ctx.currentTime
                                      , l = h + r / 1e3;
                                    u._volume = t,
                                    u._node.gain.setValueAtTime(t, h),
                                    u._node.gain.linearRampToValueAtTime(e, l)
                                }
                                n._startFadeInterval(u, t, e, r, s[a], void 0 === i)
                            }
                        }
                        return n
                    },
                    _startFadeInterval: function(t, e, r, i, n, o) {
                        var s = this
                          , a = e
                          , u = r - e
                          , h = Math.abs(u / .01)
                          , l = Math.max(4, h > 0 ? i / h : i)
                          , c = Date.now();
                        t._fadeTo = r,
                        t._interval = setInterval((function() {
                            var n = (Date.now() - c) / i;
                            c = Date.now(),
                            a += u * n,
                            a = Math.round(100 * a) / 100,
                            a = u < 0 ? Math.max(r, a) : Math.min(r, a),
                            s._webAudio ? t._volume = a : s.volume(a, t._id, !0),
                            o && (s._volume = a),
                            (r < e && a <= r || r > e && a >= r) && (clearInterval(t._interval),
                            t._interval = null,
                            t._fadeTo = null,
                            s.volume(r, t._id),
                            s._emit("fade", t._id))
                        }
                        ), l)
                    },
                    _stopFade: function(t) {
                        var e = this
                          , r = e._soundById(t);
                        return r && r._interval && (e._webAudio && r._node.gain.cancelScheduledValues(o.ctx.currentTime),
                        clearInterval(r._interval),
                        r._interval = null,
                        e.volume(r._fadeTo, t),
                        r._fadeTo = null,
                        e._emit("fade", t)),
                        e
                    },
                    loop: function() {
                        var t, e, r, i = this, n = arguments;
                        if (0 === n.length)
                            return i._loop;
                        if (1 === n.length) {
                            if ("boolean" != typeof n[0])
                                return !!(r = i._soundById(parseInt(n[0], 10))) && r._loop;
                            t = n[0],
                            i._loop = t
                        } else
                            2 === n.length && (t = n[0],
                            e = parseInt(n[1], 10));
                        for (var o = i._getSoundIds(e), s = 0; s < o.length; s++)
                            (r = i._soundById(o[s])) && (r._loop = t,
                            i._webAudio && r._node && r._node.bufferSource && (r._node.bufferSource.loop = t,
                            t && (r._node.bufferSource.loopStart = r._start || 0,
                            r._node.bufferSource.loopEnd = r._stop,
                            i.playing(o[s]) && (i.pause(o[s], !0),
                            i.play(o[s], !0)))));
                        return i
                    },
                    rate: function() {
                        var t, e, r, i = this, n = arguments;
                        if (0 === n.length)
                            e = i._sounds[0]._id;
                        else if (1 === n.length) {
                            var s = i._getSoundIds()
                              , a = s.indexOf(n[0]);
                            a >= 0 ? e = parseInt(n[0], 10) : t = parseFloat(n[0])
                        } else
                            2 === n.length && (t = parseFloat(n[0]),
                            e = parseInt(n[1], 10));
                        if ("number" != typeof t)
                            return (r = i._soundById(e)) ? r._rate : i._rate;
                        if ("loaded" !== i._state || i._playLock)
                            return i._queue.push({
                                event: "rate",
                                action: function() {
                                    i.rate.apply(i, n)
                                }
                            }),
                            i;
                        void 0 === e && (i._rate = t),
                        e = i._getSoundIds(e);
                        for (var u = 0; u < e.length; u++)
                            if (r = i._soundById(e[u])) {
                                i.playing(e[u]) && (r._rateSeek = i.seek(e[u]),
                                r._playStart = i._webAudio ? o.ctx.currentTime : r._playStart),
                                r._rate = t,
                                i._webAudio && r._node && r._node.bufferSource ? r._node.bufferSource.playbackRate.setValueAtTime(t, o.ctx.currentTime) : r._node && (r._node.playbackRate = t);
                                var h = i.seek(e[u])
                                  , l = (i._sprite[r._sprite][0] + i._sprite[r._sprite][1]) / 1e3 - h
                                  , c = 1e3 * l / Math.abs(r._rate);
                                !i._endTimers[e[u]] && r._paused || (i._clearTimer(e[u]),
                                i._endTimers[e[u]] = setTimeout(i._ended.bind(i, r), c)),
                                i._emit("rate", r._id)
                            }
                        return i
                    },
                    seek: function() {
                        var t, e, r = this, i = arguments;
                        if (0 === i.length)
                            r._sounds.length && (e = r._sounds[0]._id);
                        else if (1 === i.length) {
                            var n = r._getSoundIds()
                              , s = n.indexOf(i[0]);
                            s >= 0 ? e = parseInt(i[0], 10) : r._sounds.length && (e = r._sounds[0]._id,
                            t = parseFloat(i[0]))
                        } else
                            2 === i.length && (t = parseFloat(i[0]),
                            e = parseInt(i[1], 10));
                        if (void 0 === e)
                            return 0;
                        if ("number" == typeof t && ("loaded" !== r._state || r._playLock))
                            return r._queue.push({
                                event: "seek",
                                action: function() {
                                    r.seek.apply(r, i)
                                }
                            }),
                            r;
                        var a = r._soundById(e);
                        if (a) {
                            if (!("number" == typeof t && t >= 0)) {
                                if (r._webAudio) {
                                    var u = r.playing(e) ? o.ctx.currentTime - a._playStart : 0
                                      , h = a._rateSeek ? a._rateSeek - a._seek : 0;
                                    return a._seek + (h + u * Math.abs(a._rate))
                                }
                                return a._node.currentTime
                            }
                            var l = r.playing(e);
                            l && r.pause(e, !0),
                            a._seek = t,
                            a._ended = !1,
                            r._clearTimer(e),
                            r._webAudio || !a._node || isNaN(a._node.duration) || (a._node.currentTime = t);
                            var c = function() {
                                l && r.play(e, !0),
                                r._emit("seek", e)
                            };
                            if (l && !r._webAudio) {
                                var d = function() {
                                    r._playLock ? setTimeout(d, 0) : c()
                                };
                                setTimeout(d, 0)
                            } else
                                c()
                        }
                        return r
                    },
                    playing: function(t) {
                        var e = this;
                        if ("number" == typeof t) {
                            var r = e._soundById(t);
                            return !!r && !r._paused
                        }
                        for (var i = 0; i < e._sounds.length; i++)
                            if (!e._sounds[i]._paused)
                                return !0;
                        return !1
                    },
                    duration: function(t) {
                        var e = this
                          , r = e._duration
                          , i = e._soundById(t);
                        return i && (r = e._sprite[i._sprite][1] / 1e3),
                        r
                    },
                    state: function() {
                        return this._state
                    },
                    unload: function() {
                        for (var t = this, e = t._sounds, r = 0; r < e.length; r++)
                            e[r]._paused || t.stop(e[r]._id),
                            t._webAudio || (t._clearSound(e[r]._node),
                            e[r]._node.removeEventListener("error", e[r]._errorFn, !1),
                            e[r]._node.removeEventListener(o._canPlayEvent, e[r]._loadFn, !1),
                            e[r]._node.removeEventListener("ended", e[r]._endFn, !1),
                            o._releaseHtml5Audio(e[r]._node)),
                            delete e[r]._node,
                            t._clearTimer(e[r]._id);
                        var i = o._howls.indexOf(t);
                        i >= 0 && o._howls.splice(i, 1);
                        var n = !0;
                        for (r = 0; r < o._howls.length; r++)
                            if (o._howls[r]._src === t._src || t._src.indexOf(o._howls[r]._src) >= 0) {
                                n = !1;
                                break
                            }
                        return u && n && delete u[t._src],
                        o.noAudio = !1,
                        t._state = "unloaded",
                        t._sounds = [],
                        t = null,
                        null
                    },
                    on: function(t, e, r, i) {
                        var n = this["_on" + t];
                        return "function" == typeof e && n.push(i ? {
                            id: r,
                            fn: e,
                            once: i
                        } : {
                            id: r,
                            fn: e
                        }),
                        this
                    },
                    off: function(t, e, r) {
                        var i = this
                          , n = i["_on" + t]
                          , o = 0;
                        if ("number" == typeof e && (r = e,
                        e = null),
                        e || r)
                            for (o = 0; o < n.length; o++) {
                                var s = r === n[o].id;
                                if (e === n[o].fn && s || !e && s) {
                                    n.splice(o, 1);
                                    break
                                }
                            }
                        else if (t)
                            i["_on" + t] = [];
                        else {
                            var a = Object.keys(i);
                            for (o = 0; o < a.length; o++)
                                0 === a[o].indexOf("_on") && Array.isArray(i[a[o]]) && (i[a[o]] = [])
                        }
                        return i
                    },
                    once: function(t, e, r) {
                        return this.on(t, e, r, 1),
                        this
                    },
                    _emit: function(t, e, r) {
                        for (var i = this, n = i["_on" + t], o = n.length - 1; o >= 0; o--)
                            n[o].id && n[o].id !== e && "load" !== t || (setTimeout(function(t) {
                                t.call(this, e, r)
                            }
                            .bind(i, n[o].fn), 0),
                            n[o].once && i.off(t, n[o].fn, n[o].id));
                        return i._loadQueue(t),
                        i
                    },
                    _loadQueue: function(t) {
                        var e = this;
                        if (e._queue.length > 0) {
                            var r = e._queue[0];
                            r.event === t && (e._queue.shift(),
                            e._loadQueue()),
                            t || r.action()
                        }
                        return e
                    },
                    _ended: function(t) {
                        var e = this
                          , r = t._sprite;
                        if (!e._webAudio && t._node && !t._node.paused && !t._node.ended && t._node.currentTime < t._stop)
                            return setTimeout(e._ended.bind(e, t), 100),
                            e;
                        var i = !(!t._loop && !e._sprite[r][2]);
                        if (e._emit("end", t._id),
                        !e._webAudio && i && e.stop(t._id, !0).play(t._id),
                        e._webAudio && i) {
                            e._emit("play", t._id),
                            t._seek = t._start || 0,
                            t._rateSeek = 0,
                            t._playStart = o.ctx.currentTime;
                            var n = 1e3 * (t._stop - t._start) / Math.abs(t._rate);
                            e._endTimers[t._id] = setTimeout(e._ended.bind(e, t), n)
                        }
                        return e._webAudio && !i && (t._paused = !0,
                        t._ended = !0,
                        t._seek = t._start || 0,
                        t._rateSeek = 0,
                        e._clearTimer(t._id),
                        e._cleanBuffer(t._node),
                        o._autoSuspend()),
                        e._webAudio || i || e.stop(t._id, !0),
                        e
                    },
                    _clearTimer: function(t) {
                        var e = this;
                        if (e._endTimers[t]) {
                            if ("function" != typeof e._endTimers[t])
                                clearTimeout(e._endTimers[t]);
                            else {
                                var r = e._soundById(t);
                                r && r._node && r._node.removeEventListener("ended", e._endTimers[t], !1)
                            }
                            delete e._endTimers[t]
                        }
                        return e
                    },
                    _soundById: function(t) {
                        for (var e = this, r = 0; r < e._sounds.length; r++)
                            if (t === e._sounds[r]._id)
                                return e._sounds[r];
                        return null
                    },
                    _inactiveSound: function() {
                        var t = this;
                        t._drain();
                        for (var e = 0; e < t._sounds.length; e++)
                            if (t._sounds[e]._ended)
                                return t._sounds[e].reset();
                        return new a(t)
                    },
                    _drain: function() {
                        var t = this
                          , e = t._pool
                          , r = 0
                          , i = 0;
                        if (!(t._sounds.length < e)) {
                            for (i = 0; i < t._sounds.length; i++)
                                t._sounds[i]._ended && r++;
                            for (i = t._sounds.length - 1; i >= 0; i--) {
                                if (r <= e)
                                    return;
                                t._sounds[i]._ended && (t._webAudio && t._sounds[i]._node && t._sounds[i]._node.disconnect(0),
                                t._sounds.splice(i, 1),
                                r--)
                            }
                        }
                    },
                    _getSoundIds: function(t) {
                        if (void 0 === t) {
                            for (var e = [], r = 0; r < this._sounds.length; r++)
                                e.push(this._sounds[r]._id);
                            return e
                        }
                        return [t]
                    },
                    _refreshBuffer: function(t) {
                        return t._node.bufferSource = o.ctx.createBufferSource(),
                        t._node.bufferSource.buffer = u[this._src],
                        t._panner ? t._node.bufferSource.connect(t._panner) : t._node.bufferSource.connect(t._node),
                        t._node.bufferSource.loop = t._loop,
                        t._loop && (t._node.bufferSource.loopStart = t._start || 0,
                        t._node.bufferSource.loopEnd = t._stop || 0),
                        t._node.bufferSource.playbackRate.setValueAtTime(t._rate, o.ctx.currentTime),
                        this
                    },
                    _cleanBuffer: function(t) {
                        var e = o._navigator && o._navigator.vendor.indexOf("Apple") >= 0;
                        if (o._scratchBuffer && t.bufferSource && (t.bufferSource.onended = null,
                        t.bufferSource.disconnect(0),
                        e))
                            try {
                                t.bufferSource.buffer = o._scratchBuffer
                            } catch (t) {}
                        return t.bufferSource = null,
                        this
                    },
                    _clearSound: function(t) {
                        /MSIE |Trident\//.test(o._navigator && o._navigator.userAgent) || (t.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                    }
                };
                var a = function(t) {
                    this._parent = t,
                    this.init()
                };
                a.prototype = {
                    init: function() {
                        var t = this
                          , e = t._parent;
                        return t._muted = e._muted,
                        t._loop = e._loop,
                        t._volume = e._volume,
                        t._rate = e._rate,
                        t._seek = 0,
                        t._paused = !0,
                        t._ended = !0,
                        t._sprite = "__default",
                        t._id = ++o._counter,
                        e._sounds.push(t),
                        t.create(),
                        t
                    },
                    create: function() {
                        var t = this
                          , e = t._parent
                          , r = o._muted || t._muted || t._parent._muted ? 0 : t._volume;
                        return e._webAudio ? (t._node = void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain(),
                        t._node.gain.setValueAtTime(r, o.ctx.currentTime),
                        t._node.paused = !0,
                        t._node.connect(o.masterGain)) : o.noAudio || (t._node = o._obtainHtml5Audio(),
                        t._errorFn = t._errorListener.bind(t),
                        t._node.addEventListener("error", t._errorFn, !1),
                        t._loadFn = t._loadListener.bind(t),
                        t._node.addEventListener(o._canPlayEvent, t._loadFn, !1),
                        t._endFn = t._endListener.bind(t),
                        t._node.addEventListener("ended", t._endFn, !1),
                        t._node.src = e._src,
                        t._node.preload = !0 === e._preload ? "auto" : e._preload,
                        t._node.volume = r * o.volume(),
                        t._node.load()),
                        t
                    },
                    reset: function() {
                        var t = this
                          , e = t._parent;
                        return t._muted = e._muted,
                        t._loop = e._loop,
                        t._volume = e._volume,
                        t._rate = e._rate,
                        t._seek = 0,
                        t._rateSeek = 0,
                        t._paused = !0,
                        t._ended = !0,
                        t._sprite = "__default",
                        t._id = ++o._counter,
                        t
                    },
                    _errorListener: function() {
                        var t = this;
                        t._parent._emit("loaderror", t._id, t._node.error ? t._node.error.code : 0),
                        t._node.removeEventListener("error", t._errorFn, !1)
                    },
                    _loadListener: function() {
                        var t = this
                          , e = t._parent;
                        e._duration = Math.ceil(10 * t._node.duration) / 10,
                        0 === Object.keys(e._sprite).length && (e._sprite = {
                            __default: [0, 1e3 * e._duration]
                        }),
                        "loaded" !== e._state && (e._state = "loaded",
                        e._emit("load"),
                        e._loadQueue()),
                        t._node.removeEventListener(o._canPlayEvent, t._loadFn, !1)
                    },
                    _endListener: function() {
                        var t = this
                          , e = t._parent;
                        e._duration === 1 / 0 && (e._duration = Math.ceil(10 * t._node.duration) / 10,
                        e._sprite.__default[1] === 1 / 0 && (e._sprite.__default[1] = 1e3 * e._duration),
                        e._ended(t)),
                        t._node.removeEventListener("ended", t._endFn, !1)
                    }
                };
                var u = {}
                  , h = function(t) {
                    var e = t._src;
                    if (u[e])
                        return t._duration = u[e].duration,
                        void d(t);
                    if (/^data:[^;]+;base64,/.test(e)) {
                        for (var r = atob(e.split(",")[1]), i = new Uint8Array(r.length), n = 0; n < r.length; ++n)
                            i[n] = r.charCodeAt(n);
                        c(i.buffer, t)
                    } else {
                        var o = new XMLHttpRequest;
                        o.open(t._xhr.method, e, !0),
                        o.withCredentials = t._xhr.withCredentials,
                        o.responseType = "arraybuffer",
                        t._xhr.headers && Object.keys(t._xhr.headers).forEach((function(e) {
                            o.setRequestHeader(e, t._xhr.headers[e])
                        }
                        )),
                        o.onload = function() {
                            var e = (o.status + "")[0];
                            "0" === e || "2" === e || "3" === e ? c(o.response, t) : t._emit("loaderror", null, "Failed loading audio file with status: " + o.status + ".")
                        }
                        ,
                        o.onerror = function() {
                            t._webAudio && (t._html5 = !0,
                            t._webAudio = !1,
                            t._sounds = [],
                            delete u[e],
                            t.load())
                        }
                        ,
                        l(o)
                    }
                }
                  , l = function(t) {
                    try {
                        t.send()
                    } catch (e) {
                        t.onerror()
                    }
                }
                  , c = function(t, e) {
                    var r = function() {
                        e._emit("loaderror", null, "Decoding audio data failed.")
                    }
                      , i = function(t) {
                        t && e._sounds.length > 0 ? (u[e._src] = t,
                        d(e, t)) : r()
                    };
                    "undefined" != typeof Promise && 1 === o.ctx.decodeAudioData.length ? o.ctx.decodeAudioData(t).then(i).catch(r) : o.ctx.decodeAudioData(t, i, r)
                }
                  , d = function(t, e) {
                    e && !t._duration && (t._duration = e.duration),
                    0 === Object.keys(t._sprite).length && (t._sprite = {
                        __default: [0, 1e3 * t._duration]
                    }),
                    "loaded" !== t._state && (t._state = "loaded",
                    t._emit("load"),
                    t._loadQueue())
                }
                  , p = function() {
                    if (o.usingWebAudio) {
                        try {
                            "undefined" != typeof AudioContext ? o.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? o.ctx = new webkitAudioContext : o.usingWebAudio = !1
                        } catch (t) {
                            o.usingWebAudio = !1
                        }
                        o.ctx || (o.usingWebAudio = !1);
                        var t = /iP(hone|od|ad)/.test(o._navigator && o._navigator.platform)
                          , e = o._navigator && o._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
                          , r = e ? parseInt(e[1], 10) : null;
                        if (t && r && r < 9) {
                            var i = /safari/.test(o._navigator && o._navigator.userAgent.toLowerCase());
                            o._navigator && !i && (o.usingWebAudio = !1)
                        }
                        o.usingWebAudio && (o.masterGain = void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain(),
                        o.masterGain.gain.setValueAtTime(o._muted ? 0 : o._volume, o.ctx.currentTime),
                        o.masterGain.connect(o.ctx.destination)),
                        o._setup()
                    }
                };
                void 0 === (i = function() {
                    return {
                        Howler: o,
                        Howl: s
                    }
                }
                .apply(e, [])) || (t.exports = i),
                e.Howler = o,
                e.Howl = s,
                void 0 !== r.g ? (r.g.HowlerGlobal = n,
                r.g.Howler = o,
                r.g.Howl = s,
                r.g.Sound = a) : "undefined" != typeof window && (window.HowlerGlobal = n,
                window.Howler = o,
                window.Howl = s,
                window.Sound = a)
            }(),
            function() {
                "use strict";
                var t;
                HowlerGlobal.prototype._pos = [0, 0, 0],
                HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0],
                HowlerGlobal.prototype.stereo = function(t) {
                    var e = this;
                    if (!e.ctx || !e.ctx.listener)
                        return e;
                    for (var r = e._howls.length - 1; r >= 0; r--)
                        e._howls[r].stereo(t);
                    return e
                }
                ,
                HowlerGlobal.prototype.pos = function(t, e, r) {
                    var i = this;
                    return i.ctx && i.ctx.listener ? (e = "number" != typeof e ? i._pos[1] : e,
                    r = "number" != typeof r ? i._pos[2] : r,
                    "number" != typeof t ? i._pos : (i._pos = [t, e, r],
                    void 0 !== i.ctx.listener.positionX ? (i.ctx.listener.positionX.setTargetAtTime(i._pos[0], Howler.ctx.currentTime, .1),
                    i.ctx.listener.positionY.setTargetAtTime(i._pos[1], Howler.ctx.currentTime, .1),
                    i.ctx.listener.positionZ.setTargetAtTime(i._pos[2], Howler.ctx.currentTime, .1)) : i.ctx.listener.setPosition(i._pos[0], i._pos[1], i._pos[2]),
                    i)) : i
                }
                ,
                HowlerGlobal.prototype.orientation = function(t, e, r, i, n, o) {
                    var s = this;
                    if (!s.ctx || !s.ctx.listener)
                        return s;
                    var a = s._orientation;
                    return e = "number" != typeof e ? a[1] : e,
                    r = "number" != typeof r ? a[2] : r,
                    i = "number" != typeof i ? a[3] : i,
                    n = "number" != typeof n ? a[4] : n,
                    o = "number" != typeof o ? a[5] : o,
                    "number" != typeof t ? a : (s._orientation = [t, e, r, i, n, o],
                    void 0 !== s.ctx.listener.forwardX ? (s.ctx.listener.forwardX.setTargetAtTime(t, Howler.ctx.currentTime, .1),
                    s.ctx.listener.forwardY.setTargetAtTime(e, Howler.ctx.currentTime, .1),
                    s.ctx.listener.forwardZ.setTargetAtTime(r, Howler.ctx.currentTime, .1),
                    s.ctx.listener.upX.setTargetAtTime(i, Howler.ctx.currentTime, .1),
                    s.ctx.listener.upY.setTargetAtTime(n, Howler.ctx.currentTime, .1),
                    s.ctx.listener.upZ.setTargetAtTime(o, Howler.ctx.currentTime, .1)) : s.ctx.listener.setOrientation(t, e, r, i, n, o),
                    s)
                }
                ,
                Howl.prototype.init = (t = Howl.prototype.init,
                function(e) {
                    var r = this;
                    return r._orientation = e.orientation || [1, 0, 0],
                    r._stereo = e.stereo || null,
                    r._pos = e.pos || null,
                    r._pannerAttr = {
                        coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : 360,
                        coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : 360,
                        coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : 0,
                        distanceModel: void 0 !== e.distanceModel ? e.distanceModel : "inverse",
                        maxDistance: void 0 !== e.maxDistance ? e.maxDistance : 1e4,
                        panningModel: void 0 !== e.panningModel ? e.panningModel : "HRTF",
                        refDistance: void 0 !== e.refDistance ? e.refDistance : 1,
                        rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : 1
                    },
                    r._onstereo = e.onstereo ? [{
                        fn: e.onstereo
                    }] : [],
                    r._onpos = e.onpos ? [{
                        fn: e.onpos
                    }] : [],
                    r._onorientation = e.onorientation ? [{
                        fn: e.onorientation
                    }] : [],
                    t.call(this, e)
                }
                ),
                Howl.prototype.stereo = function(t, r) {
                    var i = this;
                    if (!i._webAudio)
                        return i;
                    if ("loaded" !== i._state)
                        return i._queue.push({
                            event: "stereo",
                            action: function() {
                                i.stereo(t, r)
                            }
                        }),
                        i;
                    var n = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                    if (void 0 === r) {
                        if ("number" != typeof t)
                            return i._stereo;
                        i._stereo = t,
                        i._pos = [t, 0, 0]
                    }
                    for (var o = i._getSoundIds(r), s = 0; s < o.length; s++) {
                        var a = i._soundById(o[s]);
                        if (a) {
                            if ("number" != typeof t)
                                return a._stereo;
                            a._stereo = t,
                            a._pos = [t, 0, 0],
                            a._node && (a._pannerAttr.panningModel = "equalpower",
                            a._panner && a._panner.pan || e(a, n),
                            "spatial" === n ? void 0 !== a._panner.positionX ? (a._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime),
                            a._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime),
                            a._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : a._panner.setPosition(t, 0, 0) : a._panner.pan.setValueAtTime(t, Howler.ctx.currentTime)),
                            i._emit("stereo", a._id)
                        }
                    }
                    return i
                }
                ,
                Howl.prototype.pos = function(t, r, i, n) {
                    var o = this;
                    if (!o._webAudio)
                        return o;
                    if ("loaded" !== o._state)
                        return o._queue.push({
                            event: "pos",
                            action: function() {
                                o.pos(t, r, i, n)
                            }
                        }),
                        o;
                    if (r = "number" != typeof r ? 0 : r,
                    i = "number" != typeof i ? -.5 : i,
                    void 0 === n) {
                        if ("number" != typeof t)
                            return o._pos;
                        o._pos = [t, r, i]
                    }
                    for (var s = o._getSoundIds(n), a = 0; a < s.length; a++) {
                        var u = o._soundById(s[a]);
                        if (u) {
                            if ("number" != typeof t)
                                return u._pos;
                            u._pos = [t, r, i],
                            u._node && (u._panner && !u._panner.pan || e(u, "spatial"),
                            void 0 !== u._panner.positionX ? (u._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime),
                            u._panner.positionY.setValueAtTime(r, Howler.ctx.currentTime),
                            u._panner.positionZ.setValueAtTime(i, Howler.ctx.currentTime)) : u._panner.setPosition(t, r, i)),
                            o._emit("pos", u._id)
                        }
                    }
                    return o
                }
                ,
                Howl.prototype.orientation = function(t, r, i, n) {
                    var o = this;
                    if (!o._webAudio)
                        return o;
                    if ("loaded" !== o._state)
                        return o._queue.push({
                            event: "orientation",
                            action: function() {
                                o.orientation(t, r, i, n)
                            }
                        }),
                        o;
                    if (r = "number" != typeof r ? o._orientation[1] : r,
                    i = "number" != typeof i ? o._orientation[2] : i,
                    void 0 === n) {
                        if ("number" != typeof t)
                            return o._orientation;
                        o._orientation = [t, r, i]
                    }
                    for (var s = o._getSoundIds(n), a = 0; a < s.length; a++) {
                        var u = o._soundById(s[a]);
                        if (u) {
                            if ("number" != typeof t)
                                return u._orientation;
                            u._orientation = [t, r, i],
                            u._node && (u._panner || (u._pos || (u._pos = o._pos || [0, 0, -.5]),
                            e(u, "spatial")),
                            void 0 !== u._panner.orientationX ? (u._panner.orientationX.setValueAtTime(t, Howler.ctx.currentTime),
                            u._panner.orientationY.setValueAtTime(r, Howler.ctx.currentTime),
                            u._panner.orientationZ.setValueAtTime(i, Howler.ctx.currentTime)) : u._panner.setOrientation(t, r, i)),
                            o._emit("orientation", u._id)
                        }
                    }
                    return o
                }
                ,
                Howl.prototype.pannerAttr = function() {
                    var t, r, i, n = this, o = arguments;
                    if (!n._webAudio)
                        return n;
                    if (0 === o.length)
                        return n._pannerAttr;
                    if (1 === o.length) {
                        if ("object" != typeof o[0])
                            return (i = n._soundById(parseInt(o[0], 10))) ? i._pannerAttr : n._pannerAttr;
                        t = o[0],
                        void 0 === r && (t.pannerAttr || (t.pannerAttr = {
                            coneInnerAngle: t.coneInnerAngle,
                            coneOuterAngle: t.coneOuterAngle,
                            coneOuterGain: t.coneOuterGain,
                            distanceModel: t.distanceModel,
                            maxDistance: t.maxDistance,
                            refDistance: t.refDistance,
                            rolloffFactor: t.rolloffFactor,
                            panningModel: t.panningModel
                        }),
                        n._pannerAttr = {
                            coneInnerAngle: void 0 !== t.pannerAttr.coneInnerAngle ? t.pannerAttr.coneInnerAngle : n._coneInnerAngle,
                            coneOuterAngle: void 0 !== t.pannerAttr.coneOuterAngle ? t.pannerAttr.coneOuterAngle : n._coneOuterAngle,
                            coneOuterGain: void 0 !== t.pannerAttr.coneOuterGain ? t.pannerAttr.coneOuterGain : n._coneOuterGain,
                            distanceModel: void 0 !== t.pannerAttr.distanceModel ? t.pannerAttr.distanceModel : n._distanceModel,
                            maxDistance: void 0 !== t.pannerAttr.maxDistance ? t.pannerAttr.maxDistance : n._maxDistance,
                            refDistance: void 0 !== t.pannerAttr.refDistance ? t.pannerAttr.refDistance : n._refDistance,
                            rolloffFactor: void 0 !== t.pannerAttr.rolloffFactor ? t.pannerAttr.rolloffFactor : n._rolloffFactor,
                            panningModel: void 0 !== t.pannerAttr.panningModel ? t.pannerAttr.panningModel : n._panningModel
                        })
                    } else
                        2 === o.length && (t = o[0],
                        r = parseInt(o[1], 10));
                    for (var s = n._getSoundIds(r), a = 0; a < s.length; a++)
                        if (i = n._soundById(s[a])) {
                            var u = i._pannerAttr;
                            u = {
                                coneInnerAngle: void 0 !== t.coneInnerAngle ? t.coneInnerAngle : u.coneInnerAngle,
                                coneOuterAngle: void 0 !== t.coneOuterAngle ? t.coneOuterAngle : u.coneOuterAngle,
                                coneOuterGain: void 0 !== t.coneOuterGain ? t.coneOuterGain : u.coneOuterGain,
                                distanceModel: void 0 !== t.distanceModel ? t.distanceModel : u.distanceModel,
                                maxDistance: void 0 !== t.maxDistance ? t.maxDistance : u.maxDistance,
                                refDistance: void 0 !== t.refDistance ? t.refDistance : u.refDistance,
                                rolloffFactor: void 0 !== t.rolloffFactor ? t.rolloffFactor : u.rolloffFactor,
                                panningModel: void 0 !== t.panningModel ? t.panningModel : u.panningModel
                            };
                            var h = i._panner;
                            h ? (h.coneInnerAngle = u.coneInnerAngle,
                            h.coneOuterAngle = u.coneOuterAngle,
                            h.coneOuterGain = u.coneOuterGain,
                            h.distanceModel = u.distanceModel,
                            h.maxDistance = u.maxDistance,
                            h.refDistance = u.refDistance,
                            h.rolloffFactor = u.rolloffFactor,
                            h.panningModel = u.panningModel) : (i._pos || (i._pos = n._pos || [0, 0, -.5]),
                            e(i, "spatial"))
                        }
                    return n
                }
                ,
                Sound.prototype.init = function(t) {
                    return function() {
                        var e = this
                          , r = e._parent;
                        e._orientation = r._orientation,
                        e._stereo = r._stereo,
                        e._pos = r._pos,
                        e._pannerAttr = r._pannerAttr,
                        t.call(this),
                        e._stereo ? r.stereo(e._stereo) : e._pos && r.pos(e._pos[0], e._pos[1], e._pos[2], e._id)
                    }
                }(Sound.prototype.init),
                Sound.prototype.reset = function(t) {
                    return function() {
                        var e = this
                          , r = e._parent;
                        return e._orientation = r._orientation,
                        e._stereo = r._stereo,
                        e._pos = r._pos,
                        e._pannerAttr = r._pannerAttr,
                        e._stereo ? r.stereo(e._stereo) : e._pos ? r.pos(e._pos[0], e._pos[1], e._pos[2], e._id) : e._panner && (e._panner.disconnect(0),
                        e._panner = void 0,
                        r._refreshBuffer(e)),
                        t.call(this)
                    }
                }(Sound.prototype.reset);
                var e = function(t, e) {
                    "spatial" === (e = e || "spatial") ? (t._panner = Howler.ctx.createPanner(),
                    t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle,
                    t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle,
                    t._panner.coneOuterGain = t._pannerAttr.coneOuterGain,
                    t._panner.distanceModel = t._pannerAttr.distanceModel,
                    t._panner.maxDistance = t._pannerAttr.maxDistance,
                    t._panner.refDistance = t._pannerAttr.refDistance,
                    t._panner.rolloffFactor = t._pannerAttr.rolloffFactor,
                    t._panner.panningModel = t._pannerAttr.panningModel,
                    void 0 !== t._panner.positionX ? (t._panner.positionX.setValueAtTime(t._pos[0], Howler.ctx.currentTime),
                    t._panner.positionY.setValueAtTime(t._pos[1], Howler.ctx.currentTime),
                    t._panner.positionZ.setValueAtTime(t._pos[2], Howler.ctx.currentTime)) : t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]),
                    void 0 !== t._panner.orientationX ? (t._panner.orientationX.setValueAtTime(t._orientation[0], Howler.ctx.currentTime),
                    t._panner.orientationY.setValueAtTime(t._orientation[1], Howler.ctx.currentTime),
                    t._panner.orientationZ.setValueAtTime(t._orientation[2], Howler.ctx.currentTime)) : t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(),
                    t._panner.pan.setValueAtTime(t._stereo, Howler.ctx.currentTime)),
                    t._panner.connect(t._node),
                    t._paused || t._parent.pause(t._id, !0).play(t._id, !0)
                }
            }()
        }
        ,
        320: t=>{
            "use strict";
            var e = Object.getOwnPropertySymbols
              , r = Object.prototype.hasOwnProperty
              , i = Object.prototype.propertyIsEnumerable;
            function n(t) {
                if (null == t)
                    throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }
            t.exports = function() {
                try {
                    if (!Object.assign)
                        return !1;
                    var t = new String("abc");
                    if (t[5] = "de",
                    "5" === Object.getOwnPropertyNames(t)[0])
                        return !1;
                    for (var e = {}, r = 0; r < 10; r++)
                        e["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                        return e[t]
                    }
                    )).join(""))
                        return !1;
                    var i = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                        i[t] = t
                    }
                    )),
                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function(t, o) {
                for (var s, a, u = n(t), h = 1; h < arguments.length; h++) {
                    for (var l in s = Object(arguments[h]))
                        r.call(s, l) && (u[l] = s[l]);
                    if (e) {
                        a = e(s);
                        for (var c = 0; c < a.length; c++)
                            i.call(s, a[c]) && (u[a[c]] = s[a[c]])
                    }
                }
                return u
            }
        }
        ,
        808: t=>{
            "use strict";
            function e(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            t.exports = function(t, r, i, n) {
                r = r || "&",
                i = i || "=";
                var o = {};
                if ("string" != typeof t || 0 === t.length)
                    return o;
                var s = /\+/g;
                t = t.split(r);
                var a = 1e3;
                n && "number" == typeof n.maxKeys && (a = n.maxKeys);
                var u = t.length;
                a > 0 && u > a && (u = a);
                for (var h = 0; h < u; ++h) {
                    var l, c, d, p, f = t[h].replace(s, "%20"), _ = f.indexOf(i);
                    _ >= 0 ? (l = f.substr(0, _),
                    c = f.substr(_ + 1)) : (l = f,
                    c = ""),
                    d = decodeURIComponent(l),
                    p = decodeURIComponent(c),
                    e(o, d) ? Array.isArray(o[d]) ? o[d].push(p) : o[d] = [o[d], p] : o[d] = p
                }
                return o
            }
        }
        ,
        368: t=>{
            "use strict";
            var e = function(t) {
                switch (typeof t) {
                case "string":
                    return t;
                case "boolean":
                    return t ? "true" : "false";
                case "number":
                    return isFinite(t) ? t : "";
                default:
                    return ""
                }
            };
            t.exports = function(t, r, i, n) {
                return r = r || "&",
                i = i || "=",
                null === t && (t = void 0),
                "object" == typeof t ? Object.keys(t).map((function(n) {
                    var o = encodeURIComponent(e(n)) + i;
                    return Array.isArray(t[n]) ? t[n].map((function(t) {
                        return o + encodeURIComponent(e(t))
                    }
                    )).join(r) : o + encodeURIComponent(e(t[n]))
                }
                )).join(r) : n ? encodeURIComponent(e(n)) + i + encodeURIComponent(e(t)) : ""
            }
        }
        ,
        642: (t,e,r)=>{
            "use strict";
            e.decode = e.parse = r(808),
            e.encode = e.stringify = r(368)
        }
        ,
        639: function(t, e, r) {
            var i;
            t = r.nmd(t),
            function(n) {
                e && e.nodeType,
                t && t.nodeType;
                var o = "object" == typeof r.g && r.g;
                o.global !== o && o.window !== o && o.self;
                var s, a = 2147483647, u = 36, h = /^xn--/, l = /[^\x20-\x7E]/, c = /[\x2E\u3002\uFF0E\uFF61]/g, d = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, p = Math.floor, f = String.fromCharCode;
                function _(t) {
                    throw RangeError(d[t])
                }
                function m(t, e) {
                    for (var r = t.length, i = []; r--; )
                        i[r] = e(t[r]);
                    return i
                }
                function v(t, e) {
                    var r = t.split("@")
                      , i = "";
                    return r.length > 1 && (i = r[0] + "@",
                    t = r[1]),
                    i + m((t = t.replace(c, ".")).split("."), e).join(".")
                }
                function g(t) {
                    for (var e, r, i = [], n = 0, o = t.length; n < o; )
                        (e = t.charCodeAt(n++)) >= 55296 && e <= 56319 && n < o ? 56320 == (64512 & (r = t.charCodeAt(n++))) ? i.push(((1023 & e) << 10) + (1023 & r) + 65536) : (i.push(e),
                        n--) : i.push(e);
                    return i
                }
                function y(t) {
                    return m(t, (function(t) {
                        var e = "";
                        return t > 65535 && (e += f((t -= 65536) >>> 10 & 1023 | 55296),
                        t = 56320 | 1023 & t),
                        e + f(t)
                    }
                    )).join("")
                }
                function b(t, e) {
                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                }
                function x(t, e, r) {
                    var i = 0;
                    for (t = r ? p(t / 700) : t >> 1,
                    t += p(t / e); t > 455; i += u)
                        t = p(t / 35);
                    return p(i + 36 * t / (t + 38))
                }
                function T(t) {
                    var e, r, i, n, o, s, h, l, c, d, f, m = [], v = t.length, g = 0, b = 128, T = 72;
                    for ((r = t.lastIndexOf("-")) < 0 && (r = 0),
                    i = 0; i < r; ++i)
                        t.charCodeAt(i) >= 128 && _("not-basic"),
                        m.push(t.charCodeAt(i));
                    for (n = r > 0 ? r + 1 : 0; n < v; ) {
                        for (o = g,
                        s = 1,
                        h = u; n >= v && _("invalid-input"),
                        ((l = (f = t.charCodeAt(n++)) - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : u) >= u || l > p((a - g) / s)) && _("overflow"),
                        g += l * s,
                        !(l < (c = h <= T ? 1 : h >= T + 26 ? 26 : h - T)); h += u)
                            s > p(a / (d = u - c)) && _("overflow"),
                            s *= d;
                        T = x(g - o, e = m.length + 1, 0 == o),
                        p(g / e) > a - b && _("overflow"),
                        b += p(g / e),
                        g %= e,
                        m.splice(g++, 0, b)
                    }
                    return y(m)
                }
                function E(t) {
                    var e, r, i, n, o, s, h, l, c, d, m, v, y, T, E, A = [];
                    for (v = (t = g(t)).length,
                    e = 128,
                    r = 0,
                    o = 72,
                    s = 0; s < v; ++s)
                        (m = t[s]) < 128 && A.push(f(m));
                    for (i = n = A.length,
                    n && A.push("-"); i < v; ) {
                        for (h = a,
                        s = 0; s < v; ++s)
                            (m = t[s]) >= e && m < h && (h = m);
                        for (h - e > p((a - r) / (y = i + 1)) && _("overflow"),
                        r += (h - e) * y,
                        e = h,
                        s = 0; s < v; ++s)
                            if ((m = t[s]) < e && ++r > a && _("overflow"),
                            m == e) {
                                for (l = r,
                                c = u; !(l < (d = c <= o ? 1 : c >= o + 26 ? 26 : c - o)); c += u)
                                    E = l - d,
                                    T = u - d,
                                    A.push(f(b(d + E % T, 0))),
                                    l = p(E / T);
                                A.push(f(b(l, 0))),
                                o = x(r, y, i == n),
                                r = 0,
                                ++i
                            }
                        ++r,
                        ++e
                    }
                    return A.join("")
                }
                s = {
                    version: "1.3.2",
                    ucs2: {
                        decode: g,
                        encode: y
                    },
                    decode: T,
                    encode: E,
                    toASCII: function(t) {
                        return v(t, (function(t) {
                            return l.test(t) ? "xn--" + E(t) : t
                        }
                        ))
                    },
                    toUnicode: function(t) {
                        return v(t, (function(t) {
                            return h.test(t) ? T(t.slice(4).toLowerCase()) : t
                        }
                        ))
                    }
                },
                void 0 === (i = function() {
                    return s
                }
                .call(e, r, e, t)) || (t.exports = i)
            }()
        },
        883: (t,e,r)=>{
            "use strict";
            var i = r(639)
              , n = r(225);
            function o() {
                this.protocol = null,
                this.slashes = null,
                this.auth = null,
                this.host = null,
                this.port = null,
                this.hostname = null,
                this.hash = null,
                this.search = null,
                this.query = null,
                this.pathname = null,
                this.path = null,
                this.href = null
            }
            e.Qc = y,
            e.DB = function(t, e) {
                return y(t, !1, !0).resolve(e)
            }
            ,
            e.WU = function(t) {
                return n.isString(t) && (t = y(t)),
                t instanceof o ? t.format() : o.prototype.format.call(t)
            }
            ;
            var s = /^([a-z0-9.+-]+:)/i
              , a = /:[0-9]*$/
              , u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
              , h = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"])
              , l = ["'"].concat(h)
              , c = ["%", "/", "?", ";", "#"].concat(l)
              , d = ["/", "?", "#"]
              , p = /^[+a-z0-9A-Z_-]{0,63}$/
              , f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
              , _ = {
                javascript: !0,
                "javascript:": !0
            }
              , m = {
                javascript: !0,
                "javascript:": !0
            }
              , v = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            }
              , g = r(642);
            function y(t, e, r) {
                if (t && n.isObject(t) && t instanceof o)
                    return t;
                var i = new o;
                return i.parse(t, e, r),
                i
            }
            o.prototype.parse = function(t, e, r) {
                if (!n.isString(t))
                    throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var o = t.indexOf("?")
                  , a = -1 !== o && o < t.indexOf("#") ? "?" : "#"
                  , h = t.split(a);
                h[0] = h[0].replace(/\\/g, "/");
                var y = t = h.join(a);
                if (y = y.trim(),
                !r && 1 === t.split("#").length) {
                    var b = u.exec(y);
                    if (b)
                        return this.path = y,
                        this.href = y,
                        this.pathname = b[1],
                        b[2] ? (this.search = b[2],
                        this.query = e ? g.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "",
                        this.query = {}),
                        this
                }
                var x = s.exec(y);
                if (x) {
                    var T = (x = x[0]).toLowerCase();
                    this.protocol = T,
                    y = y.substr(x.length)
                }
                if (r || x || y.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var E = "//" === y.substr(0, 2);
                    !E || x && m[x] || (y = y.substr(2),
                    this.slashes = !0)
                }
                if (!m[x] && (E || x && !v[x])) {
                    for (var A, S, R = -1, w = 0; w < d.length; w++)
                        -1 !== (O = y.indexOf(d[w])) && (-1 === R || O < R) && (R = O);
                    for (-1 !== (S = -1 === R ? y.lastIndexOf("@") : y.lastIndexOf("@", R)) && (A = y.slice(0, S),
                    y = y.slice(S + 1),
                    this.auth = decodeURIComponent(A)),
                    R = -1,
                    w = 0; w < c.length; w++) {
                        var O;
                        -1 !== (O = y.indexOf(c[w])) && (-1 === R || O < R) && (R = O)
                    }
                    -1 === R && (R = y.length),
                    this.host = y.slice(0, R),
                    y = y.slice(R),
                    this.parseHost(),
                    this.hostname = this.hostname || "";
                    var I = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!I)
                        for (var P = this.hostname.split(/\./), M = (w = 0,
                        P.length); w < M; w++) {
                            var D = P[w];
                            if (D && !D.match(p)) {
                                for (var C = "", F = 0, N = D.length; F < N; F++)
                                    D.charCodeAt(F) > 127 ? C += "x" : C += D[F];
                                if (!C.match(p)) {
                                    var B = P.slice(0, w)
                                      , L = P.slice(w + 1)
                                      , G = D.match(f);
                                    G && (B.push(G[1]),
                                    L.unshift(G[2])),
                                    L.length && (y = "/" + L.join(".") + y),
                                    this.hostname = B.join(".");
                                    break
                                }
                            }
                        }
                    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
                    I || (this.hostname = i.toASCII(this.hostname));
                    var U = this.port ? ":" + this.port : ""
                      , k = this.hostname || "";
                    this.host = k + U,
                    this.href += this.host,
                    I && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
                    "/" !== y[0] && (y = "/" + y))
                }
                if (!_[T])
                    for (w = 0,
                    M = l.length; w < M; w++) {
                        var X = l[w];
                        if (-1 !== y.indexOf(X)) {
                            var H = encodeURIComponent(X);
                            H === X && (H = escape(X)),
                            y = y.split(X).join(H)
                        }
                    }
                var j = y.indexOf("#");
                -1 !== j && (this.hash = y.substr(j),
                y = y.slice(0, j));
                var Y = y.indexOf("?");
                if (-1 !== Y ? (this.search = y.substr(Y),
                this.query = y.substr(Y + 1),
                e && (this.query = g.parse(this.query)),
                y = y.slice(0, Y)) : e && (this.search = "",
                this.query = {}),
                y && (this.pathname = y),
                v[T] && this.hostname && !this.pathname && (this.pathname = "/"),
                this.pathname || this.search) {
                    U = this.pathname || "";
                    var V = this.search || "";
                    this.path = U + V
                }
                return this.href = this.format(),
                this
            }
            ,
            o.prototype.format = function() {
                var t = this.auth || "";
                t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"),
                t += "@");
                var e = this.protocol || ""
                  , r = this.pathname || ""
                  , i = this.hash || ""
                  , o = !1
                  , s = "";
                this.host ? o = t + this.host : this.hostname && (o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"),
                this.port && (o += ":" + this.port)),
                this.query && n.isObject(this.query) && Object.keys(this.query).length && (s = g.stringify(this.query));
                var a = this.search || s && "?" + s || "";
                return e && ":" !== e.substr(-1) && (e += ":"),
                this.slashes || (!e || v[e]) && !1 !== o ? (o = "//" + (o || ""),
                r && "/" !== r.charAt(0) && (r = "/" + r)) : o || (o = ""),
                i && "#" !== i.charAt(0) && (i = "#" + i),
                a && "?" !== a.charAt(0) && (a = "?" + a),
                e + o + (r = r.replace(/[?#]/g, (function(t) {
                    return encodeURIComponent(t)
                }
                ))) + (a = a.replace("#", "%23")) + i
            }
            ,
            o.prototype.resolve = function(t) {
                return this.resolveObject(y(t, !1, !0)).format()
            }
            ,
            o.prototype.resolveObject = function(t) {
                if (n.isString(t)) {
                    var e = new o;
                    e.parse(t, !1, !0),
                    t = e
                }
                for (var r = new o, i = Object.keys(this), s = 0; s < i.length; s++) {
                    var a = i[s];
                    r[a] = this[a]
                }
                if (r.hash = t.hash,
                "" === t.href)
                    return r.href = r.format(),
                    r;
                if (t.slashes && !t.protocol) {
                    for (var u = Object.keys(t), h = 0; h < u.length; h++) {
                        var l = u[h];
                        "protocol" !== l && (r[l] = t[l])
                    }
                    return v[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"),
                    r.href = r.format(),
                    r
                }
                if (t.protocol && t.protocol !== r.protocol) {
                    if (!v[t.protocol]) {
                        for (var c = Object.keys(t), d = 0; d < c.length; d++) {
                            var p = c[d];
                            r[p] = t[p]
                        }
                        return r.href = r.format(),
                        r
                    }
                    if (r.protocol = t.protocol,
                    t.host || m[t.protocol])
                        r.pathname = t.pathname;
                    else {
                        for (var f = (t.pathname || "").split("/"); f.length && !(t.host = f.shift()); )
                            ;
                        t.host || (t.host = ""),
                        t.hostname || (t.hostname = ""),
                        "" !== f[0] && f.unshift(""),
                        f.length < 2 && f.unshift(""),
                        r.pathname = f.join("/")
                    }
                    if (r.search = t.search,
                    r.query = t.query,
                    r.host = t.host || "",
                    r.auth = t.auth,
                    r.hostname = t.hostname || t.host,
                    r.port = t.port,
                    r.pathname || r.search) {
                        var _ = r.pathname || ""
                          , g = r.search || "";
                        r.path = _ + g
                    }
                    return r.slashes = r.slashes || t.slashes,
                    r.href = r.format(),
                    r
                }
                var y = r.pathname && "/" === r.pathname.charAt(0)
                  , b = t.host || t.pathname && "/" === t.pathname.charAt(0)
                  , x = b || y || r.host && t.pathname
                  , T = x
                  , E = r.pathname && r.pathname.split("/") || []
                  , A = (f = t.pathname && t.pathname.split("/") || [],
                r.protocol && !v[r.protocol]);
                if (A && (r.hostname = "",
                r.port = null,
                r.host && ("" === E[0] ? E[0] = r.host : E.unshift(r.host)),
                r.host = "",
                t.protocol && (t.hostname = null,
                t.port = null,
                t.host && ("" === f[0] ? f[0] = t.host : f.unshift(t.host)),
                t.host = null),
                x = x && ("" === f[0] || "" === E[0])),
                b)
                    r.host = t.host || "" === t.host ? t.host : r.host,
                    r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname,
                    r.search = t.search,
                    r.query = t.query,
                    E = f;
                else if (f.length)
                    E || (E = []),
                    E.pop(),
                    E = E.concat(f),
                    r.search = t.search,
                    r.query = t.query;
                else if (!n.isNullOrUndefined(t.search))
                    return A && (r.hostname = r.host = E.shift(),
                    (I = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = I.shift(),
                    r.host = r.hostname = I.shift())),
                    r.search = t.search,
                    r.query = t.query,
                    n.isNull(r.pathname) && n.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
                    r.href = r.format(),
                    r;
                if (!E.length)
                    return r.pathname = null,
                    r.search ? r.path = "/" + r.search : r.path = null,
                    r.href = r.format(),
                    r;
                for (var S = E.slice(-1)[0], R = (r.host || t.host || E.length > 1) && ("." === S || ".." === S) || "" === S, w = 0, O = E.length; O >= 0; O--)
                    "." === (S = E[O]) ? E.splice(O, 1) : ".." === S ? (E.splice(O, 1),
                    w++) : w && (E.splice(O, 1),
                    w--);
                if (!x && !T)
                    for (; w--; w)
                        E.unshift("..");
                !x || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""),
                R && "/" !== E.join("/").substr(-1) && E.push("");
                var I, P = "" === E[0] || E[0] && "/" === E[0].charAt(0);
                return A && (r.hostname = r.host = P ? "" : E.length ? E.shift() : "",
                (I = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = I.shift(),
                r.host = r.hostname = I.shift())),
                (x = x || r.host && E.length) && !P && E.unshift(""),
                E.length ? r.pathname = E.join("/") : (r.pathname = null,
                r.path = null),
                n.isNull(r.pathname) && n.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
                r.auth = t.auth || r.auth,
                r.slashes = r.slashes || t.slashes,
                r.href = r.format(),
                r
            }
            ,
            o.prototype.parseHost = function() {
                var t = this.host
                  , e = a.exec(t);
                e && (":" !== (e = e[0]) && (this.port = e.substr(1)),
                t = t.substr(0, t.length - e.length)),
                t && (this.hostname = t)
            }
        }
        ,
        225: t=>{
            "use strict";
            t.exports = {
                isString: function(t) {
                    return "string" == typeof t
                },
                isObject: function(t) {
                    return "object" == typeof t && null !== t
                },
                isNull: function(t) {
                    return null === t
                },
                isNullOrUndefined: function(t) {
                    return null == t
                }
            }
        }
    }
      , e = {};
    function r(i) {
        if (e[i])
            return e[i].exports;
        var n = e[i] = {
            id: i,
            loaded: !1,
            exports: {}
        };
        return t[i].call(n.exports, n, n.exports, r),
        n.loaded = !0,
        n.exports
    }
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.nmd = t=>(t.paths = [],
    t.children || (t.children = []),
    t),
    (()=>{
        "use strict";
        var t = r(81);
        var e = setTimeout;
        function i(t) {
            return Boolean(t && void 0 !== t.length)
        }
        function n() {}
        function o(t) {
            if (!(this instanceof o))
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t)
                throw new TypeError("not a function");
            this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            c(t, this)
        }
        function s(t, e) {
            for (; 3 === t._state; )
                t = t._value;
            0 !== t._state ? (t._handled = !0,
            o._immediateFn((function() {
                var r = 1 === t._state ? e.onFulfilled : e.onRejected;
                if (null !== r) {
                    var i;
                    try {
                        i = r(t._value)
                    } catch (t) {
                        return void u(e.promise, t)
                    }
                    a(e.promise, i)
                } else
                    (1 === t._state ? a : u)(e.promise, t._value)
            }
            ))) : t._deferreds.push(e)
        }
        function a(t, e) {
            try {
                if (e === t)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" == typeof e || "function" == typeof e)) {
                    var r = e.then;
                    if (e instanceof o)
                        return t._state = 3,
                        t._value = e,
                        void h(t);
                    if ("function" == typeof r)
                        return void c((i = r,
                        n = e,
                        function() {
                            i.apply(n, arguments)
                        }
                        ), t)
                }
                t._state = 1,
                t._value = e,
                h(t)
            } catch (e) {
                u(t, e)
            }
            var i, n
        }
        function u(t, e) {
            t._state = 2,
            t._value = e,
            h(t)
        }
        function h(t) {
            2 === t._state && 0 === t._deferreds.length && o._immediateFn((function() {
                t._handled || o._unhandledRejectionFn(t._value)
            }
            ));
            for (var e = 0, r = t._deferreds.length; e < r; e++)
                s(t, t._deferreds[e]);
            t._deferreds = null
        }
        function l(t, e, r) {
            this.onFulfilled = "function" == typeof t ? t : null,
            this.onRejected = "function" == typeof e ? e : null,
            this.promise = r
        }
        function c(t, e) {
            var r = !1;
            try {
                t((function(t) {
                    r || (r = !0,
                    a(e, t))
                }
                ), (function(t) {
                    r || (r = !0,
                    u(e, t))
                }
                ))
            } catch (t) {
                if (r)
                    return;
                r = !0,
                u(e, t)
            }
        }
        o.prototype.catch = function(t) {
            return this.then(null, t)
        }
        ,
        o.prototype.then = function(t, e) {
            var r = new this.constructor(n);
            return s(this, new l(t,e,r)),
            r
        }
        ,
        o.prototype.finally = function(t) {
            var e = this.constructor;
            return this.then((function(r) {
                return e.resolve(t()).then((function() {
                    return r
                }
                ))
            }
            ), (function(r) {
                return e.resolve(t()).then((function() {
                    return e.reject(r)
                }
                ))
            }
            ))
        }
        ,
        o.all = function(t) {
            return new o((function(e, r) {
                if (!i(t))
                    return r(new TypeError("Promise.all accepts an array"));
                var n = Array.prototype.slice.call(t);
                if (0 === n.length)
                    return e([]);
                var o = n.length;
                function s(t, i) {
                    try {
                        if (i && ("object" == typeof i || "function" == typeof i)) {
                            var a = i.then;
                            if ("function" == typeof a)
                                return void a.call(i, (function(e) {
                                    s(t, e)
                                }
                                ), r)
                        }
                        n[t] = i,
                        0 == --o && e(n)
                    } catch (t) {
                        r(t)
                    }
                }
                for (var a = 0; a < n.length; a++)
                    s(a, n[a])
            }
            ))
        }
        ,
        o.allSettled = function(t) {
            return new this((function(e, r) {
                if (!t || void 0 === t.length)
                    return r(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                var i = Array.prototype.slice.call(t);
                if (0 === i.length)
                    return e([]);
                var n = i.length;
                function o(t, r) {
                    if (r && ("object" == typeof r || "function" == typeof r)) {
                        var s = r.then;
                        if ("function" == typeof s)
                            return void s.call(r, (function(e) {
                                o(t, e)
                            }
                            ), (function(r) {
                                i[t] = {
                                    status: "rejected",
                                    reason: r
                                },
                                0 == --n && e(i)
                            }
                            ))
                    }
                    i[t] = {
                        status: "fulfilled",
                        value: r
                    },
                    0 == --n && e(i)
                }
                for (var s = 0; s < i.length; s++)
                    o(s, i[s])
            }
            ))
        }
        ,
        o.resolve = function(t) {
            return t && "object" == typeof t && t.constructor === o ? t : new o((function(e) {
                e(t)
            }
            ))
        }
        ,
        o.reject = function(t) {
            return new o((function(e, r) {
                r(t)
            }
            ))
        }
        ,
        o.race = function(t) {
            return new o((function(e, r) {
                if (!i(t))
                    return r(new TypeError("Promise.race accepts an array"));
                for (var n = 0, s = t.length; n < s; n++)
                    o.resolve(t[n]).then(e, r)
            }
            ))
        }
        ,
        o._immediateFn = "function" == typeof setImmediate && function(t) {
            setImmediate(t)
        }
        || function(t) {
            e(t, 0)
        }
        ,
        o._unhandledRejectionFn = function(t) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
        }
        ;
        const d = o;
        var p = r(320);
        if ("undefined" == typeof globalThis && ("undefined" != typeof self ? self.globalThis = self : "undefined" != typeof global && (global.globalThis = global)),
        globalThis.Promise || (globalThis.Promise = d),
        Object.assign || (Object.assign = p),
        Date.now && Date.prototype.getTime || (Date.now = function() {
            return (new Date).getTime()
        }
        ),
        !globalThis.performance || !globalThis.performance.now) {
            var f = Date.now();
            globalThis.performance || (globalThis.performance = {}),
            globalThis.performance.now = function() {
                return Date.now() - f
            }
        }
        for (var _, m, v, g, y, b, x, T, E, A, S, R, w, O, I, P, M, D, C, F, N = Date.now(), B = ["ms", "moz", "webkit", "o"], L = 0; L < B.length && !globalThis.requestAnimationFrame; ++L) {
            var G = B[L];
            globalThis.requestAnimationFrame = globalThis[G + "RequestAnimationFrame"],
            globalThis.cancelAnimationFrame = globalThis[G + "CancelAnimationFrame"] || globalThis[G + "CancelRequestAnimationFrame"]
        }
        globalThis.requestAnimationFrame || (globalThis.requestAnimationFrame = function(t) {
            if ("function" != typeof t)
                throw new TypeError(t + "is not a function");
            var e = Date.now()
              , r = 16 + N - e;
            return r < 0 && (r = 0),
            N = e,
            globalThis.self.setTimeout((function() {
                N = Date.now(),
                t(performance.now())
            }
            ), r)
        }
        ),
        globalThis.cancelAnimationFrame || (globalThis.cancelAnimationFrame = function(t) {
            return clearTimeout(t)
        }
        ),
        Math.sign || (Math.sign = function(t) {
            return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1
        }
        ),
        Number.isInteger || (Number.isInteger = function(t) {
            return "number" == typeof t && isFinite(t) && Math.floor(t) === t
        }
        ),
        globalThis.ArrayBuffer || (globalThis.ArrayBuffer = Array),
        globalThis.Float32Array || (globalThis.Float32Array = Array),
        globalThis.Uint32Array || (globalThis.Uint32Array = Array),
        globalThis.Uint16Array || (globalThis.Uint16Array = Array),
        globalThis.Uint8Array || (globalThis.Uint8Array = Array),
        globalThis.Int32Array || (globalThis.Int32Array = Array),
        function(t) {
            t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY",
            t[t.WEBGL = 1] = "WEBGL",
            t[t.WEBGL2 = 2] = "WEBGL2"
        }(_ || (_ = {})),
        function(t) {
            t[t.UNKNOWN = 0] = "UNKNOWN",
            t[t.WEBGL = 1] = "WEBGL",
            t[t.CANVAS = 2] = "CANVAS"
        }(m || (m = {})),
        function(t) {
            t[t.COLOR = 16384] = "COLOR",
            t[t.DEPTH = 256] = "DEPTH",
            t[t.STENCIL = 1024] = "STENCIL"
        }(v || (v = {})),
        function(t) {
            t[t.NORMAL = 0] = "NORMAL",
            t[t.ADD = 1] = "ADD",
            t[t.MULTIPLY = 2] = "MULTIPLY",
            t[t.SCREEN = 3] = "SCREEN",
            t[t.OVERLAY = 4] = "OVERLAY",
            t[t.DARKEN = 5] = "DARKEN",
            t[t.LIGHTEN = 6] = "LIGHTEN",
            t[t.COLOR_DODGE = 7] = "COLOR_DODGE",
            t[t.COLOR_BURN = 8] = "COLOR_BURN",
            t[t.HARD_LIGHT = 9] = "HARD_LIGHT",
            t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT",
            t[t.DIFFERENCE = 11] = "DIFFERENCE",
            t[t.EXCLUSION = 12] = "EXCLUSION",
            t[t.HUE = 13] = "HUE",
            t[t.SATURATION = 14] = "SATURATION",
            t[t.COLOR = 15] = "COLOR",
            t[t.LUMINOSITY = 16] = "LUMINOSITY",
            t[t.NORMAL_NPM = 17] = "NORMAL_NPM",
            t[t.ADD_NPM = 18] = "ADD_NPM",
            t[t.SCREEN_NPM = 19] = "SCREEN_NPM",
            t[t.NONE = 20] = "NONE",
            t[t.SRC_OVER = 0] = "SRC_OVER",
            t[t.SRC_IN = 21] = "SRC_IN",
            t[t.SRC_OUT = 22] = "SRC_OUT",
            t[t.SRC_ATOP = 23] = "SRC_ATOP",
            t[t.DST_OVER = 24] = "DST_OVER",
            t[t.DST_IN = 25] = "DST_IN",
            t[t.DST_OUT = 26] = "DST_OUT",
            t[t.DST_ATOP = 27] = "DST_ATOP",
            t[t.ERASE = 26] = "ERASE",
            t[t.SUBTRACT = 28] = "SUBTRACT",
            t[t.XOR = 29] = "XOR"
        }(g || (g = {})),
        function(t) {
            t[t.POINTS = 0] = "POINTS",
            t[t.LINES = 1] = "LINES",
            t[t.LINE_LOOP = 2] = "LINE_LOOP",
            t[t.LINE_STRIP = 3] = "LINE_STRIP",
            t[t.TRIANGLES = 4] = "TRIANGLES",
            t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP",
            t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
        }(y || (y = {})),
        function(t) {
            t[t.RGBA = 6408] = "RGBA",
            t[t.RGB = 6407] = "RGB",
            t[t.RG = 33319] = "RG",
            t[t.RED = 6403] = "RED",
            t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER",
            t[t.RGB_INTEGER = 36248] = "RGB_INTEGER",
            t[t.RG_INTEGER = 33320] = "RG_INTEGER",
            t[t.RED_INTEGER = 36244] = "RED_INTEGER",
            t[t.ALPHA = 6406] = "ALPHA",
            t[t.LUMINANCE = 6409] = "LUMINANCE",
            t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA",
            t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT",
            t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
        }(b || (b = {})),
        function(t) {
            t[t.TEXTURE_2D = 3553] = "TEXTURE_2D",
            t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP",
            t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY",
            t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X",
            t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X",
            t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y",
            t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y",
            t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z",
            t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
        }(x || (x = {})),
        function(t) {
            t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE",
            t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT",
            t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5",
            t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4",
            t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1",
            t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT",
            t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV",
            t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV",
            t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8",
            t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV",
            t[t.BYTE = 5120] = "BYTE",
            t[t.SHORT = 5122] = "SHORT",
            t[t.INT = 5124] = "INT",
            t[t.FLOAT = 5126] = "FLOAT",
            t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV",
            t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
        }(T || (T = {})),
        function(t) {
            t[t.FLOAT = 0] = "FLOAT",
            t[t.INT = 1] = "INT",
            t[t.UINT = 2] = "UINT"
        }(E || (E = {})),
        function(t) {
            t[t.NEAREST = 0] = "NEAREST",
            t[t.LINEAR = 1] = "LINEAR"
        }(A || (A = {})),
        function(t) {
            t[t.CLAMP = 33071] = "CLAMP",
            t[t.REPEAT = 10497] = "REPEAT",
            t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
        }(S || (S = {})),
        function(t) {
            t[t.OFF = 0] = "OFF",
            t[t.POW2 = 1] = "POW2",
            t[t.ON = 2] = "ON",
            t[t.ON_MANUAL = 3] = "ON_MANUAL"
        }(R || (R = {})),
        function(t) {
            t[t.NPM = 0] = "NPM",
            t[t.UNPACK = 1] = "UNPACK",
            t[t.PMA = 2] = "PMA",
            t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA",
            t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD",
            t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA",
            t[t.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA"
        }(w || (w = {})),
        function(t) {
            t[t.NO = 0] = "NO",
            t[t.YES = 1] = "YES",
            t[t.AUTO = 2] = "AUTO",
            t[t.BLEND = 0] = "BLEND",
            t[t.CLEAR = 1] = "CLEAR",
            t[t.BLIT = 2] = "BLIT"
        }(O || (O = {})),
        function(t) {
            t[t.AUTO = 0] = "AUTO",
            t[t.MANUAL = 1] = "MANUAL"
        }(I || (I = {})),
        function(t) {
            t.LOW = "lowp",
            t.MEDIUM = "mediump",
            t.HIGH = "highp"
        }(P || (P = {})),
        function(t) {
            t[t.NONE = 0] = "NONE",
            t[t.SCISSOR = 1] = "SCISSOR",
            t[t.STENCIL = 2] = "STENCIL",
            t[t.SPRITE = 3] = "SPRITE",
            t[t.COLOR = 4] = "COLOR"
        }(M || (M = {})),
        function(t) {
            t[t.RED = 1] = "RED",
            t[t.GREEN = 2] = "GREEN",
            t[t.BLUE = 4] = "BLUE",
            t[t.ALPHA = 8] = "ALPHA"
        }(D || (D = {})),
        function(t) {
            t[t.NONE = 0] = "NONE",
            t[t.LOW = 2] = "LOW",
            t[t.MEDIUM = 4] = "MEDIUM",
            t[t.HIGH = 8] = "HIGH"
        }(C || (C = {})),
        function(t) {
            t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER",
            t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER",
            t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER"
        }(F || (F = {}));
        var U = {
            createCanvas: function(t, e) {
                var r = document.createElement("canvas");
                return r.width = t,
                r.height = e,
                r
            },
            getWebGLRenderingContext: function() {
                return WebGLRenderingContext
            },
            getNavigator: function() {
                return navigator
            },
            getBaseUrl: function() {
                var t;
                return null !== (t = document.baseURI) && void 0 !== t ? t : window.location.href
            },
            fetch: function(t, e) {
                return fetch(t, e)
            }
        }
          , k = /iPhone/i
          , X = /iPod/i
          , H = /iPad/i
          , j = /\biOS-universal(?:.+)Mac\b/i
          , Y = /\bAndroid(?:.+)Mobile\b/i
          , V = /Android/i
          , W = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i
          , z = /Silk/i
          , q = /Windows Phone/i
          , K = /\bWindows(?:.+)ARM\b/i
          , Z = /BlackBerry/i
          , J = /BB10/i
          , Q = /Opera Mini/i
          , tt = /\b(CriOS|Chrome)(?:.+)Mobile/i
          , et = /Mobile(?:.+)Firefox\b/i
          , rt = function(t) {
            return void 0 !== t && "MacIntel" === t.platform && "number" == typeof t.maxTouchPoints && t.maxTouchPoints > 1 && "undefined" == typeof MSStream
        }
          , it = function(t) {
            var e = {
                userAgent: "",
                platform: "",
                maxTouchPoints: 0
            };
            t || "undefined" == typeof navigator ? "string" == typeof t ? e.userAgent = t : t && t.userAgent && (e = {
                userAgent: t.userAgent,
                platform: t.platform,
                maxTouchPoints: t.maxTouchPoints || 0
            }) : e = {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                maxTouchPoints: navigator.maxTouchPoints || 0
            };
            var r = e.userAgent
              , i = r.split("[FBAN");
            void 0 !== i[1] && (r = i[0]),
            void 0 !== (i = r.split("Twitter"))[1] && (r = i[0]);
            var n = function(t) {
                return function(e) {
                    return e.test(t)
                }
            }(r)
              , o = {
                apple: {
                    phone: n(k) && !n(q),
                    ipod: n(X),
                    tablet: !n(k) && (n(H) || rt(e)) && !n(q),
                    universal: n(j),
                    device: (n(k) || n(X) || n(H) || n(j) || rt(e)) && !n(q)
                },
                amazon: {
                    phone: n(W),
                    tablet: !n(W) && n(z),
                    device: n(W) || n(z)
                },
                android: {
                    phone: !n(q) && n(W) || !n(q) && n(Y),
                    tablet: !n(q) && !n(W) && !n(Y) && (n(z) || n(V)),
                    device: !n(q) && (n(W) || n(z) || n(Y) || n(V)) || n(/\bokhttp\b/i)
                },
                windows: {
                    phone: n(q),
                    tablet: n(K),
                    device: n(q) || n(K)
                },
                other: {
                    blackberry: n(Z),
                    blackberry10: n(J),
                    opera: n(Q),
                    firefox: n(et),
                    chrome: n(tt),
                    device: n(Z) || n(J) || n(Q) || n(et) || n(tt)
                },
                any: !1,
                phone: !1,
                tablet: !1
            };
            return o.any = o.apple.device || o.android.device || o.windows.device || o.other.device,
            o.phone = o.apple.phone || o.android.phone || o.windows.phone,
            o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet,
            o
        }(globalThis.navigator)
          , nt = {
            ADAPTER: U,
            MIPMAP_TEXTURES: R.POW2,
            ANISOTROPIC_LEVEL: 0,
            RESOLUTION: 1,
            FILTER_RESOLUTION: 1,
            FILTER_MULTISAMPLE: C.NONE,
            SPRITE_MAX_TEXTURES: function(t) {
                var e, r = !0;
                (it.tablet || it.phone) && (it.apple.device && (e = navigator.userAgent.match(/OS (\d+)_(\d+)?/)) && parseInt(e[1], 10) < 11 && (r = !1),
                it.android.device && (e = navigator.userAgent.match(/Android\s([0-9.]*)/)) && parseInt(e[1], 10) < 7 && (r = !1));
                return r ? 32 : 4
            }(),
            SPRITE_BATCH_SIZE: 4096,
            RENDER_OPTIONS: {
                view: null,
                antialias: !1,
                autoDensity: !1,
                backgroundColor: 0,
                backgroundAlpha: 1,
                useContextAlpha: !0,
                clearBeforeRender: !0,
                preserveDrawingBuffer: !1,
                width: 800,
                height: 600,
                legacy: !1
            },
            GC_MODE: I.AUTO,
            GC_MAX_IDLE: 3600,
            GC_MAX_CHECK_COUNT: 600,
            WRAP_MODE: S.CLAMP,
            SCALE_MODE: A.LINEAR,
            PRECISION_VERTEX: P.HIGH,
            PRECISION_FRAGMENT: it.apple.device ? P.HIGH : P.MEDIUM,
            CAN_UPLOAD_SAME_BUFFER: !it.apple.device,
            CREATE_IMAGE_BITMAP: !1,
            ROUND_PIXELS: !1
        }
          , ot = r(805)
          , st = r(502)
          , at = r(883)
          , ut = {
            parse: at.Qc,
            format: at.WU,
            resolve: at.DB
        };
        nt.RETINA_PREFIX = /@([0-9\.]+)x/,
        nt.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
        var ht, lt = !1, ct = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            goldenrod: "#daa520",
            gold: "#ffd700",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavenderblush: "#fff0f5",
            lavender: "#e6e6fa",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };
        function dt(t, e) {
            return void 0 === e && (e = []),
            e[0] = (t >> 16 & 255) / 255,
            e[1] = (t >> 8 & 255) / 255,
            e[2] = (255 & t) / 255,
            e
        }
        function pt(t) {
            var e = t.toString(16);
            return "#" + ("000000".substring(0, 6 - e.length) + e)
        }
        function ft(t) {
            return "string" == typeof t && "#" === (t = ct[t.toLowerCase()] || t)[0] && (t = t.slice(1)),
            parseInt(t, 16)
        }
        var _t = function() {
            for (var t = [], e = [], r = 0; r < 32; r++)
                t[r] = r,
                e[r] = r;
            t[g.NORMAL_NPM] = g.NORMAL,
            t[g.ADD_NPM] = g.ADD,
            t[g.SCREEN_NPM] = g.SCREEN,
            e[g.NORMAL] = g.NORMAL_NPM,
            e[g.ADD] = g.ADD_NPM,
            e[g.SCREEN] = g.SCREEN_NPM;
            var i = [];
            return i.push(e),
            i.push(t),
            i
        }();
        function mt(t, e) {
            return _t[e ? 1 : 0][t]
        }
        function vt(t, e) {
            if (1 === e)
                return (255 * e << 24) + t;
            if (0 === e)
                return 0;
            var r = t >> 16 & 255
              , i = t >> 8 & 255
              , n = 255 & t;
            return (255 * e << 24) + ((r = r * e + .5 | 0) << 16) + ((i = i * e + .5 | 0) << 8) + (n * e + .5 | 0)
        }
        function gt(t, e, r, i) {
            return (r = r || new Float32Array(4))[0] = (t >> 16 & 255) / 255,
            r[1] = (t >> 8 & 255) / 255,
            r[2] = (255 & t) / 255,
            (i || void 0 === i) && (r[0] *= e,
            r[1] *= e,
            r[2] *= e),
            r[3] = e,
            r
        }
        function yt(t) {
            if (4 === t.BYTES_PER_ELEMENT)
                return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";
            if (2 === t.BYTES_PER_ELEMENT) {
                if (t instanceof Uint16Array)
                    return "Uint16Array"
            } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array)
                return "Uint8Array";
            return null
        }
        function bt(t) {
            return t += 0 === t ? 1 : 0,
            --t,
            t |= t >>> 1,
            t |= t >>> 2,
            t |= t >>> 4,
            t |= t >>> 8,
            1 + (t |= t >>> 16)
        }
        function xt(t) {
            return !(t & t - 1 || !t)
        }
        function Tt(t) {
            var e = (t > 65535 ? 1 : 0) << 4
              , r = ((t >>>= e) > 255 ? 1 : 0) << 3;
            return e |= r,
            e |= r = ((t >>>= r) > 15 ? 1 : 0) << 2,
            (e |= r = ((t >>>= r) > 3 ? 1 : 0) << 1) | (t >>>= r) >> 1
        }
        function Et(t, e, r) {
            var i, n = t.length;
            if (!(e >= n || 0 === r)) {
                var o = n - (r = e + r > n ? n - e : r);
                for (i = e; i < o; ++i)
                    t[i] = t[i + r];
                t.length = o
            }
        }
        function At(t) {
            return 0 === t ? 0 : t < 0 ? -1 : 1
        }
        Float32Array,
        Uint32Array,
        Int32Array,
        Uint8Array;
        var St = 0;
        function Rt() {
            return ++St
        }
        var wt = {};
        function Ot(t, e, r) {
            if (void 0 === r && (r = 3),
            !wt[e]) {
                var i = (new Error).stack;
                void 0 === i ? console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t) : (i = i.split("\n").splice(r).join("\n"),
                console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", e + "\nDeprecated since v" + t),
                console.warn(i),
                console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t),
                console.warn(i))),
                wt[e] = !0
            }
        }
        var It, Pt = {}, Mt = Object.create(null), Dt = Object.create(null), Ct = function() {
            function t(t, e, r) {
                this.canvas = nt.ADAPTER.createCanvas(),
                this.context = this.canvas.getContext("2d"),
                this.resolution = r || nt.RESOLUTION,
                this.resize(t, e)
            }
            return t.prototype.clear = function() {
                this.context.setTransform(1, 0, 0, 1, 0, 0),
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            }
            ,
            t.prototype.resize = function(t, e) {
                this.canvas.width = Math.round(t * this.resolution),
                this.canvas.height = Math.round(e * this.resolution)
            }
            ,
            t.prototype.destroy = function() {
                this.context = null,
                this.canvas = null
            }
            ,
            Object.defineProperty(t.prototype, "width", {
                get: function() {
                    return this.canvas.width
                },
                set: function(t) {
                    this.canvas.width = Math.round(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "height", {
                get: function() {
                    return this.canvas.height
                },
                set: function(t) {
                    this.canvas.height = Math.round(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        }();
        function Ft(t, e) {
            var r = nt.RETINA_PREFIX.exec(t);
            return r ? parseFloat(r[1]) : void 0 !== e ? e : 1
        }
        var Nt, Bt = 2 * Math.PI, Lt = 180 / Math.PI, Gt = Math.PI / 180;
        !function(t) {
            t[t.POLY = 0] = "POLY",
            t[t.RECT = 1] = "RECT",
            t[t.CIRC = 2] = "CIRC",
            t[t.ELIP = 3] = "ELIP",
            t[t.RREC = 4] = "RREC"
        }(Nt || (Nt = {}));
        var Ut = function() {
            function t(t, e) {
                void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                this.x = 0,
                this.y = 0,
                this.x = t,
                this.y = e
            }
            return t.prototype.clone = function() {
                return new t(this.x,this.y)
            }
            ,
            t.prototype.copyFrom = function(t) {
                return this.set(t.x, t.y),
                this
            }
            ,
            t.prototype.copyTo = function(t) {
                return t.set(this.x, this.y),
                t
            }
            ,
            t.prototype.equals = function(t) {
                return t.x === this.x && t.y === this.y
            }
            ,
            t.prototype.set = function(t, e) {
                return void 0 === t && (t = 0),
                void 0 === e && (e = t),
                this.x = t,
                this.y = e,
                this
            }
            ,
            t.prototype.toString = function() {
                return "[@pixi/math:Point x=" + this.x + " y=" + this.y + "]"
            }
            ,
            t
        }()
          , kt = [new Ut, new Ut, new Ut, new Ut]
          , Xt = function() {
            function t(t, e, r, i) {
                void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                void 0 === r && (r = 0),
                void 0 === i && (i = 0),
                this.x = Number(t),
                this.y = Number(e),
                this.width = Number(r),
                this.height = Number(i),
                this.type = Nt.RECT
            }
            return Object.defineProperty(t.prototype, "left", {
                get: function() {
                    return this.x
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "right", {
                get: function() {
                    return this.x + this.width
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "top", {
                get: function() {
                    return this.y
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "bottom", {
                get: function() {
                    return this.y + this.height
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "EMPTY", {
                get: function() {
                    return new t(0,0,0,0)
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.clone = function() {
                return new t(this.x,this.y,this.width,this.height)
            }
            ,
            t.prototype.copyFrom = function(t) {
                return this.x = t.x,
                this.y = t.y,
                this.width = t.width,
                this.height = t.height,
                this
            }
            ,
            t.prototype.copyTo = function(t) {
                return t.x = this.x,
                t.y = this.y,
                t.width = this.width,
                t.height = this.height,
                t
            }
            ,
            t.prototype.contains = function(t, e) {
                return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height
            }
            ,
            t.prototype.intersects = function(t, e) {
                if (!e) {
                    var r = this.x < t.x ? t.x : this.x;
                    if ((this.right > t.right ? t.right : this.right) <= r)
                        return !1;
                    var i = this.y < t.y ? t.y : this.y;
                    return (this.bottom > t.bottom ? t.bottom : this.bottom) > i
                }
                var n = this.left
                  , o = this.right
                  , s = this.top
                  , a = this.bottom;
                if (o <= n || a <= s)
                    return !1;
                var u = kt[0].set(t.left, t.top)
                  , h = kt[1].set(t.left, t.bottom)
                  , l = kt[2].set(t.right, t.top)
                  , c = kt[3].set(t.right, t.bottom);
                if (l.x <= u.x || h.y <= u.y)
                    return !1;
                var d = Math.sign(e.a * e.d - e.b * e.c);
                if (0 === d)
                    return !1;
                if (e.apply(u, u),
                e.apply(h, h),
                e.apply(l, l),
                e.apply(c, c),
                Math.max(u.x, h.x, l.x, c.x) <= n || Math.min(u.x, h.x, l.x, c.x) >= o || Math.max(u.y, h.y, l.y, c.y) <= s || Math.min(u.y, h.y, l.y, c.y) >= a)
                    return !1;
                var p = d * (h.y - u.y)
                  , f = d * (u.x - h.x)
                  , _ = p * n + f * s
                  , m = p * o + f * s
                  , v = p * n + f * a
                  , g = p * o + f * a;
                if (Math.max(_, m, v, g) <= p * u.x + f * u.y || Math.min(_, m, v, g) >= p * c.x + f * c.y)
                    return !1;
                var y = d * (u.y - l.y)
                  , b = d * (l.x - u.x)
                  , x = y * n + b * s
                  , T = y * o + b * s
                  , E = y * n + b * a
                  , A = y * o + b * a;
                return !(Math.max(x, T, E, A) <= y * u.x + b * u.y || Math.min(x, T, E, A) >= y * c.x + b * c.y)
            }
            ,
            t.prototype.pad = function(t, e) {
                return void 0 === t && (t = 0),
                void 0 === e && (e = t),
                this.x -= t,
                this.y -= e,
                this.width += 2 * t,
                this.height += 2 * e,
                this
            }
            ,
            t.prototype.fit = function(t) {
                var e = Math.max(this.x, t.x)
                  , r = Math.min(this.x + this.width, t.x + t.width)
                  , i = Math.max(this.y, t.y)
                  , n = Math.min(this.y + this.height, t.y + t.height);
                return this.x = e,
                this.width = Math.max(r - e, 0),
                this.y = i,
                this.height = Math.max(n - i, 0),
                this
            }
            ,
            t.prototype.ceil = function(t, e) {
                void 0 === t && (t = 1),
                void 0 === e && (e = .001);
                var r = Math.ceil((this.x + this.width - e) * t) / t
                  , i = Math.ceil((this.y + this.height - e) * t) / t;
                return this.x = Math.floor((this.x + e) * t) / t,
                this.y = Math.floor((this.y + e) * t) / t,
                this.width = r - this.x,
                this.height = i - this.y,
                this
            }
            ,
            t.prototype.enlarge = function(t) {
                var e = Math.min(this.x, t.x)
                  , r = Math.max(this.x + this.width, t.x + t.width)
                  , i = Math.min(this.y, t.y)
                  , n = Math.max(this.y + this.height, t.y + t.height);
                return this.x = e,
                this.width = r - e,
                this.y = i,
                this.height = n - i,
                this
            }
            ,
            t.prototype.toString = function() {
                return "[@pixi/math:Rectangle x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]"
            }
            ,
            t
        }()
          , Ht = function() {
            function t(t, e, r) {
                void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                void 0 === r && (r = 0),
                this.x = t,
                this.y = e,
                this.radius = r,
                this.type = Nt.CIRC
            }
            return t.prototype.clone = function() {
                return new t(this.x,this.y,this.radius)
            }
            ,
            t.prototype.contains = function(t, e) {
                if (this.radius <= 0)
                    return !1;
                var r = this.radius * this.radius
                  , i = this.x - t
                  , n = this.y - e;
                return (i *= i) + (n *= n) <= r
            }
            ,
            t.prototype.getBounds = function() {
                return new Xt(this.x - this.radius,this.y - this.radius,2 * this.radius,2 * this.radius)
            }
            ,
            t.prototype.toString = function() {
                return "[@pixi/math:Circle x=" + this.x + " y=" + this.y + " radius=" + this.radius + "]"
            }
            ,
            t
        }()
          , jt = function() {
            function t(t, e, r, i) {
                void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                void 0 === r && (r = 0),
                void 0 === i && (i = 0),
                this.x = t,
                this.y = e,
                this.width = r,
                this.height = i,
                this.type = Nt.ELIP
            }
            return t.prototype.clone = function() {
                return new t(this.x,this.y,this.width,this.height)
            }
            ,
            t.prototype.contains = function(t, e) {
                if (this.width <= 0 || this.height <= 0)
                    return !1;
                var r = (t - this.x) / this.width
                  , i = (e - this.y) / this.height;
                return (r *= r) + (i *= i) <= 1
            }
            ,
            t.prototype.getBounds = function() {
                return new Xt(this.x - this.width,this.y - this.height,this.width,this.height)
            }
            ,
            t.prototype.toString = function() {
                return "[@pixi/math:Ellipse x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]"
            }
            ,
            t
        }()
          , Yt = function() {
            function t() {
                for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
                    e[r] = t[r];
                var i = Array.isArray(e[0]) ? e[0] : e;
                if ("number" != typeof i[0]) {
                    for (var n = [], o = 0, s = i.length; o < s; o++)
                        n.push(i[o].x, i[o].y);
                    i = n
                }
                this.points = i,
                this.type = Nt.POLY,
                this.closeStroke = !0
            }
            return t.prototype.clone = function() {
                var e = new t(this.points.slice());
                return e.closeStroke = this.closeStroke,
                e
            }
            ,
            t.prototype.contains = function(t, e) {
                for (var r = !1, i = this.points.length / 2, n = 0, o = i - 1; n < i; o = n++) {
                    var s = this.points[2 * n]
                      , a = this.points[2 * n + 1]
                      , u = this.points[2 * o]
                      , h = this.points[2 * o + 1];
                    a > e != h > e && t < (e - a) / (h - a) * (u - s) + s && (r = !r)
                }
                return r
            }
            ,
            t.prototype.toString = function() {
                return "[@pixi/math:PolygoncloseStroke=" + this.closeStroke + "points=" + this.points.reduce((function(t, e) {
                    return t + ", " + e
                }
                ), "") + "]"
            }
            ,
            t
        }()
          , Vt = function() {
            function t(t, e, r, i, n) {
                void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                void 0 === r && (r = 0),
                void 0 === i && (i = 0),
                void 0 === n && (n = 20),
                this.x = t,
                this.y = e,
                this.width = r,
                this.height = i,
                this.radius = n,
                this.type = Nt.RREC
            }
            return t.prototype.clone = function() {
                return new t(this.x,this.y,this.width,this.height,this.radius)
            }
            ,
            t.prototype.contains = function(t, e) {
                if (this.width <= 0 || this.height <= 0)
                    return !1;
                if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                    var r = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
                    if (e >= this.y + r && e <= this.y + this.height - r || t >= this.x + r && t <= this.x + this.width - r)
                        return !0;
                    var i = t - (this.x + r)
                      , n = e - (this.y + r)
                      , o = r * r;
                    if (i * i + n * n <= o)
                        return !0;
                    if ((i = t - (this.x + this.width - r)) * i + n * n <= o)
                        return !0;
                    if (i * i + (n = e - (this.y + this.height - r)) * n <= o)
                        return !0;
                    if ((i = t - (this.x + r)) * i + n * n <= o)
                        return !0
                }
                return !1
            }
            ,
            t.prototype.toString = function() {
                return "[@pixi/math:RoundedRectangle x=" + this.x + " y=" + this.y + "width=" + this.width + " height=" + this.height + " radius=" + this.radius + "]"
            }
            ,
            t
        }()
          , Wt = function() {
            function t(t, e, r, i) {
                void 0 === r && (r = 0),
                void 0 === i && (i = 0),
                this._x = r,
                this._y = i,
                this.cb = t,
                this.scope = e
            }
            return t.prototype.clone = function(e, r) {
                return void 0 === e && (e = this.cb),
                void 0 === r && (r = this.scope),
                new t(e,r,this._x,this._y)
            }
            ,
            t.prototype.set = function(t, e) {
                return void 0 === t && (t = 0),
                void 0 === e && (e = t),
                this._x === t && this._y === e || (this._x = t,
                this._y = e,
                this.cb.call(this.scope)),
                this
            }
            ,
            t.prototype.copyFrom = function(t) {
                return this._x === t.x && this._y === t.y || (this._x = t.x,
                this._y = t.y,
                this.cb.call(this.scope)),
                this
            }
            ,
            t.prototype.copyTo = function(t) {
                return t.set(this._x, this._y),
                t
            }
            ,
            t.prototype.equals = function(t) {
                return t.x === this._x && t.y === this._y
            }
            ,
            t.prototype.toString = function() {
                return "[@pixi/math:ObservablePoint x=0 y=0 scope=" + this.scope + "]"
            }
            ,
            Object.defineProperty(t.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x !== t && (this._x = t,
                    this.cb.call(this.scope))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y !== t && (this._y = t,
                    this.cb.call(this.scope))
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        }()
          , zt = function() {
            function t(t, e, r, i, n, o) {
                void 0 === t && (t = 1),
                void 0 === e && (e = 0),
                void 0 === r && (r = 0),
                void 0 === i && (i = 1),
                void 0 === n && (n = 0),
                void 0 === o && (o = 0),
                this.array = null,
                this.a = t,
                this.b = e,
                this.c = r,
                this.d = i,
                this.tx = n,
                this.ty = o
            }
            return t.prototype.fromArray = function(t) {
                this.a = t[0],
                this.b = t[1],
                this.c = t[3],
                this.d = t[4],
                this.tx = t[2],
                this.ty = t[5]
            }
            ,
            t.prototype.set = function(t, e, r, i, n, o) {
                return this.a = t,
                this.b = e,
                this.c = r,
                this.d = i,
                this.tx = n,
                this.ty = o,
                this
            }
            ,
            t.prototype.toArray = function(t, e) {
                this.array || (this.array = new Float32Array(9));
                var r = e || this.array;
                return t ? (r[0] = this.a,
                r[1] = this.b,
                r[2] = 0,
                r[3] = this.c,
                r[4] = this.d,
                r[5] = 0,
                r[6] = this.tx,
                r[7] = this.ty,
                r[8] = 1) : (r[0] = this.a,
                r[1] = this.c,
                r[2] = this.tx,
                r[3] = this.b,
                r[4] = this.d,
                r[5] = this.ty,
                r[6] = 0,
                r[7] = 0,
                r[8] = 1),
                r
            }
            ,
            t.prototype.apply = function(t, e) {
                e = e || new Ut;
                var r = t.x
                  , i = t.y;
                return e.x = this.a * r + this.c * i + this.tx,
                e.y = this.b * r + this.d * i + this.ty,
                e
            }
            ,
            t.prototype.applyInverse = function(t, e) {
                e = e || new Ut;
                var r = 1 / (this.a * this.d + this.c * -this.b)
                  , i = t.x
                  , n = t.y;
                return e.x = this.d * r * i + -this.c * r * n + (this.ty * this.c - this.tx * this.d) * r,
                e.y = this.a * r * n + -this.b * r * i + (-this.ty * this.a + this.tx * this.b) * r,
                e
            }
            ,
            t.prototype.translate = function(t, e) {
                return this.tx += t,
                this.ty += e,
                this
            }
            ,
            t.prototype.scale = function(t, e) {
                return this.a *= t,
                this.d *= e,
                this.c *= t,
                this.b *= e,
                this.tx *= t,
                this.ty *= e,
                this
            }
            ,
            t.prototype.rotate = function(t) {
                var e = Math.cos(t)
                  , r = Math.sin(t)
                  , i = this.a
                  , n = this.c
                  , o = this.tx;
                return this.a = i * e - this.b * r,
                this.b = i * r + this.b * e,
                this.c = n * e - this.d * r,
                this.d = n * r + this.d * e,
                this.tx = o * e - this.ty * r,
                this.ty = o * r + this.ty * e,
                this
            }
            ,
            t.prototype.append = function(t) {
                var e = this.a
                  , r = this.b
                  , i = this.c
                  , n = this.d;
                return this.a = t.a * e + t.b * i,
                this.b = t.a * r + t.b * n,
                this.c = t.c * e + t.d * i,
                this.d = t.c * r + t.d * n,
                this.tx = t.tx * e + t.ty * i + this.tx,
                this.ty = t.tx * r + t.ty * n + this.ty,
                this
            }
            ,
            t.prototype.setTransform = function(t, e, r, i, n, o, s, a, u) {
                return this.a = Math.cos(s + u) * n,
                this.b = Math.sin(s + u) * n,
                this.c = -Math.sin(s - a) * o,
                this.d = Math.cos(s - a) * o,
                this.tx = t - (r * this.a + i * this.c),
                this.ty = e - (r * this.b + i * this.d),
                this
            }
            ,
            t.prototype.prepend = function(t) {
                var e = this.tx;
                if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                    var r = this.a
                      , i = this.c;
                    this.a = r * t.a + this.b * t.c,
                    this.b = r * t.b + this.b * t.d,
                    this.c = i * t.a + this.d * t.c,
                    this.d = i * t.b + this.d * t.d
                }
                return this.tx = e * t.a + this.ty * t.c + t.tx,
                this.ty = e * t.b + this.ty * t.d + t.ty,
                this
            }
            ,
            t.prototype.decompose = function(t) {
                var e = this.a
                  , r = this.b
                  , i = this.c
                  , n = this.d
                  , o = t.pivot
                  , s = -Math.atan2(-i, n)
                  , a = Math.atan2(r, e)
                  , u = Math.abs(s + a);
                return u < 1e-5 || Math.abs(Bt - u) < 1e-5 ? (t.rotation = a,
                t.skew.x = t.skew.y = 0) : (t.rotation = 0,
                t.skew.x = s,
                t.skew.y = a),
                t.scale.x = Math.sqrt(e * e + r * r),
                t.scale.y = Math.sqrt(i * i + n * n),
                t.position.x = this.tx + (o.x * e + o.y * i),
                t.position.y = this.ty + (o.x * r + o.y * n),
                t
            }
            ,
            t.prototype.invert = function() {
                var t = this.a
                  , e = this.b
                  , r = this.c
                  , i = this.d
                  , n = this.tx
                  , o = t * i - e * r;
                return this.a = i / o,
                this.b = -e / o,
                this.c = -r / o,
                this.d = t / o,
                this.tx = (r * this.ty - i * n) / o,
                this.ty = -(t * this.ty - e * n) / o,
                this
            }
            ,
            t.prototype.identity = function() {
                return this.a = 1,
                this.b = 0,
                this.c = 0,
                this.d = 1,
                this.tx = 0,
                this.ty = 0,
                this
            }
            ,
            t.prototype.clone = function() {
                var e = new t;
                return e.a = this.a,
                e.b = this.b,
                e.c = this.c,
                e.d = this.d,
                e.tx = this.tx,
                e.ty = this.ty,
                e
            }
            ,
            t.prototype.copyTo = function(t) {
                return t.a = this.a,
                t.b = this.b,
                t.c = this.c,
                t.d = this.d,
                t.tx = this.tx,
                t.ty = this.ty,
                t
            }
            ,
            t.prototype.copyFrom = function(t) {
                return this.a = t.a,
                this.b = t.b,
                this.c = t.c,
                this.d = t.d,
                this.tx = t.tx,
                this.ty = t.ty,
                this
            }
            ,
            t.prototype.toString = function() {
                return "[@pixi/math:Matrix a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + "]"
            }
            ,
            Object.defineProperty(t, "IDENTITY", {
                get: function() {
                    return new t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "TEMP_MATRIX", {
                get: function() {
                    return new t
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        }()
          , $t = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1]
          , qt = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1]
          , Kt = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1]
          , Zt = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1]
          , Jt = []
          , Qt = []
          , te = Math.sign;
        !function() {
            for (var t = 0; t < 16; t++) {
                var e = [];
                Jt.push(e);
                for (var r = 0; r < 16; r++)
                    for (var i = te($t[t] * $t[r] + Kt[t] * qt[r]), n = te(qt[t] * $t[r] + Zt[t] * qt[r]), o = te($t[t] * Kt[r] + Kt[t] * Zt[r]), s = te(qt[t] * Kt[r] + Zt[t] * Zt[r]), a = 0; a < 16; a++)
                        if ($t[a] === i && qt[a] === n && Kt[a] === o && Zt[a] === s) {
                            e.push(a);
                            break
                        }
            }
            for (t = 0; t < 16; t++) {
                var u = new zt;
                u.set($t[t], qt[t], Kt[t], Zt[t], 0, 0),
                Qt.push(u)
            }
        }();
        var ee = {
            E: 0,
            SE: 1,
            S: 2,
            SW: 3,
            W: 4,
            NW: 5,
            N: 6,
            NE: 7,
            MIRROR_VERTICAL: 8,
            MAIN_DIAGONAL: 10,
            MIRROR_HORIZONTAL: 12,
            REVERSE_DIAGONAL: 14,
            uX: function(t) {
                return $t[t]
            },
            uY: function(t) {
                return qt[t]
            },
            vX: function(t) {
                return Kt[t]
            },
            vY: function(t) {
                return Zt[t]
            },
            inv: function(t) {
                return 8 & t ? 15 & t : 7 & -t
            },
            add: function(t, e) {
                return Jt[t][e]
            },
            sub: function(t, e) {
                return Jt[t][ee.inv(e)]
            },
            rotate180: function(t) {
                return 4 ^ t
            },
            isVertical: function(t) {
                return 2 == (3 & t)
            },
            byDirection: function(t, e) {
                return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? ee.S : ee.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? ee.E : ee.W : e > 0 ? t > 0 ? ee.SE : ee.SW : t > 0 ? ee.NE : ee.NW
            },
            matrixAppendRotationInv: function(t, e, r, i) {
                void 0 === r && (r = 0),
                void 0 === i && (i = 0);
                var n = Qt[ee.inv(e)];
                n.tx = r,
                n.ty = i,
                t.append(n)
            }
        }
          , re = function() {
            function t() {
                this.worldTransform = new zt,
                this.localTransform = new zt,
                this.position = new Wt(this.onChange,this,0,0),
                this.scale = new Wt(this.onChange,this,1,1),
                this.pivot = new Wt(this.onChange,this,0,0),
                this.skew = new Wt(this.updateSkew,this,0,0),
                this._rotation = 0,
                this._cx = 1,
                this._sx = 0,
                this._cy = 0,
                this._sy = 1,
                this._localID = 0,
                this._currentLocalID = 0,
                this._worldID = 0,
                this._parentID = 0
            }
            return t.prototype.onChange = function() {
                this._localID++
            }
            ,
            t.prototype.updateSkew = function() {
                this._cx = Math.cos(this._rotation + this.skew.y),
                this._sx = Math.sin(this._rotation + this.skew.y),
                this._cy = -Math.sin(this._rotation - this.skew.x),
                this._sy = Math.cos(this._rotation - this.skew.x),
                this._localID++
            }
            ,
            t.prototype.toString = function() {
                return "[@pixi/math:Transform position=(" + this.position.x + ", " + this.position.y + ") rotation=" + this.rotation + " scale=(" + this.scale.x + ", " + this.scale.y + ") skew=(" + this.skew.x + ", " + this.skew.y + ") ]"
            }
            ,
            t.prototype.updateLocalTransform = function() {
                var t = this.localTransform;
                this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x,
                t.b = this._sx * this.scale.x,
                t.c = this._cy * this.scale.y,
                t.d = this._sy * this.scale.y,
                t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c),
                t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d),
                this._currentLocalID = this._localID,
                this._parentID = -1)
            }
            ,
            t.prototype.updateTransform = function(t) {
                var e = this.localTransform;
                if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x,
                e.b = this._sx * this.scale.x,
                e.c = this._cy * this.scale.y,
                e.d = this._sy * this.scale.y,
                e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c),
                e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d),
                this._currentLocalID = this._localID,
                this._parentID = -1),
                this._parentID !== t._worldID) {
                    var r = t.worldTransform
                      , i = this.worldTransform;
                    i.a = e.a * r.a + e.b * r.c,
                    i.b = e.a * r.b + e.b * r.d,
                    i.c = e.c * r.a + e.d * r.c,
                    i.d = e.c * r.b + e.d * r.d,
                    i.tx = e.tx * r.a + e.ty * r.c + r.tx,
                    i.ty = e.tx * r.b + e.ty * r.d + r.ty,
                    this._parentID = t._worldID,
                    this._worldID++
                }
            }
            ,
            t.prototype.setFromMatrix = function(t) {
                t.decompose(this),
                this._localID++
            }
            ,
            Object.defineProperty(t.prototype, "rotation", {
                get: function() {
                    return this._rotation
                },
                set: function(t) {
                    this._rotation !== t && (this._rotation = t,
                    this.updateSkew())
                },
                enumerable: !1,
                configurable: !0
            }),
            t.IDENTITY = new t,
            t
        }();
        nt.SORTABLE_CHILDREN = !1;
        var ie = function() {
            function t() {
                this.minX = 1 / 0,
                this.minY = 1 / 0,
                this.maxX = -1 / 0,
                this.maxY = -1 / 0,
                this.rect = null,
                this.updateID = -1
            }
            return t.prototype.isEmpty = function() {
                return this.minX > this.maxX || this.minY > this.maxY
            }
            ,
            t.prototype.clear = function() {
                this.minX = 1 / 0,
                this.minY = 1 / 0,
                this.maxX = -1 / 0,
                this.maxY = -1 / 0
            }
            ,
            t.prototype.getRectangle = function(t) {
                return this.minX > this.maxX || this.minY > this.maxY ? Xt.EMPTY : ((t = t || new Xt(0,0,1,1)).x = this.minX,
                t.y = this.minY,
                t.width = this.maxX - this.minX,
                t.height = this.maxY - this.minY,
                t)
            }
            ,
            t.prototype.addPoint = function(t) {
                this.minX = Math.min(this.minX, t.x),
                this.maxX = Math.max(this.maxX, t.x),
                this.minY = Math.min(this.minY, t.y),
                this.maxY = Math.max(this.maxY, t.y)
            }
            ,
            t.prototype.addPointMatrix = function(t, e) {
                var r = t.a
                  , i = t.b
                  , n = t.c
                  , o = t.d
                  , s = t.tx
                  , a = t.ty
                  , u = r * e.x + n * e.y + s
                  , h = i * e.x + o * e.y + a;
                this.minX = Math.min(this.minX, u),
                this.maxX = Math.max(this.maxX, u),
                this.minY = Math.min(this.minY, h),
                this.maxY = Math.max(this.maxY, h)
            }
            ,
            t.prototype.addQuad = function(t) {
                var e = this.minX
                  , r = this.minY
                  , i = this.maxX
                  , n = this.maxY
                  , o = t[0]
                  , s = t[1];
                e = o < e ? o : e,
                r = s < r ? s : r,
                i = o > i ? o : i,
                n = s > n ? s : n,
                e = (o = t[2]) < e ? o : e,
                r = (s = t[3]) < r ? s : r,
                i = o > i ? o : i,
                n = s > n ? s : n,
                e = (o = t[4]) < e ? o : e,
                r = (s = t[5]) < r ? s : r,
                i = o > i ? o : i,
                n = s > n ? s : n,
                e = (o = t[6]) < e ? o : e,
                r = (s = t[7]) < r ? s : r,
                i = o > i ? o : i,
                n = s > n ? s : n,
                this.minX = e,
                this.minY = r,
                this.maxX = i,
                this.maxY = n
            }
            ,
            t.prototype.addFrame = function(t, e, r, i, n) {
                this.addFrameMatrix(t.worldTransform, e, r, i, n)
            }
            ,
            t.prototype.addFrameMatrix = function(t, e, r, i, n) {
                var o = t.a
                  , s = t.b
                  , a = t.c
                  , u = t.d
                  , h = t.tx
                  , l = t.ty
                  , c = this.minX
                  , d = this.minY
                  , p = this.maxX
                  , f = this.maxY
                  , _ = o * e + a * r + h
                  , m = s * e + u * r + l;
                c = _ < c ? _ : c,
                d = m < d ? m : d,
                p = _ > p ? _ : p,
                f = m > f ? m : f,
                c = (_ = o * i + a * r + h) < c ? _ : c,
                d = (m = s * i + u * r + l) < d ? m : d,
                p = _ > p ? _ : p,
                f = m > f ? m : f,
                c = (_ = o * e + a * n + h) < c ? _ : c,
                d = (m = s * e + u * n + l) < d ? m : d,
                p = _ > p ? _ : p,
                f = m > f ? m : f,
                c = (_ = o * i + a * n + h) < c ? _ : c,
                d = (m = s * i + u * n + l) < d ? m : d,
                p = _ > p ? _ : p,
                f = m > f ? m : f,
                this.minX = c,
                this.minY = d,
                this.maxX = p,
                this.maxY = f
            }
            ,
            t.prototype.addVertexData = function(t, e, r) {
                for (var i = this.minX, n = this.minY, o = this.maxX, s = this.maxY, a = e; a < r; a += 2) {
                    var u = t[a]
                      , h = t[a + 1];
                    i = u < i ? u : i,
                    n = h < n ? h : n,
                    o = u > o ? u : o,
                    s = h > s ? h : s
                }
                this.minX = i,
                this.minY = n,
                this.maxX = o,
                this.maxY = s
            }
            ,
            t.prototype.addVertices = function(t, e, r, i) {
                this.addVerticesMatrix(t.worldTransform, e, r, i)
            }
            ,
            t.prototype.addVerticesMatrix = function(t, e, r, i, n, o) {
                void 0 === n && (n = 0),
                void 0 === o && (o = n);
                for (var s = t.a, a = t.b, u = t.c, h = t.d, l = t.tx, c = t.ty, d = this.minX, p = this.minY, f = this.maxX, _ = this.maxY, m = r; m < i; m += 2) {
                    var v = e[m]
                      , g = e[m + 1]
                      , y = s * v + u * g + l
                      , b = h * g + a * v + c;
                    d = Math.min(d, y - n),
                    f = Math.max(f, y + n),
                    p = Math.min(p, b - o),
                    _ = Math.max(_, b + o)
                }
                this.minX = d,
                this.minY = p,
                this.maxX = f,
                this.maxY = _
            }
            ,
            t.prototype.addBounds = function(t) {
                var e = this.minX
                  , r = this.minY
                  , i = this.maxX
                  , n = this.maxY;
                this.minX = t.minX < e ? t.minX : e,
                this.minY = t.minY < r ? t.minY : r,
                this.maxX = t.maxX > i ? t.maxX : i,
                this.maxY = t.maxY > n ? t.maxY : n
            }
            ,
            t.prototype.addBoundsMask = function(t, e) {
                var r = t.minX > e.minX ? t.minX : e.minX
                  , i = t.minY > e.minY ? t.minY : e.minY
                  , n = t.maxX < e.maxX ? t.maxX : e.maxX
                  , o = t.maxY < e.maxY ? t.maxY : e.maxY;
                if (r <= n && i <= o) {
                    var s = this.minX
                      , a = this.minY
                      , u = this.maxX
                      , h = this.maxY;
                    this.minX = r < s ? r : s,
                    this.minY = i < a ? i : a,
                    this.maxX = n > u ? n : u,
                    this.maxY = o > h ? o : h
                }
            }
            ,
            t.prototype.addBoundsMatrix = function(t, e) {
                this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY)
            }
            ,
            t.prototype.addBoundsArea = function(t, e) {
                var r = t.minX > e.x ? t.minX : e.x
                  , i = t.minY > e.y ? t.minY : e.y
                  , n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width
                  , o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
                if (r <= n && i <= o) {
                    var s = this.minX
                      , a = this.minY
                      , u = this.maxX
                      , h = this.maxY;
                    this.minX = r < s ? r : s,
                    this.minY = i < a ? i : a,
                    this.maxX = n > u ? n : u,
                    this.maxY = o > h ? o : h
                }
            }
            ,
            t.prototype.pad = function(t, e) {
                void 0 === t && (t = 0),
                void 0 === e && (e = t),
                this.isEmpty() || (this.minX -= t,
                this.maxX += t,
                this.minY -= e,
                this.maxY += e)
            }
            ,
            t.prototype.addFramePad = function(t, e, r, i, n, o) {
                t -= n,
                e -= o,
                r += n,
                i += o,
                this.minX = this.minX < t ? this.minX : t,
                this.maxX = this.maxX > r ? this.maxX : r,
                this.minY = this.minY < e ? this.minY : e,
                this.maxY = this.maxY > i ? this.maxY : i
            }
            ,
            t
        }()
          , ne = function(t, e) {
            return (ne = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        function oe(t, e) {
            function r() {
                this.constructor = t
            }
            ne(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        var se = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.tempDisplayObjectParent = null,
                e.transform = new re,
                e.alpha = 1,
                e.visible = !0,
                e.renderable = !0,
                e.cullable = !1,
                e.cullArea = null,
                e.parent = null,
                e.worldAlpha = 1,
                e._lastSortedIndex = 0,
                e._zIndex = 0,
                e.filterArea = null,
                e.filters = null,
                e._enabledFilters = null,
                e._bounds = new ie,
                e._localBounds = null,
                e._boundsID = 0,
                e._boundsRect = null,
                e._localBoundsRect = null,
                e._mask = null,
                e._maskRefCount = 0,
                e._destroyed = !1,
                e.isSprite = !1,
                e.isMask = !1,
                e
            }
            return oe(e, t),
            e.mixin = function(t) {
                for (var r = Object.keys(t), i = 0; i < r.length; ++i) {
                    var n = r[i];
                    Object.defineProperty(e.prototype, n, Object.getOwnPropertyDescriptor(t, n))
                }
            }
            ,
            Object.defineProperty(e.prototype, "destroyed", {
                get: function() {
                    return this._destroyed
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype._recursivePostUpdateTransform = function() {
                this.parent ? (this.parent._recursivePostUpdateTransform(),
                this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
            }
            ,
            e.prototype.updateTransform = function() {
                this._boundsID++,
                this.transform.updateTransform(this.parent.transform),
                this.worldAlpha = this.alpha * this.parent.worldAlpha
            }
            ,
            e.prototype.getBounds = function(t, e) {
                return t || (this.parent ? (this._recursivePostUpdateTransform(),
                this.updateTransform()) : (this.parent = this._tempDisplayObjectParent,
                this.updateTransform(),
                this.parent = null)),
                this._bounds.updateID !== this._boundsID && (this.calculateBounds(),
                this._bounds.updateID = this._boundsID),
                e || (this._boundsRect || (this._boundsRect = new Xt),
                e = this._boundsRect),
                this._bounds.getRectangle(e)
            }
            ,
            e.prototype.getLocalBounds = function(t) {
                t || (this._localBoundsRect || (this._localBoundsRect = new Xt),
                t = this._localBoundsRect),
                this._localBounds || (this._localBounds = new ie);
                var e = this.transform
                  , r = this.parent;
                this.parent = null,
                this.transform = this._tempDisplayObjectParent.transform;
                var i = this._bounds
                  , n = this._boundsID;
                this._bounds = this._localBounds;
                var o = this.getBounds(!1, t);
                return this.parent = r,
                this.transform = e,
                this._bounds = i,
                this._bounds.updateID += this._boundsID - n,
                o
            }
            ,
            e.prototype.toGlobal = function(t, e, r) {
                return void 0 === r && (r = !1),
                r || (this._recursivePostUpdateTransform(),
                this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent,
                this.displayObjectUpdateTransform(),
                this.parent = null)),
                this.worldTransform.apply(t, e)
            }
            ,
            e.prototype.toLocal = function(t, e, r, i) {
                return e && (t = e.toGlobal(t, r, i)),
                i || (this._recursivePostUpdateTransform(),
                this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent,
                this.displayObjectUpdateTransform(),
                this.parent = null)),
                this.worldTransform.applyInverse(t, r)
            }
            ,
            e.prototype.setParent = function(t) {
                if (!t || !t.addChild)
                    throw new Error("setParent: Argument must be a Container");
                return t.addChild(this),
                t
            }
            ,
            e.prototype.setTransform = function(t, e, r, i, n, o, s, a, u) {
                return void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                void 0 === r && (r = 1),
                void 0 === i && (i = 1),
                void 0 === n && (n = 0),
                void 0 === o && (o = 0),
                void 0 === s && (s = 0),
                void 0 === a && (a = 0),
                void 0 === u && (u = 0),
                this.position.x = t,
                this.position.y = e,
                this.scale.x = r || 1,
                this.scale.y = i || 1,
                this.rotation = n,
                this.skew.x = o,
                this.skew.y = s,
                this.pivot.x = a,
                this.pivot.y = u,
                this
            }
            ,
            e.prototype.destroy = function(t) {
                this.parent && this.parent.removeChild(this),
                this._destroyed = !0,
                this.transform = null,
                this.parent = null,
                this._bounds = null,
                this.mask = null,
                this.cullArea = null,
                this.filters = null,
                this.filterArea = null,
                this.hitArea = null,
                this.interactive = !1,
                this.interactiveChildren = !1,
                this.emit("destroyed"),
                this.removeAllListeners()
            }
            ,
            Object.defineProperty(e.prototype, "_tempDisplayObjectParent", {
                get: function() {
                    return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new ae),
                    this.tempDisplayObjectParent
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.enableTempParent = function() {
                var t = this.parent;
                return this.parent = this._tempDisplayObjectParent,
                t
            }
            ,
            e.prototype.disableTempParent = function(t) {
                this.parent = t
            }
            ,
            Object.defineProperty(e.prototype, "x", {
                get: function() {
                    return this.position.x
                },
                set: function(t) {
                    this.transform.position.x = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "y", {
                get: function() {
                    return this.position.y
                },
                set: function(t) {
                    this.transform.position.y = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "worldTransform", {
                get: function() {
                    return this.transform.worldTransform
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "localTransform", {
                get: function() {
                    return this.transform.localTransform
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "position", {
                get: function() {
                    return this.transform.position
                },
                set: function(t) {
                    this.transform.position.copyFrom(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "scale", {
                get: function() {
                    return this.transform.scale
                },
                set: function(t) {
                    this.transform.scale.copyFrom(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "pivot", {
                get: function() {
                    return this.transform.pivot
                },
                set: function(t) {
                    this.transform.pivot.copyFrom(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "skew", {
                get: function() {
                    return this.transform.skew
                },
                set: function(t) {
                    this.transform.skew.copyFrom(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "rotation", {
                get: function() {
                    return this.transform.rotation
                },
                set: function(t) {
                    this.transform.rotation = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "angle", {
                get: function() {
                    return this.transform.rotation * Lt
                },
                set: function(t) {
                    this.transform.rotation = t * Gt
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "zIndex", {
                get: function() {
                    return this._zIndex
                },
                set: function(t) {
                    this._zIndex = t,
                    this.parent && (this.parent.sortDirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "worldVisible", {
                get: function() {
                    var t = this;
                    do {
                        if (!t.visible)
                            return !1;
                        t = t.parent
                    } while (t);
                    return !0
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "mask", {
                get: function() {
                    return this._mask
                },
                set: function(t) {
                    var e;
                    this._mask !== t && (this._mask && (e = this._mask.isMaskData ? this._mask.maskObject : this._mask) && (e._maskRefCount--,
                    0 === e._maskRefCount && (e.renderable = !0,
                    e.isMask = !1)),
                    this._mask = t,
                    this._mask && (e = this._mask.isMaskData ? this._mask.maskObject : this._mask) && (0 === e._maskRefCount && (e.renderable = !1,
                    e.isMask = !0),
                    e._maskRefCount++))
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        }(ot)
          , ae = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.sortDirty = null,
                e
            }
            return oe(e, t),
            e
        }(se);
        function ue(t, e) {
            return t.zIndex === e.zIndex ? t._lastSortedIndex - e._lastSortedIndex : t.zIndex - e.zIndex
        }
        se.prototype.displayObjectUpdateTransform = se.prototype.updateTransform;
        var he = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.children = [],
                e.sortableChildren = nt.SORTABLE_CHILDREN,
                e.sortDirty = !1,
                e
            }
            return oe(e, t),
            e.prototype.onChildrenChange = function(t) {}
            ,
            e.prototype.addChild = function() {
                for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
                    e[r] = t[r];
                if (e.length > 1)
                    for (var i = 0; i < e.length; i++)
                        this.addChild(e[i]);
                else {
                    var n = e[0];
                    n.parent && n.parent.removeChild(n),
                    n.parent = this,
                    this.sortDirty = !0,
                    n.transform._parentID = -1,
                    this.children.push(n),
                    this._boundsID++,
                    this.onChildrenChange(this.children.length - 1),
                    this.emit("childAdded", n, this, this.children.length - 1),
                    n.emit("added", this)
                }
                return e[0]
            }
            ,
            e.prototype.addChildAt = function(t, e) {
                if (e < 0 || e > this.children.length)
                    throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
                return t.parent && t.parent.removeChild(t),
                t.parent = this,
                this.sortDirty = !0,
                t.transform._parentID = -1,
                this.children.splice(e, 0, t),
                this._boundsID++,
                this.onChildrenChange(e),
                t.emit("added", this),
                this.emit("childAdded", t, this, e),
                t
            }
            ,
            e.prototype.swapChildren = function(t, e) {
                if (t !== e) {
                    var r = this.getChildIndex(t)
                      , i = this.getChildIndex(e);
                    this.children[r] = e,
                    this.children[i] = t,
                    this.onChildrenChange(r < i ? r : i)
                }
            }
            ,
            e.prototype.getChildIndex = function(t) {
                var e = this.children.indexOf(t);
                if (-1 === e)
                    throw new Error("The supplied DisplayObject must be a child of the caller");
                return e
            }
            ,
            e.prototype.setChildIndex = function(t, e) {
                if (e < 0 || e >= this.children.length)
                    throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
                var r = this.getChildIndex(t);
                Et(this.children, r, 1),
                this.children.splice(e, 0, t),
                this.onChildrenChange(e)
            }
            ,
            e.prototype.getChildAt = function(t) {
                if (t < 0 || t >= this.children.length)
                    throw new Error("getChildAt: Index (" + t + ") does not exist.");
                return this.children[t]
            }
            ,
            e.prototype.removeChild = function() {
                for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
                    e[r] = t[r];
                if (e.length > 1)
                    for (var i = 0; i < e.length; i++)
                        this.removeChild(e[i]);
                else {
                    var n = e[0]
                      , o = this.children.indexOf(n);
                    if (-1 === o)
                        return null;
                    n.parent = null,
                    n.transform._parentID = -1,
                    Et(this.children, o, 1),
                    this._boundsID++,
                    this.onChildrenChange(o),
                    n.emit("removed", this),
                    this.emit("childRemoved", n, this, o)
                }
                return e[0]
            }
            ,
            e.prototype.removeChildAt = function(t) {
                var e = this.getChildAt(t);
                return e.parent = null,
                e.transform._parentID = -1,
                Et(this.children, t, 1),
                this._boundsID++,
                this.onChildrenChange(t),
                e.emit("removed", this),
                this.emit("childRemoved", e, this, t),
                e
            }
            ,
            e.prototype.removeChildren = function(t, e) {
                void 0 === t && (t = 0),
                void 0 === e && (e = this.children.length);
                var r, i = t, n = e - i;
                if (n > 0 && n <= e) {
                    r = this.children.splice(i, n);
                    for (var o = 0; o < r.length; ++o)
                        r[o].parent = null,
                        r[o].transform && (r[o].transform._parentID = -1);
                    for (this._boundsID++,
                    this.onChildrenChange(t),
                    o = 0; o < r.length; ++o)
                        r[o].emit("removed", this),
                        this.emit("childRemoved", r[o], this, o);
                    return r
                }
                if (0 === n && 0 === this.children.length)
                    return [];
                throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
            }
            ,
            e.prototype.sortChildren = function() {
                for (var t = !1, e = 0, r = this.children.length; e < r; ++e) {
                    var i = this.children[e];
                    i._lastSortedIndex = e,
                    t || 0 === i.zIndex || (t = !0)
                }
                t && this.children.length > 1 && this.children.sort(ue),
                this.sortDirty = !1
            }
            ,
            e.prototype.updateTransform = function() {
                this.sortableChildren && this.sortDirty && this.sortChildren(),
                this._boundsID++,
                this.transform.updateTransform(this.parent.transform),
                this.worldAlpha = this.alpha * this.parent.worldAlpha;
                for (var t = 0, e = this.children.length; t < e; ++t) {
                    var r = this.children[t];
                    r.visible && r.updateTransform()
                }
            }
            ,
            e.prototype.calculateBounds = function() {
                this._bounds.clear(),
                this._calculateBounds();
                for (var t = 0; t < this.children.length; t++) {
                    var e = this.children[t];
                    if (e.visible && e.renderable)
                        if (e.calculateBounds(),
                        e._mask) {
                            var r = e._mask.isMaskData ? e._mask.maskObject : e._mask;
                            r ? (r.calculateBounds(),
                            this._bounds.addBoundsMask(e._bounds, r._bounds)) : this._bounds.addBounds(e._bounds)
                        } else
                            e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds)
                }
                this._bounds.updateID = this._boundsID
            }
            ,
            e.prototype.getLocalBounds = function(e, r) {
                void 0 === r && (r = !1);
                var i = t.prototype.getLocalBounds.call(this, e);
                if (!r)
                    for (var n = 0, o = this.children.length; n < o; ++n) {
                        var s = this.children[n];
                        s.visible && s.updateTransform()
                    }
                return i
            }
            ,
            e.prototype._calculateBounds = function() {}
            ,
            e.prototype._renderWithCulling = function(t) {
                var r = t.renderTexture.sourceFrame;
                if (r.width > 0 && r.height > 0) {
                    var i, n;
                    if (this.cullArea ? (i = this.cullArea,
                    n = this.worldTransform) : this._render !== e.prototype._render && (i = this.getBounds(!0)),
                    i && r.intersects(i, n))
                        this._render(t);
                    else if (this.cullArea)
                        return;
                    for (var o = 0, s = this.children.length; o < s; ++o) {
                        var a = this.children[o]
                          , u = a.cullable;
                        a.cullable = u || !this.cullArea,
                        a.render(t),
                        a.cullable = u
                    }
                }
            }
            ,
            e.prototype.render = function(t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
                    if (this._mask || this.filters && this.filters.length)
                        this.renderAdvanced(t);
                    else if (this.cullable)
                        this._renderWithCulling(t);
                    else {
                        this._render(t);
                        for (var e = 0, r = this.children.length; e < r; ++e)
                            this.children[e].render(t)
                    }
            }
            ,
            e.prototype.renderAdvanced = function(t) {
                var e = this.filters
                  , r = this._mask;
                if (e) {
                    this._enabledFilters || (this._enabledFilters = []),
                    this._enabledFilters.length = 0;
                    for (var i = 0; i < e.length; i++)
                        e[i].enabled && this._enabledFilters.push(e[i])
                }
                var n = e && this._enabledFilters && this._enabledFilters.length || r && (!r.isMaskData || r.enabled && (r.autoDetect || r.type !== M.NONE));
                if (n && t.batch.flush(),
                e && this._enabledFilters && this._enabledFilters.length && t.filter.push(this, this._enabledFilters),
                r && t.mask.push(this, this._mask),
                this.cullable)
                    this._renderWithCulling(t);
                else {
                    this._render(t),
                    i = 0;
                    for (var o = this.children.length; i < o; ++i)
                        this.children[i].render(t)
                }
                n && t.batch.flush(),
                r && t.mask.pop(this),
                e && this._enabledFilters && this._enabledFilters.length && t.filter.pop()
            }
            ,
            e.prototype._render = function(t) {}
            ,
            e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this),
                this.sortDirty = !1;
                var r = "boolean" == typeof e ? e : e && e.children
                  , i = this.removeChildren(0, this.children.length);
                if (r)
                    for (var n = 0; n < i.length; ++n)
                        i[n].destroy(e)
            }
            ,
            Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this.scale.x * this.getLocalBounds().width
                },
                set: function(t) {
                    var e = this.getLocalBounds().width;
                    this.scale.x = 0 !== e ? t / e : 1,
                    this._width = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return this.scale.y * this.getLocalBounds().height
                },
                set: function(t) {
                    var e = this.getLocalBounds().height;
                    this.scale.y = 0 !== e ? t / e : 1,
                    this._height = t
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        }(se);
        he.prototype.containerUpdateTransform = he.prototype.updateTransform;
        var le, ce = function() {
            return (ce = Object.assign || function(t) {
                for (var e, r = arguments, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = r[i])
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }
            ).apply(this, arguments)
        };
        !function(t) {
            t.Application = "application",
            t.RendererPlugin = "renderer-webgl-plugin",
            t.CanvasRendererPlugin = "renderer-canvas-plugin",
            t.Loader = "loader",
            t.LoadParser = "load-parser",
            t.ResolveParser = "resolve-parser",
            t.CacheParser = "cache-parser",
            t.DetectionParser = "detection-parser"
        }(le || (le = {}));
        var de, pe = function(t) {
            if ("function" == typeof t || "object" == typeof t && t.extension) {
                if (!t.extension)
                    throw new Error("Extension class must have an extension object");
                var e = "object" != typeof t.extension ? {
                    type: t.extension
                } : t.extension;
                t = ce(ce({}, e), {
                    ref: t
                })
            }
            if ("object" != typeof t)
                throw new Error("Invalid extension type");
            return "string" == typeof (t = ce({}, t)).type && (t.type = [t.type]),
            t
        }, fe = {
            _addHandlers: null,
            _removeHandlers: null,
            _queue: {},
            remove: function() {
                for (var t = arguments, e = this, r = [], i = 0; i < arguments.length; i++)
                    r[i] = t[i];
                return r.map(pe).forEach((function(t) {
                    t.type.forEach((function(r) {
                        var i, n;
                        return null === (n = (i = e._removeHandlers)[r]) || void 0 === n ? void 0 : n.call(i, t)
                    }
                    ))
                }
                )),
                this
            },
            add: function() {
                for (var t = arguments, e = this, r = [], i = 0; i < arguments.length; i++)
                    r[i] = t[i];
                return r.map(pe).forEach((function(t) {
                    t.type.forEach((function(r) {
                        var i = e._addHandlers
                          , n = e._queue;
                        i[r] ? i[r](t) : (n[r] = n[r] || [],
                        n[r].push(t))
                    }
                    ))
                }
                )),
                this
            },
            handle: function(t, e, r) {
                var i = this._addHandlers = this._addHandlers || {}
                  , n = this._removeHandlers = this._removeHandlers || {};
                if (i[t] || n[t])
                    throw new Error("Extension type " + t + " already has a handler");
                i[t] = e,
                n[t] = r;
                var o = this._queue;
                return o[t] && (o[t].forEach((function(t) {
                    return e(t)
                }
                )),
                delete o[t]),
                this
            },
            handleByMap: function(t, e) {
                return this.handle(t, (function(t) {
                    e[t.name] = t.ref
                }
                ), (function(t) {
                    delete e[t.name]
                }
                ))
            },
            handleByList: function(t, e) {
                return this.handle(t, (function(r) {
                    var i, n;
                    e.push(r.ref),
                    t === le.Loader && (null === (n = (i = r.ref).add) || void 0 === n || n.call(i))
                }
                ), (function(t) {
                    var r = e.indexOf(t.ref);
                    -1 !== r && e.splice(r, 1)
                }
                ))
            }
        }, _e = function() {
            function t(t) {
                this.items = [],
                this._name = t,
                this._aliasCount = 0
            }
            return t.prototype.emit = function(t, e, r, i, n, o, s, a) {
                if (arguments.length > 8)
                    throw new Error("max arguments reached");
                var u = this
                  , h = u.name
                  , l = u.items;
                this._aliasCount++;
                for (var c = 0, d = l.length; c < d; c++)
                    l[c][h](t, e, r, i, n, o, s, a);
                return l === this.items && this._aliasCount--,
                this
            }
            ,
            t.prototype.ensureNonAliasedItems = function() {
                this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0,
                this.items = this.items.slice(0))
            }
            ,
            t.prototype.add = function(t) {
                return t[this._name] && (this.ensureNonAliasedItems(),
                this.remove(t),
                this.items.push(t)),
                this
            }
            ,
            t.prototype.remove = function(t) {
                var e = this.items.indexOf(t);
                return -1 !== e && (this.ensureNonAliasedItems(),
                this.items.splice(e, 1)),
                this
            }
            ,
            t.prototype.contains = function(t) {
                return -1 !== this.items.indexOf(t)
            }
            ,
            t.prototype.removeAll = function() {
                return this.ensureNonAliasedItems(),
                this.items.length = 0,
                this
            }
            ,
            t.prototype.destroy = function() {
                this.removeAll(),
                this.items = null,
                this._name = null
            }
            ,
            Object.defineProperty(t.prototype, "empty", {
                get: function() {
                    return 0 === this.items.length
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "name", {
                get: function() {
                    return this._name
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        }();
        Object.defineProperties(_e.prototype, {
            dispatch: {
                value: _e.prototype.emit
            },
            run: {
                value: _e.prototype.emit
            }
        }),
        nt.TARGET_FPMS = .06,
        function(t) {
            t[t.INTERACTION = 50] = "INTERACTION",
            t[t.HIGH = 25] = "HIGH",
            t[t.NORMAL = 0] = "NORMAL",
            t[t.LOW = -25] = "LOW",
            t[t.UTILITY = -50] = "UTILITY"
        }(de || (de = {}));
        var me = function() {
            function t(t, e, r, i) {
                void 0 === e && (e = null),
                void 0 === r && (r = 0),
                void 0 === i && (i = !1),
                this.next = null,
                this.previous = null,
                this._destroyed = !1,
                this.fn = t,
                this.context = e,
                this.priority = r,
                this.once = i
            }
            return t.prototype.match = function(t, e) {
                return void 0 === e && (e = null),
                this.fn === t && this.context === e
            }
            ,
            t.prototype.emit = function(t) {
                this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
                var e = this.next;
                return this.once && this.destroy(!0),
                this._destroyed && (this.next = null),
                e
            }
            ,
            t.prototype.connect = function(t) {
                this.previous = t,
                t.next && (t.next.previous = this),
                this.next = t.next,
                t.next = this
            }
            ,
            t.prototype.destroy = function(t) {
                void 0 === t && (t = !1),
                this._destroyed = !0,
                this.fn = null,
                this.context = null,
                this.previous && (this.previous.next = this.next),
                this.next && (this.next.previous = this.previous);
                var e = this.next;
                return this.next = t ? null : e,
                this.previous = null,
                e
            }
            ,
            t
        }()
          , ve = function() {
            function t() {
                var t = this;
                this.autoStart = !1,
                this.deltaTime = 1,
                this.lastTime = -1,
                this.speed = 1,
                this.started = !1,
                this._requestId = null,
                this._maxElapsedMS = 100,
                this._minElapsedMS = 0,
                this._protected = !1,
                this._lastFrame = -1,
                this._head = new me(null,null,1 / 0),
                this.deltaMS = 1 / nt.TARGET_FPMS,
                this.elapsedMS = 1 / nt.TARGET_FPMS,
                this._tick = function(e) {
                    t._requestId = null,
                    t.started && (t.update(e),
                    t.started && null === t._requestId && t._head.next && (t._requestId = requestAnimationFrame(t._tick)))
                }
            }
            return t.prototype._requestIfNeeded = function() {
                null === this._requestId && this._head.next && (this.lastTime = performance.now(),
                this._lastFrame = this.lastTime,
                this._requestId = requestAnimationFrame(this._tick))
            }
            ,
            t.prototype._cancelIfNeeded = function() {
                null !== this._requestId && (cancelAnimationFrame(this._requestId),
                this._requestId = null)
            }
            ,
            t.prototype._startIfPossible = function() {
                this.started ? this._requestIfNeeded() : this.autoStart && this.start()
            }
            ,
            t.prototype.add = function(t, e, r) {
                return void 0 === r && (r = de.NORMAL),
                this._addListener(new me(t,e,r))
            }
            ,
            t.prototype.addOnce = function(t, e, r) {
                return void 0 === r && (r = de.NORMAL),
                this._addListener(new me(t,e,r,!0))
            }
            ,
            t.prototype._addListener = function(t) {
                var e = this._head.next
                  , r = this._head;
                if (e) {
                    for (; e; ) {
                        if (t.priority > e.priority) {
                            t.connect(r);
                            break
                        }
                        r = e,
                        e = e.next
                    }
                    t.previous || t.connect(r)
                } else
                    t.connect(r);
                return this._startIfPossible(),
                this
            }
            ,
            t.prototype.remove = function(t, e) {
                for (var r = this._head.next; r; )
                    r = r.match(t, e) ? r.destroy() : r.next;
                return this._head.next || this._cancelIfNeeded(),
                this
            }
            ,
            Object.defineProperty(t.prototype, "count", {
                get: function() {
                    if (!this._head)
                        return 0;
                    for (var t = 0, e = this._head; e = e.next; )
                        t++;
                    return t
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.start = function() {
                this.started || (this.started = !0,
                this._requestIfNeeded())
            }
            ,
            t.prototype.stop = function() {
                this.started && (this.started = !1,
                this._cancelIfNeeded())
            }
            ,
            t.prototype.destroy = function() {
                if (!this._protected) {
                    this.stop();
                    for (var t = this._head.next; t; )
                        t = t.destroy(!0);
                    this._head.destroy(),
                    this._head = null
                }
            }
            ,
            t.prototype.update = function(t) {
                var e;
                if (void 0 === t && (t = performance.now()),
                t > this.lastTime) {
                    if ((e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS),
                    e *= this.speed,
                    this._minElapsedMS) {
                        var r = t - this._lastFrame | 0;
                        if (r < this._minElapsedMS)
                            return;
                        this._lastFrame = t - r % this._minElapsedMS
                    }
                    this.deltaMS = e,
                    this.deltaTime = this.deltaMS * nt.TARGET_FPMS;
                    for (var i = this._head, n = i.next; n; )
                        n = n.emit(this.deltaTime);
                    i.next || this._cancelIfNeeded()
                } else
                    this.deltaTime = this.deltaMS = this.elapsedMS = 0;
                this.lastTime = t
            }
            ,
            Object.defineProperty(t.prototype, "FPS", {
                get: function() {
                    return 1e3 / this.elapsedMS
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "minFPS", {
                get: function() {
                    return 1e3 / this._maxElapsedMS
                },
                set: function(t) {
                    var e = Math.min(this.maxFPS, t)
                      , r = Math.min(Math.max(0, e) / 1e3, nt.TARGET_FPMS);
                    this._maxElapsedMS = 1 / r
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "maxFPS", {
                get: function() {
                    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
                },
                set: function(t) {
                    if (0 === t)
                        this._minElapsedMS = 0;
                    else {
                        var e = Math.max(this.minFPS, t);
                        this._minElapsedMS = 1 / (e / 1e3)
                    }
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "shared", {
                get: function() {
                    if (!t._shared) {
                        var e = t._shared = new t;
                        e.autoStart = !0,
                        e._protected = !0
                    }
                    return t._shared
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "system", {
                get: function() {
                    if (!t._system) {
                        var e = t._system = new t;
                        e.autoStart = !0,
                        e._protected = !0
                    }
                    return t._system
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        }()
          , ge = function() {
            function t() {}
            return t.init = function(t) {
                var e = this;
                t = Object.assign({
                    autoStart: !0,
                    sharedTicker: !1
                }, t),
                Object.defineProperty(this, "ticker", {
                    set: function(t) {
                        this._ticker && this._ticker.remove(this.render, this),
                        this._ticker = t,
                        t && t.add(this.render, this, de.LOW)
                    },
                    get: function() {
                        return this._ticker
                    }
                }),
                this.stop = function() {
                    e._ticker.stop()
                }
                ,
                this.start = function() {
                    e._ticker.start()
                }
                ,
                this._ticker = null,
                this.ticker = t.sharedTicker ? ve.shared : new ve,
                t.autoStart && this.start()
            }
            ,
            t.destroy = function() {
                if (this._ticker) {
                    var t = this._ticker;
                    this.ticker = null,
                    t.destroy()
                }
            }
            ,
            t.extension = le.Application,
            t
        }();
        nt.PREFER_ENV = it.any ? _.WEBGL : _.WEBGL2,
        nt.STRICT_TEXTURE_CACHE = !1;
        var ye = [];
        function be(t, e) {
            if (!t)
                return null;
            var r = "";
            if ("string" == typeof t) {
                var i = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
                i && (r = i[1].toLowerCase())
            }
            for (var n = ye.length - 1; n >= 0; --n) {
                var o = ye[n];
                if (o.test && o.test(t, r))
                    return new o(t,e)
            }
            throw new Error("Unrecognized source type to auto-detect Resource")
        }
        var xe = function(t, e) {
            return (xe = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        function Te(t, e) {
            function r() {
                this.constructor = t
            }
            xe(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        var Ee = function() {
            return (Ee = Object.assign || function(t) {
                for (var e, r = arguments, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = r[i])
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }
            ).apply(this, arguments)
        }
          , Ae = function() {
            function t(t, e) {
                void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                this._width = t,
                this._height = e,
                this.destroyed = !1,
                this.internal = !1,
                this.onResize = new _e("setRealSize"),
                this.onUpdate = new _e("update"),
                this.onError = new _e("onError")
            }
            return t.prototype.bind = function(t) {
                this.onResize.add(t),
                this.onUpdate.add(t),
                this.onError.add(t),
                (this._width || this._height) && this.onResize.emit(this._width, this._height)
            }
            ,
            t.prototype.unbind = function(t) {
                this.onResize.remove(t),
                this.onUpdate.remove(t),
                this.onError.remove(t)
            }
            ,
            t.prototype.resize = function(t, e) {
                t === this._width && e === this._height || (this._width = t,
                this._height = e,
                this.onResize.emit(t, e))
            }
            ,
            Object.defineProperty(t.prototype, "valid", {
                get: function() {
                    return !!this._width && !!this._height
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.update = function() {
                this.destroyed || this.onUpdate.emit()
            }
            ,
            t.prototype.load = function() {
                return Promise.resolve(this)
            }
            ,
            Object.defineProperty(t.prototype, "width", {
                get: function() {
                    return this._width
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "height", {
                get: function() {
                    return this._height
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.style = function(t, e, r) {
                return !1
            }
            ,
            t.prototype.dispose = function() {}
            ,
            t.prototype.destroy = function() {
                this.destroyed || (this.destroyed = !0,
                this.dispose(),
                this.onError.removeAll(),
                this.onError = null,
                this.onResize.removeAll(),
                this.onResize = null,
                this.onUpdate.removeAll(),
                this.onUpdate = null)
            }
            ,
            t.test = function(t, e) {
                return !1
            }
            ,
            t
        }()
          , Se = function(t) {
            function e(e, r) {
                var i = this
                  , n = r || {}
                  , o = n.width
                  , s = n.height;
                if (!o || !s)
                    throw new Error("BufferResource width or height invalid");
                return (i = t.call(this, o, s) || this).data = e,
                i
            }
            return Te(e, t),
            e.prototype.upload = function(t, e, r) {
                var i = t.gl;
                i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === w.UNPACK);
                var n = e.realWidth
                  , o = e.realHeight;
                return r.width === n && r.height === o ? i.texSubImage2D(e.target, 0, 0, 0, n, o, e.format, r.type, this.data) : (r.width = n,
                r.height = o,
                i.texImage2D(e.target, 0, r.internalFormat, n, o, 0, e.format, r.type, this.data)),
                !0
            }
            ,
            e.prototype.dispose = function() {
                this.data = null
            }
            ,
            e.test = function(t) {
                return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array
            }
            ,
            e
        }(Ae)
          , Re = {
            scaleMode: A.NEAREST,
            format: b.RGBA,
            alphaMode: w.NPM
        }
          , we = function(t) {
            function e(e, r) {
                void 0 === e && (e = null),
                void 0 === r && (r = null);
                var i = t.call(this) || this
                  , n = (r = r || {}).alphaMode
                  , o = r.mipmap
                  , s = r.anisotropicLevel
                  , a = r.scaleMode
                  , u = r.width
                  , h = r.height
                  , l = r.wrapMode
                  , c = r.format
                  , d = r.type
                  , p = r.target
                  , f = r.resolution
                  , _ = r.resourceOptions;
                return !e || e instanceof Ae || ((e = be(e, _)).internal = !0),
                i.resolution = f || nt.RESOLUTION,
                i.width = Math.round((u || 0) * i.resolution) / i.resolution,
                i.height = Math.round((h || 0) * i.resolution) / i.resolution,
                i._mipmap = void 0 !== o ? o : nt.MIPMAP_TEXTURES,
                i.anisotropicLevel = void 0 !== s ? s : nt.ANISOTROPIC_LEVEL,
                i._wrapMode = l || nt.WRAP_MODE,
                i._scaleMode = void 0 !== a ? a : nt.SCALE_MODE,
                i.format = c || b.RGBA,
                i.type = d || T.UNSIGNED_BYTE,
                i.target = p || x.TEXTURE_2D,
                i.alphaMode = void 0 !== n ? n : w.UNPACK,
                i.uid = Rt(),
                i.touched = 0,
                i.isPowerOfTwo = !1,
                i._refreshPOT(),
                i._glTextures = {},
                i.dirtyId = 0,
                i.dirtyStyleId = 0,
                i.cacheId = null,
                i.valid = u > 0 && h > 0,
                i.textureCacheIds = [],
                i.destroyed = !1,
                i.resource = null,
                i._batchEnabled = 0,
                i._batchLocation = 0,
                i.parentTextureArray = null,
                i.setResource(e),
                i
            }
            return Te(e, t),
            Object.defineProperty(e.prototype, "realWidth", {
                get: function() {
                    return Math.round(this.width * this.resolution)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "realHeight", {
                get: function() {
                    return Math.round(this.height * this.resolution)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "mipmap", {
                get: function() {
                    return this._mipmap
                },
                set: function(t) {
                    this._mipmap !== t && (this._mipmap = t,
                    this.dirtyStyleId++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "scaleMode", {
                get: function() {
                    return this._scaleMode
                },
                set: function(t) {
                    this._scaleMode !== t && (this._scaleMode = t,
                    this.dirtyStyleId++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "wrapMode", {
                get: function() {
                    return this._wrapMode
                },
                set: function(t) {
                    this._wrapMode !== t && (this._wrapMode = t,
                    this.dirtyStyleId++)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.setStyle = function(t, e) {
                var r;
                return void 0 !== t && t !== this.scaleMode && (this.scaleMode = t,
                r = !0),
                void 0 !== e && e !== this.mipmap && (this.mipmap = e,
                r = !0),
                r && this.dirtyStyleId++,
                this
            }
            ,
            e.prototype.setSize = function(t, e, r) {
                return r = r || this.resolution,
                this.setRealSize(t * r, e * r, r)
            }
            ,
            e.prototype.setRealSize = function(t, e, r) {
                return this.resolution = r || this.resolution,
                this.width = Math.round(t) / this.resolution,
                this.height = Math.round(e) / this.resolution,
                this._refreshPOT(),
                this.update(),
                this
            }
            ,
            e.prototype._refreshPOT = function() {
                this.isPowerOfTwo = xt(this.realWidth) && xt(this.realHeight)
            }
            ,
            e.prototype.setResolution = function(t) {
                var e = this.resolution;
                return e === t || (this.resolution = t,
                this.valid && (this.width = Math.round(this.width * e) / t,
                this.height = Math.round(this.height * e) / t,
                this.emit("update", this)),
                this._refreshPOT()),
                this
            }
            ,
            e.prototype.setResource = function(t) {
                if (this.resource === t)
                    return this;
                if (this.resource)
                    throw new Error("Resource can be set only once");
                return t.bind(this),
                this.resource = t,
                this
            }
            ,
            e.prototype.update = function() {
                this.valid ? (this.dirtyId++,
                this.dirtyStyleId++,
                this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0,
                this.emit("loaded", this),
                this.emit("update", this))
            }
            ,
            e.prototype.onError = function(t) {
                this.emit("error", this, t)
            }
            ,
            e.prototype.destroy = function() {
                this.resource && (this.resource.unbind(this),
                this.resource.internal && this.resource.destroy(),
                this.resource = null),
                this.cacheId && (delete Dt[this.cacheId],
                delete Mt[this.cacheId],
                this.cacheId = null),
                this.dispose(),
                e.removeFromCache(this),
                this.textureCacheIds = null,
                this.destroyed = !0
            }
            ,
            e.prototype.dispose = function() {
                this.emit("dispose", this)
            }
            ,
            e.prototype.castToBaseTexture = function() {
                return this
            }
            ,
            e.from = function(t, r, i) {
                void 0 === i && (i = nt.STRICT_TEXTURE_CACHE);
                var n = "string" == typeof t
                  , o = null;
                if (n)
                    o = t;
                else {
                    if (!t._pixiId) {
                        var s = r && r.pixiIdPrefix || "pixiid";
                        t._pixiId = s + "_" + Rt()
                    }
                    o = t._pixiId
                }
                var a = Dt[o];
                if (n && i && !a)
                    throw new Error('The cacheId "' + o + '" does not exist in BaseTextureCache.');
                return a || ((a = new e(t,r)).cacheId = o,
                e.addToCache(a, o)),
                a
            }
            ,
            e.fromBuffer = function(t, r, i, n) {
                t = t || new Float32Array(r * i * 4);
                var o = new Se(t,{
                    width: r,
                    height: i
                })
                  , s = t instanceof Float32Array ? T.FLOAT : T.UNSIGNED_BYTE;
                return new e(o,Object.assign({}, Re, n || {
                    width: r,
                    height: i,
                    type: s
                }))
            }
            ,
            e.addToCache = function(t, e) {
                e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e),
                Dt[e] && console.warn("BaseTexture added to the cache with an id [" + e + "] that already had an entry"),
                Dt[e] = t)
            }
            ,
            e.removeFromCache = function(t) {
                if ("string" == typeof t) {
                    var e = Dt[t];
                    if (e) {
                        var r = e.textureCacheIds.indexOf(t);
                        return r > -1 && e.textureCacheIds.splice(r, 1),
                        delete Dt[t],
                        e
                    }
                } else if (t && t.textureCacheIds) {
                    for (var i = 0; i < t.textureCacheIds.length; ++i)
                        delete Dt[t.textureCacheIds[i]];
                    return t.textureCacheIds.length = 0,
                    t
                }
                return null
            }
            ,
            e._globalBatch = 0,
            e
        }(ot)
          , Oe = function(t) {
            function e(e, r) {
                var i = this
                  , n = r || {}
                  , o = n.width
                  , s = n.height;
                (i = t.call(this, o, s) || this).items = [],
                i.itemDirtyIds = [];
                for (var a = 0; a < e; a++) {
                    var u = new we;
                    i.items.push(u),
                    i.itemDirtyIds.push(-2)
                }
                return i.length = e,
                i._load = null,
                i.baseTexture = null,
                i
            }
            return Te(e, t),
            e.prototype.initFromArray = function(t, e) {
                for (var r = 0; r < this.length; r++)
                    t[r] && (t[r].castToBaseTexture ? this.addBaseTextureAt(t[r].castToBaseTexture(), r) : t[r]instanceof Ae ? this.addResourceAt(t[r], r) : this.addResourceAt(be(t[r], e), r))
            }
            ,
            e.prototype.dispose = function() {
                for (var t = 0, e = this.length; t < e; t++)
                    this.items[t].destroy();
                this.items = null,
                this.itemDirtyIds = null,
                this._load = null
            }
            ,
            e.prototype.addResourceAt = function(t, e) {
                if (!this.items[e])
                    throw new Error("Index " + e + " is out of bounds");
                return t.valid && !this.valid && this.resize(t.width, t.height),
                this.items[e].setResource(t),
                this
            }
            ,
            e.prototype.bind = function(e) {
                if (null !== this.baseTexture)
                    throw new Error("Only one base texture per TextureArray is allowed");
                t.prototype.bind.call(this, e);
                for (var r = 0; r < this.length; r++)
                    this.items[r].parentTextureArray = e,
                    this.items[r].on("update", e.update, e)
            }
            ,
            e.prototype.unbind = function(e) {
                t.prototype.unbind.call(this, e);
                for (var r = 0; r < this.length; r++)
                    this.items[r].parentTextureArray = null,
                    this.items[r].off("update", e.update, e)
            }
            ,
            e.prototype.load = function() {
                var t = this;
                if (this._load)
                    return this._load;
                var e = this.items.map((function(t) {
                    return t.resource
                }
                )).filter((function(t) {
                    return t
                }
                )).map((function(t) {
                    return t.load()
                }
                ));
                return this._load = Promise.all(e).then((function() {
                    var e = t.items[0]
                      , r = e.realWidth
                      , i = e.realHeight;
                    return t.resize(r, i),
                    Promise.resolve(t)
                }
                )),
                this._load
            }
            ,
            e
        }(Ae)
          , Ie = function(t) {
            function e(e, r) {
                var i, n, o = this, s = r || {}, a = s.width, u = s.height;
                return Array.isArray(e) ? (i = e,
                n = e.length) : n = e,
                o = t.call(this, n, {
                    width: a,
                    height: u
                }) || this,
                i && o.initFromArray(i, r),
                o
            }
            return Te(e, t),
            e.prototype.addBaseTextureAt = function(t, e) {
                if (!t.resource)
                    throw new Error("ArrayResource does not support RenderTexture");
                return this.addResourceAt(t.resource, e),
                this
            }
            ,
            e.prototype.bind = function(e) {
                t.prototype.bind.call(this, e),
                e.target = x.TEXTURE_2D_ARRAY
            }
            ,
            e.prototype.upload = function(t, e, r) {
                var i = this
                  , n = i.length
                  , o = i.itemDirtyIds
                  , s = i.items
                  , a = t.gl;
                r.dirtyId < 0 && a.texImage3D(a.TEXTURE_2D_ARRAY, 0, r.internalFormat, this._width, this._height, n, 0, e.format, r.type, null);
                for (var u = 0; u < n; u++) {
                    var h = s[u];
                    o[u] < h.dirtyId && (o[u] = h.dirtyId,
                    h.valid && a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, u, h.resource.width, h.resource.height, 1, e.format, r.type, h.resource.source))
                }
                return !0
            }
            ,
            e
        }(Oe)
          , Pe = function(t) {
            function e(e) {
                var r = this
                  , i = e
                  , n = i.naturalWidth || i.videoWidth || i.width
                  , o = i.naturalHeight || i.videoHeight || i.height;
                return (r = t.call(this, n, o) || this).source = e,
                r.noSubImage = !1,
                r
            }
            return Te(e, t),
            e.crossOrigin = function(t, e, r) {
                void 0 === r && 0 !== e.indexOf("data:") ? t.crossOrigin = function(t, e) {
                    if (void 0 === e && (e = globalThis.location),
                    0 === t.indexOf("data:"))
                        return "";
                    e = e || globalThis.location,
                    It || (It = document.createElement("a")),
                    It.href = t;
                    var r = ut.parse(It.href)
                      , i = !r.port && "" === e.port || r.port === e.port;
                    return r.hostname === e.hostname && i && r.protocol === e.protocol ? "" : "anonymous"
                }(e) : !1 !== r && (t.crossOrigin = "string" == typeof r ? r : "anonymous")
            }
            ,
            e.prototype.upload = function(t, e, r, i) {
                var n = t.gl
                  , o = e.realWidth
                  , s = e.realHeight;
                if ((i = i || this.source)instanceof HTMLImageElement) {
                    if (!i.complete || 0 === i.naturalWidth)
                        return !1
                } else if (i instanceof HTMLVideoElement && i.readyState <= 1)
                    return !1;
                return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === w.UNPACK),
                this.noSubImage || e.target !== n.TEXTURE_2D || r.width !== o || r.height !== s ? (r.width = o,
                r.height = s,
                n.texImage2D(e.target, 0, r.internalFormat, e.format, r.type, i)) : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, r.type, i),
                !0
            }
            ,
            e.prototype.update = function() {
                if (!this.destroyed) {
                    var e = this.source
                      , r = e.naturalWidth || e.videoWidth || e.width
                      , i = e.naturalHeight || e.videoHeight || e.height;
                    this.resize(r, i),
                    t.prototype.update.call(this)
                }
            }
            ,
            e.prototype.dispose = function() {
                this.source = null
            }
            ,
            e
        }(Ae)
          , Me = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Te(e, t),
            e.test = function(t) {
                var e = globalThis.OffscreenCanvas;
                return !!(e && t instanceof e) || globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement
            }
            ,
            e
        }(Pe)
          , De = function(t) {
            function e(r, i) {
                var n = this
                  , o = i || {}
                  , s = o.width
                  , a = o.height
                  , u = o.autoLoad
                  , h = o.linkBaseTexture;
                if (r && r.length !== e.SIDES)
                    throw new Error("Invalid length. Got " + r.length + ", expected 6");
                n = t.call(this, 6, {
                    width: s,
                    height: a
                }) || this;
                for (var l = 0; l < e.SIDES; l++)
                    n.items[l].target = x.TEXTURE_CUBE_MAP_POSITIVE_X + l;
                return n.linkBaseTexture = !1 !== h,
                r && n.initFromArray(r, i),
                !1 !== u && n.load(),
                n
            }
            return Te(e, t),
            e.prototype.bind = function(e) {
                t.prototype.bind.call(this, e),
                e.target = x.TEXTURE_CUBE_MAP
            }
            ,
            e.prototype.addBaseTextureAt = function(t, e, r) {
                if (!this.items[e])
                    throw new Error("Index " + e + " is out of bounds");
                if (!this.linkBaseTexture || t.parentTextureArray || Object.keys(t._glTextures).length > 0) {
                    if (!t.resource)
                        throw new Error("CubeResource does not support copying of renderTexture.");
                    this.addResourceAt(t.resource, e)
                } else
                    t.target = x.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                    t.parentTextureArray = this.baseTexture,
                    this.items[e] = t;
                return t.valid && !this.valid && this.resize(t.realWidth, t.realHeight),
                this.items[e] = t,
                this
            }
            ,
            e.prototype.upload = function(t, r, i) {
                for (var n = this.itemDirtyIds, o = 0; o < e.SIDES; o++) {
                    var s = this.items[o];
                    (n[o] < s.dirtyId || i.dirtyId < r.dirtyId) && (s.valid && s.resource ? (s.resource.upload(t, s, i),
                    n[o] = s.dirtyId) : n[o] < -1 && (t.gl.texImage2D(s.target, 0, i.internalFormat, r.realWidth, r.realHeight, 0, r.format, i.type, null),
                    n[o] = -1))
                }
                return !0
            }
            ,
            e.test = function(t) {
                return Array.isArray(t) && t.length === e.SIDES
            }
            ,
            e.SIDES = 6,
            e
        }(Oe)
          , Ce = function(t) {
            function e(e, r) {
                var i = this;
                if (r = r || {},
                !(e instanceof HTMLImageElement)) {
                    var n = new Image;
                    Pe.crossOrigin(n, e, r.crossorigin),
                    n.src = e,
                    e = n
                }
                return i = t.call(this, e) || this,
                !e.complete && i._width && i._height && (i._width = 0,
                i._height = 0),
                i.url = e.src,
                i._process = null,
                i.preserveBitmap = !1,
                i.createBitmap = (void 0 !== r.createBitmap ? r.createBitmap : nt.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap,
                i.alphaMode = "number" == typeof r.alphaMode ? r.alphaMode : null,
                i.bitmap = null,
                i._load = null,
                !1 !== r.autoLoad && i.load(),
                i
            }
            return Te(e, t),
            e.prototype.load = function(t) {
                var e = this;
                return this._load || (void 0 !== t && (this.createBitmap = t),
                this._load = new Promise((function(t, r) {
                    var i = e.source;
                    e.url = i.src;
                    var n = function() {
                        e.destroyed || (i.onload = null,
                        i.onerror = null,
                        e.resize(i.width, i.height),
                        e._load = null,
                        e.createBitmap ? t(e.process()) : t(e))
                    };
                    i.complete && i.src ? n() : (i.onload = n,
                    i.onerror = function(t) {
                        r(t),
                        e.onError.emit(t)
                    }
                    )
                }
                ))),
                this._load
            }
            ,
            e.prototype.process = function() {
                var t = this
                  , e = this.source;
                if (null !== this._process)
                    return this._process;
                if (null !== this.bitmap || !globalThis.createImageBitmap)
                    return Promise.resolve(this);
                var r = globalThis.createImageBitmap
                  , i = !e.crossOrigin || "anonymous" === e.crossOrigin;
                return this._process = fetch(e.src, {
                    mode: i ? "cors" : "no-cors"
                }).then((function(t) {
                    return t.blob()
                }
                )).then((function(i) {
                    return r(i, 0, 0, e.width, e.height, {
                        premultiplyAlpha: null === t.alphaMode || t.alphaMode === w.UNPACK ? "premultiply" : "none"
                    })
                }
                )).then((function(e) {
                    return t.destroyed ? Promise.reject() : (t.bitmap = e,
                    t.update(),
                    t._process = null,
                    Promise.resolve(t))
                }
                )),
                this._process
            }
            ,
            e.prototype.upload = function(e, r, i) {
                if ("number" == typeof this.alphaMode && (r.alphaMode = this.alphaMode),
                !this.createBitmap)
                    return t.prototype.upload.call(this, e, r, i);
                if (!this.bitmap && (this.process(),
                !this.bitmap))
                    return !1;
                if (t.prototype.upload.call(this, e, r, i, this.bitmap),
                !this.preserveBitmap) {
                    var n = !0
                      , o = r._glTextures;
                    for (var s in o) {
                        var a = o[s];
                        if (a !== i && a.dirtyId !== r.dirtyId) {
                            n = !1;
                            break
                        }
                    }
                    n && (this.bitmap.close && this.bitmap.close(),
                    this.bitmap = null)
                }
                return !0
            }
            ,
            e.prototype.dispose = function() {
                this.source.onload = null,
                this.source.onerror = null,
                t.prototype.dispose.call(this),
                this.bitmap && (this.bitmap.close(),
                this.bitmap = null),
                this._process = null,
                this._load = null
            }
            ,
            e.test = function(t) {
                return "string" == typeof t || t instanceof HTMLImageElement
            }
            ,
            e
        }(Pe)
          , Fe = function(t) {
            function e(e, r) {
                var i = this;
                return r = r || {},
                (i = t.call(this, nt.ADAPTER.createCanvas()) || this)._width = 0,
                i._height = 0,
                i.svg = e,
                i.scale = r.scale || 1,
                i._overrideWidth = r.width,
                i._overrideHeight = r.height,
                i._resolve = null,
                i._crossorigin = r.crossorigin,
                i._load = null,
                !1 !== r.autoLoad && i.load(),
                i
            }
            return Te(e, t),
            e.prototype.load = function() {
                var t = this;
                return this._load || (this._load = new Promise((function(r) {
                    if (t._resolve = function() {
                        t.resize(t.source.width, t.source.height),
                        r(t)
                    }
                    ,
                    e.SVG_XML.test(t.svg.trim())) {
                        if (!btoa)
                            throw new Error("Your browser doesn't support base64 conversions.");
                        t.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t.svg)))
                    }
                    t._loadSvg()
                }
                ))),
                this._load
            }
            ,
            e.prototype._loadSvg = function() {
                var t = this
                  , e = new Image;
                Pe.crossOrigin(e, this.svg, this._crossorigin),
                e.src = this.svg,
                e.onerror = function(r) {
                    t._resolve && (e.onerror = null,
                    t.onError.emit(r))
                }
                ,
                e.onload = function() {
                    if (t._resolve) {
                        var r = e.width
                          , i = e.height;
                        if (!r || !i)
                            throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                        var n = r * t.scale
                          , o = i * t.scale;
                        (t._overrideWidth || t._overrideHeight) && (n = t._overrideWidth || t._overrideHeight / i * r,
                        o = t._overrideHeight || t._overrideWidth / r * i),
                        n = Math.round(n),
                        o = Math.round(o);
                        var s = t.source;
                        s.width = n,
                        s.height = o,
                        s._pixiId = "canvas_" + Rt(),
                        s.getContext("2d").drawImage(e, 0, 0, r, i, 0, 0, n, o),
                        t._resolve(),
                        t._resolve = null
                    }
                }
            }
            ,
            e.getSize = function(t) {
                var r = e.SVG_SIZE.exec(t)
                  , i = {};
                return r && (i[r[1]] = Math.round(parseFloat(r[3])),
                i[r[5]] = Math.round(parseFloat(r[7]))),
                i
            }
            ,
            e.prototype.dispose = function() {
                t.prototype.dispose.call(this),
                this._resolve = null,
                this._crossorigin = null
            }
            ,
            e.test = function(t, r) {
                return "svg" === r || "string" == typeof t && t.startsWith("data:image/svg+xml") || "string" == typeof t && e.SVG_XML.test(t)
            }
            ,
            e.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,
            e.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,
            e
        }(Pe)
          , Ne = function(t) {
            function e(r, i) {
                var n = this;
                if (i = i || {},
                !(r instanceof HTMLVideoElement)) {
                    var o = document.createElement("video");
                    o.setAttribute("preload", "auto"),
                    o.setAttribute("webkit-playsinline", ""),
                    o.setAttribute("playsinline", ""),
                    "string" == typeof r && (r = [r]);
                    var s = r[0].src || r[0];
                    Pe.crossOrigin(o, s, i.crossorigin);
                    for (var a = 0; a < r.length; ++a) {
                        var u = document.createElement("source")
                          , h = r[a]
                          , l = h.src
                          , c = h.mime
                          , d = (l = l || r[a]).split("?").shift().toLowerCase()
                          , p = d.slice(d.lastIndexOf(".") + 1);
                        c = c || e.MIME_TYPES[p] || "video/" + p,
                        u.src = l,
                        u.type = c,
                        o.appendChild(u)
                    }
                    r = o
                }
                return (n = t.call(this, r) || this).noSubImage = !0,
                n._autoUpdate = !0,
                n._isConnectedToTicker = !1,
                n._updateFPS = i.updateFPS || 0,
                n._msToNextUpdate = 0,
                n.autoPlay = !1 !== i.autoPlay,
                n._load = null,
                n._resolve = null,
                n._onCanPlay = n._onCanPlay.bind(n),
                n._onError = n._onError.bind(n),
                !1 !== i.autoLoad && n.load(),
                n
            }
            return Te(e, t),
            e.prototype.update = function(e) {
                if (!this.destroyed) {
                    var r = ve.shared.elapsedMS * this.source.playbackRate;
                    this._msToNextUpdate = Math.floor(this._msToNextUpdate - r),
                    (!this._updateFPS || this._msToNextUpdate <= 0) && (t.prototype.update.call(this),
                    this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
                }
            }
            ,
            e.prototype.load = function() {
                var t = this;
                if (this._load)
                    return this._load;
                var e = this.source;
                return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0),
                e.addEventListener("play", this._onPlayStart.bind(this)),
                e.addEventListener("pause", this._onPlayStop.bind(this)),
                this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay),
                e.addEventListener("canplaythrough", this._onCanPlay),
                e.addEventListener("error", this._onError, !0)),
                this._load = new Promise((function(r) {
                    t.valid ? r(t) : (t._resolve = r,
                    e.load())
                }
                )),
                this._load
            }
            ,
            e.prototype._onError = function(t) {
                this.source.removeEventListener("error", this._onError, !0),
                this.onError.emit(t)
            }
            ,
            e.prototype._isSourcePlaying = function() {
                var t = this.source;
                return !t.paused && !t.ended && this._isSourceReady()
            }
            ,
            e.prototype._isSourceReady = function() {
                return this.source.readyState > 2
            }
            ,
            e.prototype._onPlayStart = function() {
                this.valid || this._onCanPlay(),
                this.autoUpdate && !this._isConnectedToTicker && (ve.shared.add(this.update, this),
                this._isConnectedToTicker = !0)
            }
            ,
            e.prototype._onPlayStop = function() {
                this._isConnectedToTicker && (ve.shared.remove(this.update, this),
                this._isConnectedToTicker = !1)
            }
            ,
            e.prototype._onCanPlay = function() {
                var t = this.source;
                t.removeEventListener("canplay", this._onCanPlay),
                t.removeEventListener("canplaythrough", this._onCanPlay);
                var e = this.valid;
                this.resize(t.videoWidth, t.videoHeight),
                !e && this._resolve && (this._resolve(this),
                this._resolve = null),
                this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play()
            }
            ,
            e.prototype.dispose = function() {
                this._isConnectedToTicker && (ve.shared.remove(this.update, this),
                this._isConnectedToTicker = !1);
                var e = this.source;
                e && (e.removeEventListener("error", this._onError, !0),
                e.pause(),
                e.src = "",
                e.load()),
                t.prototype.dispose.call(this)
            }
            ,
            Object.defineProperty(e.prototype, "autoUpdate", {
                get: function() {
                    return this._autoUpdate
                },
                set: function(t) {
                    t !== this._autoUpdate && (this._autoUpdate = t,
                    !this._autoUpdate && this._isConnectedToTicker ? (ve.shared.remove(this.update, this),
                    this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (ve.shared.add(this.update, this),
                    this._isConnectedToTicker = !0))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "updateFPS", {
                get: function() {
                    return this._updateFPS
                },
                set: function(t) {
                    t !== this._updateFPS && (this._updateFPS = t)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.test = function(t, r) {
                return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement || e.TYPES.indexOf(r) > -1
            }
            ,
            e.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"],
            e.MIME_TYPES = {
                ogv: "video/ogg",
                mov: "video/quicktime",
                m4v: "video/mp4"
            },
            e
        }(Pe)
          , Be = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Te(e, t),
            e.test = function(t) {
                return !!globalThis.createImageBitmap && "undefined" != typeof ImageBitmap && t instanceof ImageBitmap
            }
            ,
            e
        }(Pe);
        ye.push(Ce, Be, Me, Ne, Fe, Se, De, Ie);
        var Le = {
            __proto__: null,
            Resource: Ae,
            BaseImageResource: Pe,
            INSTALLED: ye,
            autoDetectResource: be,
            AbstractMultiResource: Oe,
            ArrayResource: Ie,
            BufferResource: Se,
            CanvasResource: Me,
            CubeResource: De,
            ImageResource: Ce,
            SVGResource: Fe,
            VideoResource: Ne,
            ImageBitmapResource: Be
        }
          , Ge = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Te(e, t),
            e.prototype.upload = function(t, e, r) {
                var i = t.gl;
                i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === w.UNPACK);
                var n = e.realWidth
                  , o = e.realHeight;
                return r.width === n && r.height === o ? i.texSubImage2D(e.target, 0, 0, 0, n, o, e.format, r.type, this.data) : (r.width = n,
                r.height = o,
                i.texImage2D(e.target, 0, r.internalFormat, n, o, 0, e.format, r.type, this.data)),
                !0
            }
            ,
            e
        }(Se)
          , Ue = function() {
            function t(t, e) {
                this.width = Math.round(t || 100),
                this.height = Math.round(e || 100),
                this.stencil = !1,
                this.depth = !1,
                this.dirtyId = 0,
                this.dirtyFormat = 0,
                this.dirtySize = 0,
                this.depthTexture = null,
                this.colorTextures = [],
                this.glFramebuffers = {},
                this.disposeRunner = new _e("disposeFramebuffer"),
                this.multisample = C.NONE
            }
            return Object.defineProperty(t.prototype, "colorTexture", {
                get: function() {
                    return this.colorTextures[0]
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.addColorTexture = function(t, e) {
                return void 0 === t && (t = 0),
                this.colorTextures[t] = e || new we(null,{
                    scaleMode: A.NEAREST,
                    resolution: 1,
                    mipmap: R.OFF,
                    width: this.width,
                    height: this.height
                }),
                this.dirtyId++,
                this.dirtyFormat++,
                this
            }
            ,
            t.prototype.addDepthTexture = function(t) {
                return this.depthTexture = t || new we(new Ge(null,{
                    width: this.width,
                    height: this.height
                }),{
                    scaleMode: A.NEAREST,
                    resolution: 1,
                    width: this.width,
                    height: this.height,
                    mipmap: R.OFF,
                    format: b.DEPTH_COMPONENT,
                    type: T.UNSIGNED_SHORT
                }),
                this.dirtyId++,
                this.dirtyFormat++,
                this
            }
            ,
            t.prototype.enableDepth = function() {
                return this.depth = !0,
                this.dirtyId++,
                this.dirtyFormat++,
                this
            }
            ,
            t.prototype.enableStencil = function() {
                return this.stencil = !0,
                this.dirtyId++,
                this.dirtyFormat++,
                this
            }
            ,
            t.prototype.resize = function(t, e) {
                if (t = Math.round(t),
                e = Math.round(e),
                t !== this.width || e !== this.height) {
                    this.width = t,
                    this.height = e,
                    this.dirtyId++,
                    this.dirtySize++;
                    for (var r = 0; r < this.colorTextures.length; r++) {
                        var i = this.colorTextures[r]
                          , n = i.resolution;
                        i.setSize(t / n, e / n)
                    }
                    this.depthTexture && (n = this.depthTexture.resolution,
                    this.depthTexture.setSize(t / n, e / n))
                }
            }
            ,
            t.prototype.dispose = function() {
                this.disposeRunner.emit(this, !1)
            }
            ,
            t.prototype.destroyDepthTexture = function() {
                this.depthTexture && (this.depthTexture.destroy(),
                this.depthTexture = null,
                ++this.dirtyId,
                ++this.dirtyFormat)
            }
            ,
            t
        }()
          , ke = function(t) {
            function e(e) {
                void 0 === e && (e = {});
                var r = this;
                if ("number" == typeof e) {
                    var i = arguments[0]
                      , n = arguments[1]
                      , o = arguments[2]
                      , s = arguments[3];
                    e = {
                        width: i,
                        height: n,
                        scaleMode: o,
                        resolution: s
                    }
                }
                return e.width = e.width || 100,
                e.height = e.height || 100,
                e.multisample = void 0 !== e.multisample ? e.multisample : C.NONE,
                (r = t.call(this, null, e) || this).mipmap = R.OFF,
                r.valid = !0,
                r.clearColor = [0, 0, 0, 0],
                r.framebuffer = new Ue(r.realWidth,r.realHeight).addColorTexture(0, r),
                r.framebuffer.multisample = e.multisample,
                r.maskStack = [],
                r.filterStack = [{}],
                r
            }
            return Te(e, t),
            e.prototype.resize = function(t, e) {
                this.framebuffer.resize(t * this.resolution, e * this.resolution),
                this.setRealSize(this.framebuffer.width, this.framebuffer.height)
            }
            ,
            e.prototype.dispose = function() {
                this.framebuffer.dispose(),
                t.prototype.dispose.call(this)
            }
            ,
            e.prototype.destroy = function() {
                t.prototype.destroy.call(this),
                this.framebuffer.destroyDepthTexture(),
                this.framebuffer = null
            }
            ,
            e
        }(we)
          , Xe = function() {
            function t() {
                this.x0 = 0,
                this.y0 = 0,
                this.x1 = 1,
                this.y1 = 0,
                this.x2 = 1,
                this.y2 = 1,
                this.x3 = 0,
                this.y3 = 1,
                this.uvsFloat32 = new Float32Array(8)
            }
            return t.prototype.set = function(t, e, r) {
                var i = e.width
                  , n = e.height;
                if (r) {
                    var o = t.width / 2 / i
                      , s = t.height / 2 / n
                      , a = t.x / i + o
                      , u = t.y / n + s;
                    r = ee.add(r, ee.NW),
                    this.x0 = a + o * ee.uX(r),
                    this.y0 = u + s * ee.uY(r),
                    r = ee.add(r, 2),
                    this.x1 = a + o * ee.uX(r),
                    this.y1 = u + s * ee.uY(r),
                    r = ee.add(r, 2),
                    this.x2 = a + o * ee.uX(r),
                    this.y2 = u + s * ee.uY(r),
                    r = ee.add(r, 2),
                    this.x3 = a + o * ee.uX(r),
                    this.y3 = u + s * ee.uY(r)
                } else
                    this.x0 = t.x / i,
                    this.y0 = t.y / n,
                    this.x1 = (t.x + t.width) / i,
                    this.y1 = t.y / n,
                    this.x2 = (t.x + t.width) / i,
                    this.y2 = (t.y + t.height) / n,
                    this.x3 = t.x / i,
                    this.y3 = (t.y + t.height) / n;
                this.uvsFloat32[0] = this.x0,
                this.uvsFloat32[1] = this.y0,
                this.uvsFloat32[2] = this.x1,
                this.uvsFloat32[3] = this.y1,
                this.uvsFloat32[4] = this.x2,
                this.uvsFloat32[5] = this.y2,
                this.uvsFloat32[6] = this.x3,
                this.uvsFloat32[7] = this.y3
            }
            ,
            t.prototype.toString = function() {
                return "[@pixi/core:TextureUvs x0=" + this.x0 + " y0=" + this.y0 + " x1=" + this.x1 + " y1=" + this.y1 + " x2=" + this.x2 + " y2=" + this.y2 + " x3=" + this.x3 + " y3=" + this.y3 + "]"
            }
            ,
            t
        }()
          , He = new Xe;
        function je(t) {
            t.destroy = function() {}
            ,
            t.on = function() {}
            ,
            t.once = function() {}
            ,
            t.emit = function() {}
        }
        var Ye = function(t) {
            function e(r, i, n, o, s, a) {
                var u = t.call(this) || this;
                if (u.noFrame = !1,
                i || (u.noFrame = !0,
                i = new Xt(0,0,1,1)),
                r instanceof e && (r = r.baseTexture),
                u.baseTexture = r,
                u._frame = i,
                u.trim = o,
                u.valid = !1,
                u._uvs = He,
                u.uvMatrix = null,
                u.orig = n || i,
                u._rotate = Number(s || 0),
                !0 === s)
                    u._rotate = 2;
                else if (u._rotate % 2 != 0)
                    throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                return u.defaultAnchor = a ? new Ut(a.x,a.y) : new Ut(0,0),
                u._updateID = 0,
                u.textureCacheIds = [],
                r.valid ? u.noFrame ? r.valid && u.onBaseTextureUpdated(r) : u.frame = i : r.once("loaded", u.onBaseTextureUpdated, u),
                u.noFrame && r.on("update", u.onBaseTextureUpdated, u),
                u
            }
            return Te(e, t),
            e.prototype.update = function() {
                this.baseTexture.resource && this.baseTexture.resource.update()
            }
            ,
            e.prototype.onBaseTextureUpdated = function(t) {
                if (this.noFrame) {
                    if (!this.baseTexture.valid)
                        return;
                    this._frame.width = t.width,
                    this._frame.height = t.height,
                    this.valid = !0,
                    this.updateUvs()
                } else
                    this.frame = this._frame;
                this.emit("update", this)
            }
            ,
            e.prototype.destroy = function(t) {
                if (this.baseTexture) {
                    if (t) {
                        var r = this.baseTexture.resource;
                        r && r.url && Mt[r.url] && e.removeFromCache(r.url),
                        this.baseTexture.destroy()
                    }
                    this.baseTexture.off("loaded", this.onBaseTextureUpdated, this),
                    this.baseTexture.off("update", this.onBaseTextureUpdated, this),
                    this.baseTexture = null
                }
                this._frame = null,
                this._uvs = null,
                this.trim = null,
                this.orig = null,
                this.valid = !1,
                e.removeFromCache(this),
                this.textureCacheIds = null
            }
            ,
            e.prototype.clone = function() {
                var t = this._frame.clone()
                  , r = this._frame === this.orig ? t : this.orig.clone()
                  , i = new e(this.baseTexture,!this.noFrame && t,r,this.trim && this.trim.clone(),this.rotate,this.defaultAnchor);
                return this.noFrame && (i._frame = t),
                i
            }
            ,
            e.prototype.updateUvs = function() {
                this._uvs === He && (this._uvs = new Xe),
                this._uvs.set(this._frame, this.baseTexture, this.rotate),
                this._updateID++
            }
            ,
            e.from = function(t, r, i) {
                void 0 === r && (r = {}),
                void 0 === i && (i = nt.STRICT_TEXTURE_CACHE);
                var n = "string" == typeof t
                  , o = null;
                if (n)
                    o = t;
                else if (t instanceof we) {
                    if (!t.cacheId) {
                        var s = r && r.pixiIdPrefix || "pixiid";
                        t.cacheId = s + "-" + Rt(),
                        we.addToCache(t, t.cacheId)
                    }
                    o = t.cacheId
                } else
                    t._pixiId || (s = r && r.pixiIdPrefix || "pixiid",
                    t._pixiId = s + "_" + Rt()),
                    o = t._pixiId;
                var a = Mt[o];
                if (n && i && !a)
                    throw new Error('The cacheId "' + o + '" does not exist in TextureCache.');
                return a || t instanceof we ? !a && t instanceof we && (a = new e(t),
                e.addToCache(a, o)) : (r.resolution || (r.resolution = Ft(t)),
                (a = new e(new we(t,r))).baseTexture.cacheId = o,
                we.addToCache(a.baseTexture, o),
                e.addToCache(a, o)),
                a
            }
            ,
            e.fromURL = function(t, r) {
                var i = Object.assign({
                    autoLoad: !1
                }, null == r ? void 0 : r.resourceOptions)
                  , n = e.from(t, Object.assign({
                    resourceOptions: i
                }, r), !1)
                  , o = n.baseTexture.resource;
                return n.baseTexture.valid ? Promise.resolve(n) : o.load().then((function() {
                    return Promise.resolve(n)
                }
                ))
            }
            ,
            e.fromBuffer = function(t, r, i, n) {
                return new e(we.fromBuffer(t, r, i, n))
            }
            ,
            e.fromLoader = function(t, r, i, n) {
                var o = new we(t,Object.assign({
                    scaleMode: nt.SCALE_MODE,
                    resolution: Ft(r)
                }, n))
                  , s = o.resource;
                s instanceof Ce && (s.url = r);
                var a = new e(o);
                return i || (i = r),
                we.addToCache(a.baseTexture, i),
                e.addToCache(a, i),
                i !== r && (we.addToCache(a.baseTexture, r),
                e.addToCache(a, r)),
                a.baseTexture.valid ? Promise.resolve(a) : new Promise((function(t) {
                    a.baseTexture.once("loaded", (function() {
                        return t(a)
                    }
                    ))
                }
                ))
            }
            ,
            e.addToCache = function(t, e) {
                e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e),
                Mt[e] && console.warn("Texture added to the cache with an id [" + e + "] that already had an entry"),
                Mt[e] = t)
            }
            ,
            e.removeFromCache = function(t) {
                if ("string" == typeof t) {
                    var e = Mt[t];
                    if (e) {
                        var r = e.textureCacheIds.indexOf(t);
                        return r > -1 && e.textureCacheIds.splice(r, 1),
                        delete Mt[t],
                        e
                    }
                } else if (t && t.textureCacheIds) {
                    for (var i = 0; i < t.textureCacheIds.length; ++i)
                        Mt[t.textureCacheIds[i]] === t && delete Mt[t.textureCacheIds[i]];
                    return t.textureCacheIds.length = 0,
                    t
                }
                return null
            }
            ,
            Object.defineProperty(e.prototype, "resolution", {
                get: function() {
                    return this.baseTexture.resolution
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "frame", {
                get: function() {
                    return this._frame
                },
                set: function(t) {
                    this._frame = t,
                    this.noFrame = !1;
                    var e = t.x
                      , r = t.y
                      , i = t.width
                      , n = t.height
                      , o = e + i > this.baseTexture.width
                      , s = r + n > this.baseTexture.height;
                    if (o || s) {
                        var a = o && s ? "and" : "or"
                          , u = "X: " + e + " + " + i + " = " + (e + i) + " > " + this.baseTexture.width
                          , h = "Y: " + r + " + " + n + " = " + (r + n) + " > " + this.baseTexture.height;
                        throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + u + " " + a + " " + h)
                    }
                    this.valid = i && n && this.baseTexture.valid,
                    this.trim || this.rotate || (this.orig = t),
                    this.valid && this.updateUvs()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "rotate", {
                get: function() {
                    return this._rotate
                },
                set: function(t) {
                    this._rotate = t,
                    this.valid && this.updateUvs()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this.orig.width
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return this.orig.height
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.castToBaseTexture = function() {
                return this.baseTexture
            }
            ,
            Object.defineProperty(e, "EMPTY", {
                get: function() {
                    return e._EMPTY || (e._EMPTY = new e(new we),
                    je(e._EMPTY),
                    je(e._EMPTY.baseTexture)),
                    e._EMPTY
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e, "WHITE", {
                get: function() {
                    if (!e._WHITE) {
                        var t = nt.ADAPTER.createCanvas(16, 16)
                          , r = t.getContext("2d");
                        t.width = 16,
                        t.height = 16,
                        r.fillStyle = "white",
                        r.fillRect(0, 0, 16, 16),
                        e._WHITE = new e(we.from(t)),
                        je(e._WHITE),
                        je(e._WHITE.baseTexture)
                    }
                    return e._WHITE
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        }(ot)
          , Ve = function(t) {
            function e(e, r) {
                var i = t.call(this, e, r) || this;
                return i.valid = !0,
                i.filterFrame = null,
                i.filterPoolKey = null,
                i.updateUvs(),
                i
            }
            return Te(e, t),
            Object.defineProperty(e.prototype, "framebuffer", {
                get: function() {
                    return this.baseTexture.framebuffer
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "multisample", {
                get: function() {
                    return this.framebuffer.multisample
                },
                set: function(t) {
                    this.framebuffer.multisample = t
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.resize = function(t, e, r) {
                void 0 === r && (r = !0);
                var i = this.baseTexture.resolution
                  , n = Math.round(t * i) / i
                  , o = Math.round(e * i) / i;
                this.valid = n > 0 && o > 0,
                this._frame.width = this.orig.width = n,
                this._frame.height = this.orig.height = o,
                r && this.baseTexture.resize(n, o),
                this.updateUvs()
            }
            ,
            e.prototype.setResolution = function(t) {
                var e = this.baseTexture;
                e.resolution !== t && (e.setResolution(t),
                this.resize(e.width, e.height, !1))
            }
            ,
            e.create = function(t) {
                for (var r = arguments, i = [], n = 1; n < arguments.length; n++)
                    i[n - 1] = r[n];
                return "number" == typeof t && (Ot("6.0.0", "Arguments (width, height, scaleMode, resolution) have been deprecated."),
                t = {
                    width: t,
                    height: i[0],
                    scaleMode: i[1],
                    resolution: i[2]
                }),
                new e(new ke(t))
            }
            ,
            e
        }(Ye)
          , We = function() {
            function t(t) {
                this.texturePool = {},
                this.textureOptions = t || {},
                this.enableFullScreen = !1,
                this._pixelsWidth = 0,
                this._pixelsHeight = 0
            }
            return t.prototype.createTexture = function(t, e, r) {
                void 0 === r && (r = C.NONE);
                var i = new ke(Object.assign({
                    width: t,
                    height: e,
                    resolution: 1,
                    multisample: r
                }, this.textureOptions));
                return new Ve(i)
            }
            ,
            t.prototype.getOptimalTexture = function(t, e, r, i) {
                var n;
                void 0 === r && (r = 1),
                void 0 === i && (i = C.NONE),
                t = Math.ceil(t * r - 1e-6),
                e = Math.ceil(e * r - 1e-6),
                this.enableFullScreen && t === this._pixelsWidth && e === this._pixelsHeight ? n = i > 1 ? -i : -1 : (n = ((65535 & (t = bt(t))) << 16 | 65535 & (e = bt(e))) >>> 0,
                i > 1 && (n += 4294967296 * i)),
                this.texturePool[n] || (this.texturePool[n] = []);
                var o = this.texturePool[n].pop();
                return o || (o = this.createTexture(t, e, i)),
                o.filterPoolKey = n,
                o.setResolution(r),
                o
            }
            ,
            t.prototype.getFilterTexture = function(t, e, r) {
                var i = this.getOptimalTexture(t.width, t.height, e || t.resolution, r || C.NONE);
                return i.filterFrame = t.filterFrame,
                i
            }
            ,
            t.prototype.returnTexture = function(t) {
                var e = t.filterPoolKey;
                t.filterFrame = null,
                this.texturePool[e].push(t)
            }
            ,
            t.prototype.returnFilterTexture = function(t) {
                this.returnTexture(t)
            }
            ,
            t.prototype.clear = function(t) {
                if (t = !1 !== t)
                    for (var e in this.texturePool) {
                        var r = this.texturePool[e];
                        if (r)
                            for (var i = 0; i < r.length; i++)
                                r[i].destroy(!0)
                    }
                this.texturePool = {}
            }
            ,
            t.prototype.setScreenSize = function(t) {
                if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
                    for (var e in this.enableFullScreen = t.width > 0 && t.height > 0,
                    this.texturePool)
                        if (Number(e) < 0) {
                            var r = this.texturePool[e];
                            if (r)
                                for (var i = 0; i < r.length; i++)
                                    r[i].destroy(!0);
                            this.texturePool[e] = []
                        }
                    this._pixelsWidth = t.width,
                    this._pixelsHeight = t.height
                }
            }
            ,
            t.SCREEN_KEY = -1,
            t
        }()
          , ze = function() {
            function t(t, e, r, i, n, o, s) {
                void 0 === e && (e = 0),
                void 0 === r && (r = !1),
                void 0 === i && (i = T.FLOAT),
                this.buffer = t,
                this.size = e,
                this.normalized = r,
                this.type = i,
                this.stride = n,
                this.start = o,
                this.instance = s
            }
            return t.prototype.destroy = function() {
                this.buffer = null
            }
            ,
            t.from = function(e, r, i, n, o) {
                return new t(e,r,i,n,o)
            }
            ,
            t
        }()
          , $e = 0
          , qe = function() {
            function t(t, e, r) {
                void 0 === e && (e = !0),
                void 0 === r && (r = !1),
                this.data = t || new Float32Array(1),
                this._glBuffers = {},
                this._updateID = 0,
                this.index = r,
                this.static = e,
                this.id = $e++,
                this.disposeRunner = new _e("disposeBuffer")
            }
            return t.prototype.update = function(t) {
                t instanceof Array && (t = new Float32Array(t)),
                this.data = t || this.data,
                this._updateID++
            }
            ,
            t.prototype.dispose = function() {
                this.disposeRunner.emit(this, !1)
            }
            ,
            t.prototype.destroy = function() {
                this.dispose(),
                this.data = null
            }
            ,
            Object.defineProperty(t.prototype, "index", {
                get: function() {
                    return this.type === F.ELEMENT_ARRAY_BUFFER
                },
                set: function(t) {
                    this.type = t ? F.ELEMENT_ARRAY_BUFFER : F.ARRAY_BUFFER
                },
                enumerable: !1,
                configurable: !0
            }),
            t.from = function(e) {
                return e instanceof Array && (e = new Float32Array(e)),
                new t(e)
            }
            ,
            t
        }()
          , Ke = {
            Float32Array,
            Uint32Array,
            Int32Array,
            Uint8Array
        }
          , Ze = {
            5126: 4,
            5123: 2,
            5121: 1
        }
          , Je = 0
          , Qe = {
            Float32Array,
            Uint32Array,
            Int32Array,
            Uint8Array,
            Uint16Array
        }
          , tr = function() {
            function t(t, e) {
                void 0 === t && (t = []),
                void 0 === e && (e = {}),
                this.buffers = t,
                this.indexBuffer = null,
                this.attributes = e,
                this.glVertexArrayObjects = {},
                this.id = Je++,
                this.instanced = !1,
                this.instanceCount = 1,
                this.disposeRunner = new _e("disposeGeometry"),
                this.refCount = 0
            }
            return t.prototype.addAttribute = function(t, e, r, i, n, o, s, a) {
                if (void 0 === r && (r = 0),
                void 0 === i && (i = !1),
                void 0 === a && (a = !1),
                !e)
                    throw new Error("You must pass a buffer when creating an attribute");
                e instanceof qe || (e instanceof Array && (e = new Float32Array(e)),
                e = new qe(e));
                var u = t.split("|");
                if (u.length > 1) {
                    for (var h = 0; h < u.length; h++)
                        this.addAttribute(u[h], e, r, i, n);
                    return this
                }
                var l = this.buffers.indexOf(e);
                return -1 === l && (this.buffers.push(e),
                l = this.buffers.length - 1),
                this.attributes[t] = new ze(l,r,i,n,o,s,a),
                this.instanced = this.instanced || a,
                this
            }
            ,
            t.prototype.getAttribute = function(t) {
                return this.attributes[t]
            }
            ,
            t.prototype.getBuffer = function(t) {
                return this.buffers[this.getAttribute(t).buffer]
            }
            ,
            t.prototype.addIndex = function(t) {
                return t instanceof qe || (t instanceof Array && (t = new Uint16Array(t)),
                t = new qe(t)),
                t.type = F.ELEMENT_ARRAY_BUFFER,
                this.indexBuffer = t,
                -1 === this.buffers.indexOf(t) && this.buffers.push(t),
                this
            }
            ,
            t.prototype.getIndex = function() {
                return this.indexBuffer
            }
            ,
            t.prototype.interleave = function() {
                if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer)
                    return this;
                var t, e = [], r = [], i = new qe;
                for (t in this.attributes) {
                    var n = this.attributes[t]
                      , o = this.buffers[n.buffer];
                    e.push(o.data),
                    r.push(n.size * Ze[n.type] / 4),
                    n.buffer = 0
                }
                for (i.data = function(t, e) {
                    for (var r = 0, i = 0, n = {}, o = 0; o < t.length; o++)
                        i += e[o],
                        r += t[o].length;
                    var s = new ArrayBuffer(4 * r)
                      , a = null
                      , u = 0;
                    for (o = 0; o < t.length; o++) {
                        var h = e[o]
                          , l = t[o]
                          , c = yt(l);
                        n[c] || (n[c] = new Ke[c](s)),
                        a = n[c];
                        for (var d = 0; d < l.length; d++)
                            a[(d / h | 0) * i + u + d % h] = l[d];
                        u += h
                    }
                    return new Float32Array(s)
                }(e, r),
                t = 0; t < this.buffers.length; t++)
                    this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();
                return this.buffers = [i],
                this.indexBuffer && this.buffers.push(this.indexBuffer),
                this
            }
            ,
            t.prototype.getSize = function() {
                for (var t in this.attributes) {
                    var e = this.attributes[t];
                    return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
                }
                return 0
            }
            ,
            t.prototype.dispose = function() {
                this.disposeRunner.emit(this, !1)
            }
            ,
            t.prototype.destroy = function() {
                this.dispose(),
                this.buffers = null,
                this.indexBuffer = null,
                this.attributes = null
            }
            ,
            t.prototype.clone = function() {
                for (var e = new t, r = 0; r < this.buffers.length; r++)
                    e.buffers[r] = new qe(this.buffers[r].data.slice(0));
                for (var r in this.attributes) {
                    var i = this.attributes[r];
                    e.attributes[r] = new ze(i.buffer,i.size,i.normalized,i.type,i.stride,i.start,i.instance)
                }
                return this.indexBuffer && (e.indexBuffer = e.buffers[this.buffers.indexOf(this.indexBuffer)],
                e.indexBuffer.type = F.ELEMENT_ARRAY_BUFFER),
                e
            }
            ,
            t.merge = function(e) {
                for (var r, i = new t, n = [], o = [], s = [], a = 0; a < e.length; a++) {
                    r = e[a];
                    for (var u = 0; u < r.buffers.length; u++)
                        o[u] = o[u] || 0,
                        o[u] += r.buffers[u].data.length,
                        s[u] = 0
                }
                for (a = 0; a < r.buffers.length; a++)
                    n[a] = new (Qe[yt(r.buffers[a].data)])(o[a]),
                    i.buffers[a] = new qe(n[a]);
                for (a = 0; a < e.length; a++)
                    for (r = e[a],
                    u = 0; u < r.buffers.length; u++)
                        n[u].set(r.buffers[u].data, s[u]),
                        s[u] += r.buffers[u].data.length;
                if (i.attributes = r.attributes,
                r.indexBuffer) {
                    i.indexBuffer = i.buffers[r.buffers.indexOf(r.indexBuffer)],
                    i.indexBuffer.type = F.ELEMENT_ARRAY_BUFFER;
                    var h = 0
                      , l = 0
                      , c = 0
                      , d = 0;
                    for (a = 0; a < r.buffers.length; a++)
                        if (r.buffers[a] !== r.indexBuffer) {
                            d = a;
                            break
                        }
                    for (var a in r.attributes) {
                        var p = r.attributes[a];
                        (0 | p.buffer) === d && (l += p.size * Ze[p.type] / 4)
                    }
                    for (a = 0; a < e.length; a++) {
                        var f = e[a].indexBuffer.data;
                        for (u = 0; u < f.length; u++)
                            i.indexBuffer.data[u + c] += h;
                        h += e[a].buffers[d].data.length / l,
                        c += f.length
                    }
                }
                return i
            }
            ,
            t
        }()
          , er = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]),
                e
            }
            return Te(e, t),
            e
        }(tr)
          , rr = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]),
                e.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
                e.vertexBuffer = new qe(e.vertices),
                e.uvBuffer = new qe(e.uvs),
                e.addAttribute("aVertexPosition", e.vertexBuffer).addAttribute("aTextureCoord", e.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]),
                e
            }
            return Te(e, t),
            e.prototype.map = function(t, e) {
                var r = 0
                  , i = 0;
                return this.uvs[0] = r,
                this.uvs[1] = i,
                this.uvs[2] = r + e.width / t.width,
                this.uvs[3] = i,
                this.uvs[4] = r + e.width / t.width,
                this.uvs[5] = i + e.height / t.height,
                this.uvs[6] = r,
                this.uvs[7] = i + e.height / t.height,
                r = e.x,
                i = e.y,
                this.vertices[0] = r,
                this.vertices[1] = i,
                this.vertices[2] = r + e.width,
                this.vertices[3] = i,
                this.vertices[4] = r + e.width,
                this.vertices[5] = i + e.height,
                this.vertices[6] = r,
                this.vertices[7] = i + e.height,
                this.invalidate(),
                this
            }
            ,
            e.prototype.invalidate = function() {
                return this.vertexBuffer._updateID++,
                this.uvBuffer._updateID++,
                this
            }
            ,
            e
        }(tr)
          , ir = 0
          , nr = function() {
            function t(t, e, r) {
                this.group = !0,
                this.syncUniforms = {},
                this.dirtyId = 0,
                this.id = ir++,
                this.static = !!e,
                this.ubo = !!r,
                t instanceof qe ? (this.buffer = t,
                this.buffer.type = F.UNIFORM_BUFFER,
                this.autoManage = !1,
                this.ubo = !0) : (this.uniforms = t,
                this.ubo && (this.buffer = new qe(new Float32Array(1)),
                this.buffer.type = F.UNIFORM_BUFFER,
                this.autoManage = !0))
            }
            return t.prototype.update = function() {
                this.dirtyId++,
                !this.autoManage && this.buffer && this.buffer.update()
            }
            ,
            t.prototype.add = function(e, r, i) {
                if (this.ubo)
                    throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
                this.uniforms[e] = new t(r,i)
            }
            ,
            t.from = function(e, r, i) {
                return new t(e,r,i)
            }
            ,
            t.uboFrom = function(e, r) {
                return new t(e,null == r || r,!0)
            }
            ,
            t
        }()
          , or = function() {
            function t() {
                this.renderTexture = null,
                this.target = null,
                this.legacy = !1,
                this.resolution = 1,
                this.multisample = C.NONE,
                this.sourceFrame = new Xt,
                this.destinationFrame = new Xt,
                this.bindingSourceFrame = new Xt,
                this.bindingDestinationFrame = new Xt,
                this.filters = [],
                this.transform = null
            }
            return t.prototype.clear = function() {
                this.target = null,
                this.filters = null,
                this.renderTexture = null
            }
            ,
            t
        }()
          , sr = [new Ut, new Ut, new Ut, new Ut]
          , ar = new zt
          , ur = function() {
            function t(t) {
                this.renderer = t,
                this.defaultFilterStack = [{}],
                this.texturePool = new We,
                this.texturePool.setScreenSize(t.view),
                this.statePool = [],
                this.quad = new er,
                this.quadUv = new rr,
                this.tempRect = new Xt,
                this.activeState = {},
                this.globalUniforms = new nr({
                    outputFrame: new Xt,
                    inputSize: new Float32Array(4),
                    inputPixel: new Float32Array(4),
                    inputClamp: new Float32Array(4),
                    resolution: 1,
                    filterArea: new Float32Array(4),
                    filterClamp: new Float32Array(4)
                },!0),
                this.forceClear = !1,
                this.useMaxPadding = !1
            }
            return t.prototype.push = function(t, e) {
                for (var r, i, n = this.renderer, o = this.defaultFilterStack, s = this.statePool.pop() || new or, a = this.renderer.renderTexture, u = e[0].resolution, h = e[0].multisample, l = e[0].padding, c = e[0].autoFit, d = null === (r = e[0].legacy) || void 0 === r || r, p = 1; p < e.length; p++) {
                    var f = e[p];
                    u = Math.min(u, f.resolution),
                    h = Math.min(h, f.multisample),
                    l = this.useMaxPadding ? Math.max(l, f.padding) : l + f.padding,
                    c = c && f.autoFit,
                    d = d || null === (i = f.legacy) || void 0 === i || i
                }
                1 === o.length && (this.defaultFilterStack[0].renderTexture = a.current),
                o.push(s),
                s.resolution = u,
                s.multisample = h,
                s.legacy = d,
                s.target = t,
                s.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)),
                s.sourceFrame.pad(l);
                var _ = this.tempRect.copyFrom(a.sourceFrame);
                n.projection.transform && this.transformAABB(ar.copyFrom(n.projection.transform).invert(), _),
                c ? (s.sourceFrame.fit(_),
                (s.sourceFrame.width <= 0 || s.sourceFrame.height <= 0) && (s.sourceFrame.width = 0,
                s.sourceFrame.height = 0)) : s.sourceFrame.intersects(_) || (s.sourceFrame.width = 0,
                s.sourceFrame.height = 0),
                this.roundFrame(s.sourceFrame, a.current ? a.current.resolution : n.resolution, a.sourceFrame, a.destinationFrame, n.projection.transform),
                s.renderTexture = this.getOptimalFilterTexture(s.sourceFrame.width, s.sourceFrame.height, u, h),
                s.filters = e,
                s.destinationFrame.width = s.renderTexture.width,
                s.destinationFrame.height = s.renderTexture.height;
                var m = this.tempRect;
                m.x = 0,
                m.y = 0,
                m.width = s.sourceFrame.width,
                m.height = s.sourceFrame.height,
                s.renderTexture.filterFrame = s.sourceFrame,
                s.bindingSourceFrame.copyFrom(a.sourceFrame),
                s.bindingDestinationFrame.copyFrom(a.destinationFrame),
                s.transform = n.projection.transform,
                n.projection.transform = null,
                a.bind(s.renderTexture, s.sourceFrame, m),
                n.framebuffer.clear(0, 0, 0, 0)
            }
            ,
            t.prototype.pop = function() {
                var t = this.defaultFilterStack
                  , e = t.pop()
                  , r = e.filters;
                this.activeState = e;
                var i = this.globalUniforms.uniforms;
                i.outputFrame = e.sourceFrame,
                i.resolution = e.resolution;
                var n = i.inputSize
                  , o = i.inputPixel
                  , s = i.inputClamp;
                if (n[0] = e.destinationFrame.width,
                n[1] = e.destinationFrame.height,
                n[2] = 1 / n[0],
                n[3] = 1 / n[1],
                o[0] = Math.round(n[0] * e.resolution),
                o[1] = Math.round(n[1] * e.resolution),
                o[2] = 1 / o[0],
                o[3] = 1 / o[1],
                s[0] = .5 * o[2],
                s[1] = .5 * o[3],
                s[2] = e.sourceFrame.width * n[2] - .5 * o[2],
                s[3] = e.sourceFrame.height * n[3] - .5 * o[3],
                e.legacy) {
                    var a = i.filterArea;
                    a[0] = e.destinationFrame.width,
                    a[1] = e.destinationFrame.height,
                    a[2] = e.sourceFrame.x,
                    a[3] = e.sourceFrame.y,
                    i.filterClamp = i.inputClamp
                }
                this.globalUniforms.update();
                var u = t[t.length - 1];
                if (this.renderer.framebuffer.blit(),
                1 === r.length)
                    r[0].apply(this, e.renderTexture, u.renderTexture, O.BLEND, e),
                    this.returnFilterTexture(e.renderTexture);
                else {
                    var h = e.renderTexture
                      , l = this.getOptimalFilterTexture(h.width, h.height, e.resolution);
                    l.filterFrame = h.filterFrame;
                    var c = 0;
                    for (c = 0; c < r.length - 1; ++c) {
                        1 === c && e.multisample > 1 && ((l = this.getOptimalFilterTexture(h.width, h.height, e.resolution)).filterFrame = h.filterFrame),
                        r[c].apply(this, h, l, O.CLEAR, e);
                        var d = h;
                        h = l,
                        l = d
                    }
                    r[c].apply(this, h, u.renderTexture, O.BLEND, e),
                    c > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture),
                    this.returnFilterTexture(h),
                    this.returnFilterTexture(l)
                }
                e.clear(),
                this.statePool.push(e)
            }
            ,
            t.prototype.bindAndClear = function(t, e) {
                void 0 === e && (e = O.CLEAR);
                var r = this.renderer
                  , i = r.renderTexture
                  , n = r.state;
                if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null,
                t && t.filterFrame) {
                    var o = this.tempRect;
                    o.x = 0,
                    o.y = 0,
                    o.width = t.filterFrame.width,
                    o.height = t.filterFrame.height,
                    i.bind(t, t.filterFrame, o)
                } else
                    t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? i.bind(t) : this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
                var s = 1 & n.stateId || this.forceClear;
                (e === O.CLEAR || e === O.BLIT && s) && this.renderer.framebuffer.clear(0, 0, 0, 0)
            }
            ,
            t.prototype.applyFilter = function(t, e, r, i) {
                var n = this.renderer;
                n.state.set(t.state),
                this.bindAndClear(r, i),
                t.uniforms.uSampler = e,
                t.uniforms.filterGlobals = this.globalUniforms,
                n.shader.bind(t),
                t.legacy = !!t.program.attributeData.aTextureCoord,
                t.legacy ? (this.quadUv.map(e._frame, e.filterFrame),
                n.geometry.bind(this.quadUv),
                n.geometry.draw(y.TRIANGLES)) : (n.geometry.bind(this.quad),
                n.geometry.draw(y.TRIANGLE_STRIP))
            }
            ,
            t.prototype.calculateSpriteMatrix = function(t, e) {
                var r = this.activeState
                  , i = r.sourceFrame
                  , n = r.destinationFrame
                  , o = e._texture.orig
                  , s = t.set(n.width, 0, 0, n.height, i.x, i.y)
                  , a = e.worldTransform.copyTo(zt.TEMP_MATRIX);
                return a.invert(),
                s.prepend(a),
                s.scale(1 / o.width, 1 / o.height),
                s.translate(e.anchor.x, e.anchor.y),
                s
            }
            ,
            t.prototype.destroy = function() {
                this.renderer = null,
                this.texturePool.clear(!1)
            }
            ,
            t.prototype.getOptimalFilterTexture = function(t, e, r, i) {
                return void 0 === r && (r = 1),
                void 0 === i && (i = C.NONE),
                this.texturePool.getOptimalTexture(t, e, r, i)
            }
            ,
            t.prototype.getFilterTexture = function(t, e, r) {
                if ("number" == typeof t) {
                    var i = t;
                    t = e,
                    e = i
                }
                t = t || this.activeState.renderTexture;
                var n = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution, r || C.NONE);
                return n.filterFrame = t.filterFrame,
                n
            }
            ,
            t.prototype.returnFilterTexture = function(t) {
                this.texturePool.returnTexture(t)
            }
            ,
            t.prototype.emptyPool = function() {
                this.texturePool.clear(!0)
            }
            ,
            t.prototype.resize = function() {
                this.texturePool.setScreenSize(this.renderer.view)
            }
            ,
            t.prototype.transformAABB = function(t, e) {
                var r = sr[0]
                  , i = sr[1]
                  , n = sr[2]
                  , o = sr[3];
                r.set(e.left, e.top),
                i.set(e.left, e.bottom),
                n.set(e.right, e.top),
                o.set(e.right, e.bottom),
                t.apply(r, r),
                t.apply(i, i),
                t.apply(n, n),
                t.apply(o, o);
                var s = Math.min(r.x, i.x, n.x, o.x)
                  , a = Math.min(r.y, i.y, n.y, o.y)
                  , u = Math.max(r.x, i.x, n.x, o.x)
                  , h = Math.max(r.y, i.y, n.y, o.y);
                e.x = s,
                e.y = a,
                e.width = u - s,
                e.height = h - a
            }
            ,
            t.prototype.roundFrame = function(t, e, r, i, n) {
                if (!(t.width <= 0 || t.height <= 0 || r.width <= 0 || r.height <= 0)) {
                    if (n) {
                        var o = n.a
                          , s = n.b
                          , a = n.c
                          , u = n.d;
                        if ((Math.abs(s) > 1e-4 || Math.abs(a) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(u) > 1e-4))
                            return
                    }
                    (n = n ? ar.copyFrom(n) : ar.identity()).translate(-r.x, -r.y).scale(i.width / r.width, i.height / r.height).translate(i.x, i.y),
                    this.transformAABB(n, t),
                    t.ceil(e),
                    this.transformAABB(n.invert(), t)
                }
            }
            ,
            t
        }()
          , hr = function() {
            function t(t) {
                this.renderer = t
            }
            return t.prototype.flush = function() {}
            ,
            t.prototype.destroy = function() {
                this.renderer = null
            }
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.stop = function() {
                this.flush()
            }
            ,
            t.prototype.render = function(t) {}
            ,
            t
        }()
          , lr = function() {
            function t(t) {
                this.renderer = t,
                this.emptyRenderer = new hr(t),
                this.currentRenderer = this.emptyRenderer
            }
            return t.prototype.setObjectRenderer = function(t) {
                this.currentRenderer !== t && (this.currentRenderer.stop(),
                this.currentRenderer = t,
                this.currentRenderer.start())
            }
            ,
            t.prototype.flush = function() {
                this.setObjectRenderer(this.emptyRenderer)
            }
            ,
            t.prototype.reset = function() {
                this.setObjectRenderer(this.emptyRenderer)
            }
            ,
            t.prototype.copyBoundTextures = function(t, e) {
                for (var r = this.renderer.texture.boundTextures, i = e - 1; i >= 0; --i)
                    t[i] = r[i] || null,
                    t[i] && (t[i]._batchLocation = i)
            }
            ,
            t.prototype.boundArray = function(t, e, r, i) {
                for (var n = t.elements, o = t.ids, s = t.count, a = 0, u = 0; u < s; u++) {
                    var h = n[u]
                      , l = h._batchLocation;
                    if (l >= 0 && l < i && e[l] === h)
                        o[u] = l;
                    else
                        for (; a < i; ) {
                            var c = e[a];
                            if (!c || c._batchEnabled !== r || c._batchLocation !== a) {
                                o[u] = a,
                                h._batchLocation = a,
                                e[a] = h;
                                break
                            }
                            a++
                        }
                }
            }
            ,
            t.prototype.destroy = function() {
                this.renderer = null
            }
            ,
            t
        }()
          , cr = 0
          , dr = function() {
            function t(t) {
                this.renderer = t,
                this.webGLVersion = 1,
                this.extensions = {},
                this.supports = {
                    uint32Indices: !1
                },
                this.handleContextLost = this.handleContextLost.bind(this),
                this.handleContextRestored = this.handleContextRestored.bind(this),
                t.view.addEventListener("webglcontextlost", this.handleContextLost, !1),
                t.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1)
            }
            return Object.defineProperty(t.prototype, "isLost", {
                get: function() {
                    return !this.gl || this.gl.isContextLost()
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.contextChange = function(t) {
                this.gl = t,
                this.renderer.gl = t,
                this.renderer.CONTEXT_UID = cr++,
                t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext()
            }
            ,
            t.prototype.initFromContext = function(t) {
                this.gl = t,
                this.validateContext(t),
                this.renderer.gl = t,
                this.renderer.CONTEXT_UID = cr++,
                this.renderer.runners.contextChange.emit(t)
            }
            ,
            t.prototype.initFromOptions = function(t) {
                var e = this.createContext(this.renderer.view, t);
                this.initFromContext(e)
            }
            ,
            t.prototype.createContext = function(t, e) {
                var r;
                if (nt.PREFER_ENV >= _.WEBGL2 && (r = t.getContext("webgl2", e)),
                r)
                    this.webGLVersion = 2;
                else if (this.webGLVersion = 1,
                !(r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e)))
                    throw new Error("This browser does not support WebGL. Try using the canvas renderer");
                return this.gl = r,
                this.getExtensions(),
                this.gl
            }
            ,
            t.prototype.getExtensions = function() {
                var t = this.gl
                  , e = {
                    anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                    floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                    s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
                    s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                    etc: t.getExtension("WEBGL_compressed_texture_etc"),
                    etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
                    pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                    atc: t.getExtension("WEBGL_compressed_texture_atc"),
                    astc: t.getExtension("WEBGL_compressed_texture_astc")
                };
                1 === this.webGLVersion ? Object.assign(this.extensions, e, {
                    drawBuffers: t.getExtension("WEBGL_draw_buffers"),
                    depthTexture: t.getExtension("WEBGL_depth_texture"),
                    loseContext: t.getExtension("WEBGL_lose_context"),
                    vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
                    uint32ElementIndex: t.getExtension("OES_element_index_uint"),
                    floatTexture: t.getExtension("OES_texture_float"),
                    floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                    textureHalfFloat: t.getExtension("OES_texture_half_float"),
                    textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
                }) : 2 === this.webGLVersion && Object.assign(this.extensions, e, {
                    colorBufferFloat: t.getExtension("EXT_color_buffer_float")
                })
            }
            ,
            t.prototype.handleContextLost = function(t) {
                t.preventDefault()
            }
            ,
            t.prototype.handleContextRestored = function() {
                this.renderer.runners.contextChange.emit(this.gl)
            }
            ,
            t.prototype.destroy = function() {
                var t = this.renderer.view;
                this.renderer = null,
                t.removeEventListener("webglcontextlost", this.handleContextLost),
                t.removeEventListener("webglcontextrestored", this.handleContextRestored),
                this.gl.useProgram(null),
                this.extensions.loseContext && this.extensions.loseContext.loseContext()
            }
            ,
            t.prototype.postrender = function() {
                this.renderer.renderingToScreen && this.gl.flush()
            }
            ,
            t.prototype.validateContext = function(t) {
                var e = t.getContextAttributes()
                  , r = "WebGL2RenderingContext"in globalThis && t instanceof globalThis.WebGL2RenderingContext;
                r && (this.webGLVersion = 2),
                e && !e.stencil && console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
                var i = r || !!t.getExtension("OES_element_index_uint");
                this.supports.uint32Indices = i,
                i || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")
            }
            ,
            t
        }()
          , pr = function(t) {
            this.framebuffer = t,
            this.stencil = null,
            this.dirtyId = -1,
            this.dirtyFormat = -1,
            this.dirtySize = -1,
            this.multisample = C.NONE,
            this.msaaBuffer = null,
            this.blitFramebuffer = null,
            this.mipLevel = 0
        }
          , fr = new Xt
          , _r = function() {
            function t(t) {
                this.renderer = t,
                this.managedFramebuffers = [],
                this.unknownFramebuffer = new Ue(10,10),
                this.msaaSamples = null
            }
            return t.prototype.contextChange = function() {
                var t = this.gl = this.renderer.gl;
                if (this.CONTEXT_UID = this.renderer.CONTEXT_UID,
                this.current = this.unknownFramebuffer,
                this.viewport = new Xt,
                this.hasMRT = !0,
                this.writeDepthTexture = !0,
                this.disposeAll(!0),
                1 === this.renderer.context.webGLVersion) {
                    var e = this.renderer.context.extensions.drawBuffers
                      , r = this.renderer.context.extensions.depthTexture;
                    nt.PREFER_ENV === _.WEBGL_LEGACY && (e = null,
                    r = null),
                    e ? t.drawBuffers = function(t) {
                        return e.drawBuffersWEBGL(t)
                    }
                    : (this.hasMRT = !1,
                    t.drawBuffers = function() {}
                    ),
                    r || (this.writeDepthTexture = !1)
                } else
                    this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES)
            }
            ,
            t.prototype.bind = function(t, e, r) {
                void 0 === r && (r = 0);
                var i = this.gl;
                if (t) {
                    var n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
                    this.current !== t && (this.current = t,
                    i.bindFramebuffer(i.FRAMEBUFFER, n.framebuffer)),
                    n.mipLevel !== r && (t.dirtyId++,
                    t.dirtyFormat++,
                    n.mipLevel = r),
                    n.dirtyId !== t.dirtyId && (n.dirtyId = t.dirtyId,
                    n.dirtyFormat !== t.dirtyFormat ? (n.dirtyFormat = t.dirtyFormat,
                    n.dirtySize = t.dirtySize,
                    this.updateFramebuffer(t, r)) : n.dirtySize !== t.dirtySize && (n.dirtySize = t.dirtySize,
                    this.resizeFramebuffer(t)));
                    for (var o = 0; o < t.colorTextures.length; o++) {
                        var s = t.colorTextures[o];
                        this.renderer.texture.unbind(s.parentTextureArray || s)
                    }
                    if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture),
                    e) {
                        var a = e.width >> r
                          , u = e.height >> r
                          , h = a / e.width;
                        this.setViewport(e.x * h, e.y * h, a, u)
                    } else
                        a = t.width >> r,
                        u = t.height >> r,
                        this.setViewport(0, 0, a, u)
                } else
                    this.current && (this.current = null,
                    i.bindFramebuffer(i.FRAMEBUFFER, null)),
                    e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
            }
            ,
            t.prototype.setViewport = function(t, e, r, i) {
                var n = this.viewport;
                t = Math.round(t),
                e = Math.round(e),
                r = Math.round(r),
                i = Math.round(i),
                n.width === r && n.height === i && n.x === t && n.y === e || (n.x = t,
                n.y = e,
                n.width = r,
                n.height = i,
                this.gl.viewport(t, e, r, i))
            }
            ,
            Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.current ? {
                        x: 0,
                        y: 0,
                        width: this.current.width,
                        height: this.current.height
                    } : {
                        x: 0,
                        y: 0,
                        width: this.renderer.width,
                        height: this.renderer.height
                    }
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.clear = function(t, e, r, i, n) {
                void 0 === n && (n = v.COLOR | v.DEPTH);
                var o = this.gl;
                o.clearColor(t, e, r, i),
                o.clear(n)
            }
            ,
            t.prototype.initFramebuffer = function(t) {
                var e = this.gl
                  , r = new pr(e.createFramebuffer());
                return r.multisample = this.detectSamples(t.multisample),
                t.glFramebuffers[this.CONTEXT_UID] = r,
                this.managedFramebuffers.push(t),
                t.disposeRunner.add(this),
                r
            }
            ,
            t.prototype.resizeFramebuffer = function(t) {
                var e = this.gl
                  , r = t.glFramebuffers[this.CONTEXT_UID];
                r.msaaBuffer && (e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer),
                e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, e.RGBA8, t.width, t.height)),
                r.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, r.stencil),
                r.msaaBuffer ? e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, e.DEPTH24_STENCIL8, t.width, t.height) : e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height));
                var i = t.colorTextures
                  , n = i.length;
                e.drawBuffers || (n = Math.min(n, 1));
                for (var o = 0; o < n; o++) {
                    var s = i[o]
                      , a = s.parentTextureArray || s;
                    this.renderer.texture.bind(a, 0)
                }
                t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0)
            }
            ,
            t.prototype.updateFramebuffer = function(t, e) {
                var r = this.gl
                  , i = t.glFramebuffers[this.CONTEXT_UID]
                  , n = t.colorTextures
                  , o = n.length;
                r.drawBuffers || (o = Math.min(o, 1)),
                i.multisample > 1 && this.canMultisampleFramebuffer(t) ? (i.msaaBuffer = i.msaaBuffer || r.createRenderbuffer(),
                r.bindRenderbuffer(r.RENDERBUFFER, i.msaaBuffer),
                r.renderbufferStorageMultisample(r.RENDERBUFFER, i.multisample, r.RGBA8, t.width, t.height),
                r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, i.msaaBuffer)) : i.msaaBuffer && (r.deleteRenderbuffer(i.msaaBuffer),
                i.msaaBuffer = null,
                i.blitFramebuffer && (i.blitFramebuffer.dispose(),
                i.blitFramebuffer = null));
                for (var s = [], a = 0; a < o; a++) {
                    var u = n[a]
                      , h = u.parentTextureArray || u;
                    this.renderer.texture.bind(h, 0),
                    0 === a && i.msaaBuffer || (r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + a, u.target, h._glTextures[this.CONTEXT_UID].texture, e),
                    s.push(r.COLOR_ATTACHMENT0 + a))
                }
                if (s.length > 1 && r.drawBuffers(s),
                t.depthTexture && this.writeDepthTexture) {
                    var l = t.depthTexture;
                    this.renderer.texture.bind(l, 0),
                    r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, l._glTextures[this.CONTEXT_UID].texture, e)
                }
                !t.stencil && !t.depth || t.depthTexture && this.writeDepthTexture ? i.stencil && (r.deleteRenderbuffer(i.stencil),
                i.stencil = null) : (i.stencil = i.stencil || r.createRenderbuffer(),
                r.bindRenderbuffer(r.RENDERBUFFER, i.stencil),
                i.msaaBuffer ? r.renderbufferStorageMultisample(r.RENDERBUFFER, i.multisample, r.DEPTH24_STENCIL8, t.width, t.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t.width, t.height),
                r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, i.stencil))
            }
            ,
            t.prototype.canMultisampleFramebuffer = function(t) {
                return 1 !== this.renderer.context.webGLVersion && t.colorTextures.length <= 1 && !t.depthTexture
            }
            ,
            t.prototype.detectSamples = function(t) {
                var e = this.msaaSamples
                  , r = C.NONE;
                if (t <= 1 || null === e)
                    return r;
                for (var i = 0; i < e.length; i++)
                    if (e[i] <= t) {
                        r = e[i];
                        break
                    }
                return 1 === r && (r = C.NONE),
                r
            }
            ,
            t.prototype.blit = function(t, e, r) {
                var i = this
                  , n = i.current
                  , o = i.renderer
                  , s = i.gl
                  , a = i.CONTEXT_UID;
                if (2 === o.context.webGLVersion && n) {
                    var u = n.glFramebuffers[a];
                    if (u) {
                        if (!t) {
                            if (!u.msaaBuffer)
                                return;
                            var h = n.colorTextures[0];
                            if (!h)
                                return;
                            u.blitFramebuffer || (u.blitFramebuffer = new Ue(n.width,n.height),
                            u.blitFramebuffer.addColorTexture(0, h)),
                            (t = u.blitFramebuffer).colorTextures[0] !== h && (t.colorTextures[0] = h,
                            t.dirtyId++,
                            t.dirtyFormat++),
                            t.width === n.width && t.height === n.height || (t.width = n.width,
                            t.height = n.height,
                            t.dirtyId++,
                            t.dirtySize++)
                        }
                        e || ((e = fr).width = n.width,
                        e.height = n.height),
                        r || (r = e);
                        var l = e.width === r.width && e.height === r.height;
                        this.bind(t),
                        s.bindFramebuffer(s.READ_FRAMEBUFFER, u.framebuffer),
                        s.blitFramebuffer(e.left, e.top, e.right, e.bottom, r.left, r.top, r.right, r.bottom, s.COLOR_BUFFER_BIT, l ? s.NEAREST : s.LINEAR)
                    }
                }
            }
            ,
            t.prototype.disposeFramebuffer = function(t, e) {
                var r = t.glFramebuffers[this.CONTEXT_UID]
                  , i = this.gl;
                if (r) {
                    delete t.glFramebuffers[this.CONTEXT_UID];
                    var n = this.managedFramebuffers.indexOf(t);
                    n >= 0 && this.managedFramebuffers.splice(n, 1),
                    t.disposeRunner.remove(this),
                    e || (i.deleteFramebuffer(r.framebuffer),
                    r.msaaBuffer && i.deleteRenderbuffer(r.msaaBuffer),
                    r.stencil && i.deleteRenderbuffer(r.stencil)),
                    r.blitFramebuffer && r.blitFramebuffer.dispose()
                }
            }
            ,
            t.prototype.disposeAll = function(t) {
                var e = this.managedFramebuffers;
                this.managedFramebuffers = [];
                for (var r = 0; r < e.length; r++)
                    this.disposeFramebuffer(e[r], t)
            }
            ,
            t.prototype.forceStencil = function() {
                var t = this.current;
                if (t) {
                    var e = t.glFramebuffers[this.CONTEXT_UID];
                    if (e && !e.stencil) {
                        t.stencil = !0;
                        var r = t.width
                          , i = t.height
                          , n = this.gl
                          , o = n.createRenderbuffer();
                        n.bindRenderbuffer(n.RENDERBUFFER, o),
                        e.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, e.multisample, n.DEPTH24_STENCIL8, r, i) : n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, r, i),
                        e.stencil = o,
                        n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o)
                    }
                }
            }
            ,
            t.prototype.reset = function() {
                this.current = this.unknownFramebuffer,
                this.viewport = new Xt
            }
            ,
            t.prototype.destroy = function() {
                this.renderer = null
            }
            ,
            t
        }()
          , mr = {
            5126: 4,
            5123: 2,
            5121: 1
        }
          , vr = function() {
            function t(t) {
                this.renderer = t,
                this._activeGeometry = null,
                this._activeVao = null,
                this.hasVao = !0,
                this.hasInstance = !0,
                this.canUseUInt32ElementIndex = !1,
                this.managedGeometries = {}
            }
            return t.prototype.contextChange = function() {
                this.disposeAll(!0);
                var t = this.gl = this.renderer.gl
                  , e = this.renderer.context;
                if (this.CONTEXT_UID = this.renderer.CONTEXT_UID,
                2 !== e.webGLVersion) {
                    var r = this.renderer.context.extensions.vertexArrayObject;
                    nt.PREFER_ENV === _.WEBGL_LEGACY && (r = null),
                    r ? (t.createVertexArray = function() {
                        return r.createVertexArrayOES()
                    }
                    ,
                    t.bindVertexArray = function(t) {
                        return r.bindVertexArrayOES(t)
                    }
                    ,
                    t.deleteVertexArray = function(t) {
                        return r.deleteVertexArrayOES(t)
                    }
                    ) : (this.hasVao = !1,
                    t.createVertexArray = function() {
                        return null
                    }
                    ,
                    t.bindVertexArray = function() {
                        return null
                    }
                    ,
                    t.deleteVertexArray = function() {
                        return null
                    }
                    )
                }
                if (2 !== e.webGLVersion) {
                    var i = t.getExtension("ANGLE_instanced_arrays");
                    i ? (t.vertexAttribDivisor = function(t, e) {
                        return i.vertexAttribDivisorANGLE(t, e)
                    }
                    ,
                    t.drawElementsInstanced = function(t, e, r, n, o) {
                        return i.drawElementsInstancedANGLE(t, e, r, n, o)
                    }
                    ,
                    t.drawArraysInstanced = function(t, e, r, n) {
                        return i.drawArraysInstancedANGLE(t, e, r, n)
                    }
                    ) : this.hasInstance = !1
                }
                this.canUseUInt32ElementIndex = 2 === e.webGLVersion || !!e.extensions.uint32ElementIndex
            }
            ,
            t.prototype.bind = function(t, e) {
                e = e || this.renderer.shader.shader;
                var r = this.gl
                  , i = t.glVertexArrayObjects[this.CONTEXT_UID]
                  , n = !1;
                i || (this.managedGeometries[t.id] = t,
                t.disposeRunner.add(this),
                t.glVertexArrayObjects[this.CONTEXT_UID] = i = {},
                n = !0);
                var o = i[e.program.id] || this.initGeometryVao(t, e, n);
                this._activeGeometry = t,
                this._activeVao !== o && (this._activeVao = o,
                this.hasVao ? r.bindVertexArray(o) : this.activateVao(t, e.program)),
                this.updateBuffers()
            }
            ,
            t.prototype.reset = function() {
                this.unbind()
            }
            ,
            t.prototype.updateBuffers = function() {
                for (var t = this._activeGeometry, e = this.renderer.buffer, r = 0; r < t.buffers.length; r++) {
                    var i = t.buffers[r];
                    e.update(i)
                }
            }
            ,
            t.prototype.checkCompatibility = function(t, e) {
                var r = t.attributes
                  , i = e.attributeData;
                for (var n in i)
                    if (!r[n])
                        throw new Error('shader and geometry incompatible, geometry missing the "' + n + '" attribute')
            }
            ,
            t.prototype.getSignature = function(t, e) {
                var r = t.attributes
                  , i = e.attributeData
                  , n = ["g", t.id];
                for (var o in r)
                    i[o] && n.push(o, i[o].location);
                return n.join("-")
            }
            ,
            t.prototype.initGeometryVao = function(t, e, r) {
                void 0 === r && (r = !0);
                var i = this.gl
                  , n = this.CONTEXT_UID
                  , o = this.renderer.buffer
                  , s = e.program;
                s.glPrograms[n] || this.renderer.shader.generateProgram(e),
                this.checkCompatibility(t, s);
                var a = this.getSignature(t, s)
                  , u = t.glVertexArrayObjects[this.CONTEXT_UID]
                  , h = u[a];
                if (h)
                    return u[s.id] = h,
                    h;
                var l = t.buffers
                  , c = t.attributes
                  , d = {}
                  , p = {};
                for (var f in l)
                    d[f] = 0,
                    p[f] = 0;
                for (var f in c)
                    !c[f].size && s.attributeData[f] ? c[f].size = s.attributeData[f].size : c[f].size || console.warn("PIXI Geometry attribute '" + f + "' size cannot be determined (likely the bound shader does not have the attribute)"),
                    d[c[f].buffer] += c[f].size * mr[c[f].type];
                for (var f in c) {
                    var _ = c[f]
                      , m = _.size;
                    void 0 === _.stride && (d[_.buffer] === m * mr[_.type] ? _.stride = 0 : _.stride = d[_.buffer]),
                    void 0 === _.start && (_.start = p[_.buffer],
                    p[_.buffer] += m * mr[_.type])
                }
                h = i.createVertexArray(),
                i.bindVertexArray(h);
                for (var v = 0; v < l.length; v++) {
                    var g = l[v];
                    o.bind(g),
                    r && g._glBuffers[n].refCount++
                }
                return this.activateVao(t, s),
                this._activeVao = h,
                u[s.id] = h,
                u[a] = h,
                h
            }
            ,
            t.prototype.disposeGeometry = function(t, e) {
                var r;
                if (this.managedGeometries[t.id]) {
                    delete this.managedGeometries[t.id];
                    var i = t.glVertexArrayObjects[this.CONTEXT_UID]
                      , n = this.gl
                      , o = t.buffers
                      , s = null === (r = this.renderer) || void 0 === r ? void 0 : r.buffer;
                    if (t.disposeRunner.remove(this),
                    i) {
                        if (s)
                            for (var a = 0; a < o.length; a++) {
                                var u = o[a]._glBuffers[this.CONTEXT_UID];
                                u && (u.refCount--,
                                0 !== u.refCount || e || s.dispose(o[a], e))
                            }
                        if (!e)
                            for (var h in i)
                                if ("g" === h[0]) {
                                    var l = i[h];
                                    this._activeVao === l && this.unbind(),
                                    n.deleteVertexArray(l)
                                }
                        delete t.glVertexArrayObjects[this.CONTEXT_UID]
                    }
                }
            }
            ,
            t.prototype.disposeAll = function(t) {
                for (var e = Object.keys(this.managedGeometries), r = 0; r < e.length; r++)
                    this.disposeGeometry(this.managedGeometries[e[r]], t)
            }
            ,
            t.prototype.activateVao = function(t, e) {
                var r = this.gl
                  , i = this.CONTEXT_UID
                  , n = this.renderer.buffer
                  , o = t.buffers
                  , s = t.attributes;
                t.indexBuffer && n.bind(t.indexBuffer);
                var a = null;
                for (var u in s) {
                    var h = s[u]
                      , l = o[h.buffer]
                      , c = l._glBuffers[i];
                    if (e.attributeData[u]) {
                        a !== c && (n.bind(l),
                        a = c);
                        var d = e.attributeData[u].location;
                        if (r.enableVertexAttribArray(d),
                        r.vertexAttribPointer(d, h.size, h.type || r.FLOAT, h.normalized, h.stride, h.start),
                        h.instance) {
                            if (!this.hasInstance)
                                throw new Error("geometry error, GPU Instancing is not supported on this device");
                            r.vertexAttribDivisor(d, 1)
                        }
                    }
                }
            }
            ,
            t.prototype.draw = function(t, e, r, i) {
                var n = this.gl
                  , o = this._activeGeometry;
                if (o.indexBuffer) {
                    var s = o.indexBuffer.data.BYTES_PER_ELEMENT
                      , a = 2 === s ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
                    2 === s || 4 === s && this.canUseUInt32ElementIndex ? o.instanced ? n.drawElementsInstanced(t, e || o.indexBuffer.data.length, a, (r || 0) * s, i || 1) : n.drawElements(t, e || o.indexBuffer.data.length, a, (r || 0) * s) : console.warn("unsupported index buffer type: uint32")
                } else
                    o.instanced ? n.drawArraysInstanced(t, r, e || o.getSize(), i || 1) : n.drawArrays(t, r, e || o.getSize());
                return this
            }
            ,
            t.prototype.unbind = function() {
                this.gl.bindVertexArray(null),
                this._activeVao = null,
                this._activeGeometry = null
            }
            ,
            t.prototype.destroy = function() {
                this.renderer = null
            }
            ,
            t
        }()
          , gr = function() {
            function t(t) {
                void 0 === t && (t = null),
                this.type = M.NONE,
                this.autoDetect = !0,
                this.maskObject = t || null,
                this.pooled = !1,
                this.isMaskData = !0,
                this.resolution = null,
                this.multisample = nt.FILTER_MULTISAMPLE,
                this.enabled = !0,
                this.colorMask = 15,
                this._filters = null,
                this._stencilCounter = 0,
                this._scissorCounter = 0,
                this._scissorRect = null,
                this._scissorRectLocal = null,
                this._colorMask = 15,
                this._target = null
            }
            return Object.defineProperty(t.prototype, "filter", {
                get: function() {
                    return this._filters ? this._filters[0] : null
                },
                set: function(t) {
                    t ? this._filters ? this._filters[0] = t : this._filters = [t] : this._filters = null
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.reset = function() {
                this.pooled && (this.maskObject = null,
                this.type = M.NONE,
                this.autoDetect = !0),
                this._target = null,
                this._scissorRectLocal = null
            }
            ,
            t.prototype.copyCountersOrReset = function(t) {
                t ? (this._stencilCounter = t._stencilCounter,
                this._scissorCounter = t._scissorCounter,
                this._scissorRect = t._scissorRect) : (this._stencilCounter = 0,
                this._scissorCounter = 0,
                this._scissorRect = null)
            }
            ,
            t
        }();
        function yr(t, e, r) {
            var i = t.createShader(e);
            return t.shaderSource(i, r),
            t.compileShader(i),
            i
        }
        function br(t, e) {
            var r = t.getShaderSource(e).split("\n").map((function(t, e) {
                return e + ": " + t
            }
            ))
              , i = t.getShaderInfoLog(e)
              , n = i.split("\n")
              , o = {}
              , s = n.map((function(t) {
                return parseFloat(t.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))
            }
            )).filter((function(t) {
                return !(!t || o[t] || (o[t] = !0,
                0))
            }
            ))
              , a = [""];
            s.forEach((function(t) {
                r[t - 1] = "%c" + r[t - 1] + "%c",
                a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px")
            }
            ));
            var u = r.join("\n");
            a[0] = u,
            console.error(i),
            console.groupCollapsed("click to view full shader code"),
            console.warn.apply(console, a),
            console.groupEnd()
        }
        function xr(t) {
            for (var e = new Array(t), r = 0; r < e.length; r++)
                e[r] = !1;
            return e
        }
        function Tr(t, e) {
            switch (t) {
            case "float":
                return 0;
            case "vec2":
                return new Float32Array(2 * e);
            case "vec3":
                return new Float32Array(3 * e);
            case "vec4":
                return new Float32Array(4 * e);
            case "int":
            case "uint":
            case "sampler2D":
            case "sampler2DArray":
                return 0;
            case "ivec2":
                return new Int32Array(2 * e);
            case "ivec3":
                return new Int32Array(3 * e);
            case "ivec4":
                return new Int32Array(4 * e);
            case "uvec2":
                return new Uint32Array(2 * e);
            case "uvec3":
                return new Uint32Array(3 * e);
            case "uvec4":
                return new Uint32Array(4 * e);
            case "bool":
                return !1;
            case "bvec2":
                return xr(2 * e);
            case "bvec3":
                return xr(3 * e);
            case "bvec4":
                return xr(4 * e);
            case "mat2":
                return new Float32Array([1, 0, 0, 1]);
            case "mat3":
                return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
            case "mat4":
                return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
            }
            return null
        }
        var Er, Ar = {}, Sr = Ar;
        function Rr(t, e, r) {
            if ("precision" !== t.substring(0, 9)) {
                var i = e;
                return e === P.HIGH && r !== P.HIGH && (i = P.MEDIUM),
                "precision " + i + " float;\n" + t
            }
            return r !== P.HIGH && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t
        }
        var wr = {
            float: 1,
            vec2: 2,
            vec3: 3,
            vec4: 4,
            int: 1,
            ivec2: 2,
            ivec3: 3,
            ivec4: 4,
            uint: 1,
            uvec2: 2,
            uvec3: 3,
            uvec4: 4,
            bool: 1,
            bvec2: 2,
            bvec3: 3,
            bvec4: 4,
            mat2: 4,
            mat3: 9,
            mat4: 16,
            sampler2D: 1
        };
        function Or(t) {
            return wr[t]
        }
        var Ir = null
          , Pr = {
            FLOAT: "float",
            FLOAT_VEC2: "vec2",
            FLOAT_VEC3: "vec3",
            FLOAT_VEC4: "vec4",
            INT: "int",
            INT_VEC2: "ivec2",
            INT_VEC3: "ivec3",
            INT_VEC4: "ivec4",
            UNSIGNED_INT: "uint",
            UNSIGNED_INT_VEC2: "uvec2",
            UNSIGNED_INT_VEC3: "uvec3",
            UNSIGNED_INT_VEC4: "uvec4",
            BOOL: "bool",
            BOOL_VEC2: "bvec2",
            BOOL_VEC3: "bvec3",
            BOOL_VEC4: "bvec4",
            FLOAT_MAT2: "mat2",
            FLOAT_MAT3: "mat3",
            FLOAT_MAT4: "mat4",
            SAMPLER_2D: "sampler2D",
            INT_SAMPLER_2D: "sampler2D",
            UNSIGNED_INT_SAMPLER_2D: "sampler2D",
            SAMPLER_CUBE: "samplerCube",
            INT_SAMPLER_CUBE: "samplerCube",
            UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
            SAMPLER_2D_ARRAY: "sampler2DArray",
            INT_SAMPLER_2D_ARRAY: "sampler2DArray",
            UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
        };
        function Mr(t, e) {
            if (!Ir) {
                var r = Object.keys(Pr);
                Ir = {};
                for (var i = 0; i < r.length; ++i) {
                    var n = r[i];
                    Ir[t[n]] = Pr[n]
                }
            }
            return Ir[e]
        }
        var Dr, Cr = [{
            test: function(t) {
                return "float" === t.type && 1 === t.size && !t.isArray
            },
            code: function(t) {
                return '\n            if(uv["' + t + '"] !== ud["' + t + '"].value)\n            {\n                ud["' + t + '"].value = uv["' + t + '"]\n                gl.uniform1f(ud["' + t + '"].location, uv["' + t + '"])\n            }\n            '
            }
        }, {
            test: function(t, e) {
                return !("sampler2D" !== t.type && "samplerCube" !== t.type && "sampler2DArray" !== t.type || 1 !== t.size || t.isArray || null != e && void 0 === e.castToBaseTexture)
            },
            code: function(t) {
                return 't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' + t + '"], t);\n\n            if(ud["' + t + '"].value !== t)\n            {\n                ud["' + t + '"].value = t;\n                gl.uniform1i(ud["' + t + '"].location, t);\n; // eslint-disable-line max-len\n            }'
            }
        }, {
            test: function(t, e) {
                return "mat3" === t.type && 1 === t.size && !t.isArray && void 0 !== e.a
            },
            code: function(t) {
                return '\n            gl.uniformMatrix3fv(ud["' + t + '"].location, false, uv["' + t + '"].toArray(true));\n            '
            },
            codeUbo: function(t) {
                return "\n                var " + t + "_matrix = uv." + t + ".toArray(true);\n\n                data[offset] = " + t + "_matrix[0];\n                data[offset+1] = " + t + "_matrix[1];\n                data[offset+2] = " + t + "_matrix[2];\n        \n                data[offset + 4] = " + t + "_matrix[3];\n                data[offset + 5] = " + t + "_matrix[4];\n                data[offset + 6] = " + t + "_matrix[5];\n        \n                data[offset + 8] = " + t + "_matrix[6];\n                data[offset + 9] = " + t + "_matrix[7];\n                data[offset + 10] = " + t + "_matrix[8];\n            "
            }
        }, {
            test: function(t, e) {
                return "vec2" === t.type && 1 === t.size && !t.isArray && void 0 !== e.x
            },
            code: function(t) {
                return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' + t + '"].location, v.x, v.y);\n                }'
            },
            codeUbo: function(t) {
                return "\n                v = uv." + t + ";\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            "
            }
        }, {
            test: function(t) {
                return "vec2" === t.type && 1 === t.size && !t.isArray
            },
            code: function(t) {
                return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' + t + '"].location, v[0], v[1]);\n                }\n            '
            }
        }, {
            test: function(t, e) {
                return "vec4" === t.type && 1 === t.size && !t.isArray && void 0 !== e.width
            },
            code: function(t) {
                return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' + t + '"].location, v.x, v.y, v.width, v.height)\n                }'
            },
            codeUbo: function(t) {
                return "\n                    v = uv." + t + ";\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                "
            }
        }, {
            test: function(t) {
                return "vec4" === t.type && 1 === t.size && !t.isArray
            },
            code: function(t) {
                return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' + t + '"].location, v[0], v[1], v[2], v[3])\n                }'
            }
        }], Fr = {
            float: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1f(location, v);\n    }",
            vec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2f(location, v[0], v[1])\n    }",
            vec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
            vec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n    }",
            int: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",
            ivec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",
            ivec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",
            ivec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",
            uint: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1ui(location, v);\n    }",
            uvec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2ui(location, v[0], v[1]);\n    }",
            uvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3ui(location, v[0], v[1], v[2]);\n    }",
            uvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n    }",
            bool: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1i(location, v);\n    }",
            bvec2: "\n    if (cv[0] != v[0] || cv[1] != v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",
            bvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",
            bvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",
            mat2: "gl.uniformMatrix2fv(location, false, v)",
            mat3: "gl.uniformMatrix3fv(location, false, v)",
            mat4: "gl.uniformMatrix4fv(location, false, v)",
            sampler2D: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",
            samplerCube: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",
            sampler2DArray: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }"
        }, Nr = {
            float: "gl.uniform1fv(location, v)",
            vec2: "gl.uniform2fv(location, v)",
            vec3: "gl.uniform3fv(location, v)",
            vec4: "gl.uniform4fv(location, v)",
            mat4: "gl.uniformMatrix4fv(location, false, v)",
            mat3: "gl.uniformMatrix3fv(location, false, v)",
            mat2: "gl.uniformMatrix2fv(location, false, v)",
            int: "gl.uniform1iv(location, v)",
            ivec2: "gl.uniform2iv(location, v)",
            ivec3: "gl.uniform3iv(location, v)",
            ivec4: "gl.uniform4iv(location, v)",
            uint: "gl.uniform1uiv(location, v)",
            uvec2: "gl.uniform2uiv(location, v)",
            uvec3: "gl.uniform3uiv(location, v)",
            uvec4: "gl.uniform4uiv(location, v)",
            bool: "gl.uniform1iv(location, v)",
            bvec2: "gl.uniform2iv(location, v)",
            bvec3: "gl.uniform3iv(location, v)",
            bvec4: "gl.uniform4iv(location, v)",
            sampler2D: "gl.uniform1iv(location, v)",
            samplerCube: "gl.uniform1iv(location, v)",
            sampler2DArray: "gl.uniform1iv(location, v)"
        }, Br = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");
        function Lr(t) {
            for (var e = "", r = 0; r < t; ++r)
                r > 0 && (e += "\nelse "),
                r < t - 1 && (e += "if(test == " + r + ".0){}");
            return e
        }
        var Gr = 0
          , Ur = {}
          , kr = function() {
            function t(e, r, i) {
                void 0 === i && (i = "pixi-shader"),
                this.id = Gr++,
                this.vertexSrc = e || t.defaultVertexSrc,
                this.fragmentSrc = r || t.defaultFragmentSrc,
                this.vertexSrc = this.vertexSrc.trim(),
                this.fragmentSrc = this.fragmentSrc.trim(),
                "#version" !== this.vertexSrc.substring(0, 8) && (i = i.replace(/\s+/g, "-"),
                Ur[i] ? (Ur[i]++,
                i += "-" + Ur[i]) : Ur[i] = 1,
                this.vertexSrc = "#define SHADER_NAME " + i + "\n" + this.vertexSrc,
                this.fragmentSrc = "#define SHADER_NAME " + i + "\n" + this.fragmentSrc,
                this.vertexSrc = Rr(this.vertexSrc, nt.PRECISION_VERTEX, P.HIGH),
                this.fragmentSrc = Rr(this.fragmentSrc, nt.PRECISION_FRAGMENT, function() {
                    if (!Er) {
                        Er = P.MEDIUM;
                        var t = function() {
                            if (Sr === Ar || Sr && Sr.isContextLost()) {
                                var t = nt.ADAPTER.createCanvas()
                                  , e = void 0;
                                nt.PREFER_ENV >= _.WEBGL2 && (e = t.getContext("webgl2", {})),
                                e || ((e = t.getContext("webgl", {}) || t.getContext("experimental-webgl", {})) ? e.getExtension("WEBGL_draw_buffers") : e = null),
                                Sr = e
                            }
                            return Sr
                        }();
                        if (t && t.getShaderPrecisionFormat) {
                            var e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
                            Er = e.precision ? P.HIGH : P.MEDIUM
                        }
                    }
                    return Er
                }())),
                this.glPrograms = {},
                this.syncUniforms = null
            }
            return Object.defineProperty(t, "defaultVertexSrc", {
                get: function() {
                    return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "defaultFragmentSrc", {
                get: function() {
                    return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}"
                },
                enumerable: !1,
                configurable: !0
            }),
            t.from = function(e, r, i) {
                var n = e + r
                  , o = Pt[n];
                return o || (Pt[n] = o = new t(e,r,i)),
                o
            }
            ,
            t
        }()
          , Xr = function() {
            function t(t, e) {
                this.uniformBindCount = 0,
                this.program = t,
                this.uniformGroup = e ? e instanceof nr ? e : new nr(e) : new nr({}),
                this.disposeRunner = new _e("disposeShader")
            }
            return t.prototype.checkUniformExists = function(t, e) {
                if (e.uniforms[t])
                    return !0;
                for (var r in e.uniforms) {
                    var i = e.uniforms[r];
                    if (i.group && this.checkUniformExists(t, i))
                        return !0
                }
                return !1
            }
            ,
            t.prototype.destroy = function() {
                this.uniformGroup = null,
                this.disposeRunner.emit(this),
                this.disposeRunner.destroy()
            }
            ,
            Object.defineProperty(t.prototype, "uniforms", {
                get: function() {
                    return this.uniformGroup.uniforms
                },
                enumerable: !1,
                configurable: !0
            }),
            t.from = function(e, r, i) {
                return new t(kr.from(e, r),i)
            }
            ,
            t
        }()
          , Hr = function() {
            function t() {
                this.data = 0,
                this.blendMode = g.NORMAL,
                this.polygonOffset = 0,
                this.blend = !0,
                this.depthMask = !0
            }
            return Object.defineProperty(t.prototype, "blend", {
                get: function() {
                    return !!(1 & this.data)
                },
                set: function(t) {
                    !!(1 & this.data) !== t && (this.data ^= 1)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "offsets", {
                get: function() {
                    return !!(2 & this.data)
                },
                set: function(t) {
                    !!(2 & this.data) !== t && (this.data ^= 2)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "culling", {
                get: function() {
                    return !!(4 & this.data)
                },
                set: function(t) {
                    !!(4 & this.data) !== t && (this.data ^= 4)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "depthTest", {
                get: function() {
                    return !!(8 & this.data)
                },
                set: function(t) {
                    !!(8 & this.data) !== t && (this.data ^= 8)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "depthMask", {
                get: function() {
                    return !!(32 & this.data)
                },
                set: function(t) {
                    !!(32 & this.data) !== t && (this.data ^= 32)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "clockwiseFrontFace", {
                get: function() {
                    return !!(16 & this.data)
                },
                set: function(t) {
                    !!(16 & this.data) !== t && (this.data ^= 16)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "blendMode", {
                get: function() {
                    return this._blendMode
                },
                set: function(t) {
                    this.blend = t !== g.NONE,
                    this._blendMode = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "polygonOffset", {
                get: function() {
                    return this._polygonOffset
                },
                set: function(t) {
                    this.offsets = !!t,
                    this._polygonOffset = t
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.toString = function() {
                return "[@pixi/core:State blendMode=" + this.blendMode + " clockwiseFrontFace=" + this.clockwiseFrontFace + " culling=" + this.culling + " depthMask=" + this.depthMask + " polygonOffset=" + this.polygonOffset + "]"
            }
            ,
            t.for2d = function() {
                var e = new t;
                return e.depthTest = !1,
                e.blend = !0,
                e
            }
            ,
            t
        }()
          , jr = function(t) {
            function e(r, i, n) {
                var o = this
                  , s = kr.from(r || e.defaultVertexSrc, i || e.defaultFragmentSrc);
                return (o = t.call(this, s, n) || this).padding = 0,
                o.resolution = nt.FILTER_RESOLUTION,
                o.multisample = nt.FILTER_MULTISAMPLE,
                o.enabled = !0,
                o.autoFit = !0,
                o.state = new Hr,
                o
            }
            return Te(e, t),
            e.prototype.apply = function(t, e, r, i, n) {
                t.applyFilter(this, e, r, i)
            }
            ,
            Object.defineProperty(e.prototype, "blendMode", {
                get: function() {
                    return this.state.blendMode
                },
                set: function(t) {
                    this.state.blendMode = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "resolution", {
                get: function() {
                    return this._resolution
                },
                set: function(t) {
                    this._resolution = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e, "defaultVertexSrc", {
                get: function() {
                    return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e, "defaultFragmentSrc", {
                get: function() {
                    return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        }(Xr)
          , Yr = new zt
          , Vr = function() {
            function t(t, e) {
                this._texture = t,
                this.mapCoord = new zt,
                this.uClampFrame = new Float32Array(4),
                this.uClampOffset = new Float32Array(2),
                this._textureID = -1,
                this._updateID = 0,
                this.clampOffset = 0,
                this.clampMargin = void 0 === e ? .5 : e,
                this.isSimple = !1
            }
            return Object.defineProperty(t.prototype, "texture", {
                get: function() {
                    return this._texture
                },
                set: function(t) {
                    this._texture = t,
                    this._textureID = -1
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.multiplyUvs = function(t, e) {
                void 0 === e && (e = t);
                for (var r = this.mapCoord, i = 0; i < t.length; i += 2) {
                    var n = t[i]
                      , o = t[i + 1];
                    e[i] = n * r.a + o * r.c + r.tx,
                    e[i + 1] = n * r.b + o * r.d + r.ty
                }
                return e
            }
            ,
            t.prototype.update = function(t) {
                var e = this._texture;
                if (!e || !e.valid)
                    return !1;
                if (!t && this._textureID === e._updateID)
                    return !1;
                this._textureID = e._updateID,
                this._updateID++;
                var r = e._uvs;
                this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
                var i = e.orig
                  , n = e.trim;
                n && (Yr.set(i.width / n.width, 0, 0, i.height / n.height, -n.x / n.width, -n.y / n.height),
                this.mapCoord.append(Yr));
                var o = e.baseTexture
                  , s = this.uClampFrame
                  , a = this.clampMargin / o.resolution
                  , u = this.clampOffset;
                return s[0] = (e._frame.x + a + u) / o.width,
                s[1] = (e._frame.y + a + u) / o.height,
                s[2] = (e._frame.x + e._frame.width - a + u) / o.width,
                s[3] = (e._frame.y + e._frame.height - a + u) / o.height,
                this.uClampOffset[0] = u / o.realWidth,
                this.uClampOffset[1] = u / o.realHeight,
                this.isSimple = e._frame.width === o.width && e._frame.height === o.height && 0 === e.rotate,
                !0
            }
            ,
            t
        }()
          , Wr = function(t) {
            function e(e, r, i) {
                var n = this
                  , o = null;
                return "string" != typeof e && void 0 === r && void 0 === i && (o = e,
                e = void 0,
                r = void 0,
                i = void 0),
                (n = t.call(this, e || "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", r || "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n", i) || this).maskSprite = o,
                n.maskMatrix = new zt,
                n
            }
            return Te(e, t),
            Object.defineProperty(e.prototype, "maskSprite", {
                get: function() {
                    return this._maskSprite
                },
                set: function(t) {
                    this._maskSprite = t,
                    this._maskSprite && (this._maskSprite.renderable = !1)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.apply = function(t, e, r, i) {
                var n = this._maskSprite
                  , o = n._texture;
                o.valid && (o.uvMatrix || (o.uvMatrix = new Vr(o,0)),
                o.uvMatrix.update(),
                this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1,
                this.uniforms.mask = o,
                this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.uvMatrix.mapCoord),
                this.uniforms.alpha = n.worldAlpha,
                this.uniforms.maskClamp = o.uvMatrix.uClampFrame,
                t.applyFilter(this, e, r, i))
            }
            ,
            e
        }(jr)
          , zr = function() {
            function t(t) {
                this.renderer = t,
                this.enableScissor = !0,
                this.alphaMaskPool = [],
                this.maskDataPool = [],
                this.maskStack = [],
                this.alphaMaskIndex = 0
            }
            return t.prototype.setMaskStack = function(t) {
                this.maskStack = t,
                this.renderer.scissor.setMaskStack(t),
                this.renderer.stencil.setMaskStack(t)
            }
            ,
            t.prototype.push = function(t, e) {
                var r = e;
                if (!r.isMaskData) {
                    var i = this.maskDataPool.pop() || new gr;
                    i.pooled = !0,
                    i.maskObject = e,
                    r = i
                }
                var n = 0 !== this.maskStack.length ? this.maskStack[this.maskStack.length - 1] : null;
                if (r.copyCountersOrReset(n),
                r._colorMask = n ? n._colorMask : 15,
                r.autoDetect && this.detect(r),
                r._target = t,
                r.type !== M.SPRITE && this.maskStack.push(r),
                r.enabled)
                    switch (r.type) {
                    case M.SCISSOR:
                        this.renderer.scissor.push(r);
                        break;
                    case M.STENCIL:
                        this.renderer.stencil.push(r);
                        break;
                    case M.SPRITE:
                        r.copyCountersOrReset(null),
                        this.pushSpriteMask(r);
                        break;
                    case M.COLOR:
                        this.pushColorMask(r)
                    }
                r.type === M.SPRITE && this.maskStack.push(r)
            }
            ,
            t.prototype.pop = function(t) {
                var e = this.maskStack.pop();
                if (e && e._target === t) {
                    if (e.enabled)
                        switch (e.type) {
                        case M.SCISSOR:
                            this.renderer.scissor.pop(e);
                            break;
                        case M.STENCIL:
                            this.renderer.stencil.pop(e.maskObject);
                            break;
                        case M.SPRITE:
                            this.popSpriteMask(e);
                            break;
                        case M.COLOR:
                            this.popColorMask(e)
                        }
                    if (e.reset(),
                    e.pooled && this.maskDataPool.push(e),
                    0 !== this.maskStack.length) {
                        var r = this.maskStack[this.maskStack.length - 1];
                        r.type === M.SPRITE && r._filters && (r._filters[0].maskSprite = r.maskObject)
                    }
                }
            }
            ,
            t.prototype.detect = function(t) {
                var e = t.maskObject;
                e ? e.isSprite ? t.type = M.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(t) ? t.type = M.SCISSOR : t.type = M.STENCIL : t.type = M.COLOR
            }
            ,
            t.prototype.pushSpriteMask = function(t) {
                var e, r, i = t.maskObject, n = t._target, o = t._filters;
                o || (o = this.alphaMaskPool[this.alphaMaskIndex]) || (o = this.alphaMaskPool[this.alphaMaskIndex] = [new Wr]);
                var s, a, u = this.renderer, h = u.renderTexture;
                if (h.current) {
                    var l = h.current;
                    s = t.resolution || l.resolution,
                    a = null !== (e = t.multisample) && void 0 !== e ? e : l.multisample
                } else
                    s = t.resolution || u.resolution,
                    a = null !== (r = t.multisample) && void 0 !== r ? r : u.multisample;
                o[0].resolution = s,
                o[0].multisample = a,
                o[0].maskSprite = i;
                var c = n.filterArea;
                n.filterArea = i.getBounds(!0),
                u.filter.push(n, o),
                n.filterArea = c,
                t._filters || this.alphaMaskIndex++
            }
            ,
            t.prototype.popSpriteMask = function(t) {
                this.renderer.filter.pop(),
                t._filters ? t._filters[0].maskSprite = null : (this.alphaMaskIndex--,
                this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null)
            }
            ,
            t.prototype.pushColorMask = function(t) {
                var e = t._colorMask
                  , r = t._colorMask = e & t.colorMask;
                r !== e && this.renderer.gl.colorMask(0 != (1 & r), 0 != (2 & r), 0 != (4 & r), 0 != (8 & r))
            }
            ,
            t.prototype.popColorMask = function(t) {
                var e = t._colorMask
                  , r = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
                r !== e && this.renderer.gl.colorMask(0 != (1 & r), 0 != (2 & r), 0 != (4 & r), 0 != (8 & r))
            }
            ,
            t.prototype.destroy = function() {
                this.renderer = null
            }
            ,
            t
        }()
          , $r = function() {
            function t(t) {
                this.renderer = t,
                this.maskStack = [],
                this.glConst = 0
            }
            return t.prototype.getStackLength = function() {
                return this.maskStack.length
            }
            ,
            t.prototype.setMaskStack = function(t) {
                var e = this.renderer.gl
                  , r = this.getStackLength();
                this.maskStack = t;
                var i = this.getStackLength();
                i !== r && (0 === i ? e.disable(this.glConst) : (e.enable(this.glConst),
                this._useCurrent()))
            }
            ,
            t.prototype._useCurrent = function() {}
            ,
            t.prototype.destroy = function() {
                this.renderer = null,
                this.maskStack = null
            }
            ,
            t
        }()
          , qr = new zt
          , Kr = []
          , Zr = function(t) {
            function e(e) {
                var r = t.call(this, e) || this;
                return r.glConst = nt.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST,
                r
            }
            return Te(e, t),
            e.prototype.getStackLength = function() {
                var t = this.maskStack[this.maskStack.length - 1];
                return t ? t._scissorCounter : 0
            }
            ,
            e.prototype.calcScissorRect = function(t) {
                var e;
                if (!t._scissorRectLocal) {
                    var r = t._scissorRect
                      , i = t.maskObject
                      , n = this.renderer
                      , o = n.renderTexture
                      , s = i.getBounds(!0, null !== (e = Kr.pop()) && void 0 !== e ? e : new Xt);
                    this.roundFrameToPixels(s, o.current ? o.current.resolution : n.resolution, o.sourceFrame, o.destinationFrame, n.projection.transform),
                    r && s.fit(r),
                    t._scissorRectLocal = s
                }
            }
            ,
            e.isMatrixRotated = function(t) {
                if (!t)
                    return !1;
                var e = t.a
                  , r = t.b
                  , i = t.c
                  , n = t.d;
                return (Math.abs(r) > 1e-4 || Math.abs(i) > 1e-4) && (Math.abs(e) > 1e-4 || Math.abs(n) > 1e-4)
            }
            ,
            e.prototype.testScissor = function(t) {
                var r = t.maskObject;
                if (!r.isFastRect || !r.isFastRect())
                    return !1;
                if (e.isMatrixRotated(r.worldTransform))
                    return !1;
                if (e.isMatrixRotated(this.renderer.projection.transform))
                    return !1;
                this.calcScissorRect(t);
                var i = t._scissorRectLocal;
                return i.width > 0 && i.height > 0
            }
            ,
            e.prototype.roundFrameToPixels = function(t, r, i, n, o) {
                e.isMatrixRotated(o) || ((o = o ? qr.copyFrom(o) : qr.identity()).translate(-i.x, -i.y).scale(n.width / i.width, n.height / i.height).translate(n.x, n.y),
                this.renderer.filter.transformAABB(o, t),
                t.fit(n),
                t.x = Math.round(t.x * r),
                t.y = Math.round(t.y * r),
                t.width = Math.round(t.width * r),
                t.height = Math.round(t.height * r))
            }
            ,
            e.prototype.push = function(t) {
                t._scissorRectLocal || this.calcScissorRect(t);
                var e = this.renderer.gl;
                t._scissorRect || e.enable(e.SCISSOR_TEST),
                t._scissorCounter++,
                t._scissorRect = t._scissorRectLocal,
                this._useCurrent()
            }
            ,
            e.prototype.pop = function(t) {
                var e = this.renderer.gl;
                t && Kr.push(t._scissorRectLocal),
                this.getStackLength() > 0 ? this._useCurrent() : e.disable(e.SCISSOR_TEST)
            }
            ,
            e.prototype._useCurrent = function() {
                var t, e = this.maskStack[this.maskStack.length - 1]._scissorRect;
                t = this.renderer.renderTexture.current ? e.y : this.renderer.height - e.height - e.y,
                this.renderer.gl.scissor(e.x, t, e.width, e.height)
            }
            ,
            e
        }($r)
          , Jr = function(t) {
            function e(e) {
                var r = t.call(this, e) || this;
                return r.glConst = nt.ADAPTER.getWebGLRenderingContext().STENCIL_TEST,
                r
            }
            return Te(e, t),
            e.prototype.getStackLength = function() {
                var t = this.maskStack[this.maskStack.length - 1];
                return t ? t._stencilCounter : 0
            }
            ,
            e.prototype.push = function(t) {
                var e = t.maskObject
                  , r = this.renderer.gl
                  , i = t._stencilCounter;
                0 === i && (this.renderer.framebuffer.forceStencil(),
                r.clearStencil(0),
                r.clear(r.STENCIL_BUFFER_BIT),
                r.enable(r.STENCIL_TEST)),
                t._stencilCounter++;
                var n = t._colorMask;
                0 !== n && (t._colorMask = 0,
                r.colorMask(!1, !1, !1, !1)),
                r.stencilFunc(r.EQUAL, i, 4294967295),
                r.stencilOp(r.KEEP, r.KEEP, r.INCR),
                e.renderable = !0,
                e.render(this.renderer),
                this.renderer.batch.flush(),
                e.renderable = !1,
                0 !== n && (t._colorMask = n,
                r.colorMask(0 != (1 & n), 0 != (2 & n), 0 != (4 & n), 0 != (8 & n))),
                this._useCurrent()
            }
            ,
            e.prototype.pop = function(t) {
                var e = this.renderer.gl;
                if (0 === this.getStackLength())
                    e.disable(e.STENCIL_TEST);
                else {
                    var r = 0 !== this.maskStack.length ? this.maskStack[this.maskStack.length - 1] : null
                      , i = r ? r._colorMask : 15;
                    0 !== i && (r._colorMask = 0,
                    e.colorMask(!1, !1, !1, !1)),
                    e.stencilOp(e.KEEP, e.KEEP, e.DECR),
                    t.renderable = !0,
                    t.render(this.renderer),
                    this.renderer.batch.flush(),
                    t.renderable = !1,
                    0 !== i && (r._colorMask = i,
                    e.colorMask(0 != (1 & i), 0 != (2 & i), 0 != (4 & i), 0 != (8 & i))),
                    this._useCurrent()
                }
            }
            ,
            e.prototype._useCurrent = function() {
                var t = this.renderer.gl;
                t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295),
                t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
            }
            ,
            e
        }($r)
          , Qr = function() {
            function t(t) {
                this.renderer = t,
                this.destinationFrame = null,
                this.sourceFrame = null,
                this.defaultFrame = null,
                this.projectionMatrix = new zt,
                this.transform = null
            }
            return t.prototype.update = function(t, e, r, i) {
                this.destinationFrame = t || this.destinationFrame || this.defaultFrame,
                this.sourceFrame = e || this.sourceFrame || t,
                this.calculateProjection(this.destinationFrame, this.sourceFrame, r, i),
                this.transform && this.projectionMatrix.append(this.transform);
                var n = this.renderer;
                n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix,
                n.globalUniforms.update(),
                n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)
            }
            ,
            t.prototype.calculateProjection = function(t, e, r, i) {
                var n = this.projectionMatrix
                  , o = i ? -1 : 1;
                n.identity(),
                n.a = 1 / e.width * 2,
                n.d = o * (1 / e.height * 2),
                n.tx = -1 - e.x * n.a,
                n.ty = -o - e.y * n.d
            }
            ,
            t.prototype.setTransform = function(t) {}
            ,
            t.prototype.destroy = function() {
                this.renderer = null
            }
            ,
            t
        }()
          , ti = new Xt
          , ei = new Xt
          , ri = function() {
            function t(t) {
                this.renderer = t,
                this.clearColor = t._backgroundColorRgba,
                this.defaultMaskStack = [],
                this.current = null,
                this.sourceFrame = new Xt,
                this.destinationFrame = new Xt,
                this.viewportFrame = new Xt
            }
            return t.prototype.bind = function(t, e, r) {
                void 0 === t && (t = null);
                var i, n, o, s = this.renderer;
                this.current = t,
                t ? (o = (i = t.baseTexture).resolution,
                e || (ti.width = t.frame.width,
                ti.height = t.frame.height,
                e = ti),
                r || (ei.x = t.frame.x,
                ei.y = t.frame.y,
                ei.width = e.width,
                ei.height = e.height,
                r = ei),
                n = i.framebuffer) : (o = s.resolution,
                e || (ti.width = s.screen.width,
                ti.height = s.screen.height,
                e = ti),
                r || ((r = ti).width = e.width,
                r.height = e.height));
                var a = this.viewportFrame;
                a.x = r.x * o,
                a.y = r.y * o,
                a.width = r.width * o,
                a.height = r.height * o,
                t || (a.y = s.view.height - (a.y + a.height)),
                a.ceil(),
                this.renderer.framebuffer.bind(n, a),
                this.renderer.projection.update(r, e, o, !n),
                t ? this.renderer.mask.setMaskStack(i.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack),
                this.sourceFrame.copyFrom(e),
                this.destinationFrame.copyFrom(r)
            }
            ,
            t.prototype.clear = function(t, e) {
                t = this.current ? t || this.current.baseTexture.clearColor : t || this.clearColor;
                var r = this.destinationFrame
                  , i = this.current ? this.current.baseTexture : this.renderer.screen
                  , n = r.width !== i.width || r.height !== i.height;
                if (n) {
                    var o = this.viewportFrame
                      , s = o.x
                      , a = o.y
                      , u = o.width
                      , h = o.height;
                    s = Math.round(s),
                    a = Math.round(a),
                    u = Math.round(u),
                    h = Math.round(h),
                    this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),
                    this.renderer.gl.scissor(s, a, u, h)
                }
                this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], e),
                n && this.renderer.scissor.pop()
            }
            ,
            t.prototype.resize = function() {
                this.bind(null)
            }
            ,
            t.prototype.reset = function() {
                this.bind(null)
            }
            ,
            t.prototype.destroy = function() {
                this.renderer = null
            }
            ,
            t
        }();
        function ii(t, e, r, i, n) {
            r.buffer.update(n)
        }
        var ni = {
            float: "\n        data[offset] = v;\n    ",
            vec2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ",
            vec3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ",
            vec4: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ",
            mat2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ",
            mat3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ",
            mat4: "\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    "
        }
          , oi = {
            float: 4,
            vec2: 8,
            vec3: 12,
            vec4: 16,
            int: 4,
            ivec2: 8,
            ivec3: 12,
            ivec4: 16,
            uint: 4,
            uvec2: 8,
            uvec3: 12,
            uvec4: 16,
            bool: 4,
            bvec2: 8,
            bvec3: 12,
            bvec4: 16,
            mat2: 32,
            mat3: 48,
            mat4: 64
        };
        var si = function() {
            function t(t, e) {
                this.program = t,
                this.uniformData = e,
                this.uniformGroups = {},
                this.uniformDirtyGroups = {},
                this.uniformBufferBindings = {}
            }
            return t.prototype.destroy = function() {
                this.uniformData = null,
                this.uniformGroups = null,
                this.uniformDirtyGroups = null,
                this.uniformBufferBindings = null,
                this.program = null
            }
            ,
            t
        }();
        var ai = 0
          , ui = {
            textureCount: 0,
            uboCount: 0
        }
          , hi = function() {
            function t(t) {
                this.destroyed = !1,
                this.renderer = t,
                this.systemCheck(),
                this.gl = null,
                this.shader = null,
                this.program = null,
                this.cache = {},
                this._uboCache = {},
                this.id = ai++
            }
            return t.prototype.systemCheck = function() {
                if (!function() {
                    if ("boolean" == typeof Dr)
                        return Dr;
                    try {
                        var t = new Function("param1","param2","param3","return param1[param2] === param3;");
                        Dr = !0 === t({
                            a: "b"
                        }, "a", "b")
                    } catch (t) {
                        Dr = !1
                    }
                    return Dr
                }())
                    throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
            }
            ,
            t.prototype.contextChange = function(t) {
                this.gl = t,
                this.reset()
            }
            ,
            t.prototype.bind = function(t, e) {
                t.disposeRunner.add(this),
                t.uniforms.globals = this.renderer.globalUniforms;
                var r = t.program
                  , i = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
                return this.shader = t,
                this.program !== r && (this.program = r,
                this.gl.useProgram(i.program)),
                e || (ui.textureCount = 0,
                ui.uboCount = 0,
                this.syncUniformGroup(t.uniformGroup, ui)),
                i
            }
            ,
            t.prototype.setUniforms = function(t) {
                var e = this.shader.program
                  , r = e.glPrograms[this.renderer.CONTEXT_UID];
                e.syncUniforms(r.uniformData, t, this.renderer)
            }
            ,
            t.prototype.syncUniformGroup = function(t, e) {
                var r = this.getGlProgram();
                t.static && t.dirtyId === r.uniformDirtyGroups[t.id] || (r.uniformDirtyGroups[t.id] = t.dirtyId,
                this.syncUniforms(t, r, e))
            }
            ,
            t.prototype.syncUniforms = function(t, e, r) {
                (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, r)
            }
            ,
            t.prototype.createSyncGroups = function(t) {
                var e = this.getSignature(t, this.shader.program.uniformData, "u");
                return this.cache[e] || (this.cache[e] = function(t, e) {
                    var r, i = ["\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n    "];
                    for (var n in t.uniforms) {
                        var o = e[n];
                        if (o) {
                            for (var s = t.uniforms[n], a = !1, u = 0; u < Cr.length; u++)
                                if (Cr[u].test(o, s)) {
                                    i.push(Cr[u].code(n, s)),
                                    a = !0;
                                    break
                                }
                            if (!a) {
                                var h = (1 !== o.size || o.isArray ? Nr : Fr)[o.type].replace("location", 'ud["' + n + '"].location');
                                i.push('\n            cu = ud["' + n + '"];\n            cv = cu.value;\n            v = uv["' + n + '"];\n            ' + h + ";")
                            }
                        } else
                            (null === (r = t.uniforms[n]) || void 0 === r ? void 0 : r.group) && (t.uniforms[n].ubo ? i.push("\n                        renderer.shader.syncUniformBufferGroup(uv." + n + ", '" + n + "');\n                    ") : i.push("\n                        renderer.shader.syncUniformGroup(uv." + n + ", syncData);\n                    "))
                    }
                    return new Function("ud","uv","renderer","syncData",i.join("\n"))
                }(t, this.shader.program.uniformData)),
                t.syncUniforms[this.shader.program.id] = this.cache[e],
                t.syncUniforms[this.shader.program.id]
            }
            ,
            t.prototype.syncUniformBufferGroup = function(t, e) {
                var r = this.getGlProgram();
                if (!t.static || 0 !== t.dirtyId || !r.uniformGroups[t.id]) {
                    t.dirtyId = 0;
                    var i = r.uniformGroups[t.id] || this.createSyncBufferGroup(t, r, e);
                    t.buffer.update(),
                    i(r.uniformData, t.uniforms, this.renderer, ui, t.buffer)
                }
                this.renderer.buffer.bindBufferBase(t.buffer, r.uniformBufferBindings[e])
            }
            ,
            t.prototype.createSyncBufferGroup = function(t, e, r) {
                var i = this.renderer.gl;
                this.renderer.buffer.bind(t.buffer);
                var n = this.gl.getUniformBlockIndex(e.program, r);
                e.uniformBufferBindings[r] = this.shader.uniformBindCount,
                i.uniformBlockBinding(e.program, n, this.shader.uniformBindCount),
                this.shader.uniformBindCount++;
                var o = this.getSignature(t, this.shader.program.uniformData, "ubo")
                  , s = this._uboCache[o];
                if (s || (s = this._uboCache[o] = function(t, e) {
                    if (!t.autoManage)
                        return {
                            size: 0,
                            syncFunc: ii
                        };
                    for (var r = function(t) {
                        for (var e = t.map((function(t) {
                            return {
                                data: t,
                                offset: 0,
                                dataLen: 0,
                                dirty: 0
                            }
                        }
                        )), r = 0, i = 0, n = 0, o = 0; o < e.length; o++) {
                            var s = e[o];
                            if (r = oi[s.data.type],
                            s.data.size > 1 && (r = Math.max(r, 16) * s.data.size),
                            s.dataLen = r,
                            i % r != 0 && i < 16) {
                                var a = i % r % 16;
                                i += a,
                                n += a
                            }
                            i + r > 16 ? (n = 16 * Math.ceil(n / 16),
                            s.offset = n,
                            n += r,
                            i = r) : (s.offset = n,
                            i += r,
                            n += r)
                        }
                        return {
                            uboElements: e,
                            size: n = 16 * Math.ceil(n / 16)
                        }
                    }(function(t, e) {
                        var r = [];
                        for (var i in t)
                            e[i] && r.push(e[i]);
                        return r.sort((function(t, e) {
                            return t.index - e.index
                        }
                        )),
                        r
                    }(t.uniforms, e)), i = r.uboElements, n = r.size, o = ["\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    "], s = 0; s < i.length; s++) {
                        for (var a = i[s], u = t.uniforms[a.data.name], h = a.data.name, l = !1, c = 0; c < Cr.length; c++) {
                            var d = Cr[c];
                            if (d.codeUbo && d.test(a.data, u)) {
                                o.push("offset = " + a.offset / 4 + ";", Cr[c].codeUbo(a.data.name, u)),
                                l = !0;
                                break
                            }
                        }
                        if (!l)
                            if (a.data.size > 1) {
                                var p = Or(a.data.type)
                                  , f = Math.max(oi[a.data.type] / 16, 1)
                                  , _ = p / f
                                  , m = (4 - _ % 4) % 4;
                                o.push("\n                cv = ud." + h + ".value;\n                v = uv." + h + ";\n                offset = " + a.offset / 4 + ";\n\n                t = 0;\n\n                for(var i=0; i < " + a.data.size * f + "; i++)\n                {\n                    for(var j = 0; j < " + _ + "; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += " + m + ";\n                }\n\n                ")
                            } else {
                                var v = ni[a.data.type];
                                o.push("\n                cv = ud." + h + ".value;\n                v = uv." + h + ";\n                offset = " + a.offset / 4 + ";\n                " + v + ";\n                ")
                            }
                    }
                    return o.push("\n       renderer.buffer.update(buffer);\n    "),
                    {
                        size: n,
                        syncFunc: new Function("ud","uv","renderer","syncData","buffer",o.join("\n"))
                    }
                }(t, this.shader.program.uniformData)),
                t.autoManage) {
                    var a = new Float32Array(s.size / 4);
                    t.buffer.update(a)
                }
                return e.uniformGroups[t.id] = s.syncFunc,
                e.uniformGroups[t.id]
            }
            ,
            t.prototype.getSignature = function(t, e, r) {
                var i = t.uniforms
                  , n = [r + "-"];
                for (var o in i)
                    n.push(o),
                    e[o] && n.push(e[o].type);
                return n.join("-")
            }
            ,
            t.prototype.getGlProgram = function() {
                return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
            }
            ,
            t.prototype.generateProgram = function(t) {
                var e = this.gl
                  , r = t.program
                  , i = function(t, e) {
                    var r = yr(t, t.VERTEX_SHADER, e.vertexSrc)
                      , i = yr(t, t.FRAGMENT_SHADER, e.fragmentSrc)
                      , n = t.createProgram();
                    if (t.attachShader(n, r),
                    t.attachShader(n, i),
                    t.linkProgram(n),
                    t.getProgramParameter(n, t.LINK_STATUS) || function(t, e, r, i) {
                        t.getProgramParameter(e, t.LINK_STATUS) || (t.getShaderParameter(r, t.COMPILE_STATUS) || br(t, r),
                        t.getShaderParameter(i, t.COMPILE_STATUS) || br(t, i),
                        console.error("PixiJS Error: Could not initialize shader."),
                        "" !== t.getProgramInfoLog(e) && console.warn("PixiJS Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(e)))
                    }(t, n, r, i),
                    e.attributeData = function(t, e) {
                        for (var r = {}, i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), n = 0; n < i; n++) {
                            var o = e.getActiveAttrib(t, n);
                            if (0 !== o.name.indexOf("gl_")) {
                                var s = Mr(e, o.type)
                                  , a = {
                                    type: s,
                                    name: o.name,
                                    size: Or(s),
                                    location: e.getAttribLocation(t, o.name)
                                };
                                r[o.name] = a
                            }
                        }
                        return r
                    }(n, t),
                    e.uniformData = function(t, e) {
                        for (var r = {}, i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), n = 0; n < i; n++) {
                            var o = e.getActiveUniform(t, n)
                              , s = o.name.replace(/\[.*?\]$/, "")
                              , a = !!o.name.match(/\[.*?\]$/)
                              , u = Mr(e, o.type);
                            r[s] = {
                                name: s,
                                index: n,
                                type: u,
                                size: o.size,
                                isArray: a,
                                value: Tr(u, o.size)
                            }
                        }
                        return r
                    }(n, t),
                    !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)) {
                        var o = Object.keys(e.attributeData);
                        o.sort((function(t, e) {
                            return t > e ? 1 : -1
                        }
                        ));
                        for (var s = 0; s < o.length; s++)
                            e.attributeData[o[s]].location = s,
                            t.bindAttribLocation(n, s, o[s]);
                        t.linkProgram(n)
                    }
                    t.deleteShader(r),
                    t.deleteShader(i);
                    var a = {};
                    for (var s in e.uniformData) {
                        var u = e.uniformData[s];
                        a[s] = {
                            location: t.getUniformLocation(n, s),
                            value: Tr(u.type, u.size)
                        }
                    }
                    return new si(n,a)
                }(e, r);
                return r.glPrograms[this.renderer.CONTEXT_UID] = i,
                i
            }
            ,
            t.prototype.reset = function() {
                this.program = null,
                this.shader = null
            }
            ,
            t.prototype.disposeShader = function(t) {
                this.shader === t && (this.shader = null)
            }
            ,
            t.prototype.destroy = function() {
                this.renderer = null,
                this.destroyed = !0
            }
            ,
            t
        }()
          , li = function() {
            function t() {
                this.gl = null,
                this.stateId = 0,
                this.polygonOffset = 0,
                this.blendMode = g.NONE,
                this._blendEq = !1,
                this.map = [],
                this.map[0] = this.setBlend,
                this.map[1] = this.setOffset,
                this.map[2] = this.setCullFace,
                this.map[3] = this.setDepthTest,
                this.map[4] = this.setFrontFace,
                this.map[5] = this.setDepthMask,
                this.checks = [],
                this.defaultState = new Hr,
                this.defaultState.blend = !0
            }
            return t.prototype.contextChange = function(t) {
                this.gl = t,
                this.blendModes = function(t, e) {
                    return void 0 === e && (e = []),
                    e[g.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.ADD] = [t.ONE, t.ONE],
                    e[g.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.NONE] = [0, 0],
                    e[g.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE],
                    e[g.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA],
                    e[g.SRC_IN] = [t.DST_ALPHA, t.ZERO],
                    e[g.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO],
                    e[g.SRC_ATOP] = [t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA],
                    e[g.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE],
                    e[g.DST_IN] = [t.ZERO, t.SRC_ALPHA],
                    e[g.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA],
                    e[g.DST_ATOP] = [t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA],
                    e[g.XOR] = [t.ONE_MINUS_DST_ALPHA, t.ONE_MINUS_SRC_ALPHA],
                    e[g.SUBTRACT] = [t.ONE, t.ONE, t.ONE, t.ONE, t.FUNC_REVERSE_SUBTRACT, t.FUNC_ADD],
                    e
                }(t),
                this.set(this.defaultState),
                this.reset()
            }
            ,
            t.prototype.set = function(t) {
                if (t = t || this.defaultState,
                this.stateId !== t.data) {
                    for (var e = this.stateId ^ t.data, r = 0; e; )
                        1 & e && this.map[r].call(this, !!(t.data & 1 << r)),
                        e >>= 1,
                        r++;
                    this.stateId = t.data
                }
                for (r = 0; r < this.checks.length; r++)
                    this.checks[r](this, t)
            }
            ,
            t.prototype.forceState = function(t) {
                t = t || this.defaultState;
                for (var e = 0; e < this.map.length; e++)
                    this.map[e].call(this, !!(t.data & 1 << e));
                for (e = 0; e < this.checks.length; e++)
                    this.checks[e](this, t);
                this.stateId = t.data
            }
            ,
            t.prototype.setBlend = function(e) {
                this.updateCheck(t.checkBlendMode, e),
                this.gl[e ? "enable" : "disable"](this.gl.BLEND)
            }
            ,
            t.prototype.setOffset = function(e) {
                this.updateCheck(t.checkPolygonOffset, e),
                this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
            }
            ,
            t.prototype.setDepthTest = function(t) {
                this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
            }
            ,
            t.prototype.setDepthMask = function(t) {
                this.gl.depthMask(t)
            }
            ,
            t.prototype.setCullFace = function(t) {
                this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE)
            }
            ,
            t.prototype.setFrontFace = function(t) {
                this.gl.frontFace(this.gl[t ? "CW" : "CCW"])
            }
            ,
            t.prototype.setBlendMode = function(t) {
                if (t !== this.blendMode) {
                    this.blendMode = t;
                    var e = this.blendModes[t]
                      , r = this.gl;
                    2 === e.length ? r.blendFunc(e[0], e[1]) : r.blendFuncSeparate(e[0], e[1], e[2], e[3]),
                    6 === e.length ? (this._blendEq = !0,
                    r.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1,
                    r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD))
                }
            }
            ,
            t.prototype.setPolygonOffset = function(t, e) {
                this.gl.polygonOffset(t, e)
            }
            ,
            t.prototype.reset = function() {
                this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
                this.forceState(this.defaultState),
                this._blendEq = !0,
                this.blendMode = -1,
                this.setBlendMode(0)
            }
            ,
            t.prototype.updateCheck = function(t, e) {
                var r = this.checks.indexOf(t);
                e && -1 === r ? this.checks.push(t) : e || -1 === r || this.checks.splice(r, 1)
            }
            ,
            t.checkBlendMode = function(t, e) {
                t.setBlendMode(e.blendMode)
            }
            ,
            t.checkPolygonOffset = function(t, e) {
                t.setPolygonOffset(1, e.polygonOffset)
            }
            ,
            t.prototype.destroy = function() {
                this.gl = null
            }
            ,
            t
        }()
          , ci = function() {
            function t(t) {
                this.renderer = t,
                this.count = 0,
                this.checkCount = 0,
                this.maxIdle = nt.GC_MAX_IDLE,
                this.checkCountMax = nt.GC_MAX_CHECK_COUNT,
                this.mode = nt.GC_MODE
            }
            return t.prototype.postrender = function() {
                this.renderer.renderingToScreen && (this.count++,
                this.mode !== I.MANUAL && (this.checkCount++,
                this.checkCount > this.checkCountMax && (this.checkCount = 0,
                this.run())))
            }
            ,
            t.prototype.run = function() {
                for (var t = this.renderer.texture, e = t.managedTextures, r = !1, i = 0; i < e.length; i++) {
                    var n = e[i];
                    !n.framebuffer && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0),
                    e[i] = null,
                    r = !0)
                }
                if (r) {
                    var o = 0;
                    for (i = 0; i < e.length; i++)
                        null !== e[i] && (e[o++] = e[i]);
                    e.length = o
                }
            }
            ,
            t.prototype.unload = function(t) {
                var e = this.renderer.texture
                  , r = t._texture;
                r && !r.framebuffer && e.destroyTexture(r);
                for (var i = t.children.length - 1; i >= 0; i--)
                    this.unload(t.children[i])
            }
            ,
            t.prototype.destroy = function() {
                this.renderer = null
            }
            ,
            t
        }()
          , di = function(t) {
            this.texture = t,
            this.width = -1,
            this.height = -1,
            this.dirtyId = -1,
            this.dirtyStyleId = -1,
            this.mipmap = !1,
            this.wrapMode = 33071,
            this.type = T.UNSIGNED_BYTE,
            this.internalFormat = b.RGBA,
            this.samplerType = 0
        }
          , pi = function() {
            function t(t) {
                this.renderer = t,
                this.boundTextures = [],
                this.currentLocation = -1,
                this.managedTextures = [],
                this._unknownBoundTextures = !1,
                this.unknownTexture = new we,
                this.hasIntegerTextures = !1
            }
            return t.prototype.contextChange = function() {
                var t = this.gl = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID,
                this.webGLVersion = this.renderer.context.webGLVersion,
                this.internalFormats = function(t) {
                    var e, r, i, n, o, s, a, u, h, l, c, d, p, f, _, m, v, g, y, x, E, A, S;
                    return "WebGL2RenderingContext"in globalThis && t instanceof globalThis.WebGL2RenderingContext ? ((e = {})[T.UNSIGNED_BYTE] = ((r = {})[b.RGBA] = t.RGBA8,
                    r[b.RGB] = t.RGB8,
                    r[b.RG] = t.RG8,
                    r[b.RED] = t.R8,
                    r[b.RGBA_INTEGER] = t.RGBA8UI,
                    r[b.RGB_INTEGER] = t.RGB8UI,
                    r[b.RG_INTEGER] = t.RG8UI,
                    r[b.RED_INTEGER] = t.R8UI,
                    r[b.ALPHA] = t.ALPHA,
                    r[b.LUMINANCE] = t.LUMINANCE,
                    r[b.LUMINANCE_ALPHA] = t.LUMINANCE_ALPHA,
                    r),
                    e[T.BYTE] = ((i = {})[b.RGBA] = t.RGBA8_SNORM,
                    i[b.RGB] = t.RGB8_SNORM,
                    i[b.RG] = t.RG8_SNORM,
                    i[b.RED] = t.R8_SNORM,
                    i[b.RGBA_INTEGER] = t.RGBA8I,
                    i[b.RGB_INTEGER] = t.RGB8I,
                    i[b.RG_INTEGER] = t.RG8I,
                    i[b.RED_INTEGER] = t.R8I,
                    i),
                    e[T.UNSIGNED_SHORT] = ((n = {})[b.RGBA_INTEGER] = t.RGBA16UI,
                    n[b.RGB_INTEGER] = t.RGB16UI,
                    n[b.RG_INTEGER] = t.RG16UI,
                    n[b.RED_INTEGER] = t.R16UI,
                    n[b.DEPTH_COMPONENT] = t.DEPTH_COMPONENT16,
                    n),
                    e[T.SHORT] = ((o = {})[b.RGBA_INTEGER] = t.RGBA16I,
                    o[b.RGB_INTEGER] = t.RGB16I,
                    o[b.RG_INTEGER] = t.RG16I,
                    o[b.RED_INTEGER] = t.R16I,
                    o),
                    e[T.UNSIGNED_INT] = ((s = {})[b.RGBA_INTEGER] = t.RGBA32UI,
                    s[b.RGB_INTEGER] = t.RGB32UI,
                    s[b.RG_INTEGER] = t.RG32UI,
                    s[b.RED_INTEGER] = t.R32UI,
                    s[b.DEPTH_COMPONENT] = t.DEPTH_COMPONENT24,
                    s),
                    e[T.INT] = ((a = {})[b.RGBA_INTEGER] = t.RGBA32I,
                    a[b.RGB_INTEGER] = t.RGB32I,
                    a[b.RG_INTEGER] = t.RG32I,
                    a[b.RED_INTEGER] = t.R32I,
                    a),
                    e[T.FLOAT] = ((u = {})[b.RGBA] = t.RGBA32F,
                    u[b.RGB] = t.RGB32F,
                    u[b.RG] = t.RG32F,
                    u[b.RED] = t.R32F,
                    u[b.DEPTH_COMPONENT] = t.DEPTH_COMPONENT32F,
                    u),
                    e[T.HALF_FLOAT] = ((h = {})[b.RGBA] = t.RGBA16F,
                    h[b.RGB] = t.RGB16F,
                    h[b.RG] = t.RG16F,
                    h[b.RED] = t.R16F,
                    h),
                    e[T.UNSIGNED_SHORT_5_6_5] = ((l = {})[b.RGB] = t.RGB565,
                    l),
                    e[T.UNSIGNED_SHORT_4_4_4_4] = ((c = {})[b.RGBA] = t.RGBA4,
                    c),
                    e[T.UNSIGNED_SHORT_5_5_5_1] = ((d = {})[b.RGBA] = t.RGB5_A1,
                    d),
                    e[T.UNSIGNED_INT_2_10_10_10_REV] = ((p = {})[b.RGBA] = t.RGB10_A2,
                    p[b.RGBA_INTEGER] = t.RGB10_A2UI,
                    p),
                    e[T.UNSIGNED_INT_10F_11F_11F_REV] = ((f = {})[b.RGB] = t.R11F_G11F_B10F,
                    f),
                    e[T.UNSIGNED_INT_5_9_9_9_REV] = ((_ = {})[b.RGB] = t.RGB9_E5,
                    _),
                    e[T.UNSIGNED_INT_24_8] = ((m = {})[b.DEPTH_STENCIL] = t.DEPTH24_STENCIL8,
                    m),
                    e[T.FLOAT_32_UNSIGNED_INT_24_8_REV] = ((v = {})[b.DEPTH_STENCIL] = t.DEPTH32F_STENCIL8,
                    v),
                    S = e) : ((g = {})[T.UNSIGNED_BYTE] = ((y = {})[b.RGBA] = t.RGBA,
                    y[b.RGB] = t.RGB,
                    y[b.ALPHA] = t.ALPHA,
                    y[b.LUMINANCE] = t.LUMINANCE,
                    y[b.LUMINANCE_ALPHA] = t.LUMINANCE_ALPHA,
                    y),
                    g[T.UNSIGNED_SHORT_5_6_5] = ((x = {})[b.RGB] = t.RGB,
                    x),
                    g[T.UNSIGNED_SHORT_4_4_4_4] = ((E = {})[b.RGBA] = t.RGBA,
                    E),
                    g[T.UNSIGNED_SHORT_5_5_5_1] = ((A = {})[b.RGBA] = t.RGBA,
                    A),
                    S = g),
                    S
                }(t);
                var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
                this.boundTextures.length = e;
                for (var r = 0; r < e; r++)
                    this.boundTextures[r] = null;
                this.emptyTextures = {};
                var i = new di(t.createTexture());
                for (t.bindTexture(t.TEXTURE_2D, i.texture),
                t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)),
                this.emptyTextures[t.TEXTURE_2D] = i,
                this.emptyTextures[t.TEXTURE_CUBE_MAP] = new di(t.createTexture()),
                t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture),
                r = 0; r < 6; r++)
                    t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
                for (t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR),
                t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR),
                r = 0; r < this.boundTextures.length; r++)
                    this.bind(null, r)
            }
            ,
            t.prototype.bind = function(t, e) {
                void 0 === e && (e = 0);
                var r = this.gl;
                if ((t = null == t ? void 0 : t.castToBaseTexture()) && t.valid && !t.parentTextureArray) {
                    t.touched = this.renderer.textureGC.count;
                    var i = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
                    this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e,
                    r.activeTexture(r.TEXTURE0 + e)),
                    r.bindTexture(t.target, i.texture)),
                    i.dirtyId !== t.dirtyId ? (this.currentLocation !== e && (this.currentLocation = e,
                    r.activeTexture(r.TEXTURE0 + e)),
                    this.updateTexture(t)) : i.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t),
                    this.boundTextures[e] = t
                } else
                    this.currentLocation !== e && (this.currentLocation = e,
                    r.activeTexture(r.TEXTURE0 + e)),
                    r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture),
                    this.boundTextures[e] = null
            }
            ,
            t.prototype.reset = function() {
                this._unknownBoundTextures = !0,
                this.hasIntegerTextures = !1,
                this.currentLocation = -1;
                for (var t = 0; t < this.boundTextures.length; t++)
                    this.boundTextures[t] = this.unknownTexture
            }
            ,
            t.prototype.unbind = function(t) {
                var e = this.gl
                  , r = this.boundTextures;
                if (this._unknownBoundTextures) {
                    this._unknownBoundTextures = !1;
                    for (var i = 0; i < r.length; i++)
                        r[i] === this.unknownTexture && this.bind(null, i)
                }
                for (i = 0; i < r.length; i++)
                    r[i] === t && (this.currentLocation !== i && (e.activeTexture(e.TEXTURE0 + i),
                    this.currentLocation = i),
                    e.bindTexture(t.target, this.emptyTextures[t.target].texture),
                    r[i] = null)
            }
            ,
            t.prototype.ensureSamplerType = function(t) {
                var e = this
                  , r = e.boundTextures
                  , i = e.hasIntegerTextures
                  , n = e.CONTEXT_UID;
                if (i)
                    for (var o = t - 1; o >= 0; --o) {
                        var s = r[o];
                        s && s._glTextures[n].samplerType !== E.FLOAT && this.renderer.texture.unbind(s)
                    }
            }
            ,
            t.prototype.initTexture = function(t) {
                var e = new di(this.gl.createTexture());
                return e.dirtyId = -1,
                t._glTextures[this.CONTEXT_UID] = e,
                this.managedTextures.push(t),
                t.on("dispose", this.destroyTexture, this),
                e
            }
            ,
            t.prototype.initTextureType = function(t, e) {
                var r, i;
                e.internalFormat = null !== (i = null === (r = this.internalFormats[t.type]) || void 0 === r ? void 0 : r[t.format]) && void 0 !== i ? i : t.format,
                2 === this.webGLVersion && t.type === T.HALF_FLOAT ? e.type = this.gl.HALF_FLOAT : e.type = t.type
            }
            ,
            t.prototype.updateTexture = function(t) {
                var e = t._glTextures[this.CONTEXT_UID];
                if (e) {
                    var r = this.renderer;
                    if (this.initTextureType(t, e),
                    t.resource && t.resource.upload(r, t, e))
                        e.samplerType !== E.FLOAT && (this.hasIntegerTextures = !0);
                    else {
                        var i = t.realWidth
                          , n = t.realHeight
                          , o = r.gl;
                        (e.width !== i || e.height !== n || e.dirtyId < 0) && (e.width = i,
                        e.height = n,
                        o.texImage2D(t.target, 0, e.internalFormat, i, n, 0, t.format, e.type, null))
                    }
                    t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t),
                    e.dirtyId = t.dirtyId
                }
            }
            ,
            t.prototype.destroyTexture = function(t, e) {
                var r = this.gl;
                if ((t = t.castToBaseTexture())._glTextures[this.CONTEXT_UID] && (this.unbind(t),
                r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),
                t.off("dispose", this.destroyTexture, this),
                delete t._glTextures[this.CONTEXT_UID],
                !e)) {
                    var i = this.managedTextures.indexOf(t);
                    -1 !== i && Et(this.managedTextures, i, 1)
                }
            }
            ,
            t.prototype.updateTextureStyle = function(t) {
                var e = t._glTextures[this.CONTEXT_UID];
                e && (t.mipmap !== R.POW2 && 2 === this.webGLVersion || t.isPowerOfTwo ? e.mipmap = t.mipmap >= 1 : e.mipmap = !1,
                2 === this.webGLVersion || t.isPowerOfTwo ? e.wrapMode = t.wrapMode : e.wrapMode = S.CLAMP,
                t.resource && t.resource.style(this.renderer, t, e) || this.setStyle(t, e),
                e.dirtyStyleId = t.dirtyStyleId)
            }
            ,
            t.prototype.setStyle = function(t, e) {
                var r = this.gl;
                if (e.mipmap && t.mipmap !== R.ON_MANUAL && r.generateMipmap(t.target),
                r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode),
                r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode),
                e.mipmap) {
                    r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === A.LINEAR ? r.LINEAR_MIPMAP_LINEAR : r.NEAREST_MIPMAP_NEAREST);
                    var i = this.renderer.context.extensions.anisotropicFiltering;
                    if (i && t.anisotropicLevel > 0 && t.scaleMode === A.LINEAR) {
                        var n = Math.min(t.anisotropicLevel, r.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                        r.texParameterf(t.target, i.TEXTURE_MAX_ANISOTROPY_EXT, n)
                    }
                } else
                    r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === A.LINEAR ? r.LINEAR : r.NEAREST);
                r.texParameteri(t.target, r.TEXTURE_MAG_FILTER, t.scaleMode === A.LINEAR ? r.LINEAR : r.NEAREST)
            }
            ,
            t.prototype.destroy = function() {
                this.renderer = null
            }
            ,
            t
        }()
          , fi = {
            __proto__: null,
            FilterSystem: ur,
            BatchSystem: lr,
            ContextSystem: dr,
            FramebufferSystem: _r,
            GeometrySystem: vr,
            MaskSystem: zr,
            ScissorSystem: Zr,
            StencilSystem: Jr,
            ProjectionSystem: Qr,
            RenderTextureSystem: ri,
            ShaderSystem: hi,
            StateSystem: li,
            TextureGCSystem: ci,
            TextureSystem: pi
        }
          , _i = new zt
          , mi = function(t) {
            function e(e, r) {
                void 0 === e && (e = m.UNKNOWN);
                var i = t.call(this) || this;
                return r = Object.assign({}, nt.RENDER_OPTIONS, r),
                i.options = r,
                i.type = e,
                i.screen = new Xt(0,0,r.width,r.height),
                i.view = r.view || nt.ADAPTER.createCanvas(),
                i.resolution = r.resolution || nt.RESOLUTION,
                i.useContextAlpha = r.useContextAlpha,
                i.autoDensity = !!r.autoDensity,
                i.preserveDrawingBuffer = r.preserveDrawingBuffer,
                i.clearBeforeRender = r.clearBeforeRender,
                i._backgroundColor = 0,
                i._backgroundColorRgba = [0, 0, 0, 1],
                i._backgroundColorString = "#000000",
                i.backgroundColor = r.backgroundColor || i._backgroundColor,
                i.backgroundAlpha = r.backgroundAlpha,
                void 0 !== r.transparent && (Ot("6.0.0", "Option transparent is deprecated, please use backgroundAlpha instead."),
                i.useContextAlpha = r.transparent,
                i.backgroundAlpha = r.transparent ? 0 : 1),
                i._lastObjectRendered = null,
                i.plugins = {},
                i
            }
            return Te(e, t),
            e.prototype.initPlugins = function(t) {
                for (var e in t)
                    this.plugins[e] = new t[e](this)
            }
            ,
            Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this.view.width
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return this.view.height
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.resize = function(t, e) {
                this.view.width = Math.round(t * this.resolution),
                this.view.height = Math.round(e * this.resolution);
                var r = this.view.width / this.resolution
                  , i = this.view.height / this.resolution;
                this.screen.width = r,
                this.screen.height = i,
                this.autoDensity && (this.view.style.width = r + "px",
                this.view.style.height = i + "px"),
                this.emit("resize", r, i)
            }
            ,
            e.prototype.generateTexture = function(t, e, r, i) {
                void 0 === e && (e = {}),
                "number" == typeof e && (Ot("6.1.0", "generateTexture options (scaleMode, resolution, region) are now object options."),
                e = {
                    scaleMode: e,
                    resolution: r,
                    region: i
                });
                var n = e.region
                  , o = function(t, e) {
                    var r = {};
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                        var n = 0;
                        for (i = Object.getOwnPropertySymbols(t); n < i.length; n++)
                            e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]])
                    }
                    return r
                }(e, ["region"]);
                0 === (i = n || t.getLocalBounds(null, !0)).width && (i.width = 1),
                0 === i.height && (i.height = 1);
                var s = Ve.create(Ee({
                    width: i.width,
                    height: i.height
                }, o));
                return _i.tx = -i.x,
                _i.ty = -i.y,
                this.render(t, {
                    renderTexture: s,
                    clear: !1,
                    transform: _i,
                    skipUpdateTransform: !!t.parent
                }),
                s
            }
            ,
            e.prototype.destroy = function(t) {
                for (var e in this.plugins)
                    this.plugins[e].destroy(),
                    this.plugins[e] = null;
                t && this.view.parentNode && this.view.parentNode.removeChild(this.view);
                var r = this;
                r.plugins = null,
                r.type = m.UNKNOWN,
                r.view = null,
                r.screen = null,
                r._tempDisplayObjectParent = null,
                r.options = null,
                this._backgroundColorRgba = null,
                this._backgroundColorString = null,
                this._lastObjectRendered = null
            }
            ,
            Object.defineProperty(e.prototype, "backgroundColor", {
                get: function() {
                    return this._backgroundColor
                },
                set: function(t) {
                    this._backgroundColor = t,
                    this._backgroundColorString = pt(t),
                    dt(t, this._backgroundColorRgba)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "backgroundAlpha", {
                get: function() {
                    return this._backgroundColorRgba[3]
                },
                set: function(t) {
                    this._backgroundColorRgba[3] = t
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        }(ot)
          , vi = function(t) {
            this.buffer = t || null,
            this.updateID = -1,
            this.byteLength = -1,
            this.refCount = 0
        }
          , gi = function() {
            function t(t) {
                this.renderer = t,
                this.managedBuffers = {},
                this.boundBufferBases = {}
            }
            return t.prototype.destroy = function() {
                this.renderer = null
            }
            ,
            t.prototype.contextChange = function() {
                this.disposeAll(!0),
                this.gl = this.renderer.gl,
                this.CONTEXT_UID = this.renderer.CONTEXT_UID
            }
            ,
            t.prototype.bind = function(t) {
                var e = this.gl
                  , r = this.CONTEXT_UID
                  , i = t._glBuffers[r] || this.createGLBuffer(t);
                e.bindBuffer(t.type, i.buffer)
            }
            ,
            t.prototype.bindBufferBase = function(t, e) {
                var r = this.gl
                  , i = this.CONTEXT_UID;
                if (this.boundBufferBases[e] !== t) {
                    var n = t._glBuffers[i] || this.createGLBuffer(t);
                    this.boundBufferBases[e] = t,
                    r.bindBufferBase(r.UNIFORM_BUFFER, e, n.buffer)
                }
            }
            ,
            t.prototype.bindBufferRange = function(t, e, r) {
                var i = this.gl
                  , n = this.CONTEXT_UID;
                r = r || 0;
                var o = t._glBuffers[n] || this.createGLBuffer(t);
                i.bindBufferRange(i.UNIFORM_BUFFER, e || 0, o.buffer, 256 * r, 256)
            }
            ,
            t.prototype.update = function(t) {
                var e = this.gl
                  , r = this.CONTEXT_UID
                  , i = t._glBuffers[r];
                if (t._updateID !== i.updateID)
                    if (i.updateID = t._updateID,
                    e.bindBuffer(t.type, i.buffer),
                    i.byteLength >= t.data.byteLength)
                        e.bufferSubData(t.type, 0, t.data);
                    else {
                        var n = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                        i.byteLength = t.data.byteLength,
                        e.bufferData(t.type, t.data, n)
                    }
            }
            ,
            t.prototype.dispose = function(t, e) {
                if (this.managedBuffers[t.id]) {
                    delete this.managedBuffers[t.id];
                    var r = t._glBuffers[this.CONTEXT_UID]
                      , i = this.gl;
                    t.disposeRunner.remove(this),
                    r && (e || i.deleteBuffer(r.buffer),
                    delete t._glBuffers[this.CONTEXT_UID])
                }
            }
            ,
            t.prototype.disposeAll = function(t) {
                for (var e = Object.keys(this.managedBuffers), r = 0; r < e.length; r++)
                    this.dispose(this.managedBuffers[e[r]], t)
            }
            ,
            t.prototype.createGLBuffer = function(t) {
                var e = this.CONTEXT_UID
                  , r = this.gl;
                return t._glBuffers[e] = new vi(r.createBuffer()),
                this.managedBuffers[t.id] = t,
                t.disposeRunner.add(this),
                t._glBuffers[e]
            }
            ,
            t
        }()
          , yi = function(t) {
            function e(r) {
                var i = t.call(this, m.WEBGL, r) || this;
                return r = i.options,
                i.gl = null,
                i.CONTEXT_UID = 0,
                i.runners = {
                    destroy: new _e("destroy"),
                    contextChange: new _e("contextChange"),
                    reset: new _e("reset"),
                    update: new _e("update"),
                    postrender: new _e("postrender"),
                    prerender: new _e("prerender"),
                    resize: new _e("resize")
                },
                i.runners.contextChange.add(i),
                i.globalUniforms = new nr({
                    projectionMatrix: new zt
                },!0),
                i.addSystem(zr, "mask").addSystem(dr, "context").addSystem(li, "state").addSystem(hi, "shader").addSystem(pi, "texture").addSystem(gi, "buffer").addSystem(vr, "geometry").addSystem(_r, "framebuffer").addSystem(Zr, "scissor").addSystem(Jr, "stencil").addSystem(Qr, "projection").addSystem(ci, "textureGC").addSystem(ur, "filter").addSystem(ri, "renderTexture").addSystem(lr, "batch"),
                i.initPlugins(e.__plugins),
                i.multisample = void 0,
                r.context ? i.context.initFromContext(r.context) : i.context.initFromOptions({
                    alpha: !!i.useContextAlpha,
                    antialias: r.antialias,
                    premultipliedAlpha: i.useContextAlpha && "notMultiplied" !== i.useContextAlpha,
                    stencil: !0,
                    preserveDrawingBuffer: r.preserveDrawingBuffer,
                    powerPreference: i.options.powerPreference
                }),
                i.renderingToScreen = !0,
                function(t) {
                    var e;
                    if (!lt) {
                        if (nt.ADAPTER.getNavigator().userAgent.toLowerCase().indexOf("chrome") > -1) {
                            var r = ["\n %c %c %c PixiJS 6.5.8 - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                            (e = globalThis.console).log.apply(e, r)
                        } else
                            globalThis.console && globalThis.console.log("PixiJS 6.5.8 - " + t + " - http://www.pixijs.com/");
                        lt = !0
                    }
                }(2 === i.context.webGLVersion ? "WebGL 2" : "WebGL 1"),
                i.resize(i.options.width, i.options.height),
                i
            }
            return Te(e, t),
            e.create = function(t) {
                if (void 0 === ht && (ht = function() {
                    var t = {
                        stencil: !0,
                        failIfMajorPerformanceCaveat: nt.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
                    };
                    try {
                        if (!nt.ADAPTER.getWebGLRenderingContext())
                            return !1;
                        var e = nt.ADAPTER.createCanvas()
                          , r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t)
                          , i = !(!r || !r.getContextAttributes().stencil);
                        if (r) {
                            var n = r.getExtension("WEBGL_lose_context");
                            n && n.loseContext()
                        }
                        return r = null,
                        i
                    } catch (t) {
                        return !1
                    }
                }()),
                ht)
                    return new e(t);
                throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')
            }
            ,
            e.prototype.contextChange = function() {
                var t, e = this.gl;
                if (1 === this.context.webGLVersion) {
                    var r = e.getParameter(e.FRAMEBUFFER_BINDING);
                    e.bindFramebuffer(e.FRAMEBUFFER, null),
                    t = e.getParameter(e.SAMPLES),
                    e.bindFramebuffer(e.FRAMEBUFFER, r)
                } else
                    r = e.getParameter(e.DRAW_FRAMEBUFFER_BINDING),
                    e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
                    t = e.getParameter(e.SAMPLES),
                    e.bindFramebuffer(e.DRAW_FRAMEBUFFER, r);
                t >= C.HIGH ? this.multisample = C.HIGH : t >= C.MEDIUM ? this.multisample = C.MEDIUM : t >= C.LOW ? this.multisample = C.LOW : this.multisample = C.NONE
            }
            ,
            e.prototype.addSystem = function(t, e) {
                var r = new t(this);
                if (this[e])
                    throw new Error('Whoops! The name "' + e + '" is already in use');
                for (var i in this[e] = r,
                this.runners)
                    this.runners[i].add(r);
                return this
            }
            ,
            e.prototype.render = function(t, e) {
                var r, i, n, o;
                if (e && (e instanceof Ve ? (Ot("6.0.0", "Renderer#render arguments changed, use options instead."),
                r = e,
                i = arguments[2],
                n = arguments[3],
                o = arguments[4]) : (r = e.renderTexture,
                i = e.clear,
                n = e.transform,
                o = e.skipUpdateTransform)),
                this.renderingToScreen = !r,
                this.runners.prerender.emit(),
                this.emit("prerender"),
                this.projection.transform = n,
                !this.context.isLost) {
                    if (r || (this._lastObjectRendered = t),
                    !o) {
                        var s = t.enableTempParent();
                        t.updateTransform(),
                        t.disableTempParent(s)
                    }
                    this.renderTexture.bind(r),
                    this.batch.currentRenderer.start(),
                    (void 0 !== i ? i : this.clearBeforeRender) && this.renderTexture.clear(),
                    t.render(this),
                    this.batch.currentRenderer.flush(),
                    r && r.baseTexture.update(),
                    this.runners.postrender.emit(),
                    this.projection.transform = null,
                    this.emit("postrender")
                }
            }
            ,
            e.prototype.generateTexture = function(e, r, i, n) {
                void 0 === r && (r = {});
                var o = t.prototype.generateTexture.call(this, e, r, i, n);
                return this.framebuffer.blit(),
                o
            }
            ,
            e.prototype.resize = function(e, r) {
                t.prototype.resize.call(this, e, r),
                this.runners.resize.emit(this.screen.height, this.screen.width)
            }
            ,
            e.prototype.reset = function() {
                return this.runners.reset.emit(),
                this
            }
            ,
            e.prototype.clear = function() {
                this.renderTexture.bind(),
                this.renderTexture.clear()
            }
            ,
            e.prototype.destroy = function(e) {
                for (var r in this.runners.destroy.emit(),
                this.runners)
                    this.runners[r].destroy();
                t.prototype.destroy.call(this, e),
                this.gl = null
            }
            ,
            Object.defineProperty(e.prototype, "extract", {
                get: function() {
                    return Ot("6.0.0", "Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),
                    this.plugins.extract
                },
                enumerable: !1,
                configurable: !0
            }),
            e.registerPlugin = function(t, e) {
                Ot("6.5.0", "Renderer.registerPlugin() has been deprecated, please use extensions.add() instead."),
                fe.add({
                    name: t,
                    type: le.RendererPlugin,
                    ref: e
                })
            }
            ,
            e.__plugins = {},
            e
        }(mi);
        fe.handleByMap(le.RendererPlugin, yi.__plugins);
        var bi = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
          , xi = function() {
            this.texArray = null,
            this.blend = 0,
            this.type = y.TRIANGLES,
            this.start = 0,
            this.size = 0,
            this.data = null
        }
          , Ti = function() {
            function t() {
                this.elements = [],
                this.ids = [],
                this.count = 0
            }
            return t.prototype.clear = function() {
                for (var t = 0; t < this.count; t++)
                    this.elements[t] = null;
                this.count = 0
            }
            ,
            t
        }()
          , Ei = function() {
            function t(t) {
                "number" == typeof t ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t,
                this.uint32View = new Uint32Array(this.rawBinaryData),
                this.float32View = new Float32Array(this.rawBinaryData)
            }
            return Object.defineProperty(t.prototype, "int8View", {
                get: function() {
                    return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)),
                    this._int8View
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "uint8View", {
                get: function() {
                    return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)),
                    this._uint8View
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "int16View", {
                get: function() {
                    return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)),
                    this._int16View
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "uint16View", {
                get: function() {
                    return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)),
                    this._uint16View
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "int32View", {
                get: function() {
                    return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)),
                    this._int32View
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.view = function(t) {
                return this[t + "View"]
            }
            ,
            t.prototype.destroy = function() {
                this.rawBinaryData = null,
                this._int8View = null,
                this._uint8View = null,
                this._int16View = null,
                this._uint16View = null,
                this._int32View = null,
                this.uint32View = null,
                this.float32View = null
            }
            ,
            t.sizeOf = function(t) {
                switch (t) {
                case "int8":
                case "uint8":
                    return 1;
                case "int16":
                case "uint16":
                    return 2;
                case "int32":
                case "uint32":
                case "float32":
                    return 4;
                default:
                    throw new Error(t + " isn't a valid view type")
                }
            }
            ,
            t
        }()
          , Ai = function(t) {
            function e(e) {
                var r = t.call(this, e) || this;
                return r.shaderGenerator = null,
                r.geometryClass = null,
                r.vertexSize = null,
                r.state = Hr.for2d(),
                r.size = 4 * nt.SPRITE_BATCH_SIZE,
                r._vertexCount = 0,
                r._indexCount = 0,
                r._bufferedElements = [],
                r._bufferedTextures = [],
                r._bufferSize = 0,
                r._shader = null,
                r._packedGeometries = [],
                r._packedGeometryPoolSize = 2,
                r._flushId = 0,
                r._aBuffers = {},
                r._iBuffers = {},
                r.MAX_TEXTURES = 1,
                r.renderer.on("prerender", r.onPrerender, r),
                e.runners.contextChange.add(r),
                r._dcIndex = 0,
                r._aIndex = 0,
                r._iIndex = 0,
                r._attributeBuffer = null,
                r._indexBuffer = null,
                r._tempBoundTextures = [],
                r
            }
            return Te(e, t),
            e.prototype.contextChange = function() {
                var t = this.renderer.gl;
                nt.PREFER_ENV === _.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), nt.SPRITE_MAX_TEXTURES),
                this.MAX_TEXTURES = function(t, e) {
                    if (0 === t)
                        throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
                    for (var r = e.createShader(e.FRAGMENT_SHADER); ; ) {
                        var i = Br.replace(/%forloop%/gi, Lr(t));
                        if (e.shaderSource(r, i),
                        e.compileShader(r),
                        e.getShaderParameter(r, e.COMPILE_STATUS))
                            break;
                        t = t / 2 | 0
                    }
                    return t
                }(this.MAX_TEXTURES, t)),
                this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
                for (var e = 0; e < this._packedGeometryPoolSize; e++)
                    this._packedGeometries[e] = new this.geometryClass;
                this.initFlushBuffers()
            }
            ,
            e.prototype.initFlushBuffers = function() {
                for (var t = e._drawCallPool, r = e._textureArrayPool, i = this.size / 4, n = Math.floor(i / this.MAX_TEXTURES) + 1; t.length < i; )
                    t.push(new xi);
                for (; r.length < n; )
                    r.push(new Ti);
                for (var o = 0; o < this.MAX_TEXTURES; o++)
                    this._tempBoundTextures[o] = null
            }
            ,
            e.prototype.onPrerender = function() {
                this._flushId = 0
            }
            ,
            e.prototype.render = function(t) {
                t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(),
                this._vertexCount += t.vertexData.length / 2,
                this._indexCount += t.indices.length,
                this._bufferedTextures[this._bufferSize] = t._texture.baseTexture,
                this._bufferedElements[this._bufferSize++] = t)
            }
            ,
            e.prototype.buildTexturesAndDrawCalls = function() {
                var t = this._bufferedTextures
                  , r = this.MAX_TEXTURES
                  , i = e._textureArrayPool
                  , n = this.renderer.batch
                  , o = this._tempBoundTextures
                  , s = this.renderer.textureGC.count
                  , a = ++we._globalBatch
                  , u = 0
                  , h = i[0]
                  , l = 0;
                n.copyBoundTextures(o, r);
                for (var c = 0; c < this._bufferSize; ++c) {
                    var d = t[c];
                    t[c] = null,
                    d._batchEnabled !== a && (h.count >= r && (n.boundArray(h, o, a, r),
                    this.buildDrawCalls(h, l, c),
                    l = c,
                    h = i[++u],
                    ++a),
                    d._batchEnabled = a,
                    d.touched = s,
                    h.elements[h.count++] = d)
                }
                for (h.count > 0 && (n.boundArray(h, o, a, r),
                this.buildDrawCalls(h, l, this._bufferSize),
                ++u,
                ++a),
                c = 0; c < o.length; c++)
                    o[c] = null;
                we._globalBatch = a
            }
            ,
            e.prototype.buildDrawCalls = function(t, r, i) {
                var n = this
                  , o = n._bufferedElements
                  , s = n._attributeBuffer
                  , a = n._indexBuffer
                  , u = n.vertexSize
                  , h = e._drawCallPool
                  , l = this._dcIndex
                  , c = this._aIndex
                  , d = this._iIndex
                  , p = h[l];
                p.start = this._iIndex,
                p.texArray = t;
                for (var f = r; f < i; ++f) {
                    var _ = o[f]
                      , m = _._texture.baseTexture
                      , v = _t[m.alphaMode ? 1 : 0][_.blendMode];
                    o[f] = null,
                    r < f && p.blend !== v && (p.size = d - p.start,
                    r = f,
                    (p = h[++l]).texArray = t,
                    p.start = d),
                    this.packInterleavedGeometry(_, s, a, c, d),
                    c += _.vertexData.length / 2 * u,
                    d += _.indices.length,
                    p.blend = v
                }
                r < i && (p.size = d - p.start,
                ++l),
                this._dcIndex = l,
                this._aIndex = c,
                this._iIndex = d
            }
            ,
            e.prototype.bindAndClearTexArray = function(t) {
                for (var e = this.renderer.texture, r = 0; r < t.count; r++)
                    e.bind(t.elements[r], t.ids[r]),
                    t.elements[r] = null;
                t.count = 0
            }
            ,
            e.prototype.updateGeometry = function() {
                var t = this
                  , e = t._packedGeometries
                  , r = t._attributeBuffer
                  , i = t._indexBuffer;
                nt.CAN_UPLOAD_SAME_BUFFER ? (e[this._flushId]._buffer.update(r.rawBinaryData),
                e[this._flushId]._indexBuffer.update(i),
                this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++,
                e[this._flushId] = new this.geometryClass),
                e[this._flushId]._buffer.update(r.rawBinaryData),
                e[this._flushId]._indexBuffer.update(i),
                this.renderer.geometry.bind(e[this._flushId]),
                this.renderer.geometry.updateBuffers(),
                this._flushId++)
            }
            ,
            e.prototype.drawBatches = function() {
                for (var t = this._dcIndex, r = this.renderer, i = r.gl, n = r.state, o = e._drawCallPool, s = null, a = 0; a < t; a++) {
                    var u = o[a]
                      , h = u.texArray
                      , l = u.type
                      , c = u.size
                      , d = u.start
                      , p = u.blend;
                    s !== h && (s = h,
                    this.bindAndClearTexArray(h)),
                    this.state.blendMode = p,
                    n.set(this.state),
                    i.drawElements(l, c, i.UNSIGNED_SHORT, 2 * d)
                }
            }
            ,
            e.prototype.flush = function() {
                0 !== this._vertexCount && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount),
                this._indexBuffer = this.getIndexBuffer(this._indexCount),
                this._aIndex = 0,
                this._iIndex = 0,
                this._dcIndex = 0,
                this.buildTexturesAndDrawCalls(),
                this.updateGeometry(),
                this.drawBatches(),
                this._bufferSize = 0,
                this._vertexCount = 0,
                this._indexCount = 0)
            }
            ,
            e.prototype.start = function() {
                this.renderer.state.set(this.state),
                this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),
                this.renderer.shader.bind(this._shader),
                nt.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
            }
            ,
            e.prototype.stop = function() {
                this.flush()
            }
            ,
            e.prototype.destroy = function() {
                for (var e = 0; e < this._packedGeometryPoolSize; e++)
                    this._packedGeometries[e] && this._packedGeometries[e].destroy();
                this.renderer.off("prerender", this.onPrerender, this),
                this._aBuffers = null,
                this._iBuffers = null,
                this._packedGeometries = null,
                this._attributeBuffer = null,
                this._indexBuffer = null,
                this._shader && (this._shader.destroy(),
                this._shader = null),
                t.prototype.destroy.call(this)
            }
            ,
            e.prototype.getAttributeBuffer = function(t) {
                var e = bt(Math.ceil(t / 8))
                  , r = Tt(e)
                  , i = 8 * e;
                this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
                var n = this._aBuffers[i];
                return n || (this._aBuffers[i] = n = new Ei(i * this.vertexSize * 4)),
                n
            }
            ,
            e.prototype.getIndexBuffer = function(t) {
                var e = bt(Math.ceil(t / 12))
                  , r = Tt(e)
                  , i = 12 * e;
                this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
                var n = this._iBuffers[r];
                return n || (this._iBuffers[r] = n = new Uint16Array(i)),
                n
            }
            ,
            e.prototype.packInterleavedGeometry = function(t, e, r, i, n) {
                for (var o = e.uint32View, s = e.float32View, a = i / this.vertexSize, u = t.uvs, h = t.indices, l = t.vertexData, c = t._texture.baseTexture._batchLocation, d = Math.min(t.worldAlpha, 1), p = d < 1 && t._texture.baseTexture.alphaMode ? vt(t._tintRGB, d) : t._tintRGB + (255 * d << 24), f = 0; f < l.length; f += 2)
                    s[i++] = l[f],
                    s[i++] = l[f + 1],
                    s[i++] = u[f],
                    s[i++] = u[f + 1],
                    o[i++] = p,
                    s[i++] = c;
                for (f = 0; f < h.length; f++)
                    r[n++] = a + h[f]
            }
            ,
            e._drawCallPool = [],
            e._textureArrayPool = [],
            e
        }(hr)
          , Si = function() {
            function t(t, e) {
                if (this.vertexSrc = t,
                this.fragTemplate = e,
                this.programCache = {},
                this.defaultGroupCache = {},
                e.indexOf("%count%") < 0)
                    throw new Error('Fragment template must contain "%count%".');
                if (e.indexOf("%forloop%") < 0)
                    throw new Error('Fragment template must contain "%forloop%".')
            }
            return t.prototype.generateShader = function(t) {
                if (!this.programCache[t]) {
                    for (var e = new Int32Array(t), r = 0; r < t; r++)
                        e[r] = r;
                    this.defaultGroupCache[t] = nr.from({
                        uSamplers: e
                    }, !0);
                    var i = this.fragTemplate;
                    i = (i = i.replace(/%count%/gi, "" + t)).replace(/%forloop%/gi, this.generateSampleSrc(t)),
                    this.programCache[t] = new kr(this.vertexSrc,i)
                }
                var n = {
                    tint: new Float32Array([1, 1, 1, 1]),
                    translationMatrix: new zt,
                    default: this.defaultGroupCache[t]
                };
                return new Xr(this.programCache[t],n)
            }
            ,
            t.prototype.generateSampleSrc = function(t) {
                var e = "";
                e += "\n",
                e += "\n";
                for (var r = 0; r < t; r++)
                    r > 0 && (e += "\nelse "),
                    r < t - 1 && (e += "if(vTextureId < " + r + ".5)"),
                    e += "\n{",
                    e += "\n\tcolor = texture2D(uSamplers[" + r + "], vTextureCoord);",
                    e += "\n}";
                return (e += "\n") + "\n"
            }
            ,
            t
        }()
          , Ri = function(t) {
            function e(e) {
                void 0 === e && (e = !1);
                var r = t.call(this) || this;
                return r._buffer = new qe(null,e,!1),
                r._indexBuffer = new qe(null,e,!0),
                r.addAttribute("aVertexPosition", r._buffer, 2, !1, T.FLOAT).addAttribute("aTextureCoord", r._buffer, 2, !1, T.FLOAT).addAttribute("aColor", r._buffer, 4, !0, T.UNSIGNED_BYTE).addAttribute("aTextureId", r._buffer, 1, !0, T.FLOAT).addIndex(r._indexBuffer),
                r
            }
            return Te(e, t),
            e
        }(tr)
          , wi = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n"
          , Oi = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n"
          , Ii = function() {
            function t() {}
            return t.create = function(t) {
                var e = Object.assign({
                    vertex: wi,
                    fragment: Oi,
                    geometryClass: Ri,
                    vertexSize: 6
                }, t)
                  , r = e.vertex
                  , i = e.fragment
                  , n = e.vertexSize
                  , o = e.geometryClass;
                return function(t) {
                    function e(e) {
                        var s = t.call(this, e) || this;
                        return s.shaderGenerator = new Si(r,i),
                        s.geometryClass = o,
                        s.vertexSize = n,
                        s
                    }
                    return Te(e, t),
                    e
                }(Ai)
            }
            ,
            Object.defineProperty(t, "defaultVertexSrc", {
                get: function() {
                    return wi
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "defaultFragmentTemplate", {
                get: function() {
                    return Oi
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        }().create();
        Object.assign(Ii, {
            extension: {
                name: "batch",
                type: le.RendererPlugin
            }
        });
        var Pi = {}
          , Mi = function(t) {
            Object.defineProperty(Pi, t, {
                get: function() {
                    return Ot("6.0.0", "PIXI.systems." + t + " has moved to PIXI." + t),
                    Le[t]
                }
            })
        };
        for (var Di in Le)
            Mi(Di);
        var Ci = {}
          , Fi = function(t) {
            Object.defineProperty(Ci, t, {
                get: function() {
                    return Ot("6.0.0", "PIXI.resources." + t + " has moved to PIXI." + t),
                    fi[t]
                }
            })
        };
        for (var Di in fi)
            Fi(Di);
        se.mixin({
            accessible: !1,
            accessibleTitle: null,
            accessibleHint: null,
            tabIndex: 0,
            _accessibleActive: !1,
            _accessibleDiv: null,
            accessibleType: "button",
            accessiblePointerEvents: "auto",
            accessibleChildren: !0,
            renderId: -1
        });
        var Ni = function() {
            function t(t) {
                this.debug = !1,
                this._isActive = !1,
                this._isMobileAccessibility = !1,
                this.pool = [],
                this.renderId = 0,
                this.children = [],
                this.androidUpdateCount = 0,
                this.androidUpdateFrequency = 500,
                this._hookDiv = null,
                (it.tablet || it.phone) && this.createTouchHook();
                var e = document.createElement("div");
                e.style.width = "100px",
                e.style.height = "100px",
                e.style.position = "absolute",
                e.style.top = "0px",
                e.style.left = "0px",
                e.style.zIndex = 2..toString(),
                this.div = e,
                this.renderer = t,
                this._onKeyDown = this._onKeyDown.bind(this),
                this._onMouseMove = this._onMouseMove.bind(this),
                globalThis.addEventListener("keydown", this._onKeyDown, !1)
            }
            return Object.defineProperty(t.prototype, "isActive", {
                get: function() {
                    return this._isActive
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isMobileAccessibility", {
                get: function() {
                    return this._isMobileAccessibility
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.createTouchHook = function() {
                var t = this
                  , e = document.createElement("button");
                e.style.width = "1px",
                e.style.height = "1px",
                e.style.position = "absolute",
                e.style.top = "-1000px",
                e.style.left = "-1000px",
                e.style.zIndex = 2..toString(),
                e.style.backgroundColor = "#FF0000",
                e.title = "select to enable accessibility for this content",
                e.addEventListener("focus", (function() {
                    t._isMobileAccessibility = !0,
                    t.activate(),
                    t.destroyTouchHook()
                }
                )),
                document.body.appendChild(e),
                this._hookDiv = e
            }
            ,
            t.prototype.destroyTouchHook = function() {
                this._hookDiv && (document.body.removeChild(this._hookDiv),
                this._hookDiv = null)
            }
            ,
            t.prototype.activate = function() {
                var t;
                this._isActive || (this._isActive = !0,
                globalThis.document.addEventListener("mousemove", this._onMouseMove, !0),
                globalThis.removeEventListener("keydown", this._onKeyDown, !1),
                this.renderer.on("postrender", this.update, this),
                null === (t = this.renderer.view.parentNode) || void 0 === t || t.appendChild(this.div))
            }
            ,
            t.prototype.deactivate = function() {
                var t;
                this._isActive && !this._isMobileAccessibility && (this._isActive = !1,
                globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0),
                globalThis.addEventListener("keydown", this._onKeyDown, !1),
                this.renderer.off("postrender", this.update),
                null === (t = this.div.parentNode) || void 0 === t || t.removeChild(this.div))
            }
            ,
            t.prototype.updateAccessibleObjects = function(t) {
                if (t.visible && t.accessibleChildren) {
                    t.accessible && t.interactive && (t._accessibleActive || this.addChild(t),
                    t.renderId = this.renderId);
                    var e = t.children;
                    if (e)
                        for (var r = 0; r < e.length; r++)
                            this.updateAccessibleObjects(e[r])
                }
            }
            ,
            t.prototype.update = function() {
                var t = performance.now();
                if (!(it.android.device && t < this.androidUpdateCount) && (this.androidUpdateCount = t + this.androidUpdateFrequency,
                this.renderer.renderingToScreen)) {
                    this.renderer._lastObjectRendered && this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                    var e = this.renderer.view.getBoundingClientRect()
                      , r = e.left
                      , i = e.top
                      , n = e.width
                      , o = e.height
                      , s = this.renderer
                      , a = s.width
                      , u = s.height
                      , h = s.resolution
                      , l = n / a * h
                      , c = o / u * h
                      , d = this.div;
                    d.style.left = r + "px",
                    d.style.top = i + "px",
                    d.style.width = a + "px",
                    d.style.height = u + "px";
                    for (var p = 0; p < this.children.length; p++) {
                        var f = this.children[p];
                        if (f.renderId !== this.renderId)
                            f._accessibleActive = !1,
                            Et(this.children, p, 1),
                            this.div.removeChild(f._accessibleDiv),
                            this.pool.push(f._accessibleDiv),
                            f._accessibleDiv = null,
                            p--;
                        else {
                            d = f._accessibleDiv;
                            var _ = f.hitArea
                              , m = f.worldTransform;
                            f.hitArea ? (d.style.left = (m.tx + _.x * m.a) * l + "px",
                            d.style.top = (m.ty + _.y * m.d) * c + "px",
                            d.style.width = _.width * m.a * l + "px",
                            d.style.height = _.height * m.d * c + "px") : (_ = f.getBounds(),
                            this.capHitArea(_),
                            d.style.left = _.x * l + "px",
                            d.style.top = _.y * c + "px",
                            d.style.width = _.width * l + "px",
                            d.style.height = _.height * c + "px",
                            d.title !== f.accessibleTitle && null !== f.accessibleTitle && (d.title = f.accessibleTitle),
                            d.getAttribute("aria-label") !== f.accessibleHint && null !== f.accessibleHint && d.setAttribute("aria-label", f.accessibleHint)),
                            f.accessibleTitle === d.title && f.tabIndex === d.tabIndex || (d.title = f.accessibleTitle,
                            d.tabIndex = f.tabIndex,
                            this.debug && this.updateDebugHTML(d))
                        }
                    }
                    this.renderId++
                }
            }
            ,
            t.prototype.updateDebugHTML = function(t) {
                t.innerHTML = "type: " + t.type + "</br> title : " + t.title + "</br> tabIndex: " + t.tabIndex
            }
            ,
            t.prototype.capHitArea = function(t) {
                t.x < 0 && (t.width += t.x,
                t.x = 0),
                t.y < 0 && (t.height += t.y,
                t.y = 0);
                var e = this.renderer
                  , r = e.width
                  , i = e.height;
                t.x + t.width > r && (t.width = r - t.x),
                t.y + t.height > i && (t.height = i - t.y)
            }
            ,
            t.prototype.addChild = function(t) {
                var e = this.pool.pop();
                e || ((e = document.createElement("button")).style.width = "100px",
                e.style.height = "100px",
                e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent",
                e.style.position = "absolute",
                e.style.zIndex = 2..toString(),
                e.style.borderStyle = "none",
                navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"),
                navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"),
                e.addEventListener("click", this._onClick.bind(this)),
                e.addEventListener("focus", this._onFocus.bind(this)),
                e.addEventListener("focusout", this._onFocusOut.bind(this))),
                e.style.pointerEvents = t.accessiblePointerEvents,
                e.type = t.accessibleType,
                t.accessibleTitle && null !== t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleHint && null !== t.accessibleHint || (e.title = "displayObject " + t.tabIndex),
                t.accessibleHint && null !== t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint),
                this.debug && this.updateDebugHTML(e),
                t._accessibleActive = !0,
                t._accessibleDiv = e,
                e.displayObject = t,
                this.children.push(t),
                this.div.appendChild(t._accessibleDiv),
                t._accessibleDiv.tabIndex = t.tabIndex
            }
            ,
            t.prototype._onClick = function(t) {
                var e = this.renderer.plugins.interaction
                  , r = t.target.displayObject
                  , i = e.eventData;
                e.dispatchEvent(r, "click", i),
                e.dispatchEvent(r, "pointertap", i),
                e.dispatchEvent(r, "tap", i)
            }
            ,
            t.prototype._onFocus = function(t) {
                t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive");
                var e = this.renderer.plugins.interaction
                  , r = t.target.displayObject
                  , i = e.eventData;
                e.dispatchEvent(r, "mouseover", i)
            }
            ,
            t.prototype._onFocusOut = function(t) {
                t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite");
                var e = this.renderer.plugins.interaction
                  , r = t.target.displayObject
                  , i = e.eventData;
                e.dispatchEvent(r, "mouseout", i)
            }
            ,
            t.prototype._onKeyDown = function(t) {
                9 === t.keyCode && this.activate()
            }
            ,
            t.prototype._onMouseMove = function(t) {
                0 === t.movementX && 0 === t.movementY || this.deactivate()
            }
            ,
            t.prototype.destroy = function() {
                this.destroyTouchHook(),
                this.div = null,
                globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0),
                globalThis.removeEventListener("keydown", this._onKeyDown),
                this.pool = null,
                this.children = null,
                this.renderer = null
            }
            ,
            t.extension = {
                name: "accessibility",
                type: [le.RendererPlugin, le.CanvasRendererPlugin]
            },
            t
        }()
          , Bi = function() {
            function t() {
                this.pressure = 0,
                this.rotationAngle = 0,
                this.twist = 0,
                this.tangentialPressure = 0,
                this.global = new Ut,
                this.target = null,
                this.originalEvent = null,
                this.identifier = null,
                this.isPrimary = !1,
                this.button = 0,
                this.buttons = 0,
                this.width = 0,
                this.height = 0,
                this.tiltX = 0,
                this.tiltY = 0,
                this.pointerType = null,
                this.pressure = 0,
                this.rotationAngle = 0,
                this.twist = 0,
                this.tangentialPressure = 0
            }
            return Object.defineProperty(t.prototype, "pointerId", {
                get: function() {
                    return this.identifier
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.getLocalPosition = function(t, e, r) {
                return t.worldTransform.applyInverse(r || this.global, e)
            }
            ,
            t.prototype.copyEvent = function(t) {
                "isPrimary"in t && t.isPrimary && (this.isPrimary = !0),
                this.button = "button"in t && t.button;
                var e = "buttons"in t && t.buttons;
                this.buttons = Number.isInteger(e) ? e : "which"in t && t.which,
                this.width = "width"in t && t.width,
                this.height = "height"in t && t.height,
                this.tiltX = "tiltX"in t && t.tiltX,
                this.tiltY = "tiltY"in t && t.tiltY,
                this.pointerType = "pointerType"in t && t.pointerType,
                this.pressure = "pressure"in t && t.pressure,
                this.rotationAngle = "rotationAngle"in t && t.rotationAngle,
                this.twist = "twist"in t && t.twist || 0,
                this.tangentialPressure = "tangentialPressure"in t && t.tangentialPressure || 0
            }
            ,
            t.prototype.reset = function() {
                this.isPrimary = !1
            }
            ,
            t
        }()
          , Li = function(t, e) {
            return (Li = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        }
          , Gi = function() {
            function t() {
                this.stopped = !1,
                this.stopsPropagatingAt = null,
                this.stopPropagationHint = !1,
                this.target = null,
                this.currentTarget = null,
                this.type = null,
                this.data = null
            }
            return t.prototype.stopPropagation = function() {
                this.stopped = !0,
                this.stopPropagationHint = !0,
                this.stopsPropagatingAt = this.currentTarget
            }
            ,
            t.prototype.reset = function() {
                this.stopped = !1,
                this.stopsPropagatingAt = null,
                this.stopPropagationHint = !1,
                this.currentTarget = null,
                this.target = null
            }
            ,
            t
        }()
          , Ui = function() {
            function t(e) {
                this._pointerId = e,
                this._flags = t.FLAGS.NONE
            }
            return t.prototype._doSet = function(t, e) {
                this._flags = e ? this._flags | t : this._flags & ~t
            }
            ,
            Object.defineProperty(t.prototype, "pointerId", {
                get: function() {
                    return this._pointerId
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "flags", {
                get: function() {
                    return this._flags
                },
                set: function(t) {
                    this._flags = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "none", {
                get: function() {
                    return this._flags === t.FLAGS.NONE
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "over", {
                get: function() {
                    return 0 != (this._flags & t.FLAGS.OVER)
                },
                set: function(e) {
                    this._doSet(t.FLAGS.OVER, e)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "rightDown", {
                get: function() {
                    return 0 != (this._flags & t.FLAGS.RIGHT_DOWN)
                },
                set: function(e) {
                    this._doSet(t.FLAGS.RIGHT_DOWN, e)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "leftDown", {
                get: function() {
                    return 0 != (this._flags & t.FLAGS.LEFT_DOWN)
                },
                set: function(e) {
                    this._doSet(t.FLAGS.LEFT_DOWN, e)
                },
                enumerable: !1,
                configurable: !0
            }),
            t.FLAGS = Object.freeze({
                NONE: 0,
                OVER: 1,
                LEFT_DOWN: 2,
                RIGHT_DOWN: 4
            }),
            t
        }()
          , ki = function() {
            function t() {
                this._tempPoint = new Ut
            }
            return t.prototype.recursiveFindHit = function(t, e, r, i, n) {
                var o;
                if (!e || !e.visible)
                    return !1;
                var s = t.data.global
                  , a = !1
                  , u = n = e.interactive || n
                  , h = !0;
                if (e.hitArea)
                    i && (e.worldTransform.applyInverse(s, this._tempPoint),
                    e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? a = !0 : (i = !1,
                    h = !1)),
                    u = !1;
                else if (e._mask && i) {
                    var l = e._mask.isMaskData ? e._mask.maskObject : e._mask;
                    l && !(null === (o = l.containsPoint) || void 0 === o ? void 0 : o.call(l, s)) && (i = !1)
                }
                if (h && e.interactiveChildren && e.children)
                    for (var c = e.children, d = c.length - 1; d >= 0; d--) {
                        var p = c[d]
                          , f = this.recursiveFindHit(t, p, r, i, u);
                        if (f) {
                            if (!p.parent)
                                continue;
                            u = !1,
                            f && (t.target && (i = !1),
                            a = !0)
                        }
                    }
                return n && (i && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(s) && (a = !0),
                e.interactive && (a && !t.target && (t.target = e),
                r && r(t, e, !!a))),
                a
            }
            ,
            t.prototype.findHit = function(t, e, r, i) {
                this.recursiveFindHit(t, e, r, i, !1)
            }
            ,
            t
        }()
          , Xi = {
            interactive: !1,
            interactiveChildren: !0,
            hitArea: null,
            get buttonMode() {
                return "pointer" === this.cursor
            },
            set buttonMode(t) {
                t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null)
            },
            cursor: null,
            get trackedPointers() {
                return void 0 === this._trackedPointers && (this._trackedPointers = {}),
                this._trackedPointers
            },
            _trackedPointers: void 0
        };
        se.mixin(Xi);
        var Hi = {
            target: null,
            data: {
                global: null
            }
        }
          , ji = function(t) {
            function e(e, r) {
                var i = t.call(this) || this;
                return r = r || {},
                i.renderer = e,
                i.autoPreventDefault = void 0 === r.autoPreventDefault || r.autoPreventDefault,
                i.interactionFrequency = r.interactionFrequency || 10,
                i.mouse = new Bi,
                i.mouse.identifier = 1,
                i.mouse.global.set(-999999),
                i.activeInteractionData = {},
                i.activeInteractionData[1] = i.mouse,
                i.interactionDataPool = [],
                i.eventData = new Gi,
                i.interactionDOMElement = null,
                i.moveWhenInside = !1,
                i.eventsAdded = !1,
                i.tickerAdded = !1,
                i.mouseOverRenderer = !("PointerEvent"in globalThis),
                i.supportsTouchEvents = "ontouchstart"in globalThis,
                i.supportsPointerEvents = !!globalThis.PointerEvent,
                i.onPointerUp = i.onPointerUp.bind(i),
                i.processPointerUp = i.processPointerUp.bind(i),
                i.onPointerCancel = i.onPointerCancel.bind(i),
                i.processPointerCancel = i.processPointerCancel.bind(i),
                i.onPointerDown = i.onPointerDown.bind(i),
                i.processPointerDown = i.processPointerDown.bind(i),
                i.onPointerMove = i.onPointerMove.bind(i),
                i.processPointerMove = i.processPointerMove.bind(i),
                i.onPointerOut = i.onPointerOut.bind(i),
                i.processPointerOverOut = i.processPointerOverOut.bind(i),
                i.onPointerOver = i.onPointerOver.bind(i),
                i.cursorStyles = {
                    default: "inherit",
                    pointer: "pointer"
                },
                i.currentCursorMode = null,
                i.cursor = null,
                i.resolution = 1,
                i.delayedEvents = [],
                i.search = new ki,
                i._tempDisplayObject = new ae,
                i._eventListenerOptions = {
                    capture: !0,
                    passive: !1
                },
                i._useSystemTicker = void 0 === r.useSystemTicker || r.useSystemTicker,
                i.setTargetElement(i.renderer.view, i.renderer.resolution),
                i
            }
            return function(t, e) {
                function r() {
                    this.constructor = t
                }
                Li(t, e),
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }(e, t),
            Object.defineProperty(e.prototype, "useSystemTicker", {
                get: function() {
                    return this._useSystemTicker
                },
                set: function(t) {
                    this._useSystemTicker = t,
                    t ? this.addTickerListener() : this.removeTickerListener()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "lastObjectRendered", {
                get: function() {
                    return this.renderer._lastObjectRendered || this._tempDisplayObject
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.hitTest = function(t, e) {
                return Hi.target = null,
                Hi.data.global = t,
                e || (e = this.lastObjectRendered),
                this.processInteractive(Hi, e, null, !0),
                Hi.target
            }
            ,
            e.prototype.setTargetElement = function(t, e) {
                void 0 === e && (e = 1),
                this.removeTickerListener(),
                this.removeEvents(),
                this.interactionDOMElement = t,
                this.resolution = e,
                this.addEvents(),
                this.addTickerListener()
            }
            ,
            e.prototype.addTickerListener = function() {
                !this.tickerAdded && this.interactionDOMElement && this._useSystemTicker && (ve.system.add(this.tickerUpdate, this, de.INTERACTION),
                this.tickerAdded = !0)
            }
            ,
            e.prototype.removeTickerListener = function() {
                this.tickerAdded && (ve.system.remove(this.tickerUpdate, this),
                this.tickerAdded = !1)
            }
            ,
            e.prototype.addEvents = function() {
                if (!this.eventsAdded && this.interactionDOMElement) {
                    var t = this.interactionDOMElement.style;
                    globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "none",
                    t.msTouchAction = "none") : this.supportsPointerEvents && (t.touchAction = "none"),
                    this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this.onPointerMove, this._eventListenerOptions),
                    this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, this._eventListenerOptions),
                    this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, this._eventListenerOptions),
                    this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, this._eventListenerOptions),
                    globalThis.addEventListener("pointercancel", this.onPointerCancel, this._eventListenerOptions),
                    globalThis.addEventListener("pointerup", this.onPointerUp, this._eventListenerOptions)) : (globalThis.document.addEventListener("mousemove", this.onPointerMove, this._eventListenerOptions),
                    this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, this._eventListenerOptions),
                    this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, this._eventListenerOptions),
                    this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, this._eventListenerOptions),
                    globalThis.addEventListener("mouseup", this.onPointerUp, this._eventListenerOptions)),
                    this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, this._eventListenerOptions),
                    this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, this._eventListenerOptions),
                    this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, this._eventListenerOptions),
                    this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, this._eventListenerOptions)),
                    this.eventsAdded = !0
                }
            }
            ,
            e.prototype.removeEvents = function() {
                if (this.eventsAdded && this.interactionDOMElement) {
                    var t = this.interactionDOMElement.style;
                    globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "",
                    t.msTouchAction = "") : this.supportsPointerEvents && (t.touchAction = ""),
                    this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this.onPointerMove, this._eventListenerOptions),
                    this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, this._eventListenerOptions),
                    this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, this._eventListenerOptions),
                    this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, this._eventListenerOptions),
                    globalThis.removeEventListener("pointercancel", this.onPointerCancel, this._eventListenerOptions),
                    globalThis.removeEventListener("pointerup", this.onPointerUp, this._eventListenerOptions)) : (globalThis.document.removeEventListener("mousemove", this.onPointerMove, this._eventListenerOptions),
                    this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, this._eventListenerOptions),
                    this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, this._eventListenerOptions),
                    this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, this._eventListenerOptions),
                    globalThis.removeEventListener("mouseup", this.onPointerUp, this._eventListenerOptions)),
                    this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, this._eventListenerOptions),
                    this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, this._eventListenerOptions),
                    this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, this._eventListenerOptions),
                    this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, this._eventListenerOptions)),
                    this.interactionDOMElement = null,
                    this.eventsAdded = !1
                }
            }
            ,
            e.prototype.tickerUpdate = function(t) {
                this._deltaTime += t,
                this._deltaTime < this.interactionFrequency || (this._deltaTime = 0,
                this.update())
            }
            ,
            e.prototype.update = function() {
                if (this.interactionDOMElement)
                    if (this._didMove)
                        this._didMove = !1;
                    else {
                        for (var t in this.cursor = null,
                        this.activeInteractionData)
                            if (this.activeInteractionData.hasOwnProperty(t)) {
                                var e = this.activeInteractionData[t];
                                if (e.originalEvent && "touch" !== e.pointerType) {
                                    var r = this.configureInteractionEventForDOMEvent(this.eventData, e.originalEvent, e);
                                    this.processInteractive(r, this.lastObjectRendered, this.processPointerOverOut, !0)
                                }
                            }
                        this.setCursorMode(this.cursor)
                    }
            }
            ,
            e.prototype.setCursorMode = function(t) {
                t = t || "default";
                var e = !0;
                if (globalThis.OffscreenCanvas && this.interactionDOMElement instanceof OffscreenCanvas && (e = !1),
                this.currentCursorMode !== t) {
                    this.currentCursorMode = t;
                    var r = this.cursorStyles[t];
                    if (r)
                        switch (typeof r) {
                        case "string":
                            e && (this.interactionDOMElement.style.cursor = r);
                            break;
                        case "function":
                            r(t);
                            break;
                        case "object":
                            e && Object.assign(this.interactionDOMElement.style, r)
                        }
                    else
                        e && "string" == typeof t && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) && (this.interactionDOMElement.style.cursor = t)
                }
            }
            ,
            e.prototype.dispatchEvent = function(t, e, r) {
                r.stopPropagationHint && t !== r.stopsPropagatingAt || (r.currentTarget = t,
                r.type = e,
                t.emit(e, r),
                t[e] && t[e](r))
            }
            ,
            e.prototype.delayDispatchEvent = function(t, e, r) {
                this.delayedEvents.push({
                    displayObject: t,
                    eventString: e,
                    eventData: r
                })
            }
            ,
            e.prototype.mapPositionToPoint = function(t, e, r) {
                var i;
                i = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                    x: 0,
                    y: 0,
                    width: this.interactionDOMElement.width,
                    height: this.interactionDOMElement.height,
                    left: 0,
                    top: 0
                };
                var n = 1 / this.resolution;
                t.x = (e - i.left) * (this.interactionDOMElement.width / i.width) * n,
                t.y = (r - i.top) * (this.interactionDOMElement.height / i.height) * n
            }
            ,
            e.prototype.processInteractive = function(t, e, r, i) {
                var n = this.search.findHit(t, e, r, i)
                  , o = this.delayedEvents;
                if (!o.length)
                    return n;
                t.stopPropagationHint = !1;
                var s = o.length;
                this.delayedEvents = [];
                for (var a = 0; a < s; a++) {
                    var u = o[a]
                      , h = u.displayObject
                      , l = u.eventString
                      , c = u.eventData;
                    c.stopsPropagatingAt === h && (c.stopPropagationHint = !0),
                    this.dispatchEvent(h, l, c)
                }
                return n
            }
            ,
            e.prototype.onPointerDown = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t);
                    this.autoPreventDefault && e[0].isNormalized && (t.cancelable || !("cancelable"in t)) && t.preventDefault();
                    for (var r = e.length, i = 0; i < r; i++) {
                        var n = e[i]
                          , o = this.getInteractionDataForPointerId(n)
                          , s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                        if (s.data.originalEvent = t,
                        this.processInteractive(s, this.lastObjectRendered, this.processPointerDown, !0),
                        this.emit("pointerdown", s),
                        "touch" === n.pointerType)
                            this.emit("touchstart", s);
                        else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                            var a = 2 === n.button;
                            this.emit(a ? "rightdown" : "mousedown", this.eventData)
                        }
                    }
                }
            }
            ,
            e.prototype.processPointerDown = function(t, e, r) {
                var i = t.data
                  , n = t.data.identifier;
                if (r)
                    if (e.trackedPointers[n] || (e.trackedPointers[n] = new Ui(n)),
                    this.dispatchEvent(e, "pointerdown", t),
                    "touch" === i.pointerType)
                        this.dispatchEvent(e, "touchstart", t);
                    else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
                        var o = 2 === i.button;
                        o ? e.trackedPointers[n].rightDown = !0 : e.trackedPointers[n].leftDown = !0,
                        this.dispatchEvent(e, o ? "rightdown" : "mousedown", t)
                    }
            }
            ,
            e.prototype.onPointerComplete = function(t, e, r) {
                var i = this.normalizeToPointerData(t)
                  , n = i.length
                  , o = t.target;
                t.composedPath && t.composedPath().length > 0 && (o = t.composedPath()[0]);
                for (var s = o !== this.interactionDOMElement ? "outside" : "", a = 0; a < n; a++) {
                    var u = i[a]
                      , h = this.getInteractionDataForPointerId(u)
                      , l = this.configureInteractionEventForDOMEvent(this.eventData, u, h);
                    if (l.data.originalEvent = t,
                    this.processInteractive(l, this.lastObjectRendered, r, e || !s),
                    this.emit(e ? "pointercancel" : "pointerup" + s, l),
                    "mouse" === u.pointerType || "pen" === u.pointerType) {
                        var c = 2 === u.button;
                        this.emit(c ? "rightup" + s : "mouseup" + s, l)
                    } else
                        "touch" === u.pointerType && (this.emit(e ? "touchcancel" : "touchend" + s, l),
                        this.releaseInteractionDataForPointerId(u.pointerId))
                }
            }
            ,
            e.prototype.onPointerCancel = function(t) {
                this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel)
            }
            ,
            e.prototype.processPointerCancel = function(t, e) {
                var r = t.data
                  , i = t.data.identifier;
                void 0 !== e.trackedPointers[i] && (delete e.trackedPointers[i],
                this.dispatchEvent(e, "pointercancel", t),
                "touch" === r.pointerType && this.dispatchEvent(e, "touchcancel", t))
            }
            ,
            e.prototype.onPointerUp = function(t) {
                this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp)
            }
            ,
            e.prototype.processPointerUp = function(t, e, r) {
                var i = t.data
                  , n = t.data.identifier
                  , o = e.trackedPointers[n]
                  , s = "touch" === i.pointerType
                  , a = "mouse" === i.pointerType || "pen" === i.pointerType
                  , u = !1;
                if (a) {
                    var h = 2 === i.button
                      , l = Ui.FLAGS
                      , c = h ? l.RIGHT_DOWN : l.LEFT_DOWN
                      , d = void 0 !== o && o.flags & c;
                    r ? (this.dispatchEvent(e, h ? "rightup" : "mouseup", t),
                    d && (this.dispatchEvent(e, h ? "rightclick" : "click", t),
                    u = !0)) : d && this.dispatchEvent(e, h ? "rightupoutside" : "mouseupoutside", t),
                    o && (h ? o.rightDown = !1 : o.leftDown = !1)
                }
                r ? (this.dispatchEvent(e, "pointerup", t),
                s && this.dispatchEvent(e, "touchend", t),
                o && (a && !u || this.dispatchEvent(e, "pointertap", t),
                s && (this.dispatchEvent(e, "tap", t),
                o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t),
                s && this.dispatchEvent(e, "touchendoutside", t)),
                o && o.none && delete e.trackedPointers[n]
            }
            ,
            e.prototype.onPointerMove = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t);
                    "mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this._didMove = !0,
                    this.cursor = null);
                    for (var r = e.length, i = 0; i < r; i++) {
                        var n = e[i]
                          , o = this.getInteractionDataForPointerId(n)
                          , s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                        s.data.originalEvent = t,
                        this.processInteractive(s, this.lastObjectRendered, this.processPointerMove, !0),
                        this.emit("pointermove", s),
                        "touch" === n.pointerType && this.emit("touchmove", s),
                        "mouse" !== n.pointerType && "pen" !== n.pointerType || this.emit("mousemove", s)
                    }
                    "mouse" === e[0].pointerType && this.setCursorMode(this.cursor)
                }
            }
            ,
            e.prototype.processPointerMove = function(t, e, r) {
                var i = t.data
                  , n = "touch" === i.pointerType
                  , o = "mouse" === i.pointerType || "pen" === i.pointerType;
                o && this.processPointerOverOut(t, e, r),
                this.moveWhenInside && !r || (this.dispatchEvent(e, "pointermove", t),
                n && this.dispatchEvent(e, "touchmove", t),
                o && this.dispatchEvent(e, "mousemove", t))
            }
            ,
            e.prototype.onPointerOut = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t)[0];
                    "mouse" === e.pointerType && (this.mouseOverRenderer = !1,
                    this.setCursorMode(null));
                    var r = this.getInteractionDataForPointerId(e)
                      , i = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
                    i.data.originalEvent = e,
                    this.processInteractive(i, this.lastObjectRendered, this.processPointerOverOut, !1),
                    this.emit("pointerout", i),
                    "mouse" === e.pointerType || "pen" === e.pointerType ? this.emit("mouseout", i) : this.releaseInteractionDataForPointerId(r.identifier)
                }
            }
            ,
            e.prototype.processPointerOverOut = function(t, e, r) {
                var i = t.data
                  , n = t.data.identifier
                  , o = "mouse" === i.pointerType || "pen" === i.pointerType
                  , s = e.trackedPointers[n];
                r && !s && (s = e.trackedPointers[n] = new Ui(n)),
                void 0 !== s && (r && this.mouseOverRenderer ? (s.over || (s.over = !0,
                this.delayDispatchEvent(e, "pointerover", t),
                o && this.delayDispatchEvent(e, "mouseover", t)),
                o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1,
                this.dispatchEvent(e, "pointerout", this.eventData),
                o && this.dispatchEvent(e, "mouseout", t),
                s.none && delete e.trackedPointers[n]))
            }
            ,
            e.prototype.onPointerOver = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t)[0]
                      , r = this.getInteractionDataForPointerId(e)
                      , i = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
                    i.data.originalEvent = e,
                    "mouse" === e.pointerType && (this.mouseOverRenderer = !0),
                    this.emit("pointerover", i),
                    "mouse" !== e.pointerType && "pen" !== e.pointerType || this.emit("mouseover", i)
                }
            }
            ,
            e.prototype.getInteractionDataForPointerId = function(t) {
                var e, r = t.pointerId;
                return 1 === r || "mouse" === t.pointerType ? e = this.mouse : this.activeInteractionData[r] ? e = this.activeInteractionData[r] : ((e = this.interactionDataPool.pop() || new Bi).identifier = r,
                this.activeInteractionData[r] = e),
                e.copyEvent(t),
                e
            }
            ,
            e.prototype.releaseInteractionDataForPointerId = function(t) {
                var e = this.activeInteractionData[t];
                e && (delete this.activeInteractionData[t],
                e.reset(),
                this.interactionDataPool.push(e))
            }
            ,
            e.prototype.configureInteractionEventForDOMEvent = function(t, e, r) {
                return t.data = r,
                this.mapPositionToPoint(r.global, e.clientX, e.clientY),
                "touch" === e.pointerType && (e.globalX = r.global.x,
                e.globalY = r.global.y),
                r.originalEvent = e,
                t.reset(),
                t
            }
            ,
            e.prototype.normalizeToPointerData = function(t) {
                var e = [];
                if (this.supportsTouchEvents && t instanceof TouchEvent)
                    for (var r = 0, i = t.changedTouches.length; r < i; r++) {
                        var n = t.changedTouches[r];
                        void 0 === n.button && (n.button = t.touches.length ? 1 : 0),
                        void 0 === n.buttons && (n.buttons = t.touches.length ? 1 : 0),
                        void 0 === n.isPrimary && (n.isPrimary = 1 === t.touches.length && "touchstart" === t.type),
                        void 0 === n.width && (n.width = n.radiusX || 1),
                        void 0 === n.height && (n.height = n.radiusY || 1),
                        void 0 === n.tiltX && (n.tiltX = 0),
                        void 0 === n.tiltY && (n.tiltY = 0),
                        void 0 === n.pointerType && (n.pointerType = "touch"),
                        void 0 === n.pointerId && (n.pointerId = n.identifier || 0),
                        void 0 === n.pressure && (n.pressure = n.force || .5),
                        void 0 === n.twist && (n.twist = 0),
                        void 0 === n.tangentialPressure && (n.tangentialPressure = 0),
                        void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX),
                        void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY),
                        n.isNormalized = !0,
                        e.push(n)
                    }
                else if (!globalThis.MouseEvent || t instanceof MouseEvent && !(this.supportsPointerEvents && t instanceof globalThis.PointerEvent)) {
                    var o = t;
                    void 0 === o.isPrimary && (o.isPrimary = !0),
                    void 0 === o.width && (o.width = 1),
                    void 0 === o.height && (o.height = 1),
                    void 0 === o.tiltX && (o.tiltX = 0),
                    void 0 === o.tiltY && (o.tiltY = 0),
                    void 0 === o.pointerType && (o.pointerType = "mouse"),
                    void 0 === o.pointerId && (o.pointerId = 1),
                    void 0 === o.pressure && (o.pressure = .5),
                    void 0 === o.twist && (o.twist = 0),
                    void 0 === o.tangentialPressure && (o.tangentialPressure = 0),
                    o.isNormalized = !0,
                    e.push(o)
                } else
                    e.push(t);
                return e
            }
            ,
            e.prototype.destroy = function() {
                this.removeEvents(),
                this.removeTickerListener(),
                this.removeAllListeners(),
                this.renderer = null,
                this.mouse = null,
                this.eventData = null,
                this.interactionDOMElement = null,
                this.onPointerDown = null,
                this.processPointerDown = null,
                this.onPointerUp = null,
                this.processPointerUp = null,
                this.onPointerCancel = null,
                this.processPointerCancel = null,
                this.onPointerMove = null,
                this.processPointerMove = null,
                this.onPointerOut = null,
                this.processPointerOverOut = null,
                this.onPointerOver = null,
                this.search = null
            }
            ,
            e.extension = {
                name: "interaction",
                type: [le.RendererPlugin, le.CanvasRendererPlugin]
            },
            e
        }(ot)
          , Yi = new Xt
          , Vi = function() {
            function t(t) {
                this.renderer = t
            }
            return t.prototype.image = function(t, e, r) {
                var i = new Image;
                return i.src = this.base64(t, e, r),
                i
            }
            ,
            t.prototype.base64 = function(t, e, r) {
                return this.canvas(t).toDataURL(e, r)
            }
            ,
            t.prototype.canvas = function(e, r) {
                var i, n, o = this.renderer, s = !1, a = !1;
                e && (e instanceof Ve ? n = e : (n = this.renderer.generateTexture(e),
                a = !0)),
                n ? (i = n.baseTexture.resolution,
                r = null != r ? r : n.frame,
                s = !1,
                o.renderTexture.bind(n)) : (i = o.resolution,
                r || ((r = Yi).width = o.width,
                r.height = o.height),
                s = !0,
                o.renderTexture.bind(null));
                var u = Math.round(r.width * i)
                  , h = Math.round(r.height * i)
                  , l = new Ct(u,h,1)
                  , c = new Uint8Array(4 * u * h)
                  , d = o.gl;
                d.readPixels(Math.round(r.x * i), Math.round(r.y * i), u, h, d.RGBA, d.UNSIGNED_BYTE, c);
                var p = l.context.getImageData(0, 0, u, h);
                if (t.arrayPostDivide(c, p.data),
                l.context.putImageData(p, 0, 0),
                s) {
                    var f = new Ct(l.width,l.height,1);
                    f.context.scale(1, -1),
                    f.context.drawImage(l.canvas, 0, -h),
                    l.destroy(),
                    l = f
                }
                return a && n.destroy(!0),
                l.canvas
            }
            ,
            t.prototype.pixels = function(e, r) {
                var i, n, o = this.renderer, s = !1;
                e && (e instanceof Ve ? n = e : (n = this.renderer.generateTexture(e),
                s = !0)),
                n ? (i = n.baseTexture.resolution,
                r = null != r ? r : n.frame,
                o.renderTexture.bind(n)) : (i = o.resolution,
                r || ((r = Yi).width = o.width,
                r.height = o.height),
                o.renderTexture.bind(null));
                var a = Math.round(r.width * i)
                  , u = Math.round(r.height * i)
                  , h = new Uint8Array(4 * a * u)
                  , l = o.gl;
                return l.readPixels(Math.round(r.x * i), Math.round(r.y * i), a, u, l.RGBA, l.UNSIGNED_BYTE, h),
                s && n.destroy(!0),
                t.arrayPostDivide(h, h),
                h
            }
            ,
            t.prototype.destroy = function() {
                this.renderer = null
            }
            ,
            t.arrayPostDivide = function(t, e) {
                for (var r = 0; r < t.length; r += 4) {
                    var i = e[r + 3] = t[r + 3];
                    0 !== i ? (e[r] = Math.round(Math.min(255 * t[r] / i, 255)),
                    e[r + 1] = Math.round(Math.min(255 * t[r + 1] / i, 255)),
                    e[r + 2] = Math.round(Math.min(255 * t[r + 2] / i, 255))) : (e[r] = t[r],
                    e[r + 1] = t[r + 1],
                    e[r + 2] = t[r + 2])
                }
            }
            ,
            t.extension = {
                name: "extract",
                type: le.RendererPlugin
            },
            t
        }()
          , Wi = function() {
            function t(t, e, r) {
                void 0 === e && (e = !1),
                this._fn = t,
                this._once = e,
                this._thisArg = r,
                this._next = this._prev = this._owner = null
            }
            return t.prototype.detach = function() {
                return null !== this._owner && (this._owner.detach(this),
                !0)
            }
            ,
            t
        }();
        function zi(t, e) {
            return t._head ? (t._tail._next = e,
            e._prev = t._tail,
            t._tail = e) : (t._head = e,
            t._tail = e),
            e._owner = t,
            e
        }
        var $i, qi = function() {
            function t() {
                this._head = this._tail = void 0
            }
            return t.prototype.handlers = function(t) {
                void 0 === t && (t = !1);
                var e = this._head;
                if (t)
                    return !!e;
                for (var r = []; e; )
                    r.push(e),
                    e = e._next;
                return r
            }
            ,
            t.prototype.has = function(t) {
                if (!(t instanceof Wi))
                    throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");
                return t._owner === this
            }
            ,
            t.prototype.dispatch = function() {
                for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
                    e[r] = t[r];
                var i = this._head;
                if (!i)
                    return !1;
                for (; i; )
                    i._once && this.detach(i),
                    i._fn.apply(i._thisArg, e),
                    i = i._next;
                return !0
            }
            ,
            t.prototype.add = function(t, e) {
                if (void 0 === e && (e = null),
                "function" != typeof t)
                    throw new Error("MiniSignal#add(): First arg must be a Function.");
                return zi(this, new Wi(t,!1,e))
            }
            ,
            t.prototype.once = function(t, e) {
                if (void 0 === e && (e = null),
                "function" != typeof t)
                    throw new Error("MiniSignal#once(): First arg must be a Function.");
                return zi(this, new Wi(t,!0,e))
            }
            ,
            t.prototype.detach = function(t) {
                if (!(t instanceof Wi))
                    throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");
                return t._owner !== this || (t._prev && (t._prev._next = t._next),
                t._next && (t._next._prev = t._prev),
                t === this._head ? (this._head = t._next,
                null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev,
                this._tail._next = null),
                t._owner = null),
                this
            }
            ,
            t.prototype.detachAll = function() {
                var t = this._head;
                if (!t)
                    return this;
                for (this._head = this._tail = null; t; )
                    t._owner = null,
                    t = t._next;
                return this
            }
            ,
            t
        }();
        function Ki(t, e) {
            e = e || {};
            for (var r = {
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            }, i = r.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--; )
                n[r.key[o]] = i[o] || "";
            return n[r.q.name] = {},
            n[r.key[12]].replace(r.q.parser, (function(t, e, i) {
                e && (n[r.q.name][e] = i)
            }
            )),
            n
        }
        var Zi = null;
        function Ji() {}
        function Qi(t, e, r) {
            e && 0 === e.indexOf(".") && (e = e.substring(1)),
            e && (t[e] = r)
        }
        function tn(t) {
            return t.toString().replace("object ", "")
        }
        var en = function() {
            function t(e, r, i) {
                if (this._dequeue = Ji,
                this._onLoadBinding = null,
                this._elementTimer = 0,
                this._boundComplete = null,
                this._boundOnError = null,
                this._boundOnProgress = null,
                this._boundOnTimeout = null,
                this._boundXhrOnError = null,
                this._boundXhrOnTimeout = null,
                this._boundXhrOnAbort = null,
                this._boundXhrOnLoad = null,
                "string" != typeof e || "string" != typeof r)
                    throw new Error("Both name and url are required for constructing a resource.");
                i = i || {},
                this._flags = 0,
                this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === r.indexOf("data:")),
                this.name = e,
                this.url = r,
                this.extension = this._getExtension(),
                this.data = null,
                this.crossOrigin = !0 === i.crossOrigin ? "anonymous" : i.crossOrigin,
                this.timeout = i.timeout || 0,
                this.loadType = i.loadType || this._determineLoadType(),
                this.xhrType = i.xhrType,
                this.metadata = i.metadata || {},
                this.error = null,
                this.xhr = null,
                this.children = [],
                this.type = t.TYPE.UNKNOWN,
                this.progressChunk = 0,
                this._dequeue = Ji,
                this._onLoadBinding = null,
                this._elementTimer = 0,
                this._boundComplete = this.complete.bind(this),
                this._boundOnError = this._onError.bind(this),
                this._boundOnProgress = this._onProgress.bind(this),
                this._boundOnTimeout = this._onTimeout.bind(this),
                this._boundXhrOnError = this._xhrOnError.bind(this),
                this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this),
                this._boundXhrOnAbort = this._xhrOnAbort.bind(this),
                this._boundXhrOnLoad = this._xhrOnLoad.bind(this),
                this.onStart = new qi,
                this.onProgress = new qi,
                this.onComplete = new qi,
                this.onAfterMiddleware = new qi
            }
            return t.setExtensionLoadType = function(e, r) {
                Qi(t._loadTypeMap, e, r)
            }
            ,
            t.setExtensionXhrType = function(e, r) {
                Qi(t._xhrTypeMap, e, r)
            }
            ,
            Object.defineProperty(t.prototype, "isDataUrl", {
                get: function() {
                    return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isComplete", {
                get: function() {
                    return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isLoading", {
                get: function() {
                    return this._hasFlag(t.STATUS_FLAGS.LOADING)
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.complete = function() {
                this._clearEvents(),
                this._finish()
            }
            ,
            t.prototype.abort = function(e) {
                if (!this.error) {
                    if (this.error = new Error(e),
                    this._clearEvents(),
                    this.xhr)
                        this.xhr.abort();
                    else if (this.xdr)
                        this.xdr.abort();
                    else if (this.data)
                        if (this.data.src)
                            this.data.src = t.EMPTY_GIF;
                        else
                            for (; this.data.firstChild; )
                                this.data.removeChild(this.data.firstChild);
                    this._finish()
                }
            }
            ,
            t.prototype.load = function(e) {
                var r = this;
                if (!this.isLoading)
                    if (this.isComplete)
                        e && setTimeout((function() {
                            return e(r)
                        }
                        ), 1);
                    else
                        switch (e && this.onComplete.once(e),
                        this._setFlag(t.STATUS_FLAGS.LOADING, !0),
                        this.onStart.dispatch(this),
                        !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)),
                        this.loadType) {
                        case t.LOAD_TYPE.IMAGE:
                            this.type = t.TYPE.IMAGE,
                            this._loadElement("image");
                            break;
                        case t.LOAD_TYPE.AUDIO:
                            this.type = t.TYPE.AUDIO,
                            this._loadSourceElement("audio");
                            break;
                        case t.LOAD_TYPE.VIDEO:
                            this.type = t.TYPE.VIDEO,
                            this._loadSourceElement("video");
                            break;
                        case t.LOAD_TYPE.XHR:
                        default:
                            void 0 === $i && ($i = !(!globalThis.XDomainRequest || "withCredentials"in new XMLHttpRequest)),
                            $i && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                        }
            }
            ,
            t.prototype._hasFlag = function(t) {
                return 0 != (this._flags & t)
            }
            ,
            t.prototype._setFlag = function(t, e) {
                this._flags = e ? this._flags | t : this._flags & ~t
            }
            ,
            t.prototype._clearEvents = function() {
                clearTimeout(this._elementTimer),
                this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1),
                this.data.removeEventListener("load", this._boundComplete, !1),
                this.data.removeEventListener("progress", this._boundOnProgress, !1),
                this.data.removeEventListener("canplaythrough", this._boundComplete, !1)),
                this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1),
                this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1),
                this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1),
                this.xhr.removeEventListener("progress", this._boundOnProgress, !1),
                this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null,
                this.xhr.ontimeout = null,
                this.xhr.onprogress = null,
                this.xhr.onload = null))
            }
            ,
            t.prototype._finish = function() {
                if (this.isComplete)
                    throw new Error("Complete called again for an already completed resource.");
                this._setFlag(t.STATUS_FLAGS.COMPLETE, !0),
                this._setFlag(t.STATUS_FLAGS.LOADING, !1),
                this.onComplete.dispatch(this)
            }
            ,
            t.prototype._loadElement = function(t) {
                this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== globalThis.Image ? this.data = new Image : this.data = document.createElement(t),
                this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
                this.metadata.skipSource || (this.data.src = this.url),
                this.data.addEventListener("error", this._boundOnError, !1),
                this.data.addEventListener("load", this._boundComplete, !1),
                this.data.addEventListener("progress", this._boundOnProgress, !1),
                this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
            }
            ,
            t.prototype._loadSourceElement = function(t) {
                if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== globalThis.Audio ? this.data = new Audio : this.data = document.createElement(t),
                null !== this.data) {
                    if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
                    !this.metadata.skipSource)
                        if (navigator.isCocoonJS)
                            this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                        else if (Array.isArray(this.url))
                            for (var e = this.metadata.mimeType, r = 0; r < this.url.length; ++r)
                                this.data.appendChild(this._createSource(t, this.url[r], Array.isArray(e) ? e[r] : e));
                        else
                            e = this.metadata.mimeType,
                            this.data.appendChild(this._createSource(t, this.url, Array.isArray(e) ? e[0] : e));
                    this.data.addEventListener("error", this._boundOnError, !1),
                    this.data.addEventListener("load", this._boundComplete, !1),
                    this.data.addEventListener("progress", this._boundOnProgress, !1),
                    this.data.addEventListener("canplaythrough", this._boundComplete, !1),
                    this.data.load(),
                    this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
                } else
                    this.abort("Unsupported element: " + t)
            }
            ,
            t.prototype._loadXhr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var e = this.xhr = new XMLHttpRequest;
                "use-credentials" === this.crossOrigin && (e.withCredentials = !0),
                e.open("GET", this.url, !0),
                e.timeout = this.timeout,
                this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType,
                e.addEventListener("error", this._boundXhrOnError, !1),
                e.addEventListener("timeout", this._boundXhrOnTimeout, !1),
                e.addEventListener("abort", this._boundXhrOnAbort, !1),
                e.addEventListener("progress", this._boundOnProgress, !1),
                e.addEventListener("load", this._boundXhrOnLoad, !1),
                e.send()
            }
            ,
            t.prototype._loadXdr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new globalThis.XDomainRequest;
                t.timeout = this.timeout || 5e3,
                t.onerror = this._boundXhrOnError,
                t.ontimeout = this._boundXhrOnTimeout,
                t.onprogress = this._boundOnProgress,
                t.onload = this._boundXhrOnLoad,
                t.open("GET", this.url, !0),
                setTimeout((function() {
                    return t.send()
                }
                ), 1)
            }
            ,
            t.prototype._createSource = function(t, e, r) {
                r || (r = t + "/" + this._getExtension(e));
                var i = document.createElement("source");
                return i.src = e,
                i.type = r,
                i
            }
            ,
            t.prototype._onError = function(t) {
                this.abort("Failed to load element using: " + t.target.nodeName)
            }
            ,
            t.prototype._onProgress = function(t) {
                t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
            }
            ,
            t.prototype._onTimeout = function() {
                this.abort("Load timed out.")
            }
            ,
            t.prototype._xhrOnError = function() {
                var t = this.xhr;
                this.abort(tn(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
            }
            ,
            t.prototype._xhrOnTimeout = function() {
                var t = this.xhr;
                this.abort(tn(t) + " Request timed out.")
            }
            ,
            t.prototype._xhrOnAbort = function() {
                var t = this.xhr;
                this.abort(tn(t) + " Request was aborted by the user.")
            }
            ,
            t.prototype._xhrOnLoad = function() {
                var e = this.xhr
                  , r = ""
                  , i = void 0 === e.status ? 200 : e.status;
                if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (r = e.responseText),
                0 === i && (r.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? i = 200 : 1223 === i && (i = 204),
                2 == (i / 100 | 0)) {
                    if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT)
                        this.data = r,
                        this.type = t.TYPE.TEXT;
                    else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON)
                        try {
                            this.data = JSON.parse(r),
                            this.type = t.TYPE.JSON
                        } catch (t) {
                            return void this.abort("Error trying to parse loaded json: " + t)
                        }
                    else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT)
                        try {
                            if (globalThis.DOMParser) {
                                var n = new DOMParser;
                                this.data = n.parseFromString(r, "text/xml")
                            } else {
                                var o = document.createElement("div");
                                o.innerHTML = r,
                                this.data = o
                            }
                            this.type = t.TYPE.XML
                        } catch (t) {
                            return void this.abort("Error trying to parse loaded xml: " + t)
                        }
                    else
                        this.data = e.response || r;
                    this.complete()
                } else
                    this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL)
            }
            ,
            t.prototype._determineCrossOrigin = function(t, e) {
                if (0 === t.indexOf("data:"))
                    return "";
                if (globalThis.origin !== globalThis.location.origin)
                    return "anonymous";
                e = e || globalThis.location,
                Zi || (Zi = document.createElement("a")),
                Zi.href = t;
                var r = Ki(Zi.href, {
                    strictMode: !0
                })
                  , i = !r.port && "" === e.port || r.port === e.port
                  , n = r.protocol ? r.protocol + ":" : "";
                return r.host === e.hostname && i && n === e.protocol ? "" : "anonymous"
            }
            ,
            t.prototype._determineXhrType = function() {
                return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
            }
            ,
            t.prototype._determineLoadType = function() {
                return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
            }
            ,
            t.prototype._getExtension = function(t) {
                void 0 === t && (t = this.url);
                var e = "";
                if (this.isDataUrl) {
                    var r = t.indexOf("/");
                    e = t.substring(r + 1, t.indexOf(";", r))
                } else {
                    var i = t.indexOf("?")
                      , n = t.indexOf("#")
                      , o = Math.min(i > -1 ? i : t.length, n > -1 ? n : t.length);
                    e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1)
                }
                return e.toLowerCase()
            }
            ,
            t.prototype._getMimeFromXhrType = function(e) {
                switch (e) {
                case t.XHR_RESPONSE_TYPE.BUFFER:
                    return "application/octet-binary";
                case t.XHR_RESPONSE_TYPE.BLOB:
                    return "application/blob";
                case t.XHR_RESPONSE_TYPE.DOCUMENT:
                    return "application/xml";
                case t.XHR_RESPONSE_TYPE.JSON:
                    return "application/json";
                case t.XHR_RESPONSE_TYPE.DEFAULT:
                case t.XHR_RESPONSE_TYPE.TEXT:
                default:
                    return "text/plain"
                }
            }
            ,
            t
        }();
        function rn() {}
        function nn(t) {
            return function() {
                for (var e = arguments, r = [], i = 0; i < arguments.length; i++)
                    r[i] = e[i];
                if (null === t)
                    throw new Error("Callback was already called.");
                var n = t;
                t = null,
                n.apply(this, r)
            }
        }
        !function(t) {
            var e, r, i, n;
            (e = t.STATUS_FLAGS || (t.STATUS_FLAGS = {}))[e.NONE = 0] = "NONE",
            e[e.DATA_URL = 1] = "DATA_URL",
            e[e.COMPLETE = 2] = "COMPLETE",
            e[e.LOADING = 4] = "LOADING",
            (r = t.TYPE || (t.TYPE = {}))[r.UNKNOWN = 0] = "UNKNOWN",
            r[r.JSON = 1] = "JSON",
            r[r.XML = 2] = "XML",
            r[r.IMAGE = 3] = "IMAGE",
            r[r.AUDIO = 4] = "AUDIO",
            r[r.VIDEO = 5] = "VIDEO",
            r[r.TEXT = 6] = "TEXT",
            (i = t.LOAD_TYPE || (t.LOAD_TYPE = {}))[i.XHR = 1] = "XHR",
            i[i.IMAGE = 2] = "IMAGE",
            i[i.AUDIO = 3] = "AUDIO",
            i[i.VIDEO = 4] = "VIDEO",
            (n = t.XHR_RESPONSE_TYPE || (t.XHR_RESPONSE_TYPE = {})).DEFAULT = "text",
            n.BUFFER = "arraybuffer",
            n.BLOB = "blob",
            n.DOCUMENT = "document",
            n.JSON = "json",
            n.TEXT = "text",
            t._loadTypeMap = {
                gif: t.LOAD_TYPE.IMAGE,
                png: t.LOAD_TYPE.IMAGE,
                bmp: t.LOAD_TYPE.IMAGE,
                jpg: t.LOAD_TYPE.IMAGE,
                jpeg: t.LOAD_TYPE.IMAGE,
                tif: t.LOAD_TYPE.IMAGE,
                tiff: t.LOAD_TYPE.IMAGE,
                webp: t.LOAD_TYPE.IMAGE,
                tga: t.LOAD_TYPE.IMAGE,
                avif: t.LOAD_TYPE.IMAGE,
                svg: t.LOAD_TYPE.IMAGE,
                "svg+xml": t.LOAD_TYPE.IMAGE,
                mp3: t.LOAD_TYPE.AUDIO,
                ogg: t.LOAD_TYPE.AUDIO,
                wav: t.LOAD_TYPE.AUDIO,
                mp4: t.LOAD_TYPE.VIDEO,
                webm: t.LOAD_TYPE.VIDEO
            },
            t._xhrTypeMap = {
                xhtml: t.XHR_RESPONSE_TYPE.DOCUMENT,
                html: t.XHR_RESPONSE_TYPE.DOCUMENT,
                htm: t.XHR_RESPONSE_TYPE.DOCUMENT,
                xml: t.XHR_RESPONSE_TYPE.DOCUMENT,
                tmx: t.XHR_RESPONSE_TYPE.DOCUMENT,
                svg: t.XHR_RESPONSE_TYPE.DOCUMENT,
                tsx: t.XHR_RESPONSE_TYPE.DOCUMENT,
                gif: t.XHR_RESPONSE_TYPE.BLOB,
                png: t.XHR_RESPONSE_TYPE.BLOB,
                bmp: t.XHR_RESPONSE_TYPE.BLOB,
                jpg: t.XHR_RESPONSE_TYPE.BLOB,
                jpeg: t.XHR_RESPONSE_TYPE.BLOB,
                tif: t.XHR_RESPONSE_TYPE.BLOB,
                tiff: t.XHR_RESPONSE_TYPE.BLOB,
                webp: t.XHR_RESPONSE_TYPE.BLOB,
                tga: t.XHR_RESPONSE_TYPE.BLOB,
                avif: t.XHR_RESPONSE_TYPE.BLOB,
                json: t.XHR_RESPONSE_TYPE.JSON,
                text: t.XHR_RESPONSE_TYPE.TEXT,
                txt: t.XHR_RESPONSE_TYPE.TEXT,
                ttf: t.XHR_RESPONSE_TYPE.BUFFER,
                otf: t.XHR_RESPONSE_TYPE.BUFFER
            },
            t.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        }(en || (en = {}));
        var on = function(t, e) {
            this.data = t,
            this.callback = e
        }
          , sn = function() {
            function t(t, e) {
                var r = this;
                if (void 0 === e && (e = 1),
                this.workers = 0,
                this.saturated = rn,
                this.unsaturated = rn,
                this.empty = rn,
                this.drain = rn,
                this.error = rn,
                this.started = !1,
                this.paused = !1,
                this._tasks = [],
                this._insert = function(t, e, i) {
                    if (i && "function" != typeof i)
                        throw new Error("task callback must be a function");
                    if (r.started = !0,
                    null == t && r.idle())
                        setTimeout((function() {
                            return r.drain()
                        }
                        ), 1);
                    else {
                        var n = new on(t,"function" == typeof i ? i : rn);
                        e ? r._tasks.unshift(n) : r._tasks.push(n),
                        setTimeout(r.process, 1)
                    }
                }
                ,
                this.process = function() {
                    for (; !r.paused && r.workers < r.concurrency && r._tasks.length; ) {
                        var t = r._tasks.shift();
                        0 === r._tasks.length && r.empty(),
                        r.workers += 1,
                        r.workers === r.concurrency && r.saturated(),
                        r._worker(t.data, nn(r._next(t)))
                    }
                }
                ,
                this._worker = t,
                0 === e)
                    throw new Error("Concurrency must not be zero");
                this.concurrency = e,
                this.buffer = e / 4
            }
            return t.prototype._next = function(t) {
                var e = this;
                return function() {
                    for (var r = arguments, i = [], n = 0; n < arguments.length; n++)
                        i[n] = r[n];
                    e.workers -= 1,
                    t.callback.apply(t, i),
                    null != i[0] && e.error(i[0], t.data),
                    e.workers <= e.concurrency - e.buffer && e.unsaturated(),
                    e.idle() && e.drain(),
                    e.process()
                }
            }
            ,
            t.prototype.push = function(t, e) {
                this._insert(t, !1, e)
            }
            ,
            t.prototype.kill = function() {
                this.workers = 0,
                this.drain = rn,
                this.started = !1,
                this._tasks = []
            }
            ,
            t.prototype.unshift = function(t, e) {
                this._insert(t, !0, e)
            }
            ,
            t.prototype.length = function() {
                return this._tasks.length
            }
            ,
            t.prototype.running = function() {
                return this.workers
            }
            ,
            t.prototype.idle = function() {
                return this._tasks.length + this.workers === 0
            }
            ,
            t.prototype.pause = function() {
                !0 !== this.paused && (this.paused = !0)
            }
            ,
            t.prototype.resume = function() {
                if (!1 !== this.paused) {
                    this.paused = !1;
                    for (var t = 1; t <= this.concurrency; t++)
                        this.process()
                }
            }
            ,
            t.eachSeries = function(t, e, r, i) {
                var n = 0
                  , o = t.length;
                !function s(a) {
                    a || n === o ? r && r(a) : i ? setTimeout((function() {
                        e(t[n++], s)
                    }
                    ), 1) : e(t[n++], s)
                }()
            }
            ,
            t.queue = function(e, r) {
                return new t(e,r)
            }
            ,
            t
        }()
          , an = /(#[\w-]+)?$/
          , un = function() {
            function t(e, r) {
                var i = this;
                void 0 === e && (e = ""),
                void 0 === r && (r = 10),
                this.progress = 0,
                this.loading = !1,
                this.defaultQueryString = "",
                this._beforeMiddleware = [],
                this._afterMiddleware = [],
                this._resourcesParsing = [],
                this._boundLoadResource = function(t, e) {
                    return i._loadResource(t, e)
                }
                ,
                this.resources = {},
                this.baseUrl = e,
                this._beforeMiddleware = [],
                this._afterMiddleware = [],
                this._resourcesParsing = [],
                this._boundLoadResource = function(t, e) {
                    return i._loadResource(t, e)
                }
                ,
                this._queue = sn.queue(this._boundLoadResource, r),
                this._queue.pause(),
                this.resources = {},
                this.onProgress = new qi,
                this.onError = new qi,
                this.onLoad = new qi,
                this.onStart = new qi,
                this.onComplete = new qi;
                for (var n = 0; n < t._plugins.length; ++n) {
                    var o = t._plugins[n]
                      , s = o.pre
                      , a = o.use;
                    s && this.pre(s),
                    a && this.use(a)
                }
                this._protected = !1
            }
            return t.prototype._add = function(t, e, r, i) {
                if (this.loading && (!r || !r.parentResource))
                    throw new Error("Cannot add resources while the loader is running.");
                if (this.resources[t])
                    throw new Error('Resource named "' + t + '" already exists.');
                if (e = this._prepareUrl(e),
                this.resources[t] = new en(t,e,r),
                "function" == typeof i && this.resources[t].onAfterMiddleware.once(i),
                this.loading) {
                    for (var n = r.parentResource, o = [], s = 0; s < n.children.length; ++s)
                        n.children[s].isComplete || o.push(n.children[s]);
                    var a = n.progressChunk * (o.length + 1) / (o.length + 2);
                    for (n.children.push(this.resources[t]),
                    n.progressChunk = a,
                    s = 0; s < o.length; ++s)
                        o[s].progressChunk = a;
                    this.resources[t].progressChunk = a
                }
                return this._queue.push(this.resources[t]),
                this
            }
            ,
            t.prototype.pre = function(t) {
                return this._beforeMiddleware.push(t),
                this
            }
            ,
            t.prototype.use = function(t) {
                return this._afterMiddleware.push(t),
                this
            }
            ,
            t.prototype.reset = function() {
                for (var t in this.progress = 0,
                this.loading = !1,
                this._queue.kill(),
                this._queue.pause(),
                this.resources) {
                    var e = this.resources[t];
                    e._onLoadBinding && e._onLoadBinding.detach(),
                    e.isLoading && e.abort("loader reset")
                }
                return this.resources = {},
                this
            }
            ,
            t.prototype.load = function(t) {
                if (Ot("6.5.0", "@pixi/loaders is being replaced with @pixi/assets in the next major release."),
                "function" == typeof t && this.onComplete.once(t),
                this.loading)
                    return this;
                if (this._queue.idle())
                    this._onStart(),
                    this._onComplete();
                else {
                    for (var e = 100 / this._queue._tasks.length, r = 0; r < this._queue._tasks.length; ++r)
                        this._queue._tasks[r].data.progressChunk = e;
                    this._onStart(),
                    this._queue.resume()
                }
                return this
            }
            ,
            Object.defineProperty(t.prototype, "concurrency", {
                get: function() {
                    return this._queue.concurrency
                },
                set: function(t) {
                    this._queue.concurrency = t
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype._prepareUrl = function(t) {
                var e, r = Ki(t, {
                    strictMode: !0
                });
                if (e = r.protocol || !r.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t,
                this.defaultQueryString) {
                    var i = an.exec(e)[0];
                    -1 !== (e = e.slice(0, e.length - i.length)).indexOf("?") ? e += "&" + this.defaultQueryString : e += "?" + this.defaultQueryString,
                    e += i
                }
                return e
            }
            ,
            t.prototype._loadResource = function(t, e) {
                var r = this;
                t._dequeue = e,
                sn.eachSeries(this._beforeMiddleware, (function(e, i) {
                    e.call(r, t, (function() {
                        i(t.isComplete ? {} : null)
                    }
                    ))
                }
                ), (function() {
                    t.isComplete ? r._onLoad(t) : (t._onLoadBinding = t.onComplete.once(r._onLoad, r),
                    t.load())
                }
                ), !0)
            }
            ,
            t.prototype._onStart = function() {
                this.progress = 0,
                this.loading = !0,
                this.onStart.dispatch(this)
            }
            ,
            t.prototype._onComplete = function() {
                this.progress = 100,
                this.loading = !1,
                this.onComplete.dispatch(this, this.resources)
            }
            ,
            t.prototype._onLoad = function(t) {
                var e = this;
                t._onLoadBinding = null,
                this._resourcesParsing.push(t),
                t._dequeue(),
                sn.eachSeries(this._afterMiddleware, (function(r, i) {
                    r.call(e, t, i)
                }
                ), (function() {
                    t.onAfterMiddleware.dispatch(t),
                    e.progress = Math.min(100, e.progress + t.progressChunk),
                    e.onProgress.dispatch(e, t),
                    t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t),
                    e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1),
                    e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
                }
                ), !0)
            }
            ,
            t.prototype.destroy = function() {
                this._protected || this.reset()
            }
            ,
            Object.defineProperty(t, "shared", {
                get: function() {
                    var e = t._shared;
                    return e || ((e = new t)._protected = !0,
                    t._shared = e),
                    e
                },
                enumerable: !1,
                configurable: !0
            }),
            t.registerPlugin = function(e) {
                return Ot("6.5.0", "Loader.registerPlugin() is deprecated, use extensions.add() instead."),
                fe.add({
                    type: le.Loader,
                    ref: e
                }),
                t
            }
            ,
            t._plugins = [],
            t
        }();
        fe.handleByList(le.Loader, un._plugins),
        un.prototype.add = function(t, e, r, i) {
            if (Array.isArray(t)) {
                for (var n = 0; n < t.length; ++n)
                    this.add(t[n]);
                return this
            }
            if ("object" == typeof t && (r = t,
            i = e || r.callback || r.onComplete,
            e = r.url,
            t = r.name || r.key || r.url),
            "string" != typeof e && (i = r,
            r = e,
            e = t),
            "string" != typeof e)
                throw new Error("No url passed to add resource to loader.");
            return "function" == typeof r && (i = r,
            r = null),
            this._add(t, e, r, i)
        }
        ;
        var hn = function() {
            function t() {}
            return t.init = function(t) {
                t = Object.assign({
                    sharedLoader: !1
                }, t),
                this.loader = t.sharedLoader ? un.shared : new un
            }
            ,
            t.destroy = function() {
                this.loader && (this.loader.destroy(),
                this.loader = null)
            }
            ,
            t.extension = le.Application,
            t
        }()
          , ln = function() {
            function t() {}
            return t.add = function() {
                en.setExtensionLoadType("svg", en.LOAD_TYPE.XHR),
                en.setExtensionXhrType("svg", en.XHR_RESPONSE_TYPE.TEXT)
            }
            ,
            t.use = function(t, e) {
                if (!t.data || t.type !== en.TYPE.IMAGE && "svg" !== t.extension)
                    e();
                else {
                    var r = t.data
                      , i = t.url
                      , n = t.name
                      , o = t.metadata;
                    Ye.fromLoader(r, i, n, o).then((function(r) {
                        t.texture = r,
                        e()
                    }
                    )).catch(e)
                }
            }
            ,
            t.extension = le.Loader,
            t
        }();
        function cn(t, e) {
            if (t.data) {
                if (t.xhr && t.xhrType === en.XHR_RESPONSE_TYPE.BLOB)
                    if (self.Blob && "string" != typeof t.data) {
                        if (0 === t.data.type.indexOf("image")) {
                            var r = globalThis.URL || globalThis.webkitURL
                              , i = r.createObjectURL(t.data);
                            return t.blob = t.data,
                            t.data = new Image,
                            t.data.src = i,
                            t.type = en.TYPE.IMAGE,
                            void (t.data.onload = function() {
                                r.revokeObjectURL(i),
                                t.data.onload = null,
                                e()
                            }
                            )
                        }
                    } else {
                        var n = t.xhr.getResponseHeader("content-type");
                        if (n && 0 === n.indexOf("image"))
                            return t.data = new Image,
                            t.data.src = "data:" + n + ";base64," + function(t) {
                                for (var e = "", r = 0; r < t.length; ) {
                                    for (var i = [0, 0, 0], n = [0, 0, 0, 0], o = 0; o < i.length; ++o)
                                        r < t.length ? i[o] = 255 & t.charCodeAt(r++) : i[o] = 0;
                                    switch (n[0] = i[0] >> 2,
                                    n[1] = (3 & i[0]) << 4 | i[1] >> 4,
                                    n[2] = (15 & i[1]) << 2 | i[2] >> 6,
                                    n[3] = 63 & i[2],
                                    r - (t.length - 1)) {
                                    case 2:
                                        n[3] = 64,
                                        n[2] = 64;
                                        break;
                                    case 1:
                                        n[3] = 64
                                    }
                                    for (o = 0; o < n.length; ++o)
                                        e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n[o])
                                }
                                return e
                            }(t.xhr.responseText),
                            t.type = en.TYPE.IMAGE,
                            void (t.data.onload = function() {
                                t.data.onload = null,
                                e()
                            }
                            )
                    }
                e()
            } else
                e()
        }
        var dn, pn, fn = function() {
            function t() {}
            return t.extension = le.Loader,
            t.use = cn,
            t
        }();
        fe.add(ln, fn),
        function(t) {
            t[t.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT",
            t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT",
            t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT",
            t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT",
            t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",
            t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",
            t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",
            t[t.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT",
            t[t.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC",
            t[t.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC",
            t[t.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC",
            t[t.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC",
            t[t.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2",
            t[t.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC",
            t[t.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2",
            t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",
            t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",
            t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",
            t[t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG",
            t[t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",
            t[t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG",
            t[t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",
            t[t.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL",
            t[t.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL",
            t[t.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",
            t[t.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",
            t[t.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR"
        }(pn || (pn = {}));
        var _n = ((dn = {})[pn.COMPRESSED_RGB_S3TC_DXT1_EXT] = .5,
        dn[pn.COMPRESSED_RGBA_S3TC_DXT1_EXT] = .5,
        dn[pn.COMPRESSED_RGBA_S3TC_DXT3_EXT] = 1,
        dn[pn.COMPRESSED_RGBA_S3TC_DXT5_EXT] = 1,
        dn[pn.COMPRESSED_SRGB_S3TC_DXT1_EXT] = .5,
        dn[pn.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = .5,
        dn[pn.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = 1,
        dn[pn.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = 1,
        dn[pn.COMPRESSED_R11_EAC] = .5,
        dn[pn.COMPRESSED_SIGNED_R11_EAC] = .5,
        dn[pn.COMPRESSED_RG11_EAC] = 1,
        dn[pn.COMPRESSED_SIGNED_RG11_EAC] = 1,
        dn[pn.COMPRESSED_RGB8_ETC2] = .5,
        dn[pn.COMPRESSED_RGBA8_ETC2_EAC] = 1,
        dn[pn.COMPRESSED_SRGB8_ETC2] = .5,
        dn[pn.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = 1,
        dn[pn.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = .5,
        dn[pn.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = .5,
        dn[pn.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = .5,
        dn[pn.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = .5,
        dn[pn.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = .25,
        dn[pn.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = .25,
        dn[pn.COMPRESSED_RGB_ETC1_WEBGL] = .5,
        dn[pn.COMPRESSED_RGB_ATC_WEBGL] = .5,
        dn[pn.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = 1,
        dn[pn.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = 1,
        dn[pn.COMPRESSED_RGBA_ASTC_4x4_KHR] = 1,
        dn)
          , mn = function(t, e) {
            return (mn = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        function vn(t, e) {
            function r() {
                this.constructor = t
            }
            mn(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        var gn, yn, bn = function(t) {
            function e(r, i) {
                var n = t.call(this, r, i) || this;
                return n.format = i.format,
                n.levels = i.levels || 1,
                n._width = i.width,
                n._height = i.height,
                n._extension = e._formatToExtension(n.format),
                (i.levelBuffers || n.buffer) && (n._levelBuffers = i.levelBuffers || e._createLevelBuffers(r instanceof Uint8Array ? r : n.buffer.uint8View, n.format, n.levels, 4, 4, n.width, n.height)),
                n
            }
            return vn(e, t),
            e.prototype.upload = function(t, e, r) {
                var i = t.gl;
                if (!t.context.extensions[this._extension])
                    throw new Error(this._extension + " textures are not supported on the current machine");
                if (!this._levelBuffers)
                    return !1;
                for (var n = 0, o = this.levels; n < o; n++) {
                    var s = this._levelBuffers[n]
                      , a = s.levelID
                      , u = s.levelWidth
                      , h = s.levelHeight
                      , l = s.levelBuffer;
                    i.compressedTexImage2D(i.TEXTURE_2D, a, this.format, u, h, 0, l)
                }
                return !0
            }
            ,
            e.prototype.onBlobLoaded = function() {
                this._levelBuffers = e._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height)
            }
            ,
            e._formatToExtension = function(t) {
                if (t >= 33776 && t <= 33779)
                    return "s3tc";
                if (t >= 37488 && t <= 37497)
                    return "etc";
                if (t >= 35840 && t <= 35843)
                    return "pvrtc";
                if (t >= 36196)
                    return "etc1";
                if (t >= 35986 && t <= 34798)
                    return "atc";
                throw new Error("Invalid (compressed) texture format given!")
            }
            ,
            e._createLevelBuffers = function(t, e, r, i, n, o, s) {
                for (var a = new Array(r), u = t.byteOffset, h = o, l = s, c = h + i - 1 & ~(i - 1), d = l + n - 1 & ~(n - 1), p = c * d * _n[e], f = 0; f < r; f++)
                    a[f] = {
                        levelID: f,
                        levelWidth: r > 1 ? h : c,
                        levelHeight: r > 1 ? l : d,
                        levelBuffer: new Uint8Array(t.buffer,u,p)
                    },
                    u += p,
                    p = (c = (h = h >> 1 || 1) + i - 1 & ~(i - 1)) * (d = (l = l >> 1 || 1) + n - 1 & ~(n - 1)) * _n[e];
                return a
            }
            ,
            e
        }(function(t) {
            function e(e, r) {
                void 0 === r && (r = {
                    width: 1,
                    height: 1,
                    autoLoad: !0
                });
                var i, n, o = this;
                return "string" == typeof e ? (i = e,
                n = new Uint8Array) : (i = null,
                n = e),
                (o = t.call(this, n, r) || this).origin = i,
                o.buffer = n ? new Ei(n) : null,
                o.origin && !1 !== r.autoLoad && o.load(),
                n && n.length && (o.loaded = !0,
                o.onBlobLoaded(o.buffer.rawBinaryData)),
                o
            }
            return vn(e, t),
            e.prototype.onBlobLoaded = function(t) {}
            ,
            e.prototype.load = function() {
                return t = this,
                e = void 0,
                i = function() {
                    var t;
                    return function(t, e) {
                        var r, i, n, o, s = {
                            label: 0,
                            sent: function() {
                                if (1 & n[0])
                                    throw n[1];
                                return n[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return o = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        },
                        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                            return this
                        }
                        ),
                        o;
                        function a(o) {
                            return function(a) {
                                return function(o) {
                                    if (r)
                                        throw new TypeError("Generator is already executing.");
                                    for (; s; )
                                        try {
                                            if (r = 1,
                                            i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i),
                                            0) : i.next) && !(n = n.call(i, o[1])).done)
                                                return n;
                                            switch (i = 0,
                                            n && (o = [2 & o[0], n.value]),
                                            o[0]) {
                                            case 0:
                                            case 1:
                                                n = o;
                                                break;
                                            case 4:
                                                return s.label++,
                                                {
                                                    value: o[1],
                                                    done: !1
                                                };
                                            case 5:
                                                s.label++,
                                                i = o[1],
                                                o = [0];
                                                continue;
                                            case 7:
                                                o = s.ops.pop(),
                                                s.trys.pop();
                                                continue;
                                            default:
                                                if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                                    s.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && s.label < n[1]) {
                                                    s.label = n[1],
                                                    n = o;
                                                    break
                                                }
                                                if (n && s.label < n[2]) {
                                                    s.label = n[2],
                                                    s.ops.push(o);
                                                    break
                                                }
                                                n[2] && s.ops.pop(),
                                                s.trys.pop();
                                                continue
                                            }
                                            o = e.call(t, s)
                                        } catch (t) {
                                            o = [6, t],
                                            i = 0
                                        } finally {
                                            r = n = 0
                                        }
                                    if (5 & o[0])
                                        throw o[1];
                                    return {
                                        value: o[0] ? o[1] : void 0,
                                        done: !0
                                    }
                                }([o, a])
                            }
                        }
                    }(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, fetch(this.origin)];
                        case 1:
                            return [4, e.sent().blob()];
                        case 2:
                            return [4, e.sent().arrayBuffer()];
                        case 3:
                            return t = e.sent(),
                            this.data = new Uint32Array(t),
                            this.buffer = new Ei(t),
                            this.loaded = !0,
                            this.onBlobLoaded(t),
                            this.update(),
                            [2, this]
                        }
                    }
                    ))
                }
                ,
                new ((r = Promise) || (r = Promise))((function(n, o) {
                    function s(t) {
                        try {
                            u(i.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            u(i.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function u(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value,
                        e instanceof r ? e : new r((function(t) {
                            t(e)
                        }
                        ))).then(s, a)
                    }
                    u((i = i.apply(t, e || [])).next())
                }
                ));
                var t, e, r, i
            }
            ,
            e
        }(Se)), xn = function() {
            function t() {}
            return t.use = function(e, r) {
                var i = e.data;
                if (e.type === en.TYPE.JSON && i && i.cacheID && i.textures) {
                    for (var n = i.textures, o = void 0, s = void 0, a = 0, u = n.length; a < u; a++) {
                        var h = n[a]
                          , l = h.src
                          , c = h.format;
                        if (c || (s = l),
                        t.textureFormats[c]) {
                            o = l;
                            break
                        }
                    }
                    if (!(o = o || s))
                        return void r(new Error("Cannot load compressed-textures in " + e.url + ", make sure you provide a fallback"));
                    if (o === e.url)
                        return void r(new Error("URL of compressed texture cannot be the same as the manifest's URL"));
                    var d = {
                        crossOrigin: e.crossOrigin,
                        metadata: e.metadata.imageMetadata,
                        parentResource: e
                    }
                      , p = ut.resolve(e.url.replace(this.baseUrl, ""), o)
                      , f = i.cacheID;
                    this.add(f, p, d, (function(t) {
                        if (t.error)
                            r(t.error);
                        else {
                            var i = t.texture
                              , n = void 0 === i ? null : i
                              , o = t.textures
                              , s = void 0 === o ? {} : o;
                            Object.assign(e, {
                                texture: n,
                                textures: s
                            }),
                            r()
                        }
                    }
                    ))
                } else
                    r()
            }
            ,
            Object.defineProperty(t, "textureExtensions", {
                get: function() {
                    if (!t._textureExtensions) {
                        var e = nt.ADAPTER.createCanvas().getContext("webgl");
                        if (!e)
                            return console.warn("WebGL not available for compressed textures. Silently failing."),
                            {};
                        var r = {
                            s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
                            s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                            etc: e.getExtension("WEBGL_compressed_texture_etc"),
                            etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
                            pvrtc: e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                            atc: e.getExtension("WEBGL_compressed_texture_atc"),
                            astc: e.getExtension("WEBGL_compressed_texture_astc")
                        };
                        t._textureExtensions = r
                    }
                    return t._textureExtensions
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "textureFormats", {
                get: function() {
                    if (!t._textureFormats) {
                        var e = t.textureExtensions;
                        for (var r in t._textureFormats = {},
                        e) {
                            var i = e[r];
                            i && Object.assign(t._textureFormats, Object.getPrototypeOf(i))
                        }
                    }
                    return t._textureFormats
                },
                enumerable: !1,
                configurable: !0
            }),
            t.extension = le.Loader,
            t
        }();
        function Tn(t, e, r) {
            var i = {
                textures: {},
                texture: null
            };
            return e ? (e.map((function(t) {
                return new Ye(new we(t,Object.assign({
                    mipmap: R.OFF,
                    alphaMode: w.NO_PREMULTIPLIED_ALPHA
                }, r)))
            }
            )).forEach((function(e, r) {
                var n = e.baseTexture
                  , o = t + "-" + (r + 1);
                we.addToCache(n, o),
                Ye.addToCache(e, o),
                0 === r && (we.addToCache(n, t),
                Ye.addToCache(e, t),
                i.texture = e),
                i.textures[o] = e
            }
            )),
            i) : i
        }
        var En, An;
        !function(t) {
            t[t.DXGI_FORMAT_UNKNOWN = 0] = "DXGI_FORMAT_UNKNOWN",
            t[t.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1] = "DXGI_FORMAT_R32G32B32A32_TYPELESS",
            t[t.DXGI_FORMAT_R32G32B32A32_FLOAT = 2] = "DXGI_FORMAT_R32G32B32A32_FLOAT",
            t[t.DXGI_FORMAT_R32G32B32A32_UINT = 3] = "DXGI_FORMAT_R32G32B32A32_UINT",
            t[t.DXGI_FORMAT_R32G32B32A32_SINT = 4] = "DXGI_FORMAT_R32G32B32A32_SINT",
            t[t.DXGI_FORMAT_R32G32B32_TYPELESS = 5] = "DXGI_FORMAT_R32G32B32_TYPELESS",
            t[t.DXGI_FORMAT_R32G32B32_FLOAT = 6] = "DXGI_FORMAT_R32G32B32_FLOAT",
            t[t.DXGI_FORMAT_R32G32B32_UINT = 7] = "DXGI_FORMAT_R32G32B32_UINT",
            t[t.DXGI_FORMAT_R32G32B32_SINT = 8] = "DXGI_FORMAT_R32G32B32_SINT",
            t[t.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9] = "DXGI_FORMAT_R16G16B16A16_TYPELESS",
            t[t.DXGI_FORMAT_R16G16B16A16_FLOAT = 10] = "DXGI_FORMAT_R16G16B16A16_FLOAT",
            t[t.DXGI_FORMAT_R16G16B16A16_UNORM = 11] = "DXGI_FORMAT_R16G16B16A16_UNORM",
            t[t.DXGI_FORMAT_R16G16B16A16_UINT = 12] = "DXGI_FORMAT_R16G16B16A16_UINT",
            t[t.DXGI_FORMAT_R16G16B16A16_SNORM = 13] = "DXGI_FORMAT_R16G16B16A16_SNORM",
            t[t.DXGI_FORMAT_R16G16B16A16_SINT = 14] = "DXGI_FORMAT_R16G16B16A16_SINT",
            t[t.DXGI_FORMAT_R32G32_TYPELESS = 15] = "DXGI_FORMAT_R32G32_TYPELESS",
            t[t.DXGI_FORMAT_R32G32_FLOAT = 16] = "DXGI_FORMAT_R32G32_FLOAT",
            t[t.DXGI_FORMAT_R32G32_UINT = 17] = "DXGI_FORMAT_R32G32_UINT",
            t[t.DXGI_FORMAT_R32G32_SINT = 18] = "DXGI_FORMAT_R32G32_SINT",
            t[t.DXGI_FORMAT_R32G8X24_TYPELESS = 19] = "DXGI_FORMAT_R32G8X24_TYPELESS",
            t[t.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20] = "DXGI_FORMAT_D32_FLOAT_S8X24_UINT",
            t[t.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21] = "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",
            t[t.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22] = "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",
            t[t.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23] = "DXGI_FORMAT_R10G10B10A2_TYPELESS",
            t[t.DXGI_FORMAT_R10G10B10A2_UNORM = 24] = "DXGI_FORMAT_R10G10B10A2_UNORM",
            t[t.DXGI_FORMAT_R10G10B10A2_UINT = 25] = "DXGI_FORMAT_R10G10B10A2_UINT",
            t[t.DXGI_FORMAT_R11G11B10_FLOAT = 26] = "DXGI_FORMAT_R11G11B10_FLOAT",
            t[t.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27] = "DXGI_FORMAT_R8G8B8A8_TYPELESS",
            t[t.DXGI_FORMAT_R8G8B8A8_UNORM = 28] = "DXGI_FORMAT_R8G8B8A8_UNORM",
            t[t.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29] = "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",
            t[t.DXGI_FORMAT_R8G8B8A8_UINT = 30] = "DXGI_FORMAT_R8G8B8A8_UINT",
            t[t.DXGI_FORMAT_R8G8B8A8_SNORM = 31] = "DXGI_FORMAT_R8G8B8A8_SNORM",
            t[t.DXGI_FORMAT_R8G8B8A8_SINT = 32] = "DXGI_FORMAT_R8G8B8A8_SINT",
            t[t.DXGI_FORMAT_R16G16_TYPELESS = 33] = "DXGI_FORMAT_R16G16_TYPELESS",
            t[t.DXGI_FORMAT_R16G16_FLOAT = 34] = "DXGI_FORMAT_R16G16_FLOAT",
            t[t.DXGI_FORMAT_R16G16_UNORM = 35] = "DXGI_FORMAT_R16G16_UNORM",
            t[t.DXGI_FORMAT_R16G16_UINT = 36] = "DXGI_FORMAT_R16G16_UINT",
            t[t.DXGI_FORMAT_R16G16_SNORM = 37] = "DXGI_FORMAT_R16G16_SNORM",
            t[t.DXGI_FORMAT_R16G16_SINT = 38] = "DXGI_FORMAT_R16G16_SINT",
            t[t.DXGI_FORMAT_R32_TYPELESS = 39] = "DXGI_FORMAT_R32_TYPELESS",
            t[t.DXGI_FORMAT_D32_FLOAT = 40] = "DXGI_FORMAT_D32_FLOAT",
            t[t.DXGI_FORMAT_R32_FLOAT = 41] = "DXGI_FORMAT_R32_FLOAT",
            t[t.DXGI_FORMAT_R32_UINT = 42] = "DXGI_FORMAT_R32_UINT",
            t[t.DXGI_FORMAT_R32_SINT = 43] = "DXGI_FORMAT_R32_SINT",
            t[t.DXGI_FORMAT_R24G8_TYPELESS = 44] = "DXGI_FORMAT_R24G8_TYPELESS",
            t[t.DXGI_FORMAT_D24_UNORM_S8_UINT = 45] = "DXGI_FORMAT_D24_UNORM_S8_UINT",
            t[t.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46] = "DXGI_FORMAT_R24_UNORM_X8_TYPELESS",
            t[t.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47] = "DXGI_FORMAT_X24_TYPELESS_G8_UINT",
            t[t.DXGI_FORMAT_R8G8_TYPELESS = 48] = "DXGI_FORMAT_R8G8_TYPELESS",
            t[t.DXGI_FORMAT_R8G8_UNORM = 49] = "DXGI_FORMAT_R8G8_UNORM",
            t[t.DXGI_FORMAT_R8G8_UINT = 50] = "DXGI_FORMAT_R8G8_UINT",
            t[t.DXGI_FORMAT_R8G8_SNORM = 51] = "DXGI_FORMAT_R8G8_SNORM",
            t[t.DXGI_FORMAT_R8G8_SINT = 52] = "DXGI_FORMAT_R8G8_SINT",
            t[t.DXGI_FORMAT_R16_TYPELESS = 53] = "DXGI_FORMAT_R16_TYPELESS",
            t[t.DXGI_FORMAT_R16_FLOAT = 54] = "DXGI_FORMAT_R16_FLOAT",
            t[t.DXGI_FORMAT_D16_UNORM = 55] = "DXGI_FORMAT_D16_UNORM",
            t[t.DXGI_FORMAT_R16_UNORM = 56] = "DXGI_FORMAT_R16_UNORM",
            t[t.DXGI_FORMAT_R16_UINT = 57] = "DXGI_FORMAT_R16_UINT",
            t[t.DXGI_FORMAT_R16_SNORM = 58] = "DXGI_FORMAT_R16_SNORM",
            t[t.DXGI_FORMAT_R16_SINT = 59] = "DXGI_FORMAT_R16_SINT",
            t[t.DXGI_FORMAT_R8_TYPELESS = 60] = "DXGI_FORMAT_R8_TYPELESS",
            t[t.DXGI_FORMAT_R8_UNORM = 61] = "DXGI_FORMAT_R8_UNORM",
            t[t.DXGI_FORMAT_R8_UINT = 62] = "DXGI_FORMAT_R8_UINT",
            t[t.DXGI_FORMAT_R8_SNORM = 63] = "DXGI_FORMAT_R8_SNORM",
            t[t.DXGI_FORMAT_R8_SINT = 64] = "DXGI_FORMAT_R8_SINT",
            t[t.DXGI_FORMAT_A8_UNORM = 65] = "DXGI_FORMAT_A8_UNORM",
            t[t.DXGI_FORMAT_R1_UNORM = 66] = "DXGI_FORMAT_R1_UNORM",
            t[t.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67] = "DXGI_FORMAT_R9G9B9E5_SHAREDEXP",
            t[t.DXGI_FORMAT_R8G8_B8G8_UNORM = 68] = "DXGI_FORMAT_R8G8_B8G8_UNORM",
            t[t.DXGI_FORMAT_G8R8_G8B8_UNORM = 69] = "DXGI_FORMAT_G8R8_G8B8_UNORM",
            t[t.DXGI_FORMAT_BC1_TYPELESS = 70] = "DXGI_FORMAT_BC1_TYPELESS",
            t[t.DXGI_FORMAT_BC1_UNORM = 71] = "DXGI_FORMAT_BC1_UNORM",
            t[t.DXGI_FORMAT_BC1_UNORM_SRGB = 72] = "DXGI_FORMAT_BC1_UNORM_SRGB",
            t[t.DXGI_FORMAT_BC2_TYPELESS = 73] = "DXGI_FORMAT_BC2_TYPELESS",
            t[t.DXGI_FORMAT_BC2_UNORM = 74] = "DXGI_FORMAT_BC2_UNORM",
            t[t.DXGI_FORMAT_BC2_UNORM_SRGB = 75] = "DXGI_FORMAT_BC2_UNORM_SRGB",
            t[t.DXGI_FORMAT_BC3_TYPELESS = 76] = "DXGI_FORMAT_BC3_TYPELESS",
            t[t.DXGI_FORMAT_BC3_UNORM = 77] = "DXGI_FORMAT_BC3_UNORM",
            t[t.DXGI_FORMAT_BC3_UNORM_SRGB = 78] = "DXGI_FORMAT_BC3_UNORM_SRGB",
            t[t.DXGI_FORMAT_BC4_TYPELESS = 79] = "DXGI_FORMAT_BC4_TYPELESS",
            t[t.DXGI_FORMAT_BC4_UNORM = 80] = "DXGI_FORMAT_BC4_UNORM",
            t[t.DXGI_FORMAT_BC4_SNORM = 81] = "DXGI_FORMAT_BC4_SNORM",
            t[t.DXGI_FORMAT_BC5_TYPELESS = 82] = "DXGI_FORMAT_BC5_TYPELESS",
            t[t.DXGI_FORMAT_BC5_UNORM = 83] = "DXGI_FORMAT_BC5_UNORM",
            t[t.DXGI_FORMAT_BC5_SNORM = 84] = "DXGI_FORMAT_BC5_SNORM",
            t[t.DXGI_FORMAT_B5G6R5_UNORM = 85] = "DXGI_FORMAT_B5G6R5_UNORM",
            t[t.DXGI_FORMAT_B5G5R5A1_UNORM = 86] = "DXGI_FORMAT_B5G5R5A1_UNORM",
            t[t.DXGI_FORMAT_B8G8R8A8_UNORM = 87] = "DXGI_FORMAT_B8G8R8A8_UNORM",
            t[t.DXGI_FORMAT_B8G8R8X8_UNORM = 88] = "DXGI_FORMAT_B8G8R8X8_UNORM",
            t[t.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89] = "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",
            t[t.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90] = "DXGI_FORMAT_B8G8R8A8_TYPELESS",
            t[t.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91] = "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",
            t[t.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92] = "DXGI_FORMAT_B8G8R8X8_TYPELESS",
            t[t.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93] = "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",
            t[t.DXGI_FORMAT_BC6H_TYPELESS = 94] = "DXGI_FORMAT_BC6H_TYPELESS",
            t[t.DXGI_FORMAT_BC6H_UF16 = 95] = "DXGI_FORMAT_BC6H_UF16",
            t[t.DXGI_FORMAT_BC6H_SF16 = 96] = "DXGI_FORMAT_BC6H_SF16",
            t[t.DXGI_FORMAT_BC7_TYPELESS = 97] = "DXGI_FORMAT_BC7_TYPELESS",
            t[t.DXGI_FORMAT_BC7_UNORM = 98] = "DXGI_FORMAT_BC7_UNORM",
            t[t.DXGI_FORMAT_BC7_UNORM_SRGB = 99] = "DXGI_FORMAT_BC7_UNORM_SRGB",
            t[t.DXGI_FORMAT_AYUV = 100] = "DXGI_FORMAT_AYUV",
            t[t.DXGI_FORMAT_Y410 = 101] = "DXGI_FORMAT_Y410",
            t[t.DXGI_FORMAT_Y416 = 102] = "DXGI_FORMAT_Y416",
            t[t.DXGI_FORMAT_NV12 = 103] = "DXGI_FORMAT_NV12",
            t[t.DXGI_FORMAT_P010 = 104] = "DXGI_FORMAT_P010",
            t[t.DXGI_FORMAT_P016 = 105] = "DXGI_FORMAT_P016",
            t[t.DXGI_FORMAT_420_OPAQUE = 106] = "DXGI_FORMAT_420_OPAQUE",
            t[t.DXGI_FORMAT_YUY2 = 107] = "DXGI_FORMAT_YUY2",
            t[t.DXGI_FORMAT_Y210 = 108] = "DXGI_FORMAT_Y210",
            t[t.DXGI_FORMAT_Y216 = 109] = "DXGI_FORMAT_Y216",
            t[t.DXGI_FORMAT_NV11 = 110] = "DXGI_FORMAT_NV11",
            t[t.DXGI_FORMAT_AI44 = 111] = "DXGI_FORMAT_AI44",
            t[t.DXGI_FORMAT_IA44 = 112] = "DXGI_FORMAT_IA44",
            t[t.DXGI_FORMAT_P8 = 113] = "DXGI_FORMAT_P8",
            t[t.DXGI_FORMAT_A8P8 = 114] = "DXGI_FORMAT_A8P8",
            t[t.DXGI_FORMAT_B4G4R4A4_UNORM = 115] = "DXGI_FORMAT_B4G4R4A4_UNORM",
            t[t.DXGI_FORMAT_P208 = 116] = "DXGI_FORMAT_P208",
            t[t.DXGI_FORMAT_V208 = 117] = "DXGI_FORMAT_V208",
            t[t.DXGI_FORMAT_V408 = 118] = "DXGI_FORMAT_V408",
            t[t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",
            t[t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",
            t[t.DXGI_FORMAT_FORCE_UINT = 121] = "DXGI_FORMAT_FORCE_UINT"
        }(En || (En = {})),
        function(t) {
            t[t.DDS_DIMENSION_TEXTURE1D = 2] = "DDS_DIMENSION_TEXTURE1D",
            t[t.DDS_DIMENSION_TEXTURE2D = 3] = "DDS_DIMENSION_TEXTURE2D",
            t[t.DDS_DIMENSION_TEXTURE3D = 6] = "DDS_DIMENSION_TEXTURE3D"
        }(An || (An = {}));
        var Sn, Rn, wn, On = ((gn = {})[827611204] = pn.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        gn[861165636] = pn.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        gn[894720068] = pn.COMPRESSED_RGBA_S3TC_DXT5_EXT,
        gn), In = ((yn = {})[En.DXGI_FORMAT_BC1_TYPELESS] = pn.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        yn[En.DXGI_FORMAT_BC1_UNORM] = pn.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        yn[En.DXGI_FORMAT_BC2_TYPELESS] = pn.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        yn[En.DXGI_FORMAT_BC2_UNORM] = pn.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        yn[En.DXGI_FORMAT_BC3_TYPELESS] = pn.COMPRESSED_RGBA_S3TC_DXT5_EXT,
        yn[En.DXGI_FORMAT_BC3_UNORM] = pn.COMPRESSED_RGBA_S3TC_DXT5_EXT,
        yn[En.DXGI_FORMAT_BC1_UNORM_SRGB] = pn.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
        yn[En.DXGI_FORMAT_BC2_UNORM_SRGB] = pn.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
        yn[En.DXGI_FORMAT_BC3_UNORM_SRGB] = pn.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
        yn), Pn = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10], Mn = ((Sn = {})[T.UNSIGNED_BYTE] = 1,
        Sn[T.UNSIGNED_SHORT] = 2,
        Sn[T.INT] = 4,
        Sn[T.UNSIGNED_INT] = 4,
        Sn[T.FLOAT] = 4,
        Sn[T.HALF_FLOAT] = 8,
        Sn), Dn = ((Rn = {})[b.RGBA] = 4,
        Rn[b.RGB] = 3,
        Rn[b.RG] = 2,
        Rn[b.RED] = 1,
        Rn[b.LUMINANCE] = 1,
        Rn[b.LUMINANCE_ALPHA] = 2,
        Rn[b.ALPHA] = 1,
        Rn), Cn = ((wn = {})[T.UNSIGNED_SHORT_4_4_4_4] = 2,
        wn[T.UNSIGNED_SHORT_5_5_5_1] = 2,
        wn[T.UNSIGNED_SHORT_5_6_5] = 2,
        wn);
        function Fn(t) {
            switch (t) {
            case b.RGBA:
                return b.RGBA_INTEGER;
            case b.RGB:
                return b.RGB_INTEGER;
            case b.RG:
                return b.RG_INTEGER;
            case b.RED:
                return b.RED_INTEGER;
            default:
                return t
            }
        }
        en.setExtensionXhrType("dds", en.XHR_RESPONSE_TYPE.BUFFER);
        var Nn = function() {
            function t() {}
            return t.use = function(t, e) {
                if ("dds" === t.extension && t.data)
                    try {
                        Object.assign(t, Tn(t.name || t.url, function(t) {
                            var e = new Uint32Array(t);
                            if (542327876 !== e[0])
                                throw new Error("Invalid DDS file magic word");
                            var r = new Uint32Array(t,0,124 / Uint32Array.BYTES_PER_ELEMENT)
                              , i = r[3]
                              , n = r[4]
                              , o = r[7]
                              , s = new Uint32Array(t,19 * Uint32Array.BYTES_PER_ELEMENT,32 / Uint32Array.BYTES_PER_ELEMENT)
                              , a = s[1];
                            if (4 & a) {
                                var u = s[2];
                                if (808540228 !== u) {
                                    var h = On[u]
                                      , l = new Uint8Array(t,128);
                                    return [new bn(l,{
                                        format: h,
                                        width: n,
                                        height: i,
                                        levels: o
                                    })]
                                }
                                var c = new Uint32Array(e.buffer,128,20 / Uint32Array.BYTES_PER_ELEMENT)
                                  , d = c[0]
                                  , p = c[1]
                                  , f = c[2]
                                  , _ = c[3]
                                  , m = In[d];
                                if (void 0 === m)
                                    throw new Error("DDSParser cannot parse texture data with DXGI format " + d);
                                if (4 === f)
                                    throw new Error("DDSParser does not support cubemap textures");
                                if (p === An.DDS_DIMENSION_TEXTURE3D)
                                    throw new Error("DDSParser does not supported 3D texture data");
                                var v = new Array;
                                if (1 === _)
                                    v.push(new Uint8Array(t,148));
                                else {
                                    for (var g = _n[m], y = 0, b = n, x = i, T = 0; T < o; T++)
                                        y += Math.max(1, b + 3 & -4) * Math.max(1, x + 3 & -4) * g,
                                        b >>>= 1,
                                        x >>>= 1;
                                    var E = 148;
                                    for (T = 0; T < _; T++)
                                        v.push(new Uint8Array(t,E,y)),
                                        E += y
                                }
                                return v.map((function(t) {
                                    return new bn(t,{
                                        format: m,
                                        width: n,
                                        height: i,
                                        levels: o
                                    })
                                }
                                ))
                            }
                            if (64 & a)
                                throw new Error("DDSParser does not support uncompressed texture data.");
                            if (512 & a)
                                throw new Error("DDSParser does not supported YUV uncompressed texture data.");
                            if (131072 & a)
                                throw new Error("DDSParser does not support single-channel (lumninance) texture data!");
                            if (2 & a)
                                throw new Error("DDSParser does not support single-channel (alpha) texture data!");
                            throw new Error("DDSParser failed to load a texture file due to an unknown reason!")
                        }(t.data), t.metadata))
                    } catch (t) {
                        return void e(t)
                    }
                e()
            }
            ,
            t.extension = le.Loader,
            t
        }();
        en.setExtensionXhrType("ktx", en.XHR_RESPONSE_TYPE.BUFFER);
        var Bn = function() {
            function t() {}
            return t.use = function(t, e) {
                if ("ktx" === t.extension && t.data)
                    try {
                        var r = t.name || t.url
                          , i = function(t, e, r) {
                            void 0 === r && (r = !1);
                            var i = new DataView(e);
                            if (!function(t, e) {
                                for (var r = 0; r < Pn.length; r++)
                                    if (e.getUint8(r) !== Pn[r])
                                        return console.error(t + " is not a valid *.ktx file!"),
                                        !1;
                                return !0
                            }(t, i))
                                return null;
                            var n = 67305985 === i.getUint32(12, !0)
                              , o = i.getUint32(16, n)
                              , s = i.getUint32(24, n)
                              , a = i.getUint32(28, n)
                              , u = i.getUint32(36, n)
                              , h = i.getUint32(40, n) || 1
                              , l = i.getUint32(44, n) || 1
                              , c = i.getUint32(48, n) || 1
                              , d = i.getUint32(52, n)
                              , p = i.getUint32(56, n)
                              , f = i.getUint32(60, n);
                            if (0 === h || 1 !== l)
                                throw new Error("Only 2D textures are supported");
                            if (1 !== d)
                                throw new Error("CubeTextures are not supported by KTXLoader yet!");
                            if (1 !== c)
                                throw new Error("WebGL does not support array textures");
                            var _, m = u + 3 & -4, v = h + 3 & -4, g = new Array(c), y = u * h;
                            if (0 === o && (y = m * v),
                            void 0 === (_ = 0 !== o ? Mn[o] ? Mn[o] * Dn[s] : Cn[o] : _n[a]))
                                throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
                            for (var b = r ? function(t, e, r) {
                                for (var i = new Map, n = 0; n < e; ) {
                                    var o = t.getUint32(64 + n, r)
                                      , s = 64 + n + 4
                                      , a = 3 - (o + 3) % 4;
                                    if (0 === o || o > e - n) {
                                        console.error("KTXLoader: keyAndValueByteSize out of bounds");
                                        break
                                    }
                                    for (var u = 0; u < o && 0 !== t.getUint8(s + u); u++)
                                        ;
                                    if (-1 === u) {
                                        console.error("KTXLoader: Failed to find null byte terminating kvData key");
                                        break
                                    }
                                    var h = (new TextDecoder).decode(new Uint8Array(t.buffer,s,u))
                                      , l = new DataView(t.buffer,s + u + 1,o - u - 1);
                                    i.set(h, l),
                                    n += 4 + o + a
                                }
                                return i
                            }(i, f, n) : null, x = y * _, E = u, A = h, S = m, R = v, w = 64 + f, O = 0; O < p; O++) {
                                for (var I = i.getUint32(w, n), P = w + 4, M = 0; M < c; M++) {
                                    var D = g[M];
                                    D || (D = g[M] = new Array(p)),
                                    D[O] = {
                                        levelID: O,
                                        levelWidth: p > 1 || 0 !== o ? E : S,
                                        levelHeight: p > 1 || 0 !== o ? A : R,
                                        levelBuffer: new Uint8Array(e,P,x)
                                    },
                                    P += x
                                }
                                w = (w += I + 4) % 4 != 0 ? w + 4 - w % 4 : w,
                                x = (S = (E = E >> 1 || 1) + 4 - 1 & -4) * (R = (A = A >> 1 || 1) + 4 - 1 & -4) * _
                            }
                            return 0 !== o ? {
                                uncompressed: g.map((function(t) {
                                    var e = t[0].levelBuffer
                                      , r = !1;
                                    return o === T.FLOAT ? e = new Float32Array(t[0].levelBuffer.buffer,t[0].levelBuffer.byteOffset,t[0].levelBuffer.byteLength / 4) : o === T.UNSIGNED_INT ? (r = !0,
                                    e = new Uint32Array(t[0].levelBuffer.buffer,t[0].levelBuffer.byteOffset,t[0].levelBuffer.byteLength / 4)) : o === T.INT && (r = !0,
                                    e = new Int32Array(t[0].levelBuffer.buffer,t[0].levelBuffer.byteOffset,t[0].levelBuffer.byteLength / 4)),
                                    {
                                        resource: new Se(e,{
                                            width: t[0].levelWidth,
                                            height: t[0].levelHeight
                                        }),
                                        type: o,
                                        format: r ? Fn(s) : s
                                    }
                                }
                                )),
                                kvData: b
                            } : {
                                compressed: g.map((function(t) {
                                    return new bn(null,{
                                        format: a,
                                        width: u,
                                        height: h,
                                        levels: p,
                                        levelBuffers: t
                                    })
                                }
                                )),
                                kvData: b
                            }
                        }(r, t.data, this.loadKeyValueData)
                          , n = i.compressed
                          , o = i.uncompressed
                          , s = i.kvData;
                        if (n) {
                            var a = Tn(r, n, t.metadata);
                            if (s && a.textures)
                                for (var u in a.textures)
                                    a.textures[u].baseTexture.ktxKeyValueData = s;
                            Object.assign(t, a)
                        } else if (o) {
                            var h = {};
                            o.forEach((function(t, e) {
                                var i = new Ye(new we(t.resource,{
                                    mipmap: R.OFF,
                                    alphaMode: w.NO_PREMULTIPLIED_ALPHA,
                                    type: t.type,
                                    format: t.format
                                }))
                                  , n = r + "-" + (e + 1);
                                s && (i.baseTexture.ktxKeyValueData = s),
                                we.addToCache(i.baseTexture, n),
                                Ye.addToCache(i, n),
                                0 === e && (h[r] = i,
                                we.addToCache(i.baseTexture, r),
                                Ye.addToCache(i, r)),
                                h[n] = i
                            }
                            )),
                            Object.assign(t, {
                                textures: h
                            })
                        }
                    } catch (t) {
                        return void e(t)
                    }
                e()
            }
            ,
            t.extension = le.Loader,
            t.loadKeyValueData = !1,
            t
        }()
          , Ln = function(t, e) {
            return (Ln = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        function Gn(t, e) {
            function r() {
                this.constructor = t
            }
            Ln(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        !function(t) {
            function e(e, r, i, n) {
                void 0 === e && (e = 1500),
                void 0 === i && (i = 16384),
                void 0 === n && (n = !1);
                var o = t.call(this) || this;
                return i > 16384 && (i = 16384),
                o._properties = [!1, !0, !1, !1, !1],
                o._maxSize = e,
                o._batchSize = i,
                o._buffers = null,
                o._bufferUpdateIDs = [],
                o._updateID = 0,
                o.interactiveChildren = !1,
                o.blendMode = g.NORMAL,
                o.autoResize = n,
                o.roundPixels = !0,
                o.baseTexture = null,
                o.setProperties(r),
                o._tint = 0,
                o.tintRgb = new Float32Array(4),
                o.tint = 16777215,
                o
            }
            Gn(e, t),
            e.prototype.setProperties = function(t) {
                t && (this._properties[0] = "vertices"in t || "scale"in t ? !!t.vertices || !!t.scale : this._properties[0],
                this._properties[1] = "position"in t ? !!t.position : this._properties[1],
                this._properties[2] = "rotation"in t ? !!t.rotation : this._properties[2],
                this._properties[3] = "uvs"in t ? !!t.uvs : this._properties[3],
                this._properties[4] = "tint"in t || "alpha"in t ? !!t.tint || !!t.alpha : this._properties[4])
            }
            ,
            e.prototype.updateTransform = function() {
                this.displayObjectUpdateTransform()
            }
            ,
            Object.defineProperty(e.prototype, "tint", {
                get: function() {
                    return this._tint
                },
                set: function(t) {
                    this._tint = t,
                    dt(t, this.tintRgb)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.render = function(t) {
                var e = this;
                this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture,
                this.baseTexture.valid || this.baseTexture.once("update", (function() {
                    return e.onChildrenChange(0)
                }
                ))),
                t.batch.setObjectRenderer(t.plugins.particle),
                t.plugins.particle.render(this))
            }
            ,
            e.prototype.onChildrenChange = function(t) {
                for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e; )
                    this._bufferUpdateIDs.push(0);
                this._bufferUpdateIDs[e] = ++this._updateID
            }
            ,
            e.prototype.dispose = function() {
                if (this._buffers) {
                    for (var t = 0; t < this._buffers.length; ++t)
                        this._buffers[t].destroy();
                    this._buffers = null
                }
            }
            ,
            e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e),
                this.dispose(),
                this._properties = null,
                this._buffers = null,
                this._bufferUpdateIDs = null
            }
        }(he);
        var Un, kn, Xn = function() {
            function t(t, e, r) {
                this.geometry = new tr,
                this.indexBuffer = null,
                this.size = r,
                this.dynamicProperties = [],
                this.staticProperties = [];
                for (var i = 0; i < t.length; ++i) {
                    var n = t[i];
                    n = {
                        attributeName: n.attributeName,
                        size: n.size,
                        uploadFunction: n.uploadFunction,
                        type: n.type || T.FLOAT,
                        offset: n.offset
                    },
                    e[i] ? this.dynamicProperties.push(n) : this.staticProperties.push(n)
                }
                this.staticStride = 0,
                this.staticBuffer = null,
                this.staticData = null,
                this.staticDataUint32 = null,
                this.dynamicStride = 0,
                this.dynamicBuffer = null,
                this.dynamicData = null,
                this.dynamicDataUint32 = null,
                this._updateID = 0,
                this.initBuffers()
            }
            return t.prototype.initBuffers = function() {
                var t = this.geometry
                  , e = 0;
                this.indexBuffer = new qe(function(t, e) {
                    void 0 === e && (e = null);
                    var r = 6 * t;
                    if ((e = e || new Uint16Array(r)).length !== r)
                        throw new Error("Out buffer length is incorrect, got " + e.length + " and expected " + r);
                    for (var i = 0, n = 0; i < r; i += 6,
                    n += 4)
                        e[i + 0] = n + 0,
                        e[i + 1] = n + 1,
                        e[i + 2] = n + 2,
                        e[i + 3] = n + 0,
                        e[i + 4] = n + 2,
                        e[i + 5] = n + 3;
                    return e
                }(this.size),!0,!0),
                t.addIndex(this.indexBuffer),
                this.dynamicStride = 0;
                for (var r = 0; r < this.dynamicProperties.length; ++r)
                    (s = this.dynamicProperties[r]).offset = e,
                    e += s.size,
                    this.dynamicStride += s.size;
                var i = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
                this.dynamicData = new Float32Array(i),
                this.dynamicDataUint32 = new Uint32Array(i),
                this.dynamicBuffer = new qe(this.dynamicData,!1,!1);
                var n = 0;
                for (this.staticStride = 0,
                r = 0; r < this.staticProperties.length; ++r)
                    (s = this.staticProperties[r]).offset = n,
                    n += s.size,
                    this.staticStride += s.size;
                var o = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
                for (this.staticData = new Float32Array(o),
                this.staticDataUint32 = new Uint32Array(o),
                this.staticBuffer = new qe(this.staticData,!0,!1),
                r = 0; r < this.dynamicProperties.length; ++r) {
                    var s = this.dynamicProperties[r];
                    t.addAttribute(s.attributeName, this.dynamicBuffer, 0, s.type === T.UNSIGNED_BYTE, s.type, 4 * this.dynamicStride, 4 * s.offset)
                }
                for (r = 0; r < this.staticProperties.length; ++r)
                    s = this.staticProperties[r],
                    t.addAttribute(s.attributeName, this.staticBuffer, 0, s.type === T.UNSIGNED_BYTE, s.type, 4 * this.staticStride, 4 * s.offset)
            }
            ,
            t.prototype.uploadDynamic = function(t, e, r) {
                for (var i = 0; i < this.dynamicProperties.length; i++) {
                    var n = this.dynamicProperties[i];
                    n.uploadFunction(t, e, r, n.type === T.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset)
                }
                this.dynamicBuffer._updateID++
            }
            ,
            t.prototype.uploadStatic = function(t, e, r) {
                for (var i = 0; i < this.staticProperties.length; i++) {
                    var n = this.staticProperties[i];
                    n.uploadFunction(t, e, r, n.type === T.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset)
                }
                this.staticBuffer._updateID++
            }
            ,
            t.prototype.destroy = function() {
                this.indexBuffer = null,
                this.dynamicProperties = null,
                this.dynamicBuffer = null,
                this.dynamicData = null,
                this.dynamicDataUint32 = null,
                this.staticProperties = null,
                this.staticBuffer = null,
                this.staticData = null,
                this.staticDataUint32 = null,
                this.geometry.destroy()
            }
            ,
            t
        }(), Hn = function(t) {
            function e(e) {
                var r = t.call(this, e) || this;
                return r.shader = null,
                r.properties = null,
                r.tempMatrix = new zt,
                r.properties = [{
                    attributeName: "aVertexPosition",
                    size: 2,
                    uploadFunction: r.uploadVertices,
                    offset: 0
                }, {
                    attributeName: "aPositionCoord",
                    size: 2,
                    uploadFunction: r.uploadPosition,
                    offset: 0
                }, {
                    attributeName: "aRotation",
                    size: 1,
                    uploadFunction: r.uploadRotation,
                    offset: 0
                }, {
                    attributeName: "aTextureCoord",
                    size: 2,
                    uploadFunction: r.uploadUvs,
                    offset: 0
                }, {
                    attributeName: "aColor",
                    size: 1,
                    type: T.UNSIGNED_BYTE,
                    uploadFunction: r.uploadTint,
                    offset: 0
                }],
                r.shader = Xr.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n", "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}", {}),
                r.state = Hr.for2d(),
                r
            }
            return Gn(e, t),
            e.prototype.render = function(t) {
                var e = t.children
                  , r = t._maxSize
                  , i = t._batchSize
                  , n = this.renderer
                  , o = e.length;
                if (0 !== o) {
                    o > r && !t.autoResize && (o = r);
                    var s = t._buffers;
                    s || (s = t._buffers = this.generateBuffers(t));
                    var a = e[0]._texture.baseTexture
                      , u = a.alphaMode > 0;
                    this.state.blendMode = mt(t.blendMode, u),
                    n.state.set(this.state);
                    var h, l, c, d, p = n.gl, f = t.worldTransform.copyTo(this.tempMatrix);
                    f.prepend(n.globalUniforms.uniforms.projectionMatrix),
                    this.shader.uniforms.translationMatrix = f.toArray(!0),
                    this.shader.uniforms.uColor = (h = t.tintRgb,
                    l = t.worldAlpha,
                    d = u,
                    c = (c = this.shader.uniforms.uColor) || new Float32Array(4),
                    d || void 0 === d ? (c[0] = h[0] * l,
                    c[1] = h[1] * l,
                    c[2] = h[2] * l) : (c[0] = h[0],
                    c[1] = h[1],
                    c[2] = h[2]),
                    c[3] = l,
                    c),
                    this.shader.uniforms.uSampler = a,
                    this.renderer.shader.bind(this.shader);
                    for (var _ = !1, m = 0, v = 0; m < o; m += i,
                    v += 1) {
                        var g = o - m;
                        g > i && (g = i),
                        v >= s.length && s.push(this._generateOneMoreBuffer(t));
                        var y = s[v];
                        y.uploadDynamic(e, m, g);
                        var b = t._bufferUpdateIDs[v] || 0;
                        (_ = _ || y._updateID < b) && (y._updateID = t._updateID,
                        y.uploadStatic(e, m, g)),
                        n.geometry.bind(y.geometry),
                        p.drawElements(p.TRIANGLES, 6 * g, p.UNSIGNED_SHORT, 0)
                    }
                }
            }
            ,
            e.prototype.generateBuffers = function(t) {
                for (var e = [], r = t._maxSize, i = t._batchSize, n = t._properties, o = 0; o < r; o += i)
                    e.push(new Xn(this.properties,n,i));
                return e
            }
            ,
            e.prototype._generateOneMoreBuffer = function(t) {
                var e = t._batchSize
                  , r = t._properties;
                return new Xn(this.properties,r,e)
            }
            ,
            e.prototype.uploadVertices = function(t, e, r, i, n, o) {
                for (var s = 0, a = 0, u = 0, h = 0, l = 0; l < r; ++l) {
                    var c = t[e + l]
                      , d = c._texture
                      , p = c.scale.x
                      , f = c.scale.y
                      , _ = d.trim
                      , m = d.orig;
                    _ ? (s = (a = _.x - c.anchor.x * m.width) + _.width,
                    u = (h = _.y - c.anchor.y * m.height) + _.height) : (s = m.width * (1 - c.anchor.x),
                    a = m.width * -c.anchor.x,
                    u = m.height * (1 - c.anchor.y),
                    h = m.height * -c.anchor.y),
                    i[o] = a * p,
                    i[o + 1] = h * f,
                    i[o + n] = s * p,
                    i[o + n + 1] = h * f,
                    i[o + 2 * n] = s * p,
                    i[o + 2 * n + 1] = u * f,
                    i[o + 3 * n] = a * p,
                    i[o + 3 * n + 1] = u * f,
                    o += 4 * n
                }
            }
            ,
            e.prototype.uploadPosition = function(t, e, r, i, n, o) {
                for (var s = 0; s < r; s++) {
                    var a = t[e + s].position;
                    i[o] = a.x,
                    i[o + 1] = a.y,
                    i[o + n] = a.x,
                    i[o + n + 1] = a.y,
                    i[o + 2 * n] = a.x,
                    i[o + 2 * n + 1] = a.y,
                    i[o + 3 * n] = a.x,
                    i[o + 3 * n + 1] = a.y,
                    o += 4 * n
                }
            }
            ,
            e.prototype.uploadRotation = function(t, e, r, i, n, o) {
                for (var s = 0; s < r; s++) {
                    var a = t[e + s].rotation;
                    i[o] = a,
                    i[o + n] = a,
                    i[o + 2 * n] = a,
                    i[o + 3 * n] = a,
                    o += 4 * n
                }
            }
            ,
            e.prototype.uploadUvs = function(t, e, r, i, n, o) {
                for (var s = 0; s < r; ++s) {
                    var a = t[e + s]._texture._uvs;
                    a ? (i[o] = a.x0,
                    i[o + 1] = a.y0,
                    i[o + n] = a.x1,
                    i[o + n + 1] = a.y1,
                    i[o + 2 * n] = a.x2,
                    i[o + 2 * n + 1] = a.y2,
                    i[o + 3 * n] = a.x3,
                    i[o + 3 * n + 1] = a.y3,
                    o += 4 * n) : (i[o] = 0,
                    i[o + 1] = 0,
                    i[o + n] = 0,
                    i[o + n + 1] = 0,
                    i[o + 2 * n] = 0,
                    i[o + 2 * n + 1] = 0,
                    i[o + 3 * n] = 0,
                    i[o + 3 * n + 1] = 0,
                    o += 4 * n)
                }
            }
            ,
            e.prototype.uploadTint = function(t, e, r, i, n, o) {
                for (var s = 0; s < r; ++s) {
                    var a = t[e + s]
                      , u = a._texture.baseTexture.alphaMode > 0
                      , h = a.alpha
                      , l = h < 1 && u ? vt(a._tintRGB, h) : a._tintRGB + (255 * h << 24);
                    i[o] = l,
                    i[o + n] = l,
                    i[o + 2 * n] = l,
                    i[o + 3 * n] = l,
                    o += 4 * n
                }
            }
            ,
            e.prototype.destroy = function() {
                t.prototype.destroy.call(this),
                this.shader && (this.shader.destroy(),
                this.shader = null),
                this.tempMatrix = null
            }
            ,
            e.extension = {
                name: "particle",
                type: le.RendererPlugin
            },
            e
        }(hr);
        !function(t) {
            t.MITER = "miter",
            t.BEVEL = "bevel",
            t.ROUND = "round"
        }(Un || (Un = {})),
        function(t) {
            t.BUTT = "butt",
            t.ROUND = "round",
            t.SQUARE = "square"
        }(kn || (kn = {}));
        var jn = {
            adaptive: !0,
            maxLength: 10,
            minSegments: 8,
            maxSegments: 2048,
            epsilon: 1e-4,
            _segmentsCount: function(t, e) {
                if (void 0 === e && (e = 20),
                !this.adaptive || !t || isNaN(t))
                    return e;
                var r = Math.ceil(t / this.maxLength);
                return r < this.minSegments ? r = this.minSegments : r > this.maxSegments && (r = this.maxSegments),
                r
            }
        }
          , Yn = function() {
            function t() {
                this.color = 16777215,
                this.alpha = 1,
                this.texture = Ye.WHITE,
                this.matrix = null,
                this.visible = !1,
                this.reset()
            }
            return t.prototype.clone = function() {
                var e = new t;
                return e.color = this.color,
                e.alpha = this.alpha,
                e.texture = this.texture,
                e.matrix = this.matrix,
                e.visible = this.visible,
                e
            }
            ,
            t.prototype.reset = function() {
                this.color = 16777215,
                this.alpha = 1,
                this.texture = Ye.WHITE,
                this.matrix = null,
                this.visible = !1
            }
            ,
            t.prototype.destroy = function() {
                this.texture = null,
                this.matrix = null
            }
            ,
            t
        }()
          , Vn = function(t, e) {
            return (Vn = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        function Wn(t, e) {
            function r() {
                this.constructor = t
            }
            Vn(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        function zn(t, e) {
            var r, i;
            void 0 === e && (e = !1);
            var n = t.length;
            if (!(n < 6)) {
                for (var o = 0, s = 0, a = t[n - 2], u = t[n - 1]; s < n; s += 2) {
                    var h = t[s]
                      , l = t[s + 1];
                    o += (h - a) * (l + u),
                    a = h,
                    u = l
                }
                if (!e && o > 0 || e && o <= 0) {
                    var c = n / 2;
                    for (s = c + c % 2; s < n; s += 2) {
                        var d = n - s - 2
                          , p = n - s - 1
                          , f = s
                          , _ = s + 1;
                        r = [t[f], t[d]],
                        t[d] = r[0],
                        t[f] = r[1],
                        i = [t[_], t[p]],
                        t[p] = i[0],
                        t[_] = i[1]
                    }
                }
            }
        }
        var $n = {
            build: function(t) {
                t.points = t.shape.points.slice()
            },
            triangulate: function(t, e) {
                var r = t.points
                  , i = t.holes
                  , n = e.points
                  , o = e.indices;
                if (r.length >= 6) {
                    zn(r, !1);
                    for (var s = [], a = 0; a < i.length; a++) {
                        var u = i[a];
                        zn(u.points, !0),
                        s.push(r.length / 2),
                        r = r.concat(u.points)
                    }
                    var h = st(r, s, 2);
                    if (!h)
                        return;
                    var l = n.length / 2;
                    for (a = 0; a < h.length; a += 3)
                        o.push(h[a] + l),
                        o.push(h[a + 1] + l),
                        o.push(h[a + 2] + l);
                    for (a = 0; a < r.length; a++)
                        n.push(r[a])
                }
            }
        }
          , qn = {
            build: function(t) {
                var e, r, i, n, o, s, a = t.points;
                if (t.type === Nt.CIRC) {
                    var u = t.shape;
                    e = u.x,
                    r = u.y,
                    o = s = u.radius,
                    i = n = 0
                } else if (t.type === Nt.ELIP) {
                    var h = t.shape;
                    e = h.x,
                    r = h.y,
                    o = h.width,
                    s = h.height,
                    i = n = 0
                } else {
                    var l = t.shape
                      , c = l.width / 2
                      , d = l.height / 2;
                    e = l.x + c,
                    r = l.y + d,
                    i = c - (o = s = Math.max(0, Math.min(l.radius, Math.min(c, d)))),
                    n = d - s
                }
                if (o >= 0 && s >= 0 && i >= 0 && n >= 0) {
                    var p = Math.ceil(2.3 * Math.sqrt(o + s))
                      , f = 8 * p + (i ? 4 : 0) + (n ? 4 : 0);
                    if (a.length = f,
                    0 !== f) {
                        if (0 === p)
                            return a.length = 8,
                            a[0] = a[6] = e + i,
                            a[1] = a[3] = r + n,
                            a[2] = a[4] = e - i,
                            void (a[5] = a[7] = r - n);
                        var _, m, v = 0, g = 4 * p + (i ? 2 : 0) + 2, y = g, b = f, x = e + (_ = i + o), T = e - _, E = r + (m = n);
                        if (a[v++] = x,
                        a[v++] = E,
                        a[--g] = E,
                        a[--g] = T,
                        n) {
                            var A = r - m;
                            a[y++] = T,
                            a[y++] = A,
                            a[--b] = A,
                            a[--b] = x
                        }
                        for (var S = 1; S < p; S++) {
                            var R = Math.PI / 2 * (S / p);
                            x = e + (_ = i + Math.cos(R) * o),
                            T = e - _,
                            E = r + (m = n + Math.sin(R) * s),
                            A = r - m,
                            a[v++] = x,
                            a[v++] = E,
                            a[--g] = E,
                            a[--g] = T,
                            a[y++] = T,
                            a[y++] = A,
                            a[--b] = A,
                            a[--b] = x
                        }
                        x = e + (_ = i),
                        T = e - _,
                        E = r + (m = n + s),
                        A = r - m,
                        a[v++] = x,
                        a[v++] = E,
                        a[--b] = A,
                        a[--b] = x,
                        i && (a[v++] = T,
                        a[v++] = E,
                        a[--b] = A,
                        a[--b] = T)
                    }
                } else
                    a.length = 0
            },
            triangulate: function(t, e) {
                var r = t.points
                  , i = e.points
                  , n = e.indices;
                if (0 !== r.length) {
                    var o, s, a = i.length / 2, u = a;
                    if (t.type !== Nt.RREC) {
                        var h = t.shape;
                        o = h.x,
                        s = h.y
                    } else {
                        var l = t.shape;
                        o = l.x + l.width / 2,
                        s = l.y + l.height / 2
                    }
                    var c = t.matrix;
                    i.push(t.matrix ? c.a * o + c.c * s + c.tx : o, t.matrix ? c.b * o + c.d * s + c.ty : s),
                    a++,
                    i.push(r[0], r[1]);
                    for (var d = 2; d < r.length; d += 2)
                        i.push(r[d], r[d + 1]),
                        n.push(a++, u, a);
                    n.push(u + 1, u, a)
                }
            }
        };
        function Kn(t, e, r) {
            return t + (e - t) * r
        }
        function Zn(t, e, r, i, n, o, s) {
            void 0 === s && (s = []);
            for (var a = s, u = 0, h = 0, l = 0, c = 0, d = 0, p = 0, f = 0, _ = 0; f <= 20; ++f)
                u = Kn(t, r, _ = f / 20),
                h = Kn(e, i, _),
                l = Kn(r, n, _),
                c = Kn(i, o, _),
                d = Kn(u, l, _),
                p = Kn(h, c, _),
                0 === f && a[a.length - 2] === d && a[a.length - 1] === p || a.push(d, p);
            return a
        }
        var Jn = {
            build: function(t) {
                if (go.nextRoundedRectBehavior)
                    qn.build(t);
                else {
                    var e = t.shape
                      , r = t.points
                      , i = e.x
                      , n = e.y
                      , o = e.width
                      , s = e.height
                      , a = Math.max(0, Math.min(e.radius, Math.min(o, s) / 2));
                    r.length = 0,
                    a ? (Zn(i, n + a, i, n, i + a, n, r),
                    Zn(i + o - a, n, i + o, n, i + o, n + a, r),
                    Zn(i + o, n + s - a, i + o, n + s, i + o - a, n + s, r),
                    Zn(i + a, n + s, i, n + s, i, n + s - a, r)) : r.push(i, n, i + o, n, i + o, n + s, i, n + s)
                }
            },
            triangulate: function(t, e) {
                if (go.nextRoundedRectBehavior)
                    qn.triangulate(t, e);
                else {
                    for (var r = t.points, i = e.points, n = e.indices, o = i.length / 2, s = st(r, null, 2), a = 0, u = s.length; a < u; a += 3)
                        n.push(s[a] + o),
                        n.push(s[a + 1] + o),
                        n.push(s[a + 2] + o);
                    for (a = 0,
                    u = r.length; a < u; a++)
                        i.push(r[a], r[++a])
                }
            }
        };
        function Qn(t, e, r, i, n, o, s, a) {
            var u, h;
            s ? (u = i,
            h = -r) : (u = -i,
            h = r);
            var l = t - r * n + u
              , c = e - i * n + h
              , d = t + r * o + u
              , p = e + i * o + h;
            return a.push(l, c),
            a.push(d, p),
            2
        }
        function to(t, e, r, i, n, o, s, a) {
            var u = r - t
              , h = i - e
              , l = Math.atan2(u, h)
              , c = Math.atan2(n - t, o - e);
            a && l < c ? l += 2 * Math.PI : !a && l > c && (c += 2 * Math.PI);
            var d = l
              , p = c - l
              , f = Math.abs(p)
              , _ = Math.sqrt(u * u + h * h)
              , m = 1 + (15 * f * Math.sqrt(_) / Math.PI >> 0)
              , v = p / m;
            if (d += v,
            a) {
                s.push(t, e),
                s.push(r, i);
                for (var g = 1, y = d; g < m; g++,
                y += v)
                    s.push(t, e),
                    s.push(t + Math.sin(y) * _, e + Math.cos(y) * _);
                s.push(t, e),
                s.push(n, o)
            } else {
                for (s.push(r, i),
                s.push(t, e),
                g = 1,
                y = d; g < m; g++,
                y += v)
                    s.push(t + Math.sin(y) * _, e + Math.cos(y) * _),
                    s.push(t, e);
                s.push(n, o),
                s.push(t, e)
            }
            return 2 * m
        }
        function eo(t, e) {
            t.lineStyle.native ? function(t, e) {
                var r = 0
                  , i = t.shape
                  , n = t.points || i.points
                  , o = i.type !== Nt.POLY || i.closeStroke;
                if (0 !== n.length) {
                    var s = e.points
                      , a = e.indices
                      , u = n.length / 2
                      , h = s.length / 2
                      , l = h;
                    for (s.push(n[0], n[1]),
                    r = 1; r < u; r++)
                        s.push(n[2 * r], n[2 * r + 1]),
                        a.push(l, l + 1),
                        l++;
                    o && a.push(l, h)
                }
            }(t, e) : function(t, e) {
                var r = t.shape
                  , i = t.points || r.points.slice()
                  , n = e.closePointEps;
                if (0 !== i.length) {
                    var o = t.lineStyle
                      , s = new Ut(i[0],i[1])
                      , a = new Ut(i[i.length - 2],i[i.length - 1])
                      , u = r.type !== Nt.POLY || r.closeStroke
                      , h = Math.abs(s.x - a.x) < n && Math.abs(s.y - a.y) < n;
                    if (u) {
                        i = i.slice(),
                        h && (i.pop(),
                        i.pop(),
                        a.set(i[i.length - 2], i[i.length - 1]));
                        var l = .5 * (s.x + a.x)
                          , c = .5 * (a.y + s.y);
                        i.unshift(l, c),
                        i.push(l, c)
                    }
                    var d = e.points
                      , p = i.length / 2
                      , f = i.length
                      , _ = d.length / 2
                      , m = o.width / 2
                      , v = m * m
                      , g = o.miterLimit * o.miterLimit
                      , y = i[0]
                      , b = i[1]
                      , x = i[2]
                      , T = i[3]
                      , E = 0
                      , A = 0
                      , S = -(b - T)
                      , R = y - x
                      , w = 0
                      , O = 0
                      , I = Math.sqrt(S * S + R * R);
                    S /= I,
                    R /= I,
                    S *= m,
                    R *= m;
                    var P = o.alignment
                      , M = 2 * (1 - P)
                      , D = 2 * P;
                    u || (o.cap === kn.ROUND ? f += to(y - S * (M - D) * .5, b - R * (M - D) * .5, y - S * M, b - R * M, y + S * D, b + R * D, d, !0) + 2 : o.cap === kn.SQUARE && (f += Qn(y, b, S, R, M, D, !0, d))),
                    d.push(y - S * M, b - R * M),
                    d.push(y + S * D, b + R * D);
                    for (var C = 1; C < p - 1; ++C) {
                        y = i[2 * (C - 1)],
                        b = i[2 * (C - 1) + 1],
                        x = i[2 * C],
                        T = i[2 * C + 1],
                        E = i[2 * (C + 1)],
                        A = i[2 * (C + 1) + 1],
                        S = -(b - T),
                        R = y - x,
                        S /= I = Math.sqrt(S * S + R * R),
                        R /= I,
                        S *= m,
                        R *= m,
                        w = -(T - A),
                        O = x - E,
                        w /= I = Math.sqrt(w * w + O * O),
                        O /= I,
                        w *= m,
                        O *= m;
                        var F = x - y
                          , N = b - T
                          , B = x - E
                          , L = A - T
                          , G = F * B + N * L
                          , U = N * B - L * F
                          , k = U < 0;
                        if (Math.abs(U) < .001 * Math.abs(G))
                            d.push(x - S * M, T - R * M),
                            d.push(x + S * D, T + R * D),
                            G >= 0 && (o.join === Un.ROUND ? f += to(x, T, x - S * M, T - R * M, x - w * M, T - O * M, d, !1) + 4 : f += 2,
                            d.push(x - w * D, T - O * D),
                            d.push(x + w * M, T + O * M));
                        else {
                            var X = (-S + y) * (-R + T) - (-S + x) * (-R + b)
                              , H = (-w + E) * (-O + T) - (-w + x) * (-O + A)
                              , j = (F * H - B * X) / U
                              , Y = (L * X - N * H) / U
                              , V = (j - x) * (j - x) + (Y - T) * (Y - T)
                              , W = x + (j - x) * M
                              , z = T + (Y - T) * M
                              , $ = x - (j - x) * D
                              , q = T - (Y - T) * D
                              , K = k ? M : D;
                            V <= Math.min(F * F + N * N, B * B + L * L) + K * K * v ? o.join === Un.BEVEL || V / v > g ? (k ? (d.push(W, z),
                            d.push(x + S * D, T + R * D),
                            d.push(W, z),
                            d.push(x + w * D, T + O * D)) : (d.push(x - S * M, T - R * M),
                            d.push($, q),
                            d.push(x - w * M, T - O * M),
                            d.push($, q)),
                            f += 2) : o.join === Un.ROUND ? k ? (d.push(W, z),
                            d.push(x + S * D, T + R * D),
                            f += to(x, T, x + S * D, T + R * D, x + w * D, T + O * D, d, !0) + 4,
                            d.push(W, z),
                            d.push(x + w * D, T + O * D)) : (d.push(x - S * M, T - R * M),
                            d.push($, q),
                            f += to(x, T, x - S * M, T - R * M, x - w * M, T - O * M, d, !1) + 4,
                            d.push(x - w * M, T - O * M),
                            d.push($, q)) : (d.push(W, z),
                            d.push($, q)) : (d.push(x - S * M, T - R * M),
                            d.push(x + S * D, T + R * D),
                            o.join === Un.ROUND ? f += k ? to(x, T, x + S * D, T + R * D, x + w * D, T + O * D, d, !0) + 2 : to(x, T, x - S * M, T - R * M, x - w * M, T - O * M, d, !1) + 2 : o.join === Un.MITER && V / v <= g && (k ? (d.push($, q),
                            d.push($, q)) : (d.push(W, z),
                            d.push(W, z)),
                            f += 2),
                            d.push(x - w * M, T - O * M),
                            d.push(x + w * D, T + O * D),
                            f += 2)
                        }
                    }
                    y = i[2 * (p - 2)],
                    b = i[2 * (p - 2) + 1],
                    x = i[2 * (p - 1)],
                    S = -(b - (T = i[2 * (p - 1) + 1])),
                    R = y - x,
                    S /= I = Math.sqrt(S * S + R * R),
                    R /= I,
                    S *= m,
                    R *= m,
                    d.push(x - S * M, T - R * M),
                    d.push(x + S * D, T + R * D),
                    u || (o.cap === kn.ROUND ? f += to(x - S * (M - D) * .5, T - R * (M - D) * .5, x - S * M, T - R * M, x + S * D, T + R * D, d, !1) + 2 : o.cap === kn.SQUARE && (f += Qn(x, T, S, R, M, D, !1, d)));
                    var Z = e.indices
                      , J = jn.epsilon * jn.epsilon;
                    for (C = _; C < f + _ - 2; ++C)
                        y = d[2 * C],
                        b = d[2 * C + 1],
                        x = d[2 * (C + 1)],
                        T = d[2 * (C + 1) + 1],
                        E = d[2 * (C + 2)],
                        A = d[2 * (C + 2) + 1],
                        Math.abs(y * (T - A) + x * (A - b) + E * (b - T)) < J || Z.push(C, C + 1, C + 2)
                }
            }(t, e)
        }
        var ro, io, no = function() {
            function t() {}
            return t.curveTo = function(t, e, r, i, n, o) {
                var s = o[o.length - 2]
                  , a = o[o.length - 1] - e
                  , u = s - t
                  , h = i - e
                  , l = r - t
                  , c = Math.abs(a * l - u * h);
                if (c < 1e-8 || 0 === n)
                    return o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e),
                    null;
                var d = a * a + u * u
                  , p = h * h + l * l
                  , f = a * h + u * l
                  , _ = n * Math.sqrt(d) / c
                  , m = n * Math.sqrt(p) / c
                  , v = _ * f / d
                  , g = m * f / p
                  , y = _ * l + m * u
                  , b = _ * h + m * a
                  , x = u * (m + v)
                  , T = a * (m + v)
                  , E = l * (_ + g)
                  , A = h * (_ + g);
                return {
                    cx: y + t,
                    cy: b + e,
                    radius: n,
                    startAngle: Math.atan2(T - b, x - y),
                    endAngle: Math.atan2(A - b, E - y),
                    anticlockwise: u * h > l * a
                }
            }
            ,
            t.arc = function(t, e, r, i, n, o, s, a, u) {
                for (var h = s - o, l = jn._segmentsCount(Math.abs(h) * n, 40 * Math.ceil(Math.abs(h) / Bt)), c = h / (2 * l), d = 2 * c, p = Math.cos(c), f = Math.sin(c), _ = l - 1, m = _ % 1 / _, v = 0; v <= _; ++v) {
                    var g = c + o + d * (v + m * v)
                      , y = Math.cos(g)
                      , b = -Math.sin(g);
                    u.push((p * y + f * b) * n + r, (p * -b + f * y) * n + i)
                }
            }
            ,
            t
        }(), oo = function() {
            function t() {}
            return t.curveLength = function(t, e, r, i, n, o, s, a) {
                for (var u = 0, h = 0, l = 0, c = 0, d = 0, p = 0, f = 0, _ = 0, m = 0, v = 0, g = 0, y = t, b = e, x = 1; x <= 10; ++x)
                    v = y - (_ = (f = (p = (d = 1 - (h = x / 10)) * d) * d) * t + 3 * p * h * r + 3 * d * (l = h * h) * n + (c = l * h) * s),
                    g = b - (m = f * e + 3 * p * h * i + 3 * d * l * o + c * a),
                    y = _,
                    b = m,
                    u += Math.sqrt(v * v + g * g);
                return u
            }
            ,
            t.curveTo = function(e, r, i, n, o, s, a) {
                var u = a[a.length - 2]
                  , h = a[a.length - 1];
                a.length -= 2;
                var l = jn._segmentsCount(t.curveLength(u, h, e, r, i, n, o, s))
                  , c = 0
                  , d = 0
                  , p = 0
                  , f = 0
                  , _ = 0;
                a.push(u, h);
                for (var m = 1, v = 0; m <= l; ++m)
                    p = (d = (c = 1 - (v = m / l)) * c) * c,
                    _ = (f = v * v) * v,
                    a.push(p * u + 3 * d * v * e + 3 * c * f * i + _ * o, p * h + 3 * d * v * r + 3 * c * f * n + _ * s)
            }
            ,
            t
        }(), so = function() {
            function t() {}
            return t.curveLength = function(t, e, r, i, n, o) {
                var s = t - 2 * r + n
                  , a = e - 2 * i + o
                  , u = 2 * r - 2 * t
                  , h = 2 * i - 2 * e
                  , l = 4 * (s * s + a * a)
                  , c = 4 * (s * u + a * h)
                  , d = u * u + h * h
                  , p = 2 * Math.sqrt(l + c + d)
                  , f = Math.sqrt(l)
                  , _ = 2 * l * f
                  , m = 2 * Math.sqrt(d)
                  , v = c / f;
                return (_ * p + f * c * (p - m) + (4 * d * l - c * c) * Math.log((2 * f + v + p) / (v + m))) / (4 * _)
            }
            ,
            t.curveTo = function(e, r, i, n, o) {
                for (var s = o[o.length - 2], a = o[o.length - 1], u = jn._segmentsCount(t.curveLength(s, a, e, r, i, n)), h = 0, l = 0, c = 1; c <= u; ++c) {
                    var d = c / u;
                    h = s + (e - s) * d,
                    l = a + (r - a) * d,
                    o.push(h + (e + (i - e) * d - h) * d, l + (r + (n - r) * d - l) * d)
                }
            }
            ,
            t
        }(), ao = function() {
            function t() {
                this.reset()
            }
            return t.prototype.begin = function(t, e, r) {
                this.reset(),
                this.style = t,
                this.start = e,
                this.attribStart = r
            }
            ,
            t.prototype.end = function(t, e) {
                this.attribSize = e - this.attribStart,
                this.size = t - this.start
            }
            ,
            t.prototype.reset = function() {
                this.style = null,
                this.size = 0,
                this.start = 0,
                this.attribStart = 0,
                this.attribSize = 0
            }
            ,
            t
        }(), uo = ((ro = {})[Nt.POLY] = $n,
        ro[Nt.CIRC] = qn,
        ro[Nt.ELIP] = qn,
        ro[Nt.RECT] = {
            build: function(t) {
                var e = t.shape
                  , r = e.x
                  , i = e.y
                  , n = e.width
                  , o = e.height
                  , s = t.points;
                s.length = 0,
                s.push(r, i, r + n, i, r + n, i + o, r, i + o)
            },
            triangulate: function(t, e) {
                var r = t.points
                  , i = e.points
                  , n = i.length / 2;
                i.push(r[0], r[1], r[2], r[3], r[6], r[7], r[4], r[5]),
                e.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3)
            }
        },
        ro[Nt.RREC] = Jn,
        ro), ho = [], lo = [], co = function() {
            function t(t, e, r, i) {
                void 0 === e && (e = null),
                void 0 === r && (r = null),
                void 0 === i && (i = null),
                this.points = [],
                this.holes = [],
                this.shape = t,
                this.lineStyle = r,
                this.fillStyle = e,
                this.matrix = i,
                this.type = t.type
            }
            return t.prototype.clone = function() {
                return new t(this.shape,this.fillStyle,this.lineStyle,this.matrix)
            }
            ,
            t.prototype.destroy = function() {
                this.shape = null,
                this.holes.length = 0,
                this.holes = null,
                this.points.length = 0,
                this.points = null,
                this.lineStyle = null,
                this.fillStyle = null
            }
            ,
            t
        }(), po = new Ut, fo = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.closePointEps = 1e-4,
                e.boundsPadding = 0,
                e.uvsFloat32 = null,
                e.indicesUint16 = null,
                e.batchable = !1,
                e.points = [],
                e.colors = [],
                e.uvs = [],
                e.indices = [],
                e.textureIds = [],
                e.graphicsData = [],
                e.drawCalls = [],
                e.batchDirty = -1,
                e.batches = [],
                e.dirty = 0,
                e.cacheDirty = -1,
                e.clearDirty = 0,
                e.shapeIndex = 0,
                e._bounds = new ie,
                e.boundsDirty = -1,
                e
            }
            return Wn(e, t),
            Object.defineProperty(e.prototype, "bounds", {
                get: function() {
                    return this.updateBatches(),
                    this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty,
                    this.calculateBounds()),
                    this._bounds
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.invalidate = function() {
                this.boundsDirty = -1,
                this.dirty++,
                this.batchDirty++,
                this.shapeIndex = 0,
                this.points.length = 0,
                this.colors.length = 0,
                this.uvs.length = 0,
                this.indices.length = 0,
                this.textureIds.length = 0;
                for (var t = 0; t < this.drawCalls.length; t++)
                    this.drawCalls[t].texArray.clear(),
                    lo.push(this.drawCalls[t]);
                for (this.drawCalls.length = 0,
                t = 0; t < this.batches.length; t++) {
                    var e = this.batches[t];
                    e.reset(),
                    ho.push(e)
                }
                this.batches.length = 0
            }
            ,
            e.prototype.clear = function() {
                return this.graphicsData.length > 0 && (this.invalidate(),
                this.clearDirty++,
                this.graphicsData.length = 0),
                this
            }
            ,
            e.prototype.drawShape = function(t, e, r, i) {
                void 0 === e && (e = null),
                void 0 === r && (r = null),
                void 0 === i && (i = null);
                var n = new co(t,e,r,i);
                return this.graphicsData.push(n),
                this.dirty++,
                this
            }
            ,
            e.prototype.drawHole = function(t, e) {
                if (void 0 === e && (e = null),
                !this.graphicsData.length)
                    return null;
                var r = new co(t,null,null,e)
                  , i = this.graphicsData[this.graphicsData.length - 1];
                return r.lineStyle = i.lineStyle,
                i.holes.push(r),
                this.dirty++,
                this
            }
            ,
            e.prototype.destroy = function() {
                t.prototype.destroy.call(this);
                for (var e = 0; e < this.graphicsData.length; ++e)
                    this.graphicsData[e].destroy();
                this.points.length = 0,
                this.points = null,
                this.colors.length = 0,
                this.colors = null,
                this.uvs.length = 0,
                this.uvs = null,
                this.indices.length = 0,
                this.indices = null,
                this.indexBuffer.destroy(),
                this.indexBuffer = null,
                this.graphicsData.length = 0,
                this.graphicsData = null,
                this.drawCalls.length = 0,
                this.drawCalls = null,
                this.batches.length = 0,
                this.batches = null,
                this._bounds = null
            }
            ,
            e.prototype.containsPoint = function(t) {
                for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
                    var i = e[r];
                    if (i.fillStyle.visible && i.shape && (i.matrix ? i.matrix.applyInverse(t, po) : po.copyFrom(t),
                    i.shape.contains(po.x, po.y))) {
                        var n = !1;
                        if (i.holes)
                            for (var o = 0; o < i.holes.length; o++)
                                if (i.holes[o].shape.contains(po.x, po.y)) {
                                    n = !0;
                                    break
                                }
                        if (!n)
                            return !0
                    }
                }
                return !1
            }
            ,
            e.prototype.updateBatches = function() {
                if (this.graphicsData.length) {
                    if (this.validateBatching()) {
                        this.cacheDirty = this.dirty;
                        var t = this.uvs
                          , e = this.graphicsData
                          , r = null
                          , i = null;
                        this.batches.length > 0 && (i = (r = this.batches[this.batches.length - 1]).style);
                        for (var n = this.shapeIndex; n < e.length; n++) {
                            this.shapeIndex++;
                            var o = e[n]
                              , s = o.fillStyle
                              , a = o.lineStyle;
                            uo[o.type].build(o),
                            o.matrix && this.transformPoints(o.points, o.matrix),
                            (s.visible || a.visible) && this.processHoles(o.holes);
                            for (var u = 0; u < 2; u++) {
                                var h = 0 === u ? s : a;
                                if (h.visible) {
                                    var l = h.texture.baseTexture
                                      , c = this.indices.length
                                      , d = this.points.length / 2;
                                    l.wrapMode = S.REPEAT,
                                    0 === u ? this.processFill(o) : this.processLine(o);
                                    var p = this.points.length / 2 - d;
                                    0 !== p && (r && !this._compareStyles(i, h) && (r.end(c, d),
                                    r = null),
                                    r || ((r = ho.pop() || new ao).begin(h, c, d),
                                    this.batches.push(r),
                                    i = h),
                                    this.addUvs(this.points, t, h.texture, d, p, h.matrix))
                                }
                            }
                        }
                        var f = this.indices.length
                          , _ = this.points.length / 2;
                        if (r && r.end(f, _),
                        0 !== this.batches.length) {
                            var m = _ > 65535;
                            this.indicesUint16 && this.indices.length === this.indicesUint16.length && m === this.indicesUint16.BYTES_PER_ELEMENT > 2 ? this.indicesUint16.set(this.indices) : this.indicesUint16 = m ? new Uint32Array(this.indices) : new Uint16Array(this.indices),
                            this.batchable = this.isBatchable(),
                            this.batchable ? this.packBatches() : this.buildDrawCalls()
                        } else
                            this.batchable = !0
                    }
                } else
                    this.batchable = !0
            }
            ,
            e.prototype._compareStyles = function(t, e) {
                return !(!t || !e) && t.texture.baseTexture === e.texture.baseTexture && t.color + t.alpha === e.color + e.alpha && !!t.native == !!e.native
            }
            ,
            e.prototype.validateBatching = function() {
                if (this.dirty === this.cacheDirty || !this.graphicsData.length)
                    return !1;
                for (var t = 0, e = this.graphicsData.length; t < e; t++) {
                    var r = this.graphicsData[t]
                      , i = r.fillStyle
                      , n = r.lineStyle;
                    if (i && !i.texture.baseTexture.valid)
                        return !1;
                    if (n && !n.texture.baseTexture.valid)
                        return !1
                }
                return !0
            }
            ,
            e.prototype.packBatches = function() {
                this.batchDirty++,
                this.uvsFloat32 = new Float32Array(this.uvs);
                for (var t = this.batches, e = 0, r = t.length; e < r; e++)
                    for (var i = t[e], n = 0; n < i.size; n++) {
                        var o = i.start + n;
                        this.indicesUint16[o] = this.indicesUint16[o] - i.attribStart
                    }
            }
            ,
            e.prototype.isBatchable = function() {
                if (this.points.length > 131070)
                    return !1;
                for (var t = this.batches, r = 0; r < t.length; r++)
                    if (t[r].style.native)
                        return !1;
                return this.points.length < 2 * e.BATCHABLE_SIZE
            }
            ,
            e.prototype.buildDrawCalls = function() {
                for (var t = ++we._globalBatch, e = 0; e < this.drawCalls.length; e++)
                    this.drawCalls[e].texArray.clear(),
                    lo.push(this.drawCalls[e]);
                this.drawCalls.length = 0;
                var r = this.colors
                  , i = this.textureIds
                  , n = lo.pop();
                n || ((n = new xi).texArray = new Ti),
                n.texArray.count = 0,
                n.start = 0,
                n.size = 0,
                n.type = y.TRIANGLES;
                var o = 0
                  , s = null
                  , a = 0
                  , u = !1
                  , h = y.TRIANGLES
                  , l = 0;
                for (this.drawCalls.push(n),
                e = 0; e < this.batches.length; e++) {
                    var c = this.batches[e]
                      , d = c.style
                      , p = d.texture.baseTexture;
                    u !== !!d.native && (h = (u = !!d.native) ? y.LINES : y.TRIANGLES,
                    s = null,
                    o = 8,
                    t++),
                    s !== p && (s = p,
                    p._batchEnabled !== t && (8 === o && (t++,
                    o = 0,
                    n.size > 0 && ((n = lo.pop()) || ((n = new xi).texArray = new Ti),
                    this.drawCalls.push(n)),
                    n.start = l,
                    n.size = 0,
                    n.texArray.count = 0,
                    n.type = h),
                    p.touched = 1,
                    p._batchEnabled = t,
                    p._batchLocation = o,
                    p.wrapMode = S.REPEAT,
                    n.texArray.elements[n.texArray.count++] = p,
                    o++)),
                    n.size += c.size,
                    l += c.size,
                    a = p._batchLocation,
                    this.addColors(r, d.color, d.alpha, c.attribSize, c.attribStart),
                    this.addTextureIds(i, a, c.attribSize, c.attribStart)
                }
                we._globalBatch = t,
                this.packAttributes()
            }
            ,
            e.prototype.packAttributes = function() {
                for (var t = this.points, e = this.uvs, r = this.colors, i = this.textureIds, n = new ArrayBuffer(3 * t.length * 4), o = new Float32Array(n), s = new Uint32Array(n), a = 0, u = 0; u < t.length / 2; u++)
                    o[a++] = t[2 * u],
                    o[a++] = t[2 * u + 1],
                    o[a++] = e[2 * u],
                    o[a++] = e[2 * u + 1],
                    s[a++] = r[u],
                    o[a++] = i[u];
                this._buffer.update(n),
                this._indexBuffer.update(this.indicesUint16)
            }
            ,
            e.prototype.processFill = function(t) {
                t.holes.length ? $n.triangulate(t, this) : uo[t.type].triangulate(t, this)
            }
            ,
            e.prototype.processLine = function(t) {
                eo(t, this);
                for (var e = 0; e < t.holes.length; e++)
                    eo(t.holes[e], this)
            }
            ,
            e.prototype.processHoles = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    uo[r.type].build(r),
                    r.matrix && this.transformPoints(r.points, r.matrix)
                }
            }
            ,
            e.prototype.calculateBounds = function() {
                var t = this._bounds;
                t.clear(),
                t.addVertexData(this.points, 0, this.points.length),
                t.pad(this.boundsPadding, this.boundsPadding)
            }
            ,
            e.prototype.transformPoints = function(t, e) {
                for (var r = 0; r < t.length / 2; r++) {
                    var i = t[2 * r]
                      , n = t[2 * r + 1];
                    t[2 * r] = e.a * i + e.c * n + e.tx,
                    t[2 * r + 1] = e.b * i + e.d * n + e.ty
                }
            }
            ,
            e.prototype.addColors = function(t, e, r, i, n) {
                void 0 === n && (n = 0);
                var o = vt((e >> 16) + (65280 & e) + ((255 & e) << 16), r);
                t.length = Math.max(t.length, n + i);
                for (var s = 0; s < i; s++)
                    t[n + s] = o
            }
            ,
            e.prototype.addTextureIds = function(t, e, r, i) {
                void 0 === i && (i = 0),
                t.length = Math.max(t.length, i + r);
                for (var n = 0; n < r; n++)
                    t[i + n] = e
            }
            ,
            e.prototype.addUvs = function(t, e, r, i, n, o) {
                void 0 === o && (o = null);
                for (var s = 0, a = e.length, u = r.frame; s < n; ) {
                    var h = t[2 * (i + s)]
                      , l = t[2 * (i + s) + 1];
                    if (o) {
                        var c = o.a * h + o.c * l + o.tx;
                        l = o.b * h + o.d * l + o.ty,
                        h = c
                    }
                    s++,
                    e.push(h / u.width, l / u.height)
                }
                var d = r.baseTexture;
                (u.width < d.width || u.height < d.height) && this.adjustUvs(e, r, a, n)
            }
            ,
            e.prototype.adjustUvs = function(t, e, r, i) {
                for (var n = e.baseTexture, o = 1e-6, s = r + 2 * i, a = e.frame, u = a.width / n.width, h = a.height / n.height, l = a.x / a.width, c = a.y / a.height, d = Math.floor(t[r] + o), p = Math.floor(t[r + 1] + o), f = r + 2; f < s; f += 2)
                    d = Math.min(d, Math.floor(t[f] + o)),
                    p = Math.min(p, Math.floor(t[f + 1] + o));
                for (l -= d,
                c -= p,
                f = r; f < s; f += 2)
                    t[f] = (t[f] + l) * u,
                    t[f + 1] = (t[f + 1] + c) * h
            }
            ,
            e.BATCHABLE_SIZE = 100,
            e
        }(Ri), _o = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.width = 0,
                e.alignment = .5,
                e.native = !1,
                e.cap = kn.BUTT,
                e.join = Un.MITER,
                e.miterLimit = 10,
                e
            }
            return Wn(e, t),
            e.prototype.clone = function() {
                var t = new e;
                return t.color = this.color,
                t.alpha = this.alpha,
                t.texture = this.texture,
                t.matrix = this.matrix,
                t.visible = this.visible,
                t.width = this.width,
                t.alignment = this.alignment,
                t.native = this.native,
                t.cap = this.cap,
                t.join = this.join,
                t.miterLimit = this.miterLimit,
                t
            }
            ,
            e.prototype.reset = function() {
                t.prototype.reset.call(this),
                this.color = 0,
                this.alignment = .5,
                this.width = 0,
                this.native = !1
            }
            ,
            e
        }(Yn), mo = new Float32Array(3), vo = {}, go = function(t) {
            function e(e) {
                void 0 === e && (e = null);
                var r = t.call(this) || this;
                return r.shader = null,
                r.pluginName = "batch",
                r.currentPath = null,
                r.batches = [],
                r.batchTint = -1,
                r.batchDirty = -1,
                r.vertexData = null,
                r._fillStyle = new Yn,
                r._lineStyle = new _o,
                r._matrix = null,
                r._holeMode = !1,
                r.state = Hr.for2d(),
                r._geometry = e || new fo,
                r._geometry.refCount++,
                r._transformID = -1,
                r.tint = 16777215,
                r.blendMode = g.NORMAL,
                r
            }
            return Wn(e, t),
            Object.defineProperty(e.prototype, "geometry", {
                get: function() {
                    return this._geometry
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.clone = function() {
                return this.finishPoly(),
                new e(this._geometry)
            }
            ,
            Object.defineProperty(e.prototype, "blendMode", {
                get: function() {
                    return this.state.blendMode
                },
                set: function(t) {
                    this.state.blendMode = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "tint", {
                get: function() {
                    return this._tint
                },
                set: function(t) {
                    this._tint = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "fill", {
                get: function() {
                    return this._fillStyle
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "line", {
                get: function() {
                    return this._lineStyle
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.lineStyle = function(t, e, r, i, n) {
                return void 0 === t && (t = null),
                void 0 === e && (e = 0),
                void 0 === r && (r = 1),
                void 0 === i && (i = .5),
                void 0 === n && (n = !1),
                "number" == typeof t && (t = {
                    width: t,
                    color: e,
                    alpha: r,
                    alignment: i,
                    native: n
                }),
                this.lineTextureStyle(t)
            }
            ,
            e.prototype.lineTextureStyle = function(t) {
                t = Object.assign({
                    width: 0,
                    texture: Ye.WHITE,
                    color: t && t.texture ? 16777215 : 0,
                    alpha: 1,
                    matrix: null,
                    alignment: .5,
                    native: !1,
                    cap: kn.BUTT,
                    join: Un.MITER,
                    miterLimit: 10
                }, t),
                this.currentPath && this.startPoly();
                var e = t.width > 0 && t.alpha > 0;
                return e ? (t.matrix && (t.matrix = t.matrix.clone(),
                t.matrix.invert()),
                Object.assign(this._lineStyle, {
                    visible: e
                }, t)) : this._lineStyle.reset(),
                this
            }
            ,
            e.prototype.startPoly = function() {
                if (this.currentPath) {
                    var t = this.currentPath.points
                      , e = this.currentPath.points.length;
                    e > 2 && (this.drawShape(this.currentPath),
                    this.currentPath = new Yt,
                    this.currentPath.closeStroke = !1,
                    this.currentPath.points.push(t[e - 2], t[e - 1]))
                } else
                    this.currentPath = new Yt,
                    this.currentPath.closeStroke = !1
            }
            ,
            e.prototype.finishPoly = function() {
                this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath),
                this.currentPath = null) : this.currentPath.points.length = 0)
            }
            ,
            e.prototype.moveTo = function(t, e) {
                return this.startPoly(),
                this.currentPath.points[0] = t,
                this.currentPath.points[1] = e,
                this
            }
            ,
            e.prototype.lineTo = function(t, e) {
                this.currentPath || this.moveTo(0, 0);
                var r = this.currentPath.points
                  , i = r[r.length - 2]
                  , n = r[r.length - 1];
                return i === t && n === e || r.push(t, e),
                this
            }
            ,
            e.prototype._initCurve = function(t, e) {
                void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
            }
            ,
            e.prototype.quadraticCurveTo = function(t, e, r, i) {
                this._initCurve();
                var n = this.currentPath.points;
                return 0 === n.length && this.moveTo(0, 0),
                so.curveTo(t, e, r, i, n),
                this
            }
            ,
            e.prototype.bezierCurveTo = function(t, e, r, i, n, o) {
                return this._initCurve(),
                oo.curveTo(t, e, r, i, n, o, this.currentPath.points),
                this
            }
            ,
            e.prototype.arcTo = function(t, e, r, i, n) {
                this._initCurve(t, e);
                var o = this.currentPath.points
                  , s = no.curveTo(t, e, r, i, n, o);
                if (s) {
                    var a = s.cx
                      , u = s.cy
                      , h = s.radius
                      , l = s.startAngle
                      , c = s.endAngle
                      , d = s.anticlockwise;
                    this.arc(a, u, h, l, c, d)
                }
                return this
            }
            ,
            e.prototype.arc = function(t, e, r, i, n, o) {
                if (void 0 === o && (o = !1),
                i === n)
                    return this;
                if (!o && n <= i ? n += Bt : o && i <= n && (i += Bt),
                0 == n - i)
                    return this;
                var s = t + Math.cos(i) * r
                  , a = e + Math.sin(i) * r
                  , u = this._geometry.closePointEps
                  , h = this.currentPath ? this.currentPath.points : null;
                if (h) {
                    var l = Math.abs(h[h.length - 2] - s)
                      , c = Math.abs(h[h.length - 1] - a);
                    l < u && c < u || h.push(s, a)
                } else
                    this.moveTo(s, a),
                    h = this.currentPath.points;
                return no.arc(s, a, t, e, r, i, n, o, h),
                this
            }
            ,
            e.prototype.beginFill = function(t, e) {
                return void 0 === t && (t = 0),
                void 0 === e && (e = 1),
                this.beginTextureFill({
                    texture: Ye.WHITE,
                    color: t,
                    alpha: e
                })
            }
            ,
            e.prototype.beginTextureFill = function(t) {
                t = Object.assign({
                    texture: Ye.WHITE,
                    color: 16777215,
                    alpha: 1,
                    matrix: null
                }, t),
                this.currentPath && this.startPoly();
                var e = t.alpha > 0;
                return e ? (t.matrix && (t.matrix = t.matrix.clone(),
                t.matrix.invert()),
                Object.assign(this._fillStyle, {
                    visible: e
                }, t)) : this._fillStyle.reset(),
                this
            }
            ,
            e.prototype.endFill = function() {
                return this.finishPoly(),
                this._fillStyle.reset(),
                this
            }
            ,
            e.prototype.drawRect = function(t, e, r, i) {
                return this.drawShape(new Xt(t,e,r,i))
            }
            ,
            e.prototype.drawRoundedRect = function(t, e, r, i, n) {
                return this.drawShape(new Vt(t,e,r,i,n))
            }
            ,
            e.prototype.drawCircle = function(t, e, r) {
                return this.drawShape(new Ht(t,e,r))
            }
            ,
            e.prototype.drawEllipse = function(t, e, r, i) {
                return this.drawShape(new jt(t,e,r,i))
            }
            ,
            e.prototype.drawPolygon = function() {
                for (var t, e = arguments, r = [], i = 0; i < arguments.length; i++)
                    r[i] = e[i];
                var n = !0
                  , o = r[0];
                o.points ? (n = o.closeStroke,
                t = o.points) : t = Array.isArray(r[0]) ? r[0] : r;
                var s = new Yt(t);
                return s.closeStroke = n,
                this.drawShape(s),
                this
            }
            ,
            e.prototype.drawShape = function(t) {
                return this._holeMode ? this._geometry.drawHole(t, this._matrix) : this._geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix),
                this
            }
            ,
            e.prototype.clear = function() {
                return this._geometry.clear(),
                this._lineStyle.reset(),
                this._fillStyle.reset(),
                this._boundsID++,
                this._matrix = null,
                this._holeMode = !1,
                this.currentPath = null,
                this
            }
            ,
            e.prototype.isFastRect = function() {
                var t = this._geometry.graphicsData;
                return !(1 !== t.length || t[0].shape.type !== Nt.RECT || t[0].matrix || t[0].holes.length || t[0].lineStyle.visible && t[0].lineStyle.width)
            }
            ,
            e.prototype._render = function(t) {
                this.finishPoly();
                var e = this._geometry;
                e.updateBatches(),
                e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(),
                this._renderBatched(t)) : (t.batch.flush(),
                this._renderDirect(t))
            }
            ,
            e.prototype._populateBatches = function() {
                var t = this._geometry
                  , e = this.blendMode
                  , r = t.batches.length;
                this.batchTint = -1,
                this._transformID = -1,
                this.batchDirty = t.batchDirty,
                this.batches.length = r,
                this.vertexData = new Float32Array(t.points);
                for (var i = 0; i < r; i++) {
                    var n = t.batches[i]
                      , o = n.style.color
                      , s = new Float32Array(this.vertexData.buffer,4 * n.attribStart * 2,2 * n.attribSize)
                      , a = new Float32Array(t.uvsFloat32.buffer,4 * n.attribStart * 2,2 * n.attribSize)
                      , u = {
                        vertexData: s,
                        blendMode: e,
                        indices: new Uint16Array(t.indicesUint16.buffer,2 * n.start,n.size),
                        uvs: a,
                        _batchRGB: dt(o),
                        _tintRGB: o,
                        _texture: n.style.texture,
                        alpha: n.style.alpha,
                        worldAlpha: 1
                    };
                    this.batches[i] = u
                }
            }
            ,
            e.prototype._renderBatched = function(t) {
                if (this.batches.length) {
                    t.batch.setObjectRenderer(t.plugins[this.pluginName]),
                    this.calculateVertices(),
                    this.calculateTints();
                    for (var e = 0, r = this.batches.length; e < r; e++) {
                        var i = this.batches[e];
                        i.worldAlpha = this.worldAlpha * i.alpha,
                        t.plugins[this.pluginName].render(i)
                    }
                }
            }
            ,
            e.prototype._renderDirect = function(t) {
                var e = this._resolveDirectShader(t)
                  , r = this._geometry
                  , i = this.tint
                  , n = this.worldAlpha
                  , o = e.uniforms
                  , s = r.drawCalls;
                o.translationMatrix = this.transform.worldTransform,
                o.tint[0] = (i >> 16 & 255) / 255 * n,
                o.tint[1] = (i >> 8 & 255) / 255 * n,
                o.tint[2] = (255 & i) / 255 * n,
                o.tint[3] = n,
                t.shader.bind(e),
                t.geometry.bind(r, e),
                t.state.set(this.state);
                for (var a = 0, u = s.length; a < u; a++)
                    this._renderDrawCallDirect(t, r.drawCalls[a])
            }
            ,
            e.prototype._renderDrawCallDirect = function(t, e) {
                for (var r = e.texArray, i = e.type, n = e.size, o = e.start, s = r.count, a = 0; a < s; a++)
                    t.texture.bind(r.elements[a], a);
                t.geometry.draw(i, n, o)
            }
            ,
            e.prototype._resolveDirectShader = function(t) {
                var e = this.shader
                  , r = this.pluginName;
                if (!e) {
                    if (!vo[r]) {
                        for (var i = t.plugins[r].MAX_TEXTURES, n = new Int32Array(i), o = 0; o < i; o++)
                            n[o] = o;
                        var s = {
                            tint: new Float32Array([1, 1, 1, 1]),
                            translationMatrix: new zt,
                            default: nr.from({
                                uSamplers: n
                            }, !0)
                        }
                          , a = t.plugins[r]._shader.program;
                        vo[r] = new Xr(a,s)
                    }
                    e = vo[r]
                }
                return e
            }
            ,
            e.prototype._calculateBounds = function() {
                this.finishPoly();
                var t = this._geometry;
                if (t.graphicsData.length) {
                    var e = t.bounds
                      , r = e.minX
                      , i = e.minY
                      , n = e.maxX
                      , o = e.maxY;
                    this._bounds.addFrame(this.transform, r, i, n, o)
                }
            }
            ,
            e.prototype.containsPoint = function(t) {
                return this.worldTransform.applyInverse(t, e._TEMP_POINT),
                this._geometry.containsPoint(e._TEMP_POINT)
            }
            ,
            e.prototype.calculateTints = function() {
                if (this.batchTint !== this.tint) {
                    this.batchTint = this.tint;
                    for (var t = dt(this.tint, mo), e = 0; e < this.batches.length; e++) {
                        var r = this.batches[e]
                          , i = r._batchRGB
                          , n = (t[0] * i[0] * 255 << 16) + (t[1] * i[1] * 255 << 8) + (0 | t[2] * i[2] * 255);
                        r._tintRGB = (n >> 16) + (65280 & n) + ((255 & n) << 16)
                    }
                }
            }
            ,
            e.prototype.calculateVertices = function() {
                var t = this.transform._worldID;
                if (this._transformID !== t) {
                    this._transformID = t;
                    for (var e = this.transform.worldTransform, r = e.a, i = e.b, n = e.c, o = e.d, s = e.tx, a = e.ty, u = this._geometry.points, h = this.vertexData, l = 0, c = 0; c < u.length; c += 2) {
                        var d = u[c]
                          , p = u[c + 1];
                        h[l++] = r * d + n * p + s,
                        h[l++] = o * p + i * d + a
                    }
                }
            }
            ,
            e.prototype.closePath = function() {
                var t = this.currentPath;
                return t && (t.closeStroke = !0,
                this.finishPoly()),
                this
            }
            ,
            e.prototype.setMatrix = function(t) {
                return this._matrix = t,
                this
            }
            ,
            e.prototype.beginHole = function() {
                return this.finishPoly(),
                this._holeMode = !0,
                this
            }
            ,
            e.prototype.endHole = function() {
                return this.finishPoly(),
                this._holeMode = !1,
                this
            }
            ,
            e.prototype.destroy = function(e) {
                this._geometry.refCount--,
                0 === this._geometry.refCount && this._geometry.dispose(),
                this._matrix = null,
                this.currentPath = null,
                this._lineStyle.destroy(),
                this._lineStyle = null,
                this._fillStyle.destroy(),
                this._fillStyle = null,
                this._geometry = null,
                this.shader = null,
                this.vertexData = null,
                this.batches.length = 0,
                this.batches = null,
                t.prototype.destroy.call(this, e)
            }
            ,
            e.nextRoundedRectBehavior = !1,
            e._TEMP_POINT = new Ut,
            e
        }(he), yo = function(t, e) {
            return (yo = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        }, bo = new Ut, xo = new Uint16Array([0, 1, 2, 0, 2, 3]), To = function(t) {
            function e(e) {
                var r = t.call(this) || this;
                return r._anchor = new Wt(r._onAnchorUpdate,r,e ? e.defaultAnchor.x : 0,e ? e.defaultAnchor.y : 0),
                r._texture = null,
                r._width = 0,
                r._height = 0,
                r._tint = null,
                r._tintRGB = null,
                r.tint = 16777215,
                r.blendMode = g.NORMAL,
                r._cachedTint = 16777215,
                r.uvs = null,
                r.texture = e || Ye.EMPTY,
                r.vertexData = new Float32Array(8),
                r.vertexTrimmedData = null,
                r._transformID = -1,
                r._textureID = -1,
                r._transformTrimmedID = -1,
                r._textureTrimmedID = -1,
                r.indices = xo,
                r.pluginName = "batch",
                r.isSprite = !0,
                r._roundPixels = nt.ROUND_PIXELS,
                r
            }
            return function(t, e) {
                function r() {
                    this.constructor = t
                }
                yo(t, e),
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }(e, t),
            e.prototype._onTextureUpdate = function() {
                this._textureID = -1,
                this._textureTrimmedID = -1,
                this._cachedTint = 16777215,
                this._width && (this.scale.x = At(this.scale.x) * this._width / this._texture.orig.width),
                this._height && (this.scale.y = At(this.scale.y) * this._height / this._texture.orig.height)
            }
            ,
            e.prototype._onAnchorUpdate = function() {
                this._transformID = -1,
                this._transformTrimmedID = -1
            }
            ,
            e.prototype.calculateVertices = function() {
                var t = this._texture;
                if (this._transformID !== this.transform._worldID || this._textureID !== t._updateID) {
                    this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32),
                    this._transformID = this.transform._worldID,
                    this._textureID = t._updateID;
                    var e = this.transform.worldTransform
                      , r = e.a
                      , i = e.b
                      , n = e.c
                      , o = e.d
                      , s = e.tx
                      , a = e.ty
                      , u = this.vertexData
                      , h = t.trim
                      , l = t.orig
                      , c = this._anchor
                      , d = 0
                      , p = 0
                      , f = 0
                      , _ = 0;
                    if (h ? (d = (p = h.x - c._x * l.width) + h.width,
                    f = (_ = h.y - c._y * l.height) + h.height) : (d = (p = -c._x * l.width) + l.width,
                    f = (_ = -c._y * l.height) + l.height),
                    u[0] = r * p + n * _ + s,
                    u[1] = o * _ + i * p + a,
                    u[2] = r * d + n * _ + s,
                    u[3] = o * _ + i * d + a,
                    u[4] = r * d + n * f + s,
                    u[5] = o * f + i * d + a,
                    u[6] = r * p + n * f + s,
                    u[7] = o * f + i * p + a,
                    this._roundPixels)
                        for (var m = nt.RESOLUTION, v = 0; v < u.length; ++v)
                            u[v] = Math.round((u[v] * m | 0) / m)
                }
            }
            ,
            e.prototype.calculateTrimmedVertices = function() {
                if (this.vertexTrimmedData) {
                    if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID)
                        return
                } else
                    this.vertexTrimmedData = new Float32Array(8);
                this._transformTrimmedID = this.transform._worldID,
                this._textureTrimmedID = this._texture._updateID;
                var t = this._texture
                  , e = this.vertexTrimmedData
                  , r = t.orig
                  , i = this._anchor
                  , n = this.transform.worldTransform
                  , o = n.a
                  , s = n.b
                  , a = n.c
                  , u = n.d
                  , h = n.tx
                  , l = n.ty
                  , c = -i._x * r.width
                  , d = c + r.width
                  , p = -i._y * r.height
                  , f = p + r.height;
                e[0] = o * c + a * p + h,
                e[1] = u * p + s * c + l,
                e[2] = o * d + a * p + h,
                e[3] = u * p + s * d + l,
                e[4] = o * d + a * f + h,
                e[5] = u * f + s * d + l,
                e[6] = o * c + a * f + h,
                e[7] = u * f + s * c + l
            }
            ,
            e.prototype._render = function(t) {
                this.calculateVertices(),
                t.batch.setObjectRenderer(t.plugins[this.pluginName]),
                t.plugins[this.pluginName].render(this)
            }
            ,
            e.prototype._calculateBounds = function() {
                var t = this._texture.trim
                  , e = this._texture.orig;
                !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(),
                this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(),
                this._bounds.addQuad(this.vertexTrimmedData))
            }
            ,
            e.prototype.getLocalBounds = function(e) {
                return 0 === this.children.length ? (this._localBounds || (this._localBounds = new ie),
                this._localBounds.minX = this._texture.orig.width * -this._anchor._x,
                this._localBounds.minY = this._texture.orig.height * -this._anchor._y,
                this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x),
                this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y),
                e || (this._localBoundsRect || (this._localBoundsRect = new Xt),
                e = this._localBoundsRect),
                this._localBounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
            }
            ,
            e.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, bo);
                var e = this._texture.orig.width
                  , r = this._texture.orig.height
                  , i = -e * this.anchor.x
                  , n = 0;
                return bo.x >= i && bo.x < i + e && (n = -r * this.anchor.y,
                bo.y >= n && bo.y < n + r)
            }
            ,
            e.prototype.destroy = function(e) {
                if (t.prototype.destroy.call(this, e),
                this._texture.off("update", this._onTextureUpdate, this),
                this._anchor = null,
                "boolean" == typeof e ? e : e && e.texture) {
                    var r = "boolean" == typeof e ? e : e && e.baseTexture;
                    this._texture.destroy(!!r)
                }
                this._texture = null
            }
            ,
            e.from = function(t, r) {
                return new e(t instanceof Ye ? t : Ye.from(t, r))
            }
            ,
            Object.defineProperty(e.prototype, "roundPixels", {
                get: function() {
                    return this._roundPixels
                },
                set: function(t) {
                    this._roundPixels !== t && (this._transformID = -1),
                    this._roundPixels = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return Math.abs(this.scale.x) * this._texture.orig.width
                },
                set: function(t) {
                    var e = At(this.scale.x) || 1;
                    this.scale.x = e * t / this._texture.orig.width,
                    this._width = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return Math.abs(this.scale.y) * this._texture.orig.height
                },
                set: function(t) {
                    var e = At(this.scale.y) || 1;
                    this.scale.y = e * t / this._texture.orig.height,
                    this._height = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "anchor", {
                get: function() {
                    return this._anchor
                },
                set: function(t) {
                    this._anchor.copyFrom(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "tint", {
                get: function() {
                    return this._tint
                },
                set: function(t) {
                    this._tint = t,
                    this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "texture", {
                get: function() {
                    return this._texture
                },
                set: function(t) {
                    this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this),
                    this._texture = t || Ye.EMPTY,
                    this._cachedTint = 16777215,
                    this._textureID = -1,
                    this._textureTrimmedID = -1,
                    t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        }(he), Eo = function(t, e) {
            return (Eo = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        !function(t) {
            t[t.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL",
            t[t.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL"
        }(io || (io = {}));
        var Ao = {
            align: "left",
            breakWords: !1,
            dropShadow: !1,
            dropShadowAlpha: 1,
            dropShadowAngle: Math.PI / 6,
            dropShadowBlur: 0,
            dropShadowColor: "black",
            dropShadowDistance: 5,
            fill: "black",
            fillGradientType: io.LINEAR_VERTICAL,
            fillGradientStops: [],
            fontFamily: "Arial",
            fontSize: 26,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            letterSpacing: 0,
            lineHeight: 0,
            lineJoin: "miter",
            miterLimit: 10,
            padding: 0,
            stroke: "black",
            strokeThickness: 0,
            textBaseline: "alphabetic",
            trim: !1,
            whiteSpace: "pre",
            wordWrap: !1,
            wordWrapWidth: 100,
            leading: 0
        }
          , So = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"]
          , Ro = function() {
            function t(t) {
                this.styleID = 0,
                this.reset(),
                Io(this, t, t)
            }
            return t.prototype.clone = function() {
                var e = {};
                return Io(e, this, Ao),
                new t(e)
            }
            ,
            t.prototype.reset = function() {
                Io(this, Ao, Ao)
            }
            ,
            Object.defineProperty(t.prototype, "align", {
                get: function() {
                    return this._align
                },
                set: function(t) {
                    this._align !== t && (this._align = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "breakWords", {
                get: function() {
                    return this._breakWords
                },
                set: function(t) {
                    this._breakWords !== t && (this._breakWords = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "dropShadow", {
                get: function() {
                    return this._dropShadow
                },
                set: function(t) {
                    this._dropShadow !== t && (this._dropShadow = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "dropShadowAlpha", {
                get: function() {
                    return this._dropShadowAlpha
                },
                set: function(t) {
                    this._dropShadowAlpha !== t && (this._dropShadowAlpha = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "dropShadowAngle", {
                get: function() {
                    return this._dropShadowAngle
                },
                set: function(t) {
                    this._dropShadowAngle !== t && (this._dropShadowAngle = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "dropShadowBlur", {
                get: function() {
                    return this._dropShadowBlur
                },
                set: function(t) {
                    this._dropShadowBlur !== t && (this._dropShadowBlur = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "dropShadowColor", {
                get: function() {
                    return this._dropShadowColor
                },
                set: function(t) {
                    var e = Oo(t);
                    this._dropShadowColor !== e && (this._dropShadowColor = e,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "dropShadowDistance", {
                get: function() {
                    return this._dropShadowDistance
                },
                set: function(t) {
                    this._dropShadowDistance !== t && (this._dropShadowDistance = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "fill", {
                get: function() {
                    return this._fill
                },
                set: function(t) {
                    var e = Oo(t);
                    this._fill !== e && (this._fill = e,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "fillGradientType", {
                get: function() {
                    return this._fillGradientType
                },
                set: function(t) {
                    this._fillGradientType !== t && (this._fillGradientType = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "fillGradientStops", {
                get: function() {
                    return this._fillGradientStops
                },
                set: function(t) {
                    (function(t, e) {
                        if (!Array.isArray(t) || !Array.isArray(e))
                            return !1;
                        if (t.length !== e.length)
                            return !1;
                        for (var r = 0; r < t.length; ++r)
                            if (t[r] !== e[r])
                                return !1;
                        return !0
                    }
                    )(this._fillGradientStops, t) || (this._fillGradientStops = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "fontFamily", {
                get: function() {
                    return this._fontFamily
                },
                set: function(t) {
                    this.fontFamily !== t && (this._fontFamily = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "fontSize", {
                get: function() {
                    return this._fontSize
                },
                set: function(t) {
                    this._fontSize !== t && (this._fontSize = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "fontStyle", {
                get: function() {
                    return this._fontStyle
                },
                set: function(t) {
                    this._fontStyle !== t && (this._fontStyle = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "fontVariant", {
                get: function() {
                    return this._fontVariant
                },
                set: function(t) {
                    this._fontVariant !== t && (this._fontVariant = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "fontWeight", {
                get: function() {
                    return this._fontWeight
                },
                set: function(t) {
                    this._fontWeight !== t && (this._fontWeight = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "letterSpacing", {
                get: function() {
                    return this._letterSpacing
                },
                set: function(t) {
                    this._letterSpacing !== t && (this._letterSpacing = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "lineHeight", {
                get: function() {
                    return this._lineHeight
                },
                set: function(t) {
                    this._lineHeight !== t && (this._lineHeight = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "leading", {
                get: function() {
                    return this._leading
                },
                set: function(t) {
                    this._leading !== t && (this._leading = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "lineJoin", {
                get: function() {
                    return this._lineJoin
                },
                set: function(t) {
                    this._lineJoin !== t && (this._lineJoin = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "miterLimit", {
                get: function() {
                    return this._miterLimit
                },
                set: function(t) {
                    this._miterLimit !== t && (this._miterLimit = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "padding", {
                get: function() {
                    return this._padding
                },
                set: function(t) {
                    this._padding !== t && (this._padding = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "stroke", {
                get: function() {
                    return this._stroke
                },
                set: function(t) {
                    var e = Oo(t);
                    this._stroke !== e && (this._stroke = e,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "strokeThickness", {
                get: function() {
                    return this._strokeThickness
                },
                set: function(t) {
                    this._strokeThickness !== t && (this._strokeThickness = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "textBaseline", {
                get: function() {
                    return this._textBaseline
                },
                set: function(t) {
                    this._textBaseline !== t && (this._textBaseline = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "trim", {
                get: function() {
                    return this._trim
                },
                set: function(t) {
                    this._trim !== t && (this._trim = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "whiteSpace", {
                get: function() {
                    return this._whiteSpace
                },
                set: function(t) {
                    this._whiteSpace !== t && (this._whiteSpace = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "wordWrap", {
                get: function() {
                    return this._wordWrap
                },
                set: function(t) {
                    this._wordWrap !== t && (this._wordWrap = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "wordWrapWidth", {
                get: function() {
                    return this._wordWrapWidth
                },
                set: function(t) {
                    this._wordWrapWidth !== t && (this._wordWrapWidth = t,
                    this.styleID++)
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.toFontString = function() {
                var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize
                  , e = this.fontFamily;
                Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
                for (var r = e.length - 1; r >= 0; r--) {
                    var i = e[r].trim();
                    !/([\"\'])[^\'\"]+\1/.test(i) && So.indexOf(i) < 0 && (i = '"' + i + '"'),
                    e[r] = i
                }
                return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",")
            }
            ,
            t
        }();
        function wo(t) {
            return "number" == typeof t ? pt(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")),
            t)
        }
        function Oo(t) {
            if (Array.isArray(t)) {
                for (var e = 0; e < t.length; ++e)
                    t[e] = wo(t[e]);
                return t
            }
            return wo(t)
        }
        function Io(t, e, r) {
            for (var i in r)
                Array.isArray(e[i]) ? t[i] = e[i].slice() : t[i] = e[i]
        }
        var Po = {
            willReadFrequently: !0
        }
          , Mo = function() {
            function t(t, e, r, i, n, o, s, a, u) {
                this.text = t,
                this.style = e,
                this.width = r,
                this.height = i,
                this.lines = n,
                this.lineWidths = o,
                this.lineHeight = s,
                this.maxLineWidth = a,
                this.fontProperties = u
            }
            return t.measureText = function(e, r, i, n) {
                void 0 === n && (n = t._canvas),
                i = null == i ? r.wordWrap : i;
                var o = r.toFontString()
                  , s = t.measureFont(o);
                0 === s.fontSize && (s.fontSize = r.fontSize,
                s.ascent = r.fontSize);
                var a = n.getContext("2d", Po);
                a.font = o;
                for (var u = (i ? t.wordWrap(e, r, n) : e).split(/(?:\r\n|\r|\n)/), h = new Array(u.length), l = 0, c = 0; c < u.length; c++) {
                    var d = a.measureText(u[c]).width + (u[c].length - 1) * r.letterSpacing;
                    h[c] = d,
                    l = Math.max(l, d)
                }
                var p = l + r.strokeThickness;
                r.dropShadow && (p += r.dropShadowDistance);
                var f = r.lineHeight || s.fontSize + r.strokeThickness
                  , _ = Math.max(f, s.fontSize + r.strokeThickness) + (u.length - 1) * (f + r.leading);
                return r.dropShadow && (_ += r.dropShadowDistance),
                new t(e,r,p,_,u,h,f + r.leading,l,s)
            }
            ,
            t.wordWrap = function(e, r, i) {
                void 0 === i && (i = t._canvas);
                for (var n = i.getContext("2d", Po), o = 0, s = "", a = "", u = Object.create(null), h = r.letterSpacing, l = r.whiteSpace, c = t.collapseSpaces(l), d = t.collapseNewlines(l), p = !c, f = r.wordWrapWidth + h, _ = t.tokenize(e), m = 0; m < _.length; m++) {
                    var v = _[m];
                    if (t.isNewline(v)) {
                        if (!d) {
                            a += t.addLine(s),
                            p = !c,
                            s = "",
                            o = 0;
                            continue
                        }
                        v = " "
                    }
                    if (c) {
                        var g = t.isBreakingSpace(v)
                          , y = t.isBreakingSpace(s[s.length - 1]);
                        if (g && y)
                            continue
                    }
                    var b = t.getFromCache(v, h, u, n);
                    if (b > f)
                        if ("" !== s && (a += t.addLine(s),
                        s = "",
                        o = 0),
                        t.canBreakWords(v, r.breakWords))
                            for (var x = t.wordWrapSplit(v), T = 0; T < x.length; T++) {
                                for (var E = x[T], A = 1; x[T + A]; ) {
                                    var S = x[T + A]
                                      , R = E[E.length - 1];
                                    if (t.canBreakChars(R, S, v, T, r.breakWords))
                                        break;
                                    E += S,
                                    A++
                                }
                                T += E.length - 1;
                                var w = t.getFromCache(E, h, u, n);
                                w + o > f && (a += t.addLine(s),
                                p = !1,
                                s = "",
                                o = 0),
                                s += E,
                                o += w
                            }
                        else {
                            s.length > 0 && (a += t.addLine(s),
                            s = "",
                            o = 0);
                            var O = m === _.length - 1;
                            a += t.addLine(v, !O),
                            p = !1,
                            s = "",
                            o = 0
                        }
                    else
                        b + o > f && (p = !1,
                        a += t.addLine(s),
                        s = "",
                        o = 0),
                        (s.length > 0 || !t.isBreakingSpace(v) || p) && (s += v,
                        o += b)
                }
                return a + t.addLine(s, !1)
            }
            ,
            t.addLine = function(e, r) {
                return void 0 === r && (r = !0),
                e = t.trimRight(e),
                r ? e + "\n" : e
            }
            ,
            t.getFromCache = function(t, e, r, i) {
                var n = r[t];
                if ("number" != typeof n) {
                    var o = t.length * e;
                    n = i.measureText(t).width + o,
                    r[t] = n
                }
                return n
            }
            ,
            t.collapseSpaces = function(t) {
                return "normal" === t || "pre-line" === t
            }
            ,
            t.collapseNewlines = function(t) {
                return "normal" === t
            }
            ,
            t.trimRight = function(e) {
                if ("string" != typeof e)
                    return "";
                for (var r = e.length - 1; r >= 0; r--) {
                    var i = e[r];
                    if (!t.isBreakingSpace(i))
                        break;
                    e = e.slice(0, -1)
                }
                return e
            }
            ,
            t.isNewline = function(e) {
                return "string" == typeof e && t._newlines.indexOf(e.charCodeAt(0)) >= 0
            }
            ,
            t.isBreakingSpace = function(e, r) {
                return "string" == typeof e && t._breakingSpaces.indexOf(e.charCodeAt(0)) >= 0
            }
            ,
            t.tokenize = function(e) {
                var r = []
                  , i = "";
                if ("string" != typeof e)
                    return r;
                for (var n = 0; n < e.length; n++) {
                    var o = e[n]
                      , s = e[n + 1];
                    t.isBreakingSpace(o, s) || t.isNewline(o) ? ("" !== i && (r.push(i),
                    i = ""),
                    r.push(o)) : i += o
                }
                return "" !== i && r.push(i),
                r
            }
            ,
            t.canBreakWords = function(t, e) {
                return e
            }
            ,
            t.canBreakChars = function(t, e, r, i, n) {
                return !0
            }
            ,
            t.wordWrapSplit = function(t) {
                return t.split("")
            }
            ,
            t.measureFont = function(e) {
                if (t._fonts[e])
                    return t._fonts[e];
                var r = {
                    ascent: 0,
                    descent: 0,
                    fontSize: 0
                }
                  , i = t._canvas
                  , n = t._context;
                n.font = e;
                var o = t.METRICS_STRING + t.BASELINE_SYMBOL
                  , s = Math.ceil(n.measureText(o).width)
                  , a = Math.ceil(n.measureText(t.BASELINE_SYMBOL).width)
                  , u = Math.ceil(t.HEIGHT_MULTIPLIER * a);
                a = a * t.BASELINE_MULTIPLIER | 0,
                i.width = s,
                i.height = u,
                n.fillStyle = "#f00",
                n.fillRect(0, 0, s, u),
                n.font = e,
                n.textBaseline = "alphabetic",
                n.fillStyle = "#000",
                n.fillText(o, 0, a);
                var h = n.getImageData(0, 0, s, u).data
                  , l = h.length
                  , c = 4 * s
                  , d = 0
                  , p = 0
                  , f = !1;
                for (d = 0; d < a; ++d) {
                    for (var _ = 0; _ < c; _ += 4)
                        if (255 !== h[p + _]) {
                            f = !0;
                            break
                        }
                    if (f)
                        break;
                    p += c
                }
                for (r.ascent = a - d,
                p = l - c,
                f = !1,
                d = u; d > a; --d) {
                    for (_ = 0; _ < c; _ += 4)
                        if (255 !== h[p + _]) {
                            f = !0;
                            break
                        }
                    if (f)
                        break;
                    p -= c
                }
                return r.descent = d - a,
                r.fontSize = r.ascent + r.descent,
                t._fonts[e] = r,
                r
            }
            ,
            t.clearMetrics = function(e) {
                void 0 === e && (e = ""),
                e ? delete t._fonts[e] : t._fonts = {}
            }
            ,
            Object.defineProperty(t, "_canvas", {
                get: function() {
                    if (!t.__canvas) {
                        var e = void 0;
                        try {
                            var r = new OffscreenCanvas(0,0)
                              , i = r.getContext("2d", Po);
                            if (i && i.measureText)
                                return t.__canvas = r,
                                r;
                            e = nt.ADAPTER.createCanvas()
                        } catch (t) {
                            e = nt.ADAPTER.createCanvas()
                        }
                        e.width = e.height = 10,
                        t.__canvas = e
                    }
                    return t.__canvas
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "_context", {
                get: function() {
                    return t.__context || (t.__context = t._canvas.getContext("2d", Po)),
                    t.__context
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        }();
        Mo._fonts = {},
        Mo.METRICS_STRING = "|ÉqÅ",
        Mo.BASELINE_SYMBOL = "M",
        Mo.BASELINE_MULTIPLIER = 1.4,
        Mo.HEIGHT_MULTIPLIER = 2,
        Mo._newlines = [10, 13],
        Mo._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
        var Do = {
            texture: !0,
            children: !1,
            baseTexture: !0
        }
          , Co = function(t) {
            function e(e, r, i) {
                var n = this
                  , o = !1;
                i || (i = nt.ADAPTER.createCanvas(),
                o = !0),
                i.width = 3,
                i.height = 3;
                var s = Ye.from(i);
                return s.orig = new Xt,
                s.trim = new Xt,
                (n = t.call(this, s) || this)._ownCanvas = o,
                n.canvas = i,
                n.context = i.getContext("2d", {
                    willReadFrequently: !0
                }),
                n._resolution = nt.RESOLUTION,
                n._autoResolution = !0,
                n._text = null,
                n._style = null,
                n._styleListener = null,
                n._font = "",
                n.text = e,
                n.style = r,
                n.localStyleID = -1,
                n
            }
            return function(t, e) {
                function r() {
                    this.constructor = t
                }
                Eo(t, e),
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }(e, t),
            e.prototype.updateText = function(t) {
                var r = this._style;
                if (this.localStyleID !== r.styleID && (this.dirty = !0,
                this.localStyleID = r.styleID),
                this.dirty || !t) {
                    this._font = this._style.toFontString();
                    var i, n, o = this.context, s = Mo.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas), a = s.width, u = s.height, h = s.lines, l = s.lineHeight, c = s.lineWidths, d = s.maxLineWidth, p = s.fontProperties;
                    this.canvas.width = Math.ceil(Math.ceil(Math.max(1, a) + 2 * r.padding) * this._resolution),
                    this.canvas.height = Math.ceil(Math.ceil(Math.max(1, u) + 2 * r.padding) * this._resolution),
                    o.scale(this._resolution, this._resolution),
                    o.clearRect(0, 0, this.canvas.width, this.canvas.height),
                    o.font = this._font,
                    o.lineWidth = r.strokeThickness,
                    o.textBaseline = r.textBaseline,
                    o.lineJoin = r.lineJoin,
                    o.miterLimit = r.miterLimit;
                    for (var f = r.dropShadow ? 2 : 1, _ = 0; _ < f; ++_) {
                        var m = r.dropShadow && 0 === _
                          , v = m ? Math.ceil(Math.max(1, u) + 2 * r.padding) : 0
                          , g = v * this._resolution;
                        if (m) {
                            o.fillStyle = "black",
                            o.strokeStyle = "black";
                            var y = r.dropShadowColor
                              , b = dt("number" == typeof y ? y : ft(y))
                              , x = r.dropShadowBlur * this._resolution
                              , T = r.dropShadowDistance * this._resolution;
                            o.shadowColor = "rgba(" + 255 * b[0] + "," + 255 * b[1] + "," + 255 * b[2] + "," + r.dropShadowAlpha + ")",
                            o.shadowBlur = x,
                            o.shadowOffsetX = Math.cos(r.dropShadowAngle) * T,
                            o.shadowOffsetY = Math.sin(r.dropShadowAngle) * T + g
                        } else
                            o.fillStyle = this._generateFillStyle(r, h, s),
                            o.strokeStyle = r.stroke,
                            o.shadowColor = "black",
                            o.shadowBlur = 0,
                            o.shadowOffsetX = 0,
                            o.shadowOffsetY = 0;
                        var E = (l - p.fontSize) / 2;
                        (!e.nextLineHeightBehavior || l - p.fontSize < 0) && (E = 0);
                        for (var A = 0; A < h.length; A++)
                            i = r.strokeThickness / 2,
                            n = r.strokeThickness / 2 + A * l + p.ascent + E,
                            "right" === r.align ? i += d - c[A] : "center" === r.align && (i += (d - c[A]) / 2),
                            r.stroke && r.strokeThickness && this.drawLetterSpacing(h[A], i + r.padding, n + r.padding - v, !0),
                            r.fill && this.drawLetterSpacing(h[A], i + r.padding, n + r.padding - v)
                    }
                    this.updateTexture()
                }
            }
            ,
            e.prototype.drawLetterSpacing = function(t, r, i, n) {
                void 0 === n && (n = !1);
                var o = this._style.letterSpacing
                  , s = e.experimentalLetterSpacing && ("letterSpacing"in CanvasRenderingContext2D.prototype || "textLetterSpacing"in CanvasRenderingContext2D.prototype);
                if (0 === o || s)
                    return s && (this.context.letterSpacing = o,
                    this.context.textLetterSpacing = o),
                    void (n ? this.context.strokeText(t, r, i) : this.context.fillText(t, r, i));
                for (var a = r, u = Array.from ? Array.from(t) : t.split(""), h = this.context.measureText(t).width, l = 0, c = 0; c < u.length; ++c) {
                    var d = u[c];
                    n ? this.context.strokeText(d, a, i) : this.context.fillText(d, a, i);
                    for (var p = "", f = c + 1; f < u.length; ++f)
                        p += u[f];
                    a += h - (l = this.context.measureText(p).width) + o,
                    h = l
                }
            }
            ,
            e.prototype.updateTexture = function() {
                var t = this.canvas;
                if (this._style.trim) {
                    var e = function(t) {
                        var e, r, i, n = t.width, o = t.height, s = t.getContext("2d", {
                            willReadFrequently: !0
                        }), a = s.getImageData(0, 0, n, o).data, u = a.length, h = {
                            top: null,
                            left: null,
                            right: null,
                            bottom: null
                        }, l = null;
                        for (e = 0; e < u; e += 4)
                            0 !== a[e + 3] && (r = e / 4 % n,
                            i = ~~(e / 4 / n),
                            null === h.top && (h.top = i),
                            (null === h.left || r < h.left) && (h.left = r),
                            (null === h.right || h.right < r) && (h.right = r + 1),
                            (null === h.bottom || h.bottom < i) && (h.bottom = i));
                        return null !== h.top && (n = h.right - h.left,
                        o = h.bottom - h.top + 1,
                        l = s.getImageData(h.left, h.top, n, o)),
                        {
                            height: o,
                            width: n,
                            data: l
                        }
                    }(t);
                    e.data && (t.width = e.width,
                    t.height = e.height,
                    this.context.putImageData(e.data, 0, 0))
                }
                var r = this._texture
                  , i = this._style
                  , n = i.trim ? 0 : i.padding
                  , o = r.baseTexture;
                r.trim.width = r._frame.width = t.width / this._resolution,
                r.trim.height = r._frame.height = t.height / this._resolution,
                r.trim.x = -n,
                r.trim.y = -n,
                r.orig.width = r._frame.width - 2 * n,
                r.orig.height = r._frame.height - 2 * n,
                this._onTextureUpdate(),
                o.setRealSize(t.width, t.height, this._resolution),
                r.updateUvs(),
                this.dirty = !1
            }
            ,
            e.prototype._render = function(e) {
                this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution,
                this.dirty = !0),
                this.updateText(!0),
                t.prototype._render.call(this, e)
            }
            ,
            e.prototype.updateTransform = function() {
                this.updateText(!0),
                t.prototype.updateTransform.call(this)
            }
            ,
            e.prototype.getBounds = function(e, r) {
                return this.updateText(!0),
                -1 === this._textureID && (e = !1),
                t.prototype.getBounds.call(this, e, r)
            }
            ,
            e.prototype.getLocalBounds = function(e) {
                return this.updateText(!0),
                t.prototype.getLocalBounds.call(this, e)
            }
            ,
            e.prototype._calculateBounds = function() {
                this.calculateVertices(),
                this._bounds.addQuad(this.vertexData)
            }
            ,
            e.prototype._generateFillStyle = function(t, e, r) {
                var i, n = t.fill;
                if (!Array.isArray(n))
                    return n;
                if (1 === n.length)
                    return n[0];
                var o = t.dropShadow ? t.dropShadowDistance : 0
                  , s = t.padding || 0
                  , a = this.canvas.width / this._resolution - o - 2 * s
                  , u = this.canvas.height / this._resolution - o - 2 * s
                  , h = n.slice()
                  , l = t.fillGradientStops.slice();
                if (!l.length)
                    for (var c = h.length + 1, d = 1; d < c; ++d)
                        l.push(d / c);
                if (h.unshift(n[0]),
                l.unshift(0),
                h.push(n[n.length - 1]),
                l.push(1),
                t.fillGradientType === io.LINEAR_VERTICAL) {
                    i = this.context.createLinearGradient(a / 2, s, a / 2, u + s);
                    var p = r.fontProperties.fontSize + t.strokeThickness;
                    for (d = 0; d < e.length; d++) {
                        var f = r.lineHeight * (d - 1) + p
                          , _ = r.lineHeight * d
                          , m = _;
                        d > 0 && f > _ && (m = (_ + f) / 2);
                        var v = _ + p
                          , g = r.lineHeight * (d + 1)
                          , y = v;
                        d + 1 < e.length && g < v && (y = (v + g) / 2);
                        for (var b = (y - m) / u, x = 0; x < h.length; x++) {
                            var T;
                            T = "number" == typeof l[x] ? l[x] : x / h.length;
                            var E = Math.min(1, Math.max(0, m / u + T * b));
                            E = Number(E.toFixed(5)),
                            i.addColorStop(E, h[x])
                        }
                    }
                } else {
                    i = this.context.createLinearGradient(s, u / 2, a + s, u / 2);
                    var A = h.length + 1
                      , S = 1;
                    for (d = 0; d < h.length; d++) {
                        var R;
                        R = "number" == typeof l[d] ? l[d] : S / A,
                        i.addColorStop(R, h[d]),
                        S++
                    }
                }
                return i
            }
            ,
            e.prototype.destroy = function(e) {
                "boolean" == typeof e && (e = {
                    children: e
                }),
                e = Object.assign({}, Do, e),
                t.prototype.destroy.call(this, e),
                this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
                this.context = null,
                this.canvas = null,
                this._style = null
            }
            ,
            Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this.updateText(!0),
                    Math.abs(this.scale.x) * this._texture.orig.width
                },
                set: function(t) {
                    this.updateText(!0);
                    var e = At(this.scale.x) || 1;
                    this.scale.x = e * t / this._texture.orig.width,
                    this._width = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return this.updateText(!0),
                    Math.abs(this.scale.y) * this._texture.orig.height
                },
                set: function(t) {
                    this.updateText(!0);
                    var e = At(this.scale.y) || 1;
                    this.scale.y = e * t / this._texture.orig.height,
                    this._height = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "style", {
                get: function() {
                    return this._style
                },
                set: function(t) {
                    t = t || {},
                    this._style = t instanceof Ro ? t : new Ro(t),
                    this.localStyleID = -1,
                    this.dirty = !0
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "text", {
                get: function() {
                    return this._text
                },
                set: function(t) {
                    t = String(null == t ? "" : t),
                    this._text !== t && (this._text = t,
                    this.dirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "resolution", {
                get: function() {
                    return this._resolution
                },
                set: function(t) {
                    this._autoResolution = !1,
                    this._resolution !== t && (this._resolution = t,
                    this.dirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.nextLineHeightBehavior = !1,
            e.experimentalLetterSpacing = !1,
            e
        }(To);
        nt.UPLOADS_PER_FRAME = 4;
        var Fo = function(t, e) {
            return (Fo = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        }
          , No = function() {
            function t(t) {
                this.maxItemsPerFrame = t,
                this.itemsLeft = 0
            }
            return t.prototype.beginFrame = function() {
                this.itemsLeft = this.maxItemsPerFrame
            }
            ,
            t.prototype.allowedToUpload = function() {
                return this.itemsLeft-- > 0
            }
            ,
            t
        }();
        function Bo(t, e) {
            var r = !1;
            if (t && t._textures && t._textures.length)
                for (var i = 0; i < t._textures.length; i++)
                    if (t._textures[i]instanceof Ye) {
                        var n = t._textures[i].baseTexture;
                        -1 === e.indexOf(n) && (e.push(n),
                        r = !0)
                    }
            return r
        }
        function Lo(t, e) {
            if (t.baseTexture instanceof we) {
                var r = t.baseTexture;
                return -1 === e.indexOf(r) && e.push(r),
                !0
            }
            return !1
        }
        function Go(t, e) {
            if (t._texture && t._texture instanceof Ye) {
                var r = t._texture.baseTexture;
                return -1 === e.indexOf(r) && e.push(r),
                !0
            }
            return !1
        }
        function Uo(t, e) {
            return e instanceof Co && (e.updateText(!0),
            !0)
        }
        function ko(t, e) {
            if (e instanceof Ro) {
                var r = e.toFontString();
                return Mo.measureFont(r),
                !0
            }
            return !1
        }
        function Xo(t, e) {
            if (t instanceof Co) {
                -1 === e.indexOf(t.style) && e.push(t.style),
                -1 === e.indexOf(t) && e.push(t);
                var r = t._texture.baseTexture;
                return -1 === e.indexOf(r) && e.push(r),
                !0
            }
            return !1
        }
        function Ho(t, e) {
            return t instanceof Ro && (-1 === e.indexOf(t) && e.push(t),
            !0)
        }
        function jo(t, e) {
            return e instanceof we && (e._glTextures[t.CONTEXT_UID] || t.texture.bind(e),
            !0)
        }
        function Yo(t, e) {
            if (!(e instanceof go))
                return !1;
            var r = e.geometry;
            e.finishPoly(),
            r.updateBatches();
            for (var i = r.batches, n = 0; n < i.length; n++) {
                var o = i[n].style.texture;
                o && jo(t, o.baseTexture)
            }
            return r.batchable || t.geometry.bind(r, e._resolveDirectShader(t)),
            !0
        }
        function Vo(t, e) {
            return t instanceof go && (e.push(t),
            !0)
        }
        var Wo = function(t) {
            function e(e) {
                var r = t.call(this, e) || this;
                return r.uploadHookHelper = r.renderer,
                r.registerFindHook(Vo),
                r.registerUploadHook(jo),
                r.registerUploadHook(Yo),
                r
            }
            return function(t, e) {
                function r() {
                    this.constructor = t
                }
                Fo(t, e),
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }(e, t),
            e.extension = {
                name: "prepare",
                type: le.RendererPlugin
            },
            e
        }(function() {
            function t(t) {
                var e = this;
                this.limiter = new No(nt.UPLOADS_PER_FRAME),
                this.renderer = t,
                this.uploadHookHelper = null,
                this.queue = [],
                this.addHooks = [],
                this.uploadHooks = [],
                this.completes = [],
                this.ticking = !1,
                this.delayedTick = function() {
                    e.queue && e.prepareItems()
                }
                ,
                this.registerFindHook(Xo),
                this.registerFindHook(Ho),
                this.registerFindHook(Bo),
                this.registerFindHook(Lo),
                this.registerFindHook(Go),
                this.registerUploadHook(Uo),
                this.registerUploadHook(ko)
            }
            return t.prototype.upload = function(t, e) {
                var r = this;
                return "function" == typeof t && (e = t,
                t = null),
                e && Ot("6.5.0", "BasePrepare.upload callback is deprecated, use the return Promise instead."),
                new Promise((function(i) {
                    t && r.add(t);
                    var n = function() {
                        null == e || e(),
                        i()
                    };
                    r.queue.length ? (r.completes.push(n),
                    r.ticking || (r.ticking = !0,
                    ve.system.addOnce(r.tick, r, de.UTILITY))) : n()
                }
                ))
            }
            ,
            t.prototype.tick = function() {
                setTimeout(this.delayedTick, 0)
            }
            ,
            t.prototype.prepareItems = function() {
                for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
                    var t = this.queue[0]
                      , e = !1;
                    if (t && !t._destroyed)
                        for (var r = 0, i = this.uploadHooks.length; r < i; r++)
                            if (this.uploadHooks[r](this.uploadHookHelper, t)) {
                                this.queue.shift(),
                                e = !0;
                                break
                            }
                    e || this.queue.shift()
                }
                if (this.queue.length)
                    ve.system.addOnce(this.tick, this, de.UTILITY);
                else {
                    this.ticking = !1;
                    var n = this.completes.slice(0);
                    for (this.completes.length = 0,
                    r = 0,
                    i = n.length; r < i; r++)
                        n[r]()
                }
            }
            ,
            t.prototype.registerFindHook = function(t) {
                return t && this.addHooks.push(t),
                this
            }
            ,
            t.prototype.registerUploadHook = function(t) {
                return t && this.uploadHooks.push(t),
                this
            }
            ,
            t.prototype.add = function(t) {
                for (var e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t, this.queue); e++)
                    ;
                if (t instanceof he)
                    for (e = t.children.length - 1; e >= 0; e--)
                        this.add(t.children[e]);
                return this
            }
            ,
            t.prototype.destroy = function() {
                this.ticking && ve.system.remove(this.tick, this),
                this.ticking = !1,
                this.addHooks = null,
                this.uploadHooks = null,
                this.renderer = null,
                this.completes = null,
                this.queue = null,
                this.limiter = null,
                this.uploadHookHelper = null
            }
            ,
            t
        }())
          , zo = (function() {
            function t(t) {
                this.maxMilliseconds = t,
                this.frameStart = 0
            }
            t.prototype.beginFrame = function() {
                this.frameStart = Date.now()
            }
            ,
            t.prototype.allowedToUpload = function() {
                return Date.now() - this.frameStart < this.maxMilliseconds
            }
        }(),
        function() {
            function t(t, e, r) {
                void 0 === r && (r = null),
                this.linkedSheets = [],
                this._texture = t instanceof Ye ? t : null,
                this.baseTexture = t instanceof we ? t : this._texture.baseTexture,
                this.textures = {},
                this.animations = {},
                this.data = e;
                var i = this.baseTexture.resource;
                this.resolution = this._updateResolution(r || (i ? i.url : null)),
                this._frames = this.data.frames,
                this._frameKeys = Object.keys(this._frames),
                this._batchIndex = 0,
                this._callback = null
            }
            return t.prototype._updateResolution = function(t) {
                void 0 === t && (t = null);
                var e = this.data.meta.scale
                  , r = Ft(t, null);
                return null === r && (r = void 0 !== e ? parseFloat(e) : 1),
                1 !== r && this.baseTexture.setResolution(r),
                r
            }
            ,
            t.prototype.parse = function(e) {
                var r = this;
                return e && Ot("6.5.0", "Spritesheet.parse callback is deprecated, use the return Promise instead."),
                new Promise((function(i) {
                    r._callback = function(t) {
                        null == e || e(t),
                        i(t)
                    }
                    ,
                    r._batchIndex = 0,
                    r._frameKeys.length <= t.BATCH_SIZE ? (r._processFrames(0),
                    r._processAnimations(),
                    r._parseComplete()) : r._nextBatch()
                }
                ))
            }
            ,
            t.prototype._processFrames = function(e) {
                for (var r = e, i = t.BATCH_SIZE; r - e < i && r < this._frameKeys.length; ) {
                    var n = this._frameKeys[r]
                      , o = this._frames[n]
                      , s = o.frame;
                    if (s) {
                        var a, u = null, h = !1 !== o.trimmed && o.sourceSize ? o.sourceSize : o.frame, l = new Xt(0,0,Math.floor(h.w) / this.resolution,Math.floor(h.h) / this.resolution);
                        a = o.rotated ? new Xt(Math.floor(s.x) / this.resolution,Math.floor(s.y) / this.resolution,Math.floor(s.h) / this.resolution,Math.floor(s.w) / this.resolution) : new Xt(Math.floor(s.x) / this.resolution,Math.floor(s.y) / this.resolution,Math.floor(s.w) / this.resolution,Math.floor(s.h) / this.resolution),
                        !1 !== o.trimmed && o.spriteSourceSize && (u = new Xt(Math.floor(o.spriteSourceSize.x) / this.resolution,Math.floor(o.spriteSourceSize.y) / this.resolution,Math.floor(s.w) / this.resolution,Math.floor(s.h) / this.resolution)),
                        this.textures[n] = new Ye(this.baseTexture,a,l,u,o.rotated ? 2 : 0,o.anchor),
                        Ye.addToCache(this.textures[n], n)
                    }
                    r++
                }
            }
            ,
            t.prototype._processAnimations = function() {
                var t = this.data.animations || {};
                for (var e in t) {
                    this.animations[e] = [];
                    for (var r = 0; r < t[e].length; r++) {
                        var i = t[e][r];
                        this.animations[e].push(this.textures[i])
                    }
                }
            }
            ,
            t.prototype._parseComplete = function() {
                var t = this._callback;
                this._callback = null,
                this._batchIndex = 0,
                t.call(this, this.textures)
            }
            ,
            t.prototype._nextBatch = function() {
                var e = this;
                this._processFrames(this._batchIndex * t.BATCH_SIZE),
                this._batchIndex++,
                setTimeout((function() {
                    e._batchIndex * t.BATCH_SIZE < e._frameKeys.length ? e._nextBatch() : (e._processAnimations(),
                    e._parseComplete())
                }
                ), 0)
            }
            ,
            t.prototype.destroy = function(t) {
                var e;
                for (var r in void 0 === t && (t = !1),
                this.textures)
                    this.textures[r].destroy();
                this._frames = null,
                this._frameKeys = null,
                this.data = null,
                this.textures = null,
                t && (null === (e = this._texture) || void 0 === e || e.destroy(),
                this.baseTexture.destroy()),
                this._texture = null,
                this.baseTexture = null,
                this.linkedSheets = []
            }
            ,
            t.BATCH_SIZE = 1e3,
            t
        }())
          , $o = function() {
            function t() {}
            return t.use = function(e, r) {
                var i, n, o = this, s = e.name + "_image";
                if (e.data && e.type === en.TYPE.JSON && e.data.frames && !o.resources[s]) {
                    var a = null === (n = null === (i = e.data) || void 0 === i ? void 0 : i.meta) || void 0 === n ? void 0 : n.related_multi_packs;
                    if (Array.isArray(a))
                        for (var u = function(t) {
                            if ("string" != typeof t)
                                return "continue";
                            var r = t.replace(".json", "")
                              , i = ut.resolve(e.url.replace(o.baseUrl, ""), t);
                            if (o.resources[r] || Object.values(o.resources).some((function(t) {
                                return ut.format(ut.parse(t.url)) === i
                            }
                            )))
                                return "continue";
                            var n = {
                                crossOrigin: e.crossOrigin,
                                loadType: en.LOAD_TYPE.XHR,
                                xhrType: en.XHR_RESPONSE_TYPE.JSON,
                                parentResource: e,
                                metadata: e.metadata
                            };
                            o.add(r, i, n)
                        }, h = 0, l = a; h < l.length; h++)
                            u(l[h]);
                    var c = {
                        crossOrigin: e.crossOrigin,
                        metadata: e.metadata.imageMetadata,
                        parentResource: e
                    }
                      , d = t.getResourcePath(e, o.baseUrl);
                    o.add(s, d, c, (function(t) {
                        if (t.error)
                            r(t.error);
                        else {
                            var i = new zo(t.texture,e.data,e.url);
                            i.parse().then((function() {
                                e.spritesheet = i,
                                e.textures = i.textures,
                                r()
                            }
                            ))
                        }
                    }
                    ))
                } else
                    r()
            }
            ,
            t.getResourcePath = function(t, e) {
                return t.isDataUrl ? t.data.meta.image : ut.resolve(t.url.replace(e, ""), t.data.meta.image)
            }
            ,
            t.extension = le.Loader,
            t
        }()
          , qo = function(t, e) {
            return (qo = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        function Ko(t, e) {
            function r() {
                this.constructor = t
            }
            qo(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        var Zo = new Ut
          , Jo = (function(t) {
            function e(e, r, i) {
                void 0 === r && (r = 100),
                void 0 === i && (i = 100);
                var n = t.call(this, e) || this;
                return n.tileTransform = new re,
                n._width = r,
                n._height = i,
                n.uvMatrix = n.texture.uvMatrix || new Vr(e),
                n.pluginName = "tilingSprite",
                n.uvRespectAnchor = !1,
                n
            }
            Ko(e, t),
            Object.defineProperty(e.prototype, "clampMargin", {
                get: function() {
                    return this.uvMatrix.clampMargin
                },
                set: function(t) {
                    this.uvMatrix.clampMargin = t,
                    this.uvMatrix.update(!0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "tileScale", {
                get: function() {
                    return this.tileTransform.scale
                },
                set: function(t) {
                    this.tileTransform.scale.copyFrom(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "tilePosition", {
                get: function() {
                    return this.tileTransform.position
                },
                set: function(t) {
                    this.tileTransform.position.copyFrom(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype._onTextureUpdate = function() {
                this.uvMatrix && (this.uvMatrix.texture = this._texture),
                this._cachedTint = 16777215
            }
            ,
            e.prototype._render = function(t) {
                var e = this._texture;
                e && e.valid && (this.tileTransform.updateLocalTransform(),
                this.uvMatrix.update(),
                t.batch.setObjectRenderer(t.plugins[this.pluginName]),
                t.plugins[this.pluginName].render(this))
            }
            ,
            e.prototype._calculateBounds = function() {
                var t = this._width * -this._anchor._x
                  , e = this._height * -this._anchor._y
                  , r = this._width * (1 - this._anchor._x)
                  , i = this._height * (1 - this._anchor._y);
                this._bounds.addFrame(this.transform, t, e, r, i)
            }
            ,
            e.prototype.getLocalBounds = function(e) {
                return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x,
                this._bounds.minY = this._height * -this._anchor._y,
                this._bounds.maxX = this._width * (1 - this._anchor._x),
                this._bounds.maxY = this._height * (1 - this._anchor._y),
                e || (this._localBoundsRect || (this._localBoundsRect = new Xt),
                e = this._localBoundsRect),
                this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
            }
            ,
            e.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, Zo);
                var e = this._width
                  , r = this._height
                  , i = -e * this.anchor._x;
                if (Zo.x >= i && Zo.x < i + e) {
                    var n = -r * this.anchor._y;
                    if (Zo.y >= n && Zo.y < n + r)
                        return !0
                }
                return !1
            }
            ,
            e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e),
                this.tileTransform = null,
                this.uvMatrix = null
            }
            ,
            e.from = function(t, r) {
                return new e(t instanceof Ye ? t : Ye.from(t, r),r.width,r.height)
            }
            ,
            Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this._width
                },
                set: function(t) {
                    this._width = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return this._height
                },
                set: function(t) {
                    this._height = t
                },
                enumerable: !1,
                configurable: !0
            })
        }(To),
        "#version 100\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n")
          , Qo = new zt
          , ts = function(t) {
            function e(e) {
                var r = t.call(this, e) || this;
                return e.runners.contextChange.add(r),
                r.quad = new rr,
                r.state = Hr.for2d(),
                r
            }
            return Ko(e, t),
            e.prototype.contextChange = function() {
                var t = this.renderer
                  , e = {
                    globals: t.globalUniforms
                };
                this.simpleShader = Xr.from(Jo, "#version 100\n#define SHADER_NAME Tiling-Sprite-Simple-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 texSample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = texSample * uColor;\n}\n", e),
                this.shader = t.context.webGLVersion > 1 ? Xr.from("#version 300 es\n#define SHADER_NAME Tiling-Sprite-300\n\nprecision lowp float;\n\nin vec2 aVertexPosition;\nin vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nout vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "#version 300 es\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nin vec2 vTextureCoord;\n\nout vec4 fragmentColor;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0\n\n    fragmentColor = texSample * uColor;\n}\n", e) : Xr.from(Jo, "#version 100\n#ifdef GL_EXT_shader_texture_lod\n    #extension GL_EXT_shader_texture_lod : enable\n#endif\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    #ifdef GL_EXT_shader_texture_lod\n        vec4 texSample = unclamped == coord\n            ? texture2D(uSampler, coord) \n            : texture2DLodEXT(uSampler, coord, 0);\n    #else\n        vec4 texSample = texture2D(uSampler, coord);\n    #endif\n\n    gl_FragColor = texSample * uColor;\n}\n", e)
            }
            ,
            e.prototype.render = function(t) {
                var e = this.renderer
                  , r = this.quad
                  , i = r.vertices;
                i[0] = i[6] = t._width * -t.anchor.x,
                i[1] = i[3] = t._height * -t.anchor.y,
                i[2] = i[4] = t._width * (1 - t.anchor.x),
                i[5] = i[7] = t._height * (1 - t.anchor.y);
                var n = t.uvRespectAnchor ? t.anchor.x : 0
                  , o = t.uvRespectAnchor ? t.anchor.y : 0;
                (i = r.uvs)[0] = i[6] = -n,
                i[1] = i[3] = -o,
                i[2] = i[4] = 1 - n,
                i[5] = i[7] = 1 - o,
                r.invalidate();
                var s = t._texture
                  , a = s.baseTexture
                  , u = a.alphaMode > 0
                  , h = t.tileTransform.localTransform
                  , l = t.uvMatrix
                  , c = a.isPowerOfTwo && s.frame.width === a.width && s.frame.height === a.height;
                c && (a._glTextures[e.CONTEXT_UID] ? c = a.wrapMode !== S.CLAMP : a.wrapMode === S.CLAMP && (a.wrapMode = S.REPEAT));
                var d = c ? this.simpleShader : this.shader
                  , p = s.width
                  , f = s.height
                  , _ = t._width
                  , m = t._height;
                Qo.set(h.a * p / _, h.b * p / m, h.c * f / _, h.d * f / m, h.tx / _, h.ty / m),
                Qo.invert(),
                c ? Qo.prepend(l.mapCoord) : (d.uniforms.uMapCoord = l.mapCoord.toArray(!0),
                d.uniforms.uClampFrame = l.uClampFrame,
                d.uniforms.uClampOffset = l.uClampOffset),
                d.uniforms.uTransform = Qo.toArray(!0),
                d.uniforms.uColor = gt(t.tint, t.worldAlpha, d.uniforms.uColor, u),
                d.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0),
                d.uniforms.uSampler = s,
                e.shader.bind(d),
                e.geometry.bind(r),
                this.state.blendMode = mt(t.blendMode, u),
                e.state.set(this.state),
                e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
            }
            ,
            e.extension = {
                name: "tilingSprite",
                type: le.RendererPlugin
            },
            e
        }(hr)
          , es = function(t, e) {
            return (es = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        function rs(t, e) {
            function r() {
                this.constructor = t
            }
            es(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        var is = function() {
            function t(t, e) {
                this.uvBuffer = t,
                this.uvMatrix = e,
                this.data = null,
                this._bufferUpdateId = -1,
                this._textureUpdateId = -1,
                this._updateID = 0
            }
            return t.prototype.update = function(t) {
                if (t || this._bufferUpdateId !== this.uvBuffer._updateID || this._textureUpdateId !== this.uvMatrix._updateID) {
                    this._bufferUpdateId = this.uvBuffer._updateID,
                    this._textureUpdateId = this.uvMatrix._updateID;
                    var e = this.uvBuffer.data;
                    this.data && this.data.length === e.length || (this.data = new Float32Array(e.length)),
                    this.uvMatrix.multiplyUvs(e, this.data),
                    this._updateID++
                }
            }
            ,
            t
        }()
          , ns = new Ut
          , os = new Yt
          , ss = function(t) {
            function e(e, r, i, n) {
                void 0 === n && (n = y.TRIANGLES);
                var o = t.call(this) || this;
                return o.geometry = e,
                o.shader = r,
                o.state = i || Hr.for2d(),
                o.drawMode = n,
                o.start = 0,
                o.size = 0,
                o.uvs = null,
                o.indices = null,
                o.vertexData = new Float32Array(1),
                o.vertexDirty = -1,
                o._transformID = -1,
                o._roundPixels = nt.ROUND_PIXELS,
                o.batchUvs = null,
                o
            }
            return rs(e, t),
            Object.defineProperty(e.prototype, "geometry", {
                get: function() {
                    return this._geometry
                },
                set: function(t) {
                    this._geometry !== t && (this._geometry && (this._geometry.refCount--,
                    0 === this._geometry.refCount && this._geometry.dispose()),
                    this._geometry = t,
                    this._geometry && this._geometry.refCount++,
                    this.vertexDirty = -1)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "uvBuffer", {
                get: function() {
                    return this.geometry.buffers[1]
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "verticesBuffer", {
                get: function() {
                    return this.geometry.buffers[0]
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "material", {
                get: function() {
                    return this.shader
                },
                set: function(t) {
                    this.shader = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "blendMode", {
                get: function() {
                    return this.state.blendMode
                },
                set: function(t) {
                    this.state.blendMode = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "roundPixels", {
                get: function() {
                    return this._roundPixels
                },
                set: function(t) {
                    this._roundPixels !== t && (this._transformID = -1),
                    this._roundPixels = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "tint", {
                get: function() {
                    return "tint"in this.shader ? this.shader.tint : null
                },
                set: function(t) {
                    this.shader.tint = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "texture", {
                get: function() {
                    return "texture"in this.shader ? this.shader.texture : null
                },
                set: function(t) {
                    this.shader.texture = t
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype._render = function(t) {
                var r = this.geometry.buffers[0].data;
                this.shader.batchable && this.drawMode === y.TRIANGLES && r.length < 2 * e.BATCHABLE_SIZE ? this._renderToBatch(t) : this._renderDefault(t)
            }
            ,
            e.prototype._renderDefault = function(t) {
                var e = this.shader;
                e.alpha = this.worldAlpha,
                e.update && e.update(),
                t.batch.flush(),
                e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0),
                t.shader.bind(e),
                t.state.set(this.state),
                t.geometry.bind(this.geometry, e),
                t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
            }
            ,
            e.prototype._renderToBatch = function(t) {
                var e = this.geometry
                  , r = this.shader;
                r.uvMatrix && (r.uvMatrix.update(),
                this.calculateUvs()),
                this.calculateVertices(),
                this.indices = e.indexBuffer.data,
                this._tintRGB = r._tintRGB,
                this._texture = r.texture;
                var i = this.material.pluginName;
                t.batch.setObjectRenderer(t.plugins[i]),
                t.plugins[i].render(this)
            }
            ,
            e.prototype.calculateVertices = function() {
                var t = this.geometry.buffers[0]
                  , e = t.data
                  , r = t._updateID;
                if (r !== this.vertexDirty || this._transformID !== this.transform._worldID) {
                    this._transformID = this.transform._worldID,
                    this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
                    for (var i = this.transform.worldTransform, n = i.a, o = i.b, s = i.c, a = i.d, u = i.tx, h = i.ty, l = this.vertexData, c = 0; c < l.length / 2; c++) {
                        var d = e[2 * c]
                          , p = e[2 * c + 1];
                        l[2 * c] = n * d + s * p + u,
                        l[2 * c + 1] = o * d + a * p + h
                    }
                    if (this._roundPixels) {
                        var f = nt.RESOLUTION;
                        for (c = 0; c < l.length; ++c)
                            l[c] = Math.round((l[c] * f | 0) / f)
                    }
                    this.vertexDirty = r
                }
            }
            ,
            e.prototype.calculateUvs = function() {
                var t = this.geometry.buffers[1]
                  , e = this.shader;
                e.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new is(t,e.uvMatrix)),
                this.batchUvs.update(),
                this.uvs = this.batchUvs.data)
            }
            ,
            e.prototype._calculateBounds = function() {
                this.calculateVertices(),
                this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
            }
            ,
            e.prototype.containsPoint = function(t) {
                if (!this.getBounds().contains(t.x, t.y))
                    return !1;
                this.worldTransform.applyInverse(t, ns);
                for (var e = this.geometry.getBuffer("aVertexPosition").data, r = os.points, i = this.geometry.getIndex().data, n = i.length, o = 4 === this.drawMode ? 3 : 1, s = 0; s + 2 < n; s += o) {
                    var a = 2 * i[s]
                      , u = 2 * i[s + 1]
                      , h = 2 * i[s + 2];
                    if (r[0] = e[a],
                    r[1] = e[a + 1],
                    r[2] = e[u],
                    r[3] = e[u + 1],
                    r[4] = e[h],
                    r[5] = e[h + 1],
                    os.contains(ns.x, ns.y))
                        return !0
                }
                return !1
            }
            ,
            e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e),
                this._cachedTexture && (this._cachedTexture.destroy(),
                this._cachedTexture = null),
                this.geometry = null,
                this.shader = null,
                this.state = null,
                this.uvs = null,
                this.indices = null,
                this.vertexData = null
            }
            ,
            e.BATCHABLE_SIZE = 100,
            e
        }(he)
          , as = function(t) {
            function e(e, r) {
                var i = this
                  , n = {
                    uSampler: e,
                    alpha: 1,
                    uTextureMatrix: zt.IDENTITY,
                    uColor: new Float32Array([1, 1, 1, 1])
                };
                return (r = Object.assign({
                    tint: 16777215,
                    alpha: 1,
                    pluginName: "batch"
                }, r)).uniforms && Object.assign(n, r.uniforms),
                (i = t.call(this, r.program || kr.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n"), n) || this)._colorDirty = !1,
                i.uvMatrix = new Vr(e),
                i.batchable = void 0 === r.program,
                i.pluginName = r.pluginName,
                i.tint = r.tint,
                i.alpha = r.alpha,
                i
            }
            return rs(e, t),
            Object.defineProperty(e.prototype, "texture", {
                get: function() {
                    return this.uniforms.uSampler
                },
                set: function(t) {
                    this.uniforms.uSampler !== t && (!this.uniforms.uSampler.baseTexture.alphaMode != !t.baseTexture.alphaMode && (this._colorDirty = !0),
                    this.uniforms.uSampler = t,
                    this.uvMatrix.texture = t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "alpha", {
                get: function() {
                    return this._alpha
                },
                set: function(t) {
                    t !== this._alpha && (this._alpha = t,
                    this._colorDirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "tint", {
                get: function() {
                    return this._tint
                },
                set: function(t) {
                    t !== this._tint && (this._tint = t,
                    this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16),
                    this._colorDirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.update = function() {
                if (this._colorDirty) {
                    this._colorDirty = !1;
                    var t = this.texture.baseTexture;
                    gt(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode)
                }
                this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
            }
            ,
            e
        }(Xr)
          , us = function(t) {
            function e(e, r, i) {
                var n = t.call(this) || this
                  , o = new qe(e)
                  , s = new qe(r,!0)
                  , a = new qe(i,!0,!0);
                return n.addAttribute("aVertexPosition", o, 2, !1, T.FLOAT).addAttribute("aTextureCoord", s, 2, !1, T.FLOAT).addIndex(a),
                n._updateId = -1,
                n
            }
            return rs(e, t),
            Object.defineProperty(e.prototype, "vertexDirtyId", {
                get: function() {
                    return this.buffers[0]._updateID
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        }(tr)
          , hs = function(t, e) {
            return (hs = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        }
          , ls = function() {
            this.info = [],
            this.common = [],
            this.page = [],
            this.char = [],
            this.kerning = [],
            this.distanceField = []
        }
          , cs = function() {
            function t() {}
            return t.test = function(t) {
                return "string" == typeof t && 0 === t.indexOf("info face=")
            }
            ,
            t.parse = function(t) {
                var e = t.match(/^[a-z]+\s+.+$/gm)
                  , r = {
                    info: [],
                    common: [],
                    page: [],
                    char: [],
                    chars: [],
                    kerning: [],
                    kernings: [],
                    distanceField: []
                };
                for (var i in e) {
                    var n = e[i].match(/^[a-z]+/gm)[0]
                      , o = e[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm)
                      , s = {};
                    for (var a in o) {
                        var u = o[a].split("=")
                          , h = u[0]
                          , l = u[1].replace(/"/gm, "")
                          , c = parseFloat(l)
                          , d = isNaN(c) ? l : c;
                        s[h] = d
                    }
                    r[n].push(s)
                }
                var p = new ls;
                return r.info.forEach((function(t) {
                    return p.info.push({
                        face: t.face,
                        size: parseInt(t.size, 10)
                    })
                }
                )),
                r.common.forEach((function(t) {
                    return p.common.push({
                        lineHeight: parseInt(t.lineHeight, 10)
                    })
                }
                )),
                r.page.forEach((function(t) {
                    return p.page.push({
                        id: parseInt(t.id, 10),
                        file: t.file
                    })
                }
                )),
                r.char.forEach((function(t) {
                    return p.char.push({
                        id: parseInt(t.id, 10),
                        page: parseInt(t.page, 10),
                        x: parseInt(t.x, 10),
                        y: parseInt(t.y, 10),
                        width: parseInt(t.width, 10),
                        height: parseInt(t.height, 10),
                        xoffset: parseInt(t.xoffset, 10),
                        yoffset: parseInt(t.yoffset, 10),
                        xadvance: parseInt(t.xadvance, 10)
                    })
                }
                )),
                r.kerning.forEach((function(t) {
                    return p.kerning.push({
                        first: parseInt(t.first, 10),
                        second: parseInt(t.second, 10),
                        amount: parseInt(t.amount, 10)
                    })
                }
                )),
                r.distanceField.forEach((function(t) {
                    return p.distanceField.push({
                        distanceRange: parseInt(t.distanceRange, 10),
                        fieldType: t.fieldType
                    })
                }
                )),
                p
            }
            ,
            t
        }()
          , ds = function() {
            function t() {}
            return t.test = function(t) {
                return t instanceof XMLDocument && t.getElementsByTagName("page").length && null !== t.getElementsByTagName("info")[0].getAttribute("face")
            }
            ,
            t.parse = function(t) {
                for (var e = new ls, r = t.getElementsByTagName("info"), i = t.getElementsByTagName("common"), n = t.getElementsByTagName("page"), o = t.getElementsByTagName("char"), s = t.getElementsByTagName("kerning"), a = t.getElementsByTagName("distanceField"), u = 0; u < r.length; u++)
                    e.info.push({
                        face: r[u].getAttribute("face"),
                        size: parseInt(r[u].getAttribute("size"), 10)
                    });
                for (u = 0; u < i.length; u++)
                    e.common.push({
                        lineHeight: parseInt(i[u].getAttribute("lineHeight"), 10)
                    });
                for (u = 0; u < n.length; u++)
                    e.page.push({
                        id: parseInt(n[u].getAttribute("id"), 10) || 0,
                        file: n[u].getAttribute("file")
                    });
                for (u = 0; u < o.length; u++) {
                    var h = o[u];
                    e.char.push({
                        id: parseInt(h.getAttribute("id"), 10),
                        page: parseInt(h.getAttribute("page"), 10) || 0,
                        x: parseInt(h.getAttribute("x"), 10),
                        y: parseInt(h.getAttribute("y"), 10),
                        width: parseInt(h.getAttribute("width"), 10),
                        height: parseInt(h.getAttribute("height"), 10),
                        xoffset: parseInt(h.getAttribute("xoffset"), 10),
                        yoffset: parseInt(h.getAttribute("yoffset"), 10),
                        xadvance: parseInt(h.getAttribute("xadvance"), 10)
                    })
                }
                for (u = 0; u < s.length; u++)
                    e.kerning.push({
                        first: parseInt(s[u].getAttribute("first"), 10),
                        second: parseInt(s[u].getAttribute("second"), 10),
                        amount: parseInt(s[u].getAttribute("amount"), 10)
                    });
                for (u = 0; u < a.length; u++)
                    e.distanceField.push({
                        fieldType: a[u].getAttribute("fieldType"),
                        distanceRange: parseInt(a[u].getAttribute("distanceRange"), 10)
                    });
                return e
            }
            ,
            t
        }()
          , ps = function() {
            function t() {}
            return t.test = function(t) {
                if ("string" == typeof t && t.indexOf("<font>") > -1) {
                    var e = (new globalThis.DOMParser).parseFromString(t, "text/xml");
                    return ds.test(e)
                }
                return !1
            }
            ,
            t.parse = function(t) {
                var e = (new globalThis.DOMParser).parseFromString(t, "text/xml");
                return ds.parse(e)
            }
            ,
            t
        }()
          , fs = [cs, ds, ps];
        function _s(t) {
            for (var e = 0; e < fs.length; e++)
                if (fs[e].test(t))
                    return fs[e];
            return null
        }
        function ms(t, e, r, i, n, o, s) {
            var a = r.text
              , u = r.fontProperties;
            e.translate(i, n),
            e.scale(o, o);
            var h = s.strokeThickness / 2
              , l = -s.strokeThickness / 2;
            if (e.font = s.toFontString(),
            e.lineWidth = s.strokeThickness,
            e.textBaseline = s.textBaseline,
            e.lineJoin = s.lineJoin,
            e.miterLimit = s.miterLimit,
            e.fillStyle = function(t, e, r, i, n, o) {
                var s, a = r.fill;
                if (!Array.isArray(a))
                    return a;
                if (1 === a.length)
                    return a[0];
                var u = r.dropShadow ? r.dropShadowDistance : 0
                  , h = r.padding || 0
                  , l = t.width / i - u - 2 * h
                  , c = t.height / i - u - 2 * h
                  , d = a.slice()
                  , p = r.fillGradientStops.slice();
                if (!p.length)
                    for (var f = d.length + 1, _ = 1; _ < f; ++_)
                        p.push(_ / f);
                if (d.unshift(a[0]),
                p.unshift(0),
                d.push(a[a.length - 1]),
                p.push(1),
                r.fillGradientType === io.LINEAR_VERTICAL) {
                    s = e.createLinearGradient(l / 2, h, l / 2, c + h);
                    var m = 0
                      , v = (o.fontProperties.fontSize + r.strokeThickness) / c;
                    for (_ = 0; _ < n.length; _++)
                        for (var g = o.lineHeight * _, y = 0; y < d.length; y++) {
                            var b = g / c + ("number" == typeof p[y] ? p[y] : y / d.length) * v
                              , x = Math.max(m, b);
                            x = Math.min(x, 1),
                            s.addColorStop(x, d[y]),
                            m = x
                        }
                } else {
                    s = e.createLinearGradient(h, c / 2, l + h, c / 2);
                    var T = d.length + 1
                      , E = 1;
                    for (_ = 0; _ < d.length; _++) {
                        var A;
                        A = "number" == typeof p[_] ? p[_] : E / T,
                        s.addColorStop(A, d[_]),
                        E++
                    }
                }
                return s
            }(t, e, s, o, [a], r),
            e.strokeStyle = s.stroke,
            s.dropShadow) {
                var c = s.dropShadowColor
                  , d = dt("number" == typeof c ? c : ft(c))
                  , p = s.dropShadowBlur * o
                  , f = s.dropShadowDistance * o;
                e.shadowColor = "rgba(" + 255 * d[0] + "," + 255 * d[1] + "," + 255 * d[2] + "," + s.dropShadowAlpha + ")",
                e.shadowBlur = p,
                e.shadowOffsetX = Math.cos(s.dropShadowAngle) * f,
                e.shadowOffsetY = Math.sin(s.dropShadowAngle) * f
            } else
                e.shadowColor = "black",
                e.shadowBlur = 0,
                e.shadowOffsetX = 0,
                e.shadowOffsetY = 0;
            s.stroke && s.strokeThickness && e.strokeText(a, h, l + r.lineHeight - u.descent),
            s.fill && e.fillText(a, h, l + r.lineHeight - u.descent),
            e.setTransform(1, 0, 0, 1, 0, 0),
            e.fillStyle = "rgba(0, 0, 0, 0)"
        }
        function vs(t) {
            return Array.from ? Array.from(t) : t.split("")
        }
        function gs(t) {
            return t.codePointAt ? t.codePointAt(0) : t.charCodeAt(0)
        }
        var ys = function() {
            function t(t, e, r) {
                var i, n, o = t.info[0], s = t.common[0], a = t.page[0], u = t.distanceField[0], h = Ft(a.file), l = {};
                this._ownsTextures = r,
                this.font = o.face,
                this.size = o.size,
                this.lineHeight = s.lineHeight / h,
                this.chars = {},
                this.pageTextures = l;
                for (var c = 0; c < t.page.length; c++) {
                    var d = t.page[c]
                      , p = d.id
                      , f = d.file;
                    l[p] = e instanceof Array ? e[c] : e[f],
                    (null == u ? void 0 : u.fieldType) && "none" !== u.fieldType && (l[p].baseTexture.alphaMode = w.NO_PREMULTIPLIED_ALPHA,
                    l[p].baseTexture.mipmap = R.OFF)
                }
                for (c = 0; c < t.char.length; c++) {
                    var _ = t.char[c]
                      , m = (p = _.id,
                    _.page)
                      , v = t.char[c]
                      , g = v.x
                      , y = v.y
                      , b = v.width
                      , x = v.height
                      , T = v.xoffset
                      , E = v.yoffset
                      , A = v.xadvance;
                    y /= h,
                    b /= h,
                    x /= h,
                    T /= h,
                    E /= h,
                    A /= h;
                    var S = new Xt((g /= h) + l[m].frame.x / h,y + l[m].frame.y / h,b,x);
                    this.chars[p] = {
                        xOffset: T,
                        yOffset: E,
                        xAdvance: A,
                        kerning: {},
                        texture: new Ye(l[m].baseTexture,S),
                        page: m
                    }
                }
                for (c = 0; c < t.kerning.length; c++) {
                    var O = t.kerning[c]
                      , I = O.first
                      , P = O.second
                      , M = O.amount;
                    I /= h,
                    P /= h,
                    M /= h,
                    this.chars[P] && (this.chars[P].kerning[I] = M)
                }
                this.distanceFieldRange = null == u ? void 0 : u.distanceRange,
                this.distanceFieldType = null !== (n = null === (i = null == u ? void 0 : u.fieldType) || void 0 === i ? void 0 : i.toLowerCase()) && void 0 !== n ? n : "none"
            }
            return t.prototype.destroy = function() {
                for (var t in this.chars)
                    this.chars[t].texture.destroy(),
                    this.chars[t].texture = null;
                for (var t in this.pageTextures)
                    this._ownsTextures && this.pageTextures[t].destroy(!0),
                    this.pageTextures[t] = null;
                this.chars = null,
                this.pageTextures = null
            }
            ,
            t.install = function(e, r, i) {
                var n;
                if (e instanceof ls)
                    n = e;
                else {
                    var o = _s(e);
                    if (!o)
                        throw new Error("Unrecognized data format for font.");
                    n = o.parse(e)
                }
                r instanceof Ye && (r = [r]);
                var s = new t(n,r,i);
                return t.available[s.font] = s,
                s
            }
            ,
            t.uninstall = function(e) {
                var r = t.available[e];
                if (!r)
                    throw new Error("No font found named '" + e + "'");
                r.destroy(),
                delete t.available[e]
            }
            ,
            t.from = function(e, r, i) {
                if (!e)
                    throw new Error("[BitmapFont] Property `name` is required.");
                var n = Object.assign({}, t.defaultOptions, i)
                  , o = n.chars
                  , s = n.padding
                  , a = n.resolution
                  , u = n.textureWidth
                  , h = n.textureHeight
                  , l = function(t) {
                    "string" == typeof t && (t = [t]);
                    for (var e = [], r = 0, i = t.length; r < i; r++) {
                        var n = t[r];
                        if (Array.isArray(n)) {
                            if (2 !== n.length)
                                throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got " + n.length + ".");
                            var o = n[0].charCodeAt(0)
                              , s = n[1].charCodeAt(0);
                            if (s < o)
                                throw new Error("[BitmapFont]: Invalid character range.");
                            for (var a = o, u = s; a <= u; a++)
                                e.push(String.fromCharCode(a))
                        } else
                            e.push.apply(e, vs(n))
                    }
                    if (0 === e.length)
                        throw new Error("[BitmapFont]: Empty set when resolving characters.");
                    return e
                }(o)
                  , c = r instanceof Ro ? r : new Ro(r)
                  , d = u
                  , p = new ls;
                p.info[0] = {
                    face: c.fontFamily,
                    size: c.fontSize
                },
                p.common[0] = {
                    lineHeight: c.fontSize
                };
                for (var f, _, m, v = 0, g = 0, y = 0, b = [], x = 0; x < l.length; x++) {
                    f || ((f = nt.ADAPTER.createCanvas()).width = u,
                    f.height = h,
                    _ = f.getContext("2d"),
                    m = new we(f,{
                        resolution: a
                    }),
                    b.push(new Ye(m)),
                    p.page.push({
                        id: b.length - 1,
                        file: ""
                    }));
                    var T = l[x]
                      , E = Mo.measureText(T, c, !1, f)
                      , A = E.width
                      , S = Math.ceil(E.height)
                      , R = Math.ceil(("italic" === c.fontStyle ? 2 : 1) * A);
                    if (g >= h - S * a) {
                        if (0 === g)
                            throw new Error("[BitmapFont] textureHeight " + h + "px is too small (fontFamily: '" + c.fontFamily + "', fontSize: " + c.fontSize + "px, char: '" + T + "')");
                        --x,
                        f = null,
                        _ = null,
                        m = null,
                        g = 0,
                        v = 0,
                        y = 0
                    } else if (y = Math.max(S + E.fontProperties.descent, y),
                    R * a + v >= d) {
                        if (0 === v)
                            throw new Error("[BitmapFont] textureWidth " + u + "px is too small (fontFamily: '" + c.fontFamily + "', fontSize: " + c.fontSize + "px, char: '" + T + "')");
                        --x,
                        g += y * a,
                        g = Math.ceil(g),
                        v = 0,
                        y = 0
                    } else {
                        ms(f, _, E, v, g, a, c);
                        var w = gs(E.text);
                        p.char.push({
                            id: w,
                            page: b.length - 1,
                            x: v / a,
                            y: g / a,
                            width: R,
                            height: S,
                            xoffset: 0,
                            yoffset: 0,
                            xadvance: Math.ceil(A - (c.dropShadow ? c.dropShadowDistance : 0) - (c.stroke ? c.strokeThickness : 0))
                        }),
                        v += (R + 2 * s) * a,
                        v = Math.ceil(v)
                    }
                }
                x = 0;
                for (var O = l.length; x < O; x++)
                    for (var I = l[x], P = 0; P < O; P++) {
                        var M = l[P]
                          , D = _.measureText(I).width
                          , C = _.measureText(M).width
                          , F = _.measureText(I + M).width - (D + C);
                        F && p.kerning.push({
                            first: gs(I),
                            second: gs(M),
                            amount: F
                        })
                    }
                var N = new t(p,b,!0);
                return void 0 !== t.available[e] && t.uninstall(e),
                t.available[e] = N,
                N
            }
            ,
            t.ALPHA = [["a", "z"], ["A", "Z"], " "],
            t.NUMERIC = [["0", "9"]],
            t.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "],
            t.ASCII = [[" ", "~"]],
            t.defaultOptions = {
                resolution: 1,
                textureWidth: 512,
                textureHeight: 512,
                padding: 4,
                chars: t.ALPHANUMERIC
            },
            t.available = {},
            t
        }()
          , bs = []
          , xs = []
          , Ts = []
          , Es = (function(t) {
            function e(r, i) {
                void 0 === i && (i = {});
                var n = t.call(this) || this;
                n._tint = 16777215;
                var o = Object.assign({}, e.styleDefaults, i)
                  , s = o.align
                  , a = o.tint
                  , u = o.maxWidth
                  , h = o.letterSpacing
                  , l = o.fontName
                  , c = o.fontSize;
                if (!ys.available[l])
                    throw new Error('Missing BitmapFont "' + l + '"');
                return n._activePagesMeshData = [],
                n._textWidth = 0,
                n._textHeight = 0,
                n._align = s,
                n._tint = a,
                n._font = void 0,
                n._fontName = l,
                n._fontSize = c,
                n.text = r,
                n._maxWidth = u,
                n._maxLineHeight = 0,
                n._letterSpacing = h,
                n._anchor = new Wt((function() {
                    n.dirty = !0
                }
                ),n,0,0),
                n._roundPixels = nt.ROUND_PIXELS,
                n.dirty = !0,
                n._resolution = nt.RESOLUTION,
                n._autoResolution = !0,
                n._textureCache = {},
                n
            }
            (function(t, e) {
                function r() {
                    this.constructor = t
                }
                hs(t, e),
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
            )(e, t),
            e.prototype.updateText = function() {
                for (var t, e = ys.available[this._fontName], r = this.fontSize, i = r / e.size, n = new Ut, o = [], s = [], a = [], u = vs(this._text.replace(/(?:\r\n|\r)/g, "\n") || " "), h = this._maxWidth * e.size / r, l = "none" === e.distanceFieldType ? bs : xs, c = null, d = 0, p = 0, f = 0, _ = -1, m = 0, v = 0, y = 0, b = 0, x = 0; x < u.length; x++) {
                    var T = gs(H = u[x]);
                    if (/(?:\s)/.test(H) && (_ = x,
                    m = d,
                    b++),
                    "\r" !== H && "\n" !== H) {
                        var E = e.chars[T];
                        if (E) {
                            c && E.kerning[c] && (n.x += E.kerning[c]);
                            var A = Ts.pop() || {
                                texture: Ye.EMPTY,
                                line: 0,
                                charCode: 0,
                                prevSpaces: 0,
                                position: new Ut
                            };
                            A.texture = E.texture,
                            A.line = f,
                            A.charCode = T,
                            A.position.x = n.x + E.xOffset + this._letterSpacing / 2,
                            A.position.y = n.y + E.yOffset,
                            A.prevSpaces = b,
                            o.push(A),
                            d = A.position.x + Math.max(E.xAdvance - E.xOffset, E.texture.orig.width),
                            n.x += E.xAdvance + this._letterSpacing,
                            y = Math.max(y, E.yOffset + E.texture.height),
                            c = T,
                            -1 !== _ && h > 0 && n.x > h && (Et(o, 1 + _ - ++v, 1 + x - _),
                            x = _,
                            _ = -1,
                            s.push(m),
                            a.push(o.length > 0 ? o[o.length - 1].prevSpaces : 0),
                            p = Math.max(p, m),
                            f++,
                            n.x = 0,
                            n.y += e.lineHeight,
                            c = null,
                            b = 0)
                        }
                    } else
                        s.push(d),
                        a.push(-1),
                        p = Math.max(p, d),
                        ++f,
                        ++v,
                        n.x = 0,
                        n.y += e.lineHeight,
                        c = null,
                        b = 0
                }
                var S = u[u.length - 1];
                "\r" !== S && "\n" !== S && (/(?:\s)/.test(S) && (d = m),
                s.push(d),
                p = Math.max(p, d),
                a.push(-1));
                var R = [];
                for (x = 0; x <= f; x++) {
                    var w = 0;
                    "right" === this._align ? w = p - s[x] : "center" === this._align ? w = (p - s[x]) / 2 : "justify" === this._align && (w = a[x] < 0 ? 0 : (p - s[x]) / a[x]),
                    R.push(w)
                }
                var O = o.length
                  , I = {}
                  , P = []
                  , M = this._activePagesMeshData;
                for (l.push.apply(l, M),
                x = 0; x < O; x++) {
                    var D = (Y = o[x].texture).baseTexture.uid;
                    if (!I[D]) {
                        if (!(Z = l.pop())) {
                            var C = new us
                              , F = void 0
                              , N = void 0;
                            "none" === e.distanceFieldType ? (F = new as(Ye.EMPTY),
                            N = g.NORMAL) : (F = new as(Ye.EMPTY,{
                                program: kr.from("// Mesh material default fragment\r\nattribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\n\r\nuniform mat3 projectionMatrix;\r\nuniform mat3 translationMatrix;\r\nuniform mat3 uTextureMatrix;\r\n\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void)\r\n{\r\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r\n\r\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r\n}\r\n", "// Pixi texture info\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\n\r\n// Tint\r\nuniform vec4 uColor;\r\n\r\n// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r\nuniform float uFWidth;\r\n\r\nvoid main(void) {\r\n\r\n  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r\n  vec4 texColor = texture2D(uSampler, vTextureCoord);\r\n\r\n  // MSDF\r\n  float median = texColor.r + texColor.g + texColor.b -\r\n                  min(texColor.r, min(texColor.g, texColor.b)) -\r\n                  max(texColor.r, max(texColor.g, texColor.b));\r\n  // SDF\r\n  median = min(median, texColor.a);\r\n\r\n  float screenPxDistance = uFWidth * (median - 0.5);\r\n  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r\n  if (median < 0.01) {\r\n    alpha = 0.0;\r\n  } else if (median > 0.99) {\r\n    alpha = 1.0;\r\n  }\r\n\r\n  // NPM Textures, NPM outputs\r\n  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r\n\r\n}\r\n"),
                                uniforms: {
                                    uFWidth: 0
                                }
                            }),
                            N = g.NORMAL_NPM);
                            var B = new ss(C,F);
                            B.blendMode = N,
                            Z = {
                                index: 0,
                                indexCount: 0,
                                vertexCount: 0,
                                uvsCount: 0,
                                total: 0,
                                mesh: B,
                                vertices: null,
                                uvs: null,
                                indices: null
                            }
                        }
                        Z.index = 0,
                        Z.indexCount = 0,
                        Z.vertexCount = 0,
                        Z.uvsCount = 0,
                        Z.total = 0;
                        var L = this._textureCache;
                        L[D] = L[D] || new Ye(Y.baseTexture),
                        Z.mesh.texture = L[D],
                        Z.mesh.tint = this._tint,
                        P.push(Z),
                        I[D] = Z
                    }
                    I[D].total++
                }
                for (x = 0; x < M.length; x++)
                    -1 === P.indexOf(M[x]) && this.removeChild(M[x].mesh);
                for (x = 0; x < P.length; x++)
                    P[x].mesh.parent !== this && this.addChild(P[x].mesh);
                for (var x in this._activePagesMeshData = P,
                I) {
                    var G = (Z = I[x]).total;
                    if (!((null === (t = Z.indices) || void 0 === t ? void 0 : t.length) > 6 * G) || Z.vertices.length < 2 * ss.BATCHABLE_SIZE)
                        Z.vertices = new Float32Array(8 * G),
                        Z.uvs = new Float32Array(8 * G),
                        Z.indices = new Uint16Array(6 * G);
                    else
                        for (var U = Z.total, k = Z.vertices, X = 4 * U * 2; X < k.length; X++)
                            k[X] = 0;
                    Z.mesh.size = 6 * G
                }
                for (x = 0; x < O; x++) {
                    var H, j = (H = o[x]).position.x + R[H.line] * ("justify" === this._align ? H.prevSpaces : 1);
                    this._roundPixels && (j = Math.round(j));
                    var Y, V = j * i, W = H.position.y * i, z = I[(Y = H.texture).baseTexture.uid], $ = Y.frame, q = Y._uvs, K = z.index++;
                    z.indices[6 * K + 0] = 0 + 4 * K,
                    z.indices[6 * K + 1] = 1 + 4 * K,
                    z.indices[6 * K + 2] = 2 + 4 * K,
                    z.indices[6 * K + 3] = 0 + 4 * K,
                    z.indices[6 * K + 4] = 2 + 4 * K,
                    z.indices[6 * K + 5] = 3 + 4 * K,
                    z.vertices[8 * K + 0] = V,
                    z.vertices[8 * K + 1] = W,
                    z.vertices[8 * K + 2] = V + $.width * i,
                    z.vertices[8 * K + 3] = W,
                    z.vertices[8 * K + 4] = V + $.width * i,
                    z.vertices[8 * K + 5] = W + $.height * i,
                    z.vertices[8 * K + 6] = V,
                    z.vertices[8 * K + 7] = W + $.height * i,
                    z.uvs[8 * K + 0] = q.x0,
                    z.uvs[8 * K + 1] = q.y0,
                    z.uvs[8 * K + 2] = q.x1,
                    z.uvs[8 * K + 3] = q.y1,
                    z.uvs[8 * K + 4] = q.x2,
                    z.uvs[8 * K + 5] = q.y2,
                    z.uvs[8 * K + 6] = q.x3,
                    z.uvs[8 * K + 7] = q.y3
                }
                for (var x in this._textWidth = p * i,
                this._textHeight = (n.y + e.lineHeight) * i,
                I) {
                    var Z = I[x];
                    if (0 !== this.anchor.x || 0 !== this.anchor.y)
                        for (var J = 0, Q = this._textWidth * this.anchor.x, tt = this._textHeight * this.anchor.y, et = 0; et < Z.total; et++)
                            Z.vertices[J++] -= Q,
                            Z.vertices[J++] -= tt,
                            Z.vertices[J++] -= Q,
                            Z.vertices[J++] -= tt,
                            Z.vertices[J++] -= Q,
                            Z.vertices[J++] -= tt,
                            Z.vertices[J++] -= Q,
                            Z.vertices[J++] -= tt;
                    this._maxLineHeight = y * i;
                    var rt = Z.mesh.geometry.getBuffer("aVertexPosition")
                      , it = Z.mesh.geometry.getBuffer("aTextureCoord")
                      , nt = Z.mesh.geometry.getIndex();
                    rt.data = Z.vertices,
                    it.data = Z.uvs,
                    nt.data = Z.indices,
                    rt.update(),
                    it.update(),
                    nt.update()
                }
                for (x = 0; x < o.length; x++)
                    Ts.push(o[x]);
                this._font = e,
                this.dirty = !1
            }
            ,
            e.prototype.updateTransform = function() {
                this.validate(),
                this.containerUpdateTransform()
            }
            ,
            e.prototype._render = function(e) {
                this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution,
                this.dirty = !0);
                var r = ys.available[this._fontName]
                  , i = r.distanceFieldRange
                  , n = r.distanceFieldType
                  , o = r.size;
                if ("none" !== n)
                    for (var s = this.worldTransform, a = s.a, u = s.b, h = s.c, l = s.d, c = Math.sqrt(a * a + u * u), d = Math.sqrt(h * h + l * l), p = (Math.abs(c) + Math.abs(d)) / 2, f = this.fontSize / o, _ = 0, m = this._activePagesMeshData; _ < m.length; _++)
                        m[_].mesh.shader.uniforms.uFWidth = p * i * f * this._resolution;
                t.prototype._render.call(this, e)
            }
            ,
            e.prototype.getLocalBounds = function() {
                return this.validate(),
                t.prototype.getLocalBounds.call(this)
            }
            ,
            e.prototype.validate = function() {
                var t = ys.available[this._fontName];
                if (!t)
                    throw new Error('Missing BitmapFont "' + this._fontName + '"');
                this._font !== t && (this.dirty = !0),
                this.dirty && this.updateText()
            }
            ,
            Object.defineProperty(e.prototype, "tint", {
                get: function() {
                    return this._tint
                },
                set: function(t) {
                    if (this._tint !== t) {
                        this._tint = t;
                        for (var e = 0; e < this._activePagesMeshData.length; e++)
                            this._activePagesMeshData[e].mesh.tint = t
                    }
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "align", {
                get: function() {
                    return this._align
                },
                set: function(t) {
                    this._align !== t && (this._align = t,
                    this.dirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "fontName", {
                get: function() {
                    return this._fontName
                },
                set: function(t) {
                    if (!ys.available[t])
                        throw new Error('Missing BitmapFont "' + t + '"');
                    this._fontName !== t && (this._fontName = t,
                    this.dirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "fontSize", {
                get: function() {
                    var t;
                    return null !== (t = this._fontSize) && void 0 !== t ? t : ys.available[this._fontName].size
                },
                set: function(t) {
                    this._fontSize !== t && (this._fontSize = t,
                    this.dirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "anchor", {
                get: function() {
                    return this._anchor
                },
                set: function(t) {
                    "number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "text", {
                get: function() {
                    return this._text
                },
                set: function(t) {
                    t = String(null == t ? "" : t),
                    this._text !== t && (this._text = t,
                    this.dirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "maxWidth", {
                get: function() {
                    return this._maxWidth
                },
                set: function(t) {
                    this._maxWidth !== t && (this._maxWidth = t,
                    this.dirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "maxLineHeight", {
                get: function() {
                    return this.validate(),
                    this._maxLineHeight
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "textWidth", {
                get: function() {
                    return this.validate(),
                    this._textWidth
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "letterSpacing", {
                get: function() {
                    return this._letterSpacing
                },
                set: function(t) {
                    this._letterSpacing !== t && (this._letterSpacing = t,
                    this.dirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "roundPixels", {
                get: function() {
                    return this._roundPixels
                },
                set: function(t) {
                    t !== this._roundPixels && (this._roundPixels = t,
                    this.dirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "textHeight", {
                get: function() {
                    return this.validate(),
                    this._textHeight
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "resolution", {
                get: function() {
                    return this._resolution
                },
                set: function(t) {
                    this._autoResolution = !1,
                    this._resolution !== t && (this._resolution = t,
                    this.dirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.destroy = function(e) {
                var r = this._textureCache
                  , i = "none" === ys.available[this._fontName].distanceFieldType ? bs : xs;
                i.push.apply(i, this._activePagesMeshData);
                for (var n = 0, o = this._activePagesMeshData; n < o.length; n++) {
                    var s = o[n];
                    this.removeChild(s.mesh)
                }
                for (var a in this._activePagesMeshData = [],
                i.filter((function(t) {
                    return r[t.mesh.texture.baseTexture.uid]
                }
                )).forEach((function(t) {
                    t.mesh.texture = Ye.EMPTY
                }
                )),
                r)
                    r[a].destroy(),
                    delete r[a];
                this._font = null,
                this._textureCache = null,
                t.prototype.destroy.call(this, e)
            }
            ,
            e.styleDefaults = {
                align: "left",
                tint: 16777215,
                maxWidth: 0,
                letterSpacing: 0
            }
        }(he),
        function() {
            function t() {}
            return t.add = function() {
                en.setExtensionXhrType("fnt", en.XHR_RESPONSE_TYPE.TEXT)
            }
            ,
            t.use = function(e, r) {
                var i = _s(e.data);
                if (i)
                    for (var n = t.getBaseUrl(this, e), o = i.parse(e.data), s = {}, a = function(t) {
                        s[t.metadata.pageFile] = t.texture,
                        Object.keys(s).length === o.page.length && (e.bitmapFont = ys.install(o, s, !0),
                        r())
                    }, u = 0; u < o.page.length; ++u) {
                        var h = o.page[u].file
                          , l = n + h
                          , c = !1;
                        for (var d in this.resources) {
                            var p = this.resources[d];
                            if (p.url === l) {
                                p.metadata.pageFile = h,
                                p.texture ? a(p) : p.onAfterMiddleware.add(a),
                                c = !0;
                                break
                            }
                        }
                        if (!c) {
                            var f = {
                                crossOrigin: e.crossOrigin,
                                loadType: en.LOAD_TYPE.IMAGE,
                                metadata: Object.assign({
                                    pageFile: h
                                }, e.metadata.imageMetadata),
                                parentResource: e
                            };
                            this.add(l, f, a)
                        }
                    }
                else
                    r()
            }
            ,
            t.getBaseUrl = function(e, r) {
                var i = r.isDataUrl ? "" : t.dirname(r.url);
                return r.isDataUrl && ("." === i && (i = ""),
                e.baseUrl && i && "/" === e.baseUrl.charAt(e.baseUrl.length - 1) && (i += "/")),
                (i = i.replace(e.baseUrl, "")) && "/" !== i.charAt(i.length - 1) && (i += "/"),
                i
            }
            ,
            t.dirname = function(t) {
                var e = t.replace(/\\/g, "/").replace(/\/$/, "").replace(/\/[^\/]*$/, "");
                return e === t ? "." : "" === e ? "/" : e
            }
            ,
            t.extension = le.Loader,
            t
        }())
          , As = function(t, e) {
            return (As = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        !function(t) {
            function e(e) {
                void 0 === e && (e = 1);
                var r = t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n", {
                    uAlpha: 1
                }) || this;
                return r.alpha = e,
                r
            }
            (function(t, e) {
                function r() {
                    this.constructor = t
                }
                As(t, e),
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
            )(e, t),
            Object.defineProperty(e.prototype, "alpha", {
                get: function() {
                    return this.uniforms.uAlpha
                },
                set: function(t) {
                    this.uniforms.uAlpha = t
                },
                enumerable: !1,
                configurable: !0
            })
        }(jr);
        var Ss = function(t, e) {
            return (Ss = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        function Rs(t, e) {
            function r() {
                this.constructor = t
            }
            Ss(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        var ws = {
            5: [.153388, .221461, .250301],
            7: [.071303, .131514, .189879, .214607],
            9: [.028532, .067234, .124009, .179044, .20236],
            11: [.0093, .028002, .065984, .121703, .175713, .198596],
            13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
            15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
        }
          , Os = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n")
          , Is = function(t) {
            function e(e, r, i, n, o) {
                void 0 === r && (r = 8),
                void 0 === i && (i = 4),
                void 0 === n && (n = nt.FILTER_RESOLUTION),
                void 0 === o && (o = 5);
                var s = this
                  , a = function(t, e) {
                    var r, i = Math.ceil(t / 2), n = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }", o = "";
                    r = e ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
                    for (var s = 0; s < t; s++) {
                        var a = r.replace("%index%", s.toString());
                        o += a = a.replace("%sampleIndex%", s - (i - 1) + ".0"),
                        o += "\n"
                    }
                    return (n = n.replace("%blur%", o)).replace("%size%", t.toString())
                }(o, e)
                  , u = function(t) {
                    for (var e, r = ws[t], i = r.length, n = Os, o = "", s = 0; s < t; s++) {
                        var a = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", s.toString());
                        e = s,
                        s >= i && (e = t - s - 1),
                        o += a = a.replace("%value%", r[e].toString()),
                        o += "\n"
                    }
                    return (n = n.replace("%blur%", o)).replace("%size%", t.toString())
                }(o);
                return (s = t.call(this, a, u) || this).horizontal = e,
                s.resolution = n,
                s._quality = 0,
                s.quality = i,
                s.blur = r,
                s
            }
            return Rs(e, t),
            e.prototype.apply = function(t, e, r, i) {
                if (r ? this.horizontal ? this.uniforms.strength = 1 / r.width * (r.width / e.width) : this.uniforms.strength = 1 / r.height * (r.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height),
                this.uniforms.strength *= this.strength,
                this.uniforms.strength /= this.passes,
                1 === this.passes)
                    t.applyFilter(this, e, r, i);
                else {
                    var n = t.getFilterTexture()
                      , o = t.renderer
                      , s = e
                      , a = n;
                    this.state.blend = !1,
                    t.applyFilter(this, s, a, O.CLEAR);
                    for (var u = 1; u < this.passes - 1; u++) {
                        t.bindAndClear(s, O.BLIT),
                        this.uniforms.uSampler = a;
                        var h = a;
                        a = s,
                        s = h,
                        o.shader.bind(this),
                        o.geometry.draw(5)
                    }
                    this.state.blend = !0,
                    t.applyFilter(this, a, r, i),
                    t.returnFilterTexture(n)
                }
            }
            ,
            Object.defineProperty(e.prototype, "blur", {
                get: function() {
                    return this.strength
                },
                set: function(t) {
                    this.padding = 1 + 2 * Math.abs(t),
                    this.strength = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "quality", {
                get: function() {
                    return this._quality
                },
                set: function(t) {
                    this._quality = t,
                    this.passes = t
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        }(jr)
          , Ps = (function(t) {
            function e(e, r, i, n) {
                void 0 === e && (e = 8),
                void 0 === r && (r = 4),
                void 0 === i && (i = nt.FILTER_RESOLUTION),
                void 0 === n && (n = 5);
                var o = t.call(this) || this;
                return o.blurXFilter = new Is(!0,e,r,i,n),
                o.blurYFilter = new Is(!1,e,r,i,n),
                o.resolution = i,
                o.quality = r,
                o.blur = e,
                o.repeatEdgePixels = !1,
                o
            }
            Rs(e, t),
            e.prototype.apply = function(t, e, r, i) {
                var n = Math.abs(this.blurXFilter.strength)
                  , o = Math.abs(this.blurYFilter.strength);
                if (n && o) {
                    var s = t.getFilterTexture();
                    this.blurXFilter.apply(t, e, s, O.CLEAR),
                    this.blurYFilter.apply(t, s, r, i),
                    t.returnFilterTexture(s)
                } else
                    o ? this.blurYFilter.apply(t, e, r, i) : this.blurXFilter.apply(t, e, r, i)
            }
            ,
            e.prototype.updatePadding = function() {
                this._repeatEdgePixels ? this.padding = 0 : this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
            }
            ,
            Object.defineProperty(e.prototype, "blur", {
                get: function() {
                    return this.blurXFilter.blur
                },
                set: function(t) {
                    this.blurXFilter.blur = this.blurYFilter.blur = t,
                    this.updatePadding()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "quality", {
                get: function() {
                    return this.blurXFilter.quality
                },
                set: function(t) {
                    this.blurXFilter.quality = this.blurYFilter.quality = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "blurX", {
                get: function() {
                    return this.blurXFilter.blur
                },
                set: function(t) {
                    this.blurXFilter.blur = t,
                    this.updatePadding()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "blurY", {
                get: function() {
                    return this.blurYFilter.blur
                },
                set: function(t) {
                    this.blurYFilter.blur = t,
                    this.updatePadding()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "blendMode", {
                get: function() {
                    return this.blurYFilter.blendMode
                },
                set: function(t) {
                    this.blurYFilter.blendMode = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "repeatEdgePixels", {
                get: function() {
                    return this._repeatEdgePixels
                },
                set: function(t) {
                    this._repeatEdgePixels = t,
                    this.updatePadding()
                },
                enumerable: !1,
                configurable: !0
            })
        }(jr),
        function(t, e) {
            return (Ps = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        }
        )
          , Ms = function(t) {
            function e() {
                var e = this
                  , r = {
                    m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
                    uAlpha: 1
                };
                return (e = t.call(this, bi, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n", r) || this).alpha = 1,
                e
            }
            return function(t, e) {
                function r() {
                    this.constructor = t
                }
                Ps(t, e),
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }(e, t),
            e.prototype._loadMatrix = function(t, e) {
                void 0 === e && (e = !1);
                var r = t;
                e && (this._multiply(r, this.uniforms.m, t),
                r = this._colorMatrix(r)),
                this.uniforms.m = r
            }
            ,
            e.prototype._multiply = function(t, e, r) {
                return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15],
                t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16],
                t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17],
                t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18],
                t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4],
                t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15],
                t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16],
                t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17],
                t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18],
                t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9],
                t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15],
                t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16],
                t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17],
                t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18],
                t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14],
                t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15],
                t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16],
                t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17],
                t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18],
                t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19],
                t
            }
            ,
            e.prototype._colorMatrix = function(t) {
                var e = new Float32Array(t);
                return e[4] /= 255,
                e[9] /= 255,
                e[14] /= 255,
                e[19] /= 255,
                e
            }
            ,
            e.prototype.brightness = function(t, e) {
                var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }
            ,
            e.prototype.tint = function(t, e) {
                var r = [(t >> 16 & 255) / 255, 0, 0, 0, 0, 0, (t >> 8 & 255) / 255, 0, 0, 0, 0, 0, (255 & t) / 255, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }
            ,
            e.prototype.greyscale = function(t, e) {
                var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }
            ,
            e.prototype.blackAndWhite = function(t) {
                this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], t)
            }
            ,
            e.prototype.hue = function(t, e) {
                t = (t || 0) / 180 * Math.PI;
                var r = Math.cos(t)
                  , i = Math.sin(t)
                  , n = 1 / 3
                  , o = (0,
                Math.sqrt)(n)
                  , s = [r + (1 - r) * n, n * (1 - r) - o * i, n * (1 - r) + o * i, 0, 0, n * (1 - r) + o * i, r + n * (1 - r), n * (1 - r) - o * i, 0, 0, n * (1 - r) - o * i, n * (1 - r) + o * i, r + n * (1 - r), 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(s, e)
            }
            ,
            e.prototype.contrast = function(t, e) {
                var r = (t || 0) + 1
                  , i = -.5 * (r - 1)
                  , n = [r, 0, 0, 0, i, 0, r, 0, 0, i, 0, 0, r, 0, i, 0, 0, 0, 1, 0];
                this._loadMatrix(n, e)
            }
            ,
            e.prototype.saturate = function(t, e) {
                void 0 === t && (t = 0);
                var r = 2 * t / 3 + 1
                  , i = -.5 * (r - 1)
                  , n = [r, i, i, 0, 0, i, r, i, 0, 0, i, i, r, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(n, e)
            }
            ,
            e.prototype.desaturate = function() {
                this.saturate(-1)
            }
            ,
            e.prototype.negative = function(t) {
                this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], t)
            }
            ,
            e.prototype.sepia = function(t) {
                this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], t)
            }
            ,
            e.prototype.technicolor = function(t) {
                this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], t)
            }
            ,
            e.prototype.polaroid = function(t) {
                this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], t)
            }
            ,
            e.prototype.toBGR = function(t) {
                this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], t)
            }
            ,
            e.prototype.kodachrome = function(t) {
                this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], t)
            }
            ,
            e.prototype.browni = function(t) {
                this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], t)
            }
            ,
            e.prototype.vintage = function(t) {
                this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], t)
            }
            ,
            e.prototype.colorTone = function(t, e, r, i, n) {
                var o = ((r = r || 16770432) >> 16 & 255) / 255
                  , s = (r >> 8 & 255) / 255
                  , a = (255 & r) / 255
                  , u = ((i = i || 3375104) >> 16 & 255) / 255
                  , h = (i >> 8 & 255) / 255
                  , l = (255 & i) / 255
                  , c = [.3, .59, .11, 0, 0, o, s, a, t = t || .2, 0, u, h, l, e = e || .15, 0, o - u, s - h, a - l, 0, 0];
                this._loadMatrix(c, n)
            }
            ,
            e.prototype.night = function(t, e) {
                var r = [-2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }
            ,
            e.prototype.predator = function(t, e) {
                var r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }
            ,
            e.prototype.lsd = function(t) {
                this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], t)
            }
            ,
            e.prototype.reset = function() {
                this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1)
            }
            ,
            Object.defineProperty(e.prototype, "matrix", {
                get: function() {
                    return this.uniforms.m
                },
                set: function(t) {
                    this.uniforms.m = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "alpha", {
                get: function() {
                    return this.uniforms.uAlpha
                },
                set: function(t) {
                    this.uniforms.uAlpha = t
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        }(jr);
        Ms.prototype.grayscale = Ms.prototype.greyscale;
        var Ds = function(t, e) {
            return (Ds = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        !function(t) {
            function e(e, r) {
                var i = this
                  , n = new zt;
                return e.renderable = !1,
                (i = t.call(this, "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n", {
                    mapSampler: e._texture,
                    filterMatrix: n,
                    scale: {
                        x: 1,
                        y: 1
                    },
                    rotation: new Float32Array([1, 0, 0, 1])
                }) || this).maskSprite = e,
                i.maskMatrix = n,
                null == r && (r = 20),
                i.scale = new Ut(r,r),
                i
            }
            (function(t, e) {
                function r() {
                    this.constructor = t
                }
                Ds(t, e),
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
            )(e, t),
            e.prototype.apply = function(t, e, r, i) {
                this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite),
                this.uniforms.scale.x = this.scale.x,
                this.uniforms.scale.y = this.scale.y;
                var n = this.maskSprite.worldTransform
                  , o = Math.sqrt(n.a * n.a + n.b * n.b)
                  , s = Math.sqrt(n.c * n.c + n.d * n.d);
                0 !== o && 0 !== s && (this.uniforms.rotation[0] = n.a / o,
                this.uniforms.rotation[1] = n.b / o,
                this.uniforms.rotation[2] = n.c / s,
                this.uniforms.rotation[3] = n.d / s),
                t.applyFilter(this, e, r, i)
            }
            ,
            Object.defineProperty(e.prototype, "map", {
                get: function() {
                    return this.uniforms.mapSampler
                },
                set: function(t) {
                    this.uniforms.mapSampler = t
                },
                enumerable: !1,
                configurable: !0
            })
        }(jr);
        var Cs, Fs = function(t, e) {
            return (Fs = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        (function(t, e) {
            function r() {
                this.constructor = t
            }
            Fs(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        )((function() {
            return Cs.call(this, "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n", 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputSize;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n') || this
        }
        ), Cs = jr);
        var Ns = function(t, e) {
            return (Ns = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        !function(t) {
            function e(e, r) {
                void 0 === e && (e = .5),
                void 0 === r && (r = Math.random());
                var i = t.call(this, bi, "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n", {
                    uNoise: 0,
                    uSeed: 0
                }) || this;
                return i.noise = e,
                i.seed = r,
                i
            }
            (function(t, e) {
                function r() {
                    this.constructor = t
                }
                Ns(t, e),
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
            )(e, t),
            Object.defineProperty(e.prototype, "noise", {
                get: function() {
                    return this.uniforms.uNoise
                },
                set: function(t) {
                    this.uniforms.uNoise = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "seed", {
                get: function() {
                    return this.uniforms.uSeed
                },
                set: function(t) {
                    this.uniforms.uSeed = t
                },
                enumerable: !1,
                configurable: !0
            })
        }(jr);
        var Bs = new zt;
        se.prototype._cacheAsBitmap = !1,
        se.prototype._cacheData = null,
        se.prototype._cacheAsBitmapResolution = null,
        se.prototype._cacheAsBitmapMultisample = C.NONE;
        var Ls = function() {
            this.textureCacheId = null,
            this.originalRender = null,
            this.originalRenderCanvas = null,
            this.originalCalculateBounds = null,
            this.originalGetLocalBounds = null,
            this.originalUpdateTransform = null,
            this.originalDestroy = null,
            this.originalMask = null,
            this.originalFilterArea = null,
            this.originalContainsPoint = null,
            this.sprite = null
        };
        Object.defineProperties(se.prototype, {
            cacheAsBitmapResolution: {
                get: function() {
                    return this._cacheAsBitmapResolution
                },
                set: function(t) {
                    t !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = t,
                    this.cacheAsBitmap && (this.cacheAsBitmap = !1,
                    this.cacheAsBitmap = !0))
                }
            },
            cacheAsBitmapMultisample: {
                get: function() {
                    return this._cacheAsBitmapMultisample
                },
                set: function(t) {
                    t !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = t,
                    this.cacheAsBitmap && (this.cacheAsBitmap = !1,
                    this.cacheAsBitmap = !0))
                }
            },
            cacheAsBitmap: {
                get: function() {
                    return this._cacheAsBitmap
                },
                set: function(t) {
                    var e;
                    this._cacheAsBitmap !== t && (this._cacheAsBitmap = t,
                    t ? (this._cacheData || (this._cacheData = new Ls),
                    (e = this._cacheData).originalRender = this.render,
                    e.originalRenderCanvas = this.renderCanvas,
                    e.originalUpdateTransform = this.updateTransform,
                    e.originalCalculateBounds = this.calculateBounds,
                    e.originalGetLocalBounds = this.getLocalBounds,
                    e.originalDestroy = this.destroy,
                    e.originalContainsPoint = this.containsPoint,
                    e.originalMask = this._mask,
                    e.originalFilterArea = this.filterArea,
                    this.render = this._renderCached,
                    this.renderCanvas = this._renderCachedCanvas,
                    this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(),
                    this.render = e.originalRender,
                    this.renderCanvas = e.originalRenderCanvas,
                    this.calculateBounds = e.originalCalculateBounds,
                    this.getLocalBounds = e.originalGetLocalBounds,
                    this.destroy = e.originalDestroy,
                    this.updateTransform = e.originalUpdateTransform,
                    this.containsPoint = e.originalContainsPoint,
                    this._mask = e.originalMask,
                    this.filterArea = e.originalFilterArea))
                }
            }
        }),
        se.prototype._renderCached = function(t) {
            !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t),
            this._cacheData.sprite.transform._worldID = this.transform._worldID,
            this._cacheData.sprite.worldAlpha = this.worldAlpha,
            this._cacheData.sprite._render(t))
        }
        ,
        se.prototype._initCachedDisplayObject = function(t) {
            var e;
            if (!this._cacheData || !this._cacheData.sprite) {
                var r = this.alpha;
                this.alpha = 1,
                t.batch.flush();
                var i = this.getLocalBounds(null, !0).clone();
                if (this.filters && this.filters.length) {
                    var n = this.filters[0].padding;
                    i.pad(n)
                }
                i.ceil(nt.RESOLUTION);
                var o = t.renderTexture.current
                  , s = t.renderTexture.sourceFrame.clone()
                  , a = t.renderTexture.destinationFrame.clone()
                  , u = t.projection.transform
                  , h = Ve.create({
                    width: i.width,
                    height: i.height,
                    resolution: this.cacheAsBitmapResolution || t.resolution,
                    multisample: null !== (e = this.cacheAsBitmapMultisample) && void 0 !== e ? e : t.multisample
                })
                  , l = "cacheAsBitmap_" + Rt();
                this._cacheData.textureCacheId = l,
                we.addToCache(h.baseTexture, l),
                Ye.addToCache(h, l);
                var c = this.transform.localTransform.copyTo(Bs).invert().translate(-i.x, -i.y);
                this.render = this._cacheData.originalRender,
                t.render(this, {
                    renderTexture: h,
                    clear: !0,
                    transform: c,
                    skipUpdateTransform: !1
                }),
                t.framebuffer.blit(),
                t.projection.transform = u,
                t.renderTexture.bind(o, s, a),
                this.render = this._renderCached,
                this.updateTransform = this.displayObjectUpdateTransform,
                this.calculateBounds = this._calculateCachedBounds,
                this.getLocalBounds = this._getCachedLocalBounds,
                this._mask = null,
                this.filterArea = null,
                this.alpha = r;
                var d = new To(h);
                d.transform.worldTransform = this.transform.worldTransform,
                d.anchor.x = -i.x / i.width,
                d.anchor.y = -i.y / i.height,
                d.alpha = r,
                d._bounds = this._bounds,
                this._cacheData.sprite = d,
                this.transform._parentID = -1,
                this.parent ? this.updateTransform() : (this.enableTempParent(),
                this.updateTransform(),
                this.disableTempParent(null)),
                this.containsPoint = d.containsPoint.bind(d)
            }
        }
        ,
        se.prototype._renderCachedCanvas = function(t) {
            !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t),
            this._cacheData.sprite.worldAlpha = this.worldAlpha,
            this._cacheData.sprite._renderCanvas(t))
        }
        ,
        se.prototype._initCachedDisplayObjectCanvas = function(t) {
            if (!this._cacheData || !this._cacheData.sprite) {
                var e = this.getLocalBounds(null, !0)
                  , r = this.alpha;
                this.alpha = 1;
                var i = t.context
                  , n = t._projTransform;
                e.ceil(nt.RESOLUTION);
                var o = Ve.create({
                    width: e.width,
                    height: e.height
                })
                  , s = "cacheAsBitmap_" + Rt();
                this._cacheData.textureCacheId = s,
                we.addToCache(o.baseTexture, s),
                Ye.addToCache(o, s);
                var a = Bs;
                this.transform.localTransform.copyTo(a),
                a.invert(),
                a.tx -= e.x,
                a.ty -= e.y,
                this.renderCanvas = this._cacheData.originalRenderCanvas,
                t.render(this, {
                    renderTexture: o,
                    clear: !0,
                    transform: a,
                    skipUpdateTransform: !1
                }),
                t.context = i,
                t._projTransform = n,
                this.renderCanvas = this._renderCachedCanvas,
                this.updateTransform = this.displayObjectUpdateTransform,
                this.calculateBounds = this._calculateCachedBounds,
                this.getLocalBounds = this._getCachedLocalBounds,
                this._mask = null,
                this.filterArea = null,
                this.alpha = r;
                var u = new To(o);
                u.transform.worldTransform = this.transform.worldTransform,
                u.anchor.x = -e.x / e.width,
                u.anchor.y = -e.y / e.height,
                u.alpha = r,
                u._bounds = this._bounds,
                this._cacheData.sprite = u,
                this.transform._parentID = -1,
                this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent,
                this.updateTransform(),
                this.parent = null),
                this.containsPoint = u.containsPoint.bind(u)
            }
        }
        ,
        se.prototype._calculateCachedBounds = function() {
            this._bounds.clear(),
            this._cacheData.sprite.transform._worldID = this.transform._worldID,
            this._cacheData.sprite._calculateBounds(),
            this._bounds.updateID = this._boundsID
        }
        ,
        se.prototype._getCachedLocalBounds = function() {
            return this._cacheData.sprite.getLocalBounds(null)
        }
        ,
        se.prototype._destroyCachedDisplayObject = function() {
            this._cacheData.sprite._texture.destroy(!0),
            this._cacheData.sprite = null,
            we.removeFromCache(this._cacheData.textureCacheId),
            Ye.removeFromCache(this._cacheData.textureCacheId),
            this._cacheData.textureCacheId = null
        }
        ,
        se.prototype._cacheAsBitmapDestroy = function(t) {
            this.cacheAsBitmap = !1,
            this.destroy(t)
        }
        ,
        se.prototype.name = null,
        he.prototype.getChildByName = function(t, e) {
            for (var r = 0, i = this.children.length; r < i; r++)
                if (this.children[r].name === t)
                    return this.children[r];
            if (e)
                for (r = 0,
                i = this.children.length; r < i; r++) {
                    var n = this.children[r];
                    if (n.getChildByName) {
                        var o = n.getChildByName(t, !0);
                        if (o)
                            return o
                    }
                }
            return null
        }
        ,
        se.prototype.getGlobalPosition = function(t, e) {
            return void 0 === t && (t = new Ut),
            void 0 === e && (e = !1),
            this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x,
            t.y = this.position.y),
            t
        }
        ;
        var Gs = function() {
            function t() {}
            return t.init = function(t) {
                var e = this;
                Object.defineProperty(this, "resizeTo", {
                    set: function(t) {
                        globalThis.removeEventListener("resize", this.queueResize),
                        this._resizeTo = t,
                        t && (globalThis.addEventListener("resize", this.queueResize),
                        this.resize())
                    },
                    get: function() {
                        return this._resizeTo
                    }
                }),
                this.queueResize = function() {
                    e._resizeTo && (e.cancelResize(),
                    e._resizeId = requestAnimationFrame((function() {
                        return e.resize()
                    }
                    )))
                }
                ,
                this.cancelResize = function() {
                    e._resizeId && (cancelAnimationFrame(e._resizeId),
                    e._resizeId = null)
                }
                ,
                this.resize = function() {
                    if (e._resizeTo) {
                        var t, r;
                        if (e.cancelResize(),
                        e._resizeTo === globalThis.window)
                            t = globalThis.innerWidth,
                            r = globalThis.innerHeight;
                        else {
                            var i = e._resizeTo;
                            t = i.clientWidth,
                            r = i.clientHeight
                        }
                        e.renderer.resize(t, r)
                    }
                }
                ,
                this._resizeId = null,
                this._resizeTo = null,
                this.resizeTo = t.resizeTo || null
            }
            ,
            t.destroy = function() {
                globalThis.removeEventListener("resize", this.queueResize),
                this.cancelResize(),
                this.cancelResize = null,
                this.queueResize = null,
                this.resizeTo = null,
                this.resize = null
            }
            ,
            t.extension = le.Application,
            t
        }()
          , Us = function() {
            function t(e) {
                var r = this;
                this.stage = new he,
                e = Object.assign({
                    forceCanvas: !1
                }, e),
                this.renderer = function(t) {
                    return yi.create(t)
                }(e),
                t._plugins.forEach((function(t) {
                    t.init.call(r, e)
                }
                ))
            }
            return t.registerPlugin = function(t) {
                Ot("6.5.0", "Application.registerPlugin() is deprecated, use extensions.add()"),
                fe.add({
                    type: le.Application,
                    ref: t
                })
            }
            ,
            t.prototype.render = function() {
                this.renderer.render(this.stage)
            }
            ,
            Object.defineProperty(t.prototype, "view", {
                get: function() {
                    return this.renderer.view
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "screen", {
                get: function() {
                    return this.renderer.screen
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.destroy = function(e, r) {
                var i = this
                  , n = t._plugins.slice(0);
                n.reverse(),
                n.forEach((function(t) {
                    t.destroy.call(i)
                }
                )),
                this.stage.destroy(r),
                this.stage = null,
                this.renderer.destroy(e),
                this.renderer = null
            }
            ,
            t._plugins = [],
            t
        }();
        fe.handleByList(le.Application, Us._plugins),
        fe.add(Gs);
        var ks = function(t, e) {
            return (ks = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        };
        function Xs(t, e) {
            function r() {
                this.constructor = t
            }
            ks(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        var Hs = function(t) {
            function e(e, r, i, n) {
                void 0 === e && (e = 100),
                void 0 === r && (r = 100),
                void 0 === i && (i = 10),
                void 0 === n && (n = 10);
                var o = t.call(this) || this;
                return o.segWidth = i,
                o.segHeight = n,
                o.width = e,
                o.height = r,
                o.build(),
                o
            }
            return Xs(e, t),
            e.prototype.build = function() {
                for (var t = this.segWidth * this.segHeight, e = [], r = [], i = [], n = this.segWidth - 1, o = this.segHeight - 1, s = this.width / n, a = this.height / o, u = 0; u < t; u++) {
                    var h = u % this.segWidth
                      , l = u / this.segWidth | 0;
                    e.push(h * s, l * a),
                    r.push(h / n, l / o)
                }
                var c = n * o;
                for (u = 0; u < c; u++) {
                    var d = u % n
                      , p = u / n | 0
                      , f = p * this.segWidth + d
                      , _ = p * this.segWidth + d + 1
                      , m = (p + 1) * this.segWidth + d
                      , v = (p + 1) * this.segWidth + d + 1;
                    i.push(f, _, m, _, v, m)
                }
                this.buffers[0].data = new Float32Array(e),
                this.buffers[1].data = new Float32Array(r),
                this.indexBuffer.data = new Uint16Array(i),
                this.buffers[0].update(),
                this.buffers[1].update(),
                this.indexBuffer.update()
            }
            ,
            e
        }(us)
          , js = function(t) {
            function e(e, r, i) {
                void 0 === e && (e = 200),
                void 0 === i && (i = 0);
                var n = t.call(this, new Float32Array(4 * r.length), new Float32Array(4 * r.length), new Uint16Array(6 * (r.length - 1))) || this;
                return n.points = r,
                n._width = e,
                n.textureScale = i,
                n.build(),
                n
            }
            return Xs(e, t),
            Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this._width
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.build = function() {
                var t = this.points;
                if (t) {
                    var e = this.getBuffer("aVertexPosition")
                      , r = this.getBuffer("aTextureCoord")
                      , i = this.getIndex();
                    if (!(t.length < 1)) {
                        e.data.length / 4 !== t.length && (e.data = new Float32Array(4 * t.length),
                        r.data = new Float32Array(4 * t.length),
                        i.data = new Uint16Array(6 * (t.length - 1)));
                        var n = r.data
                          , o = i.data;
                        n[0] = 0,
                        n[1] = 0,
                        n[2] = 0,
                        n[3] = 1;
                        for (var s = 0, a = t[0], u = this._width * this.textureScale, h = t.length, l = 0; l < h; l++) {
                            var c = 4 * l;
                            if (this.textureScale > 0) {
                                var d = a.x - t[l].x
                                  , p = a.y - t[l].y
                                  , f = Math.sqrt(d * d + p * p);
                                a = t[l],
                                s += f / u
                            } else
                                s = l / (h - 1);
                            n[c] = s,
                            n[c + 1] = 0,
                            n[c + 2] = s,
                            n[c + 3] = 1
                        }
                        var _ = 0;
                        for (l = 0; l < h - 1; l++)
                            c = 2 * l,
                            o[_++] = c,
                            o[_++] = c + 1,
                            o[_++] = c + 2,
                            o[_++] = c + 2,
                            o[_++] = c + 1,
                            o[_++] = c + 3;
                        r.update(),
                        i.update(),
                        this.updateVertices()
                    }
                }
            }
            ,
            e.prototype.updateVertices = function() {
                var t = this.points;
                if (!(t.length < 1)) {
                    for (var e, r = t[0], i = 0, n = 0, o = this.buffers[0].data, s = t.length, a = 0; a < s; a++) {
                        var u = t[a]
                          , h = 4 * a;
                        n = -((e = a < t.length - 1 ? t[a + 1] : u).x - r.x),
                        i = e.y - r.y;
                        var l = Math.sqrt(i * i + n * n)
                          , c = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
                        i /= l,
                        n /= l,
                        i *= c,
                        n *= c,
                        o[h] = u.x + i,
                        o[h + 1] = u.y + n,
                        o[h + 2] = u.x - i,
                        o[h + 3] = u.y - n,
                        r = u
                    }
                    this.buffers[0].update()
                }
            }
            ,
            e.prototype.update = function() {
                this.textureScale > 0 ? this.build() : this.updateVertices()
            }
            ,
            e
        }(us)
          , Ys = (function(t) {
            function e(e, r, i) {
                void 0 === i && (i = 0);
                var n = this
                  , o = new js(e.height,r,i)
                  , s = new as(e);
                return i > 0 && (e.baseTexture.wrapMode = S.REPEAT),
                (n = t.call(this, o, s) || this).autoUpdate = !0,
                n
            }
            Xs(e, t),
            e.prototype._render = function(e) {
                var r = this.geometry;
                (this.autoUpdate || r._width !== this.shader.texture.height) && (r._width = this.shader.texture.height,
                r.update()),
                t.prototype._render.call(this, e)
            }
        }(ss),
        function(t) {
            function e(e, r, i) {
                var n = this
                  , o = new Hs(e.width,e.height,r,i)
                  , s = new as(Ye.WHITE);
                return (n = t.call(this, o, s) || this).texture = e,
                n.autoResize = !0,
                n
            }
            return Xs(e, t),
            e.prototype.textureUpdated = function() {
                this._textureID = this.shader.texture._updateID;
                var t = this.geometry
                  , e = this.shader.texture
                  , r = e.width
                  , i = e.height;
                !this.autoResize || t.width === r && t.height === i || (t.width = this.shader.texture.width,
                t.height = this.shader.texture.height,
                t.build())
            }
            ,
            Object.defineProperty(e.prototype, "texture", {
                get: function() {
                    return this.shader.texture
                },
                set: function(t) {
                    this.shader.texture !== t && (this.shader.texture = t,
                    this._textureID = -1,
                    t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this))
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype._render = function(e) {
                this._textureID !== this.shader.texture._updateID && this.textureUpdated(),
                t.prototype._render.call(this, e)
            }
            ,
            e.prototype.destroy = function(e) {
                this.shader.texture.off("update", this.textureUpdated, this),
                t.prototype.destroy.call(this, e)
            }
            ,
            e
        }(ss))
          , Vs = (function(t) {
            function e(e, r, i, n, o) {
                void 0 === e && (e = Ye.EMPTY);
                var s = this
                  , a = new us(r,i,n);
                a.getBuffer("aVertexPosition").static = !1;
                var u = new as(e);
                return (s = t.call(this, a, u, null, o) || this).autoUpdate = !0,
                s
            }
            Xs(e, t),
            Object.defineProperty(e.prototype, "vertices", {
                get: function() {
                    return this.geometry.getBuffer("aVertexPosition").data
                },
                set: function(t) {
                    this.geometry.getBuffer("aVertexPosition").data = t
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype._render = function(e) {
                this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(),
                t.prototype._render.call(this, e)
            }
        }(ss),
        function(t) {
            function e(e, r, i, n, o) {
                void 0 === r && (r = 10),
                void 0 === i && (i = 10),
                void 0 === n && (n = 10),
                void 0 === o && (o = 10);
                var s = t.call(this, Ye.WHITE, 4, 4) || this;
                return s._origWidth = e.orig.width,
                s._origHeight = e.orig.height,
                s._width = s._origWidth,
                s._height = s._origHeight,
                s._leftWidth = r,
                s._rightWidth = n,
                s._topHeight = i,
                s._bottomHeight = o,
                s.texture = e,
                s
            }
            Xs(e, t),
            e.prototype.textureUpdated = function() {
                this._textureID = this.shader.texture._updateID,
                this._refresh()
            }
            ,
            Object.defineProperty(e.prototype, "vertices", {
                get: function() {
                    return this.geometry.getBuffer("aVertexPosition").data
                },
                set: function(t) {
                    this.geometry.getBuffer("aVertexPosition").data = t
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.updateHorizontalVertices = function() {
                var t = this.vertices
                  , e = this._getMinScale();
                t[9] = t[11] = t[13] = t[15] = this._topHeight * e,
                t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e,
                t[25] = t[27] = t[29] = t[31] = this._height
            }
            ,
            e.prototype.updateVerticalVertices = function() {
                var t = this.vertices
                  , e = this._getMinScale();
                t[2] = t[10] = t[18] = t[26] = this._leftWidth * e,
                t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e,
                t[6] = t[14] = t[22] = t[30] = this._width
            }
            ,
            e.prototype._getMinScale = function() {
                var t = this._leftWidth + this._rightWidth
                  , e = this._width > t ? 1 : this._width / t
                  , r = this._topHeight + this._bottomHeight
                  , i = this._height > r ? 1 : this._height / r;
                return Math.min(e, i)
            }
            ,
            Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this._width
                },
                set: function(t) {
                    this._width = t,
                    this._refresh()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return this._height
                },
                set: function(t) {
                    this._height = t,
                    this._refresh()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "leftWidth", {
                get: function() {
                    return this._leftWidth
                },
                set: function(t) {
                    this._leftWidth = t,
                    this._refresh()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "rightWidth", {
                get: function() {
                    return this._rightWidth
                },
                set: function(t) {
                    this._rightWidth = t,
                    this._refresh()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "topHeight", {
                get: function() {
                    return this._topHeight
                },
                set: function(t) {
                    this._topHeight = t,
                    this._refresh()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "bottomHeight", {
                get: function() {
                    return this._bottomHeight
                },
                set: function(t) {
                    this._bottomHeight = t,
                    this._refresh()
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype._refresh = function() {
                var t = this.texture
                  , e = this.geometry.buffers[1].data;
                this._origWidth = t.orig.width,
                this._origHeight = t.orig.height;
                var r = 1 / this._origWidth
                  , i = 1 / this._origHeight;
                e[0] = e[8] = e[16] = e[24] = 0,
                e[1] = e[3] = e[5] = e[7] = 0,
                e[6] = e[14] = e[22] = e[30] = 1,
                e[25] = e[27] = e[29] = e[31] = 1,
                e[2] = e[10] = e[18] = e[26] = r * this._leftWidth,
                e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth,
                e[9] = e[11] = e[13] = e[15] = i * this._topHeight,
                e[17] = e[19] = e[21] = e[23] = 1 - i * this._bottomHeight,
                this.updateHorizontalVertices(),
                this.updateVerticalVertices(),
                this.geometry.buffers[0].update(),
                this.geometry.buffers[1].update()
            }
        }(Ys),
        function(t, e) {
            return (Vs = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            )(t, e)
        }
        );
        !function(t) {
            function e(e, r) {
                void 0 === r && (r = !0);
                var i = t.call(this, e[0]instanceof Ye ? e[0] : e[0].texture) || this;
                return i._textures = null,
                i._durations = null,
                i._autoUpdate = r,
                i._isConnectedToTicker = !1,
                i.animationSpeed = 1,
                i.loop = !0,
                i.updateAnchor = !1,
                i.onComplete = null,
                i.onFrameChange = null,
                i.onLoop = null,
                i._currentTime = 0,
                i._playing = !1,
                i._previousFrame = null,
                i.textures = e,
                i
            }
            (function(t, e) {
                function r() {
                    this.constructor = t
                }
                Vs(t, e),
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
            )(e, t),
            e.prototype.stop = function() {
                this._playing && (this._playing = !1,
                this._autoUpdate && this._isConnectedToTicker && (ve.shared.remove(this.update, this),
                this._isConnectedToTicker = !1))
            }
            ,
            e.prototype.play = function() {
                this._playing || (this._playing = !0,
                this._autoUpdate && !this._isConnectedToTicker && (ve.shared.add(this.update, this, de.HIGH),
                this._isConnectedToTicker = !0))
            }
            ,
            e.prototype.gotoAndStop = function(t) {
                this.stop();
                var e = this.currentFrame;
                this._currentTime = t,
                e !== this.currentFrame && this.updateTexture()
            }
            ,
            e.prototype.gotoAndPlay = function(t) {
                var e = this.currentFrame;
                this._currentTime = t,
                e !== this.currentFrame && this.updateTexture(),
                this.play()
            }
            ,
            e.prototype.update = function(t) {
                if (this._playing) {
                    var e = this.animationSpeed * t
                      , r = this.currentFrame;
                    if (null !== this._durations) {
                        var i = this._currentTime % 1 * this._durations[this.currentFrame];
                        for (i += e / 60 * 1e3; i < 0; )
                            this._currentTime--,
                            i += this._durations[this.currentFrame];
                        var n = Math.sign(this.animationSpeed * t);
                        for (this._currentTime = Math.floor(this._currentTime); i >= this._durations[this.currentFrame]; )
                            i -= this._durations[this.currentFrame] * n,
                            this._currentTime += n;
                        this._currentTime += i / this._durations[this.currentFrame]
                    } else
                        this._currentTime += e;
                    this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0),
                    this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1),
                    this.onComplete && this.onComplete()) : r !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < r || this.animationSpeed < 0 && this.currentFrame > r) && this.onLoop(),
                    this.updateTexture())
                }
            }
            ,
            e.prototype.updateTexture = function() {
                var t = this.currentFrame;
                this._previousFrame !== t && (this._previousFrame = t,
                this._texture = this._textures[t],
                this._textureID = -1,
                this._textureTrimmedID = -1,
                this._cachedTint = 16777215,
                this.uvs = this._texture._uvs.uvsFloat32,
                this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor),
                this.onFrameChange && this.onFrameChange(this.currentFrame))
            }
            ,
            e.prototype.destroy = function(e) {
                this.stop(),
                t.prototype.destroy.call(this, e),
                this.onComplete = null,
                this.onFrameChange = null,
                this.onLoop = null
            }
            ,
            e.fromFrames = function(t) {
                for (var r = [], i = 0; i < t.length; ++i)
                    r.push(Ye.from(t[i]));
                return new e(r)
            }
            ,
            e.fromImages = function(t) {
                for (var r = [], i = 0; i < t.length; ++i)
                    r.push(Ye.from(t[i]));
                return new e(r)
            }
            ,
            Object.defineProperty(e.prototype, "totalFrames", {
                get: function() {
                    return this._textures.length
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "textures", {
                get: function() {
                    return this._textures
                },
                set: function(t) {
                    if (t[0]instanceof Ye)
                        this._textures = t,
                        this._durations = null;
                    else {
                        this._textures = [],
                        this._durations = [];
                        for (var e = 0; e < t.length; e++)
                            this._textures.push(t[e].texture),
                            this._durations.push(t[e].time)
                    }
                    this._previousFrame = null,
                    this.gotoAndStop(0),
                    this.updateTexture()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "currentFrame", {
                get: function() {
                    var t = Math.floor(this._currentTime) % this._textures.length;
                    return t < 0 && (t += this._textures.length),
                    t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "playing", {
                get: function() {
                    return this._playing
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "autoUpdate", {
                get: function() {
                    return this._autoUpdate
                },
                set: function(t) {
                    t !== this._autoUpdate && (this._autoUpdate = t,
                    !this._autoUpdate && this._isConnectedToTicker ? (ve.shared.remove(this.update, this),
                    this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (ve.shared.add(this.update, this),
                    this._isConnectedToTicker = !0))
                },
                enumerable: !1,
                configurable: !0
            })
        }(To),
        fe.add(Ni, Vi, ji, Hn, Wo, Ii, ts, Es, xn, Nn, Bn, $o, ge, hn);
        class Ws {
            constructor(t, e, r=1, i=!1, n=!1, o=!1) {
                this.key = t,
                this.sound = e,
                this.volume = r,
                this.loop = i,
                this.exclude = n,
                this.isBgSound = o,
                this.playOnEnd = ""
            }
        }
        window.HowlerSoundManager = {
            sounds: {},
            muteSound: !0,
            gameName: null,
            isSoundControllerOpen: !1,
            canOpenSoundSettings: !1,
            isBgSoundPlaying: !1,
            isGameSoundsPlaying: !1,
            init(e, r, i=!1) {
                this.gameName = r,
                t.Howler.autoUnlock = !1,
                t.Howler.mute(this.muteSound),
                document.addEventListener("visibilitychange", (e=>{
                    "visible" === document.visibilityState ? t.Howler.mute(this.muteSound) : t.Howler.mute(!0)
                }
                )),
                this.getSoundStateToLocalStorage(),
                this.addListeners(),
                this.initGlobalSoundEvents(),
                this.addSounds(e)
            },
            addListeners() {
                $(".volume").on("pointerdown", (()=>{
                    if (it.any && this.canOpenSoundSettings)
                        return 1 == this.isSoundControllerOpen ? (this.isSoundControllerOpen = !1,
                        $("#game-audio-controllers").removeClass("open")) : (this.isSoundControllerOpen = !0,
                        $("#game-audio-controllers").addClass("open")),
                        this.checkSoundSwichButtonStates(),
                        this.muteBackgroundSound(),
                        void this.muteGameSoundsSound();
                    this.muteSound = !this.muteSound,
                    t.Howler.mute(this.muteSound),
                    this.updateVolumeIndicator(),
                    this.setSoundStateToLocalStorage(),
                    this.isBgSoundPlaying = this.isGameSoundsPlaying = !this.muteSound,
                    this.checkSoundSwichButtonStates(),
                    this.muteBackgroundSound(),
                    this.muteGameSoundsSound()
                }
                )),
                it.any || ($(".volume").on("mouseover", (()=>{
                    this.canOpenSoundSettings && (this.isSoundControllerOpen = !0,
                    $("#game-audio-controllers").addClass("open"))
                }
                )),
                $("#game-audio-controllers").on("mouseleave", (t=>{
                    this.isSoundControllerOpen = !1,
                    $("#game-audio-controllers").removeClass("open")
                }
                ))),
                $("#soundOn").on("click", (()=>{
                    this.muteSound = !1,
                    t.Howler.mute(this.muteSound),
                    this.isBgSoundPlaying || this.isGameSoundsPlaying || (this.isBgSoundPlaying = !0,
                    this.isGameSoundsPlaying = !0),
                    this.updateVolumeIndicator(),
                    this.setSoundStateToLocalStorage(),
                    this.play("make-bet"),
                    this.checkSoundSwichButtonStates(),
                    this.muteBackgroundSound(),
                    this.muteGameSoundsSound(),
                    $("#soundPopup").hide()
                }
                )),
                $("#soundOff").on("click", (()=>{
                    this.muteSound = !0,
                    t.Howler.mute(this.muteSound),
                    this.isBgSoundPlaying = !1,
                    this.isGameSoundsPlaying = !1,
                    this.updateVolumeIndicator(),
                    this.setSoundStateToLocalStorage(),
                    this.checkSoundSwichButtonStates(),
                    $("#soundPopup").hide()
                }
                )),
                $("#background-audio-controller").on("click", (()=>{
                    this.isBgSoundPlaying = !this.isBgSoundPlaying,
                    this.isBgSoundPlaying && (this.muteSound = !1,
                    t.Howler.mute(this.muteSound)),
                    this.updateVolumeIndicator(),
                    this.muteBackgroundSound(),
                    this.setSoundStateToLocalStorage(),
                    this.checkSoundSwichButtonStates()
                }
                )),
                $("#game-audio-controller").on("click", (()=>{
                    this.isGameSoundsPlaying = !this.isGameSoundsPlaying,
                    this.isGameSoundsPlaying && (this.muteSound = !1,
                    t.Howler.mute(this.muteSound)),
                    this.updateVolumeIndicator(),
                    this.muteGameSoundsSound(),
                    this.setSoundStateToLocalStorage(),
                    this.checkSoundSwichButtonStates()
                }
                ))
            },
            initGlobalSoundEvents() {
                $(".checkbox-wrapper label").on("click", (t=>{
                    this.play("autoplay")
                }
                )),
                $(".bet-button").on("click", (()=>{
                    $(".bet-button").blur(),
                    this.play("make-bet")
                }
                )),
                $(".cashout-button").on("click", (()=>{
                    this.play("money-pickup")
                }
                )),
                $(".bet-fixed-amount-wrapper").on("click", (()=>{
                    this.play("button-click")
                }
                )),
                $(".next-round-bet").on("click", (()=>{
                    this.play("make-bet")
                }
                )),
                $(".cancel-next-round-bet").on("click", (()=>{
                    this.play("cancel-bet")
                }
                )),
                $(".chat-header").on("click", (()=>{
                    this.play("button-click")
                }
                )),
                $(".my-bets-header .tab").on("click", (()=>{
                    this.play("button-click")
                }
                )),
                $(".wallet-wrapper").on("click", (()=>{
                    this.play("button-click")
                }
                ))
            },
            getSoundStateToLocalStorage() {
                try {
                    const e = JSON.parse(localStorage.getItem(this.gameName + "-howler-sound-muted"));
                    this.isBgSoundPlaying = JSON.parse(localStorage.getItem(this.gameName + "-howler-background-sound-playing")),
                    this.isGameSoundsPlaying = JSON.parse(localStorage.getItem(this.gameName + "-howler-game-sounds-playing")),
                    null === e ? (this.muteSound = !0,
                    this.setSoundStateToLocalStorage()) : this.muteSound = e,
                    t.Howler.mute(this.muteSound),
                    this.updateVolumeIndicator()
                } catch (e) {
                    this.muteSound = !0,
                    t.Howler.mute(this.muteSound)
                } finally {
                    this.muteSound = !0,
                    t.Howler.mute(this.muteSound)
                }
                this.checkSoundSwichButtonStates(),
                this.muteBackgroundSound(),
                this.muteGameSoundsSound()
            },
            setSoundStateToLocalStorage() {
                try {
                    localStorage.setItem(`${this.gameName}-howler-sound-muted`, this.muteSound),
                    localStorage.setItem(`${this.gameName}-howler-background-sound-playing`, this.isBgSoundPlaying),
                    localStorage.setItem(`${this.gameName}-howler-game-sounds-playing`, this.isGameSoundsPlaying)
                } catch (t) {}
            },
            checkSoundSwichButtonStates() {
                this.isBgSoundPlaying ? $("#background-audio-controller .switch-button").addClass("active") : $("#background-audio-controller .switch-button").removeClass("active"),
                this.isGameSoundsPlaying ? $("#game-audio-controller .switch-button").addClass("active") : $("#game-audio-controller .switch-button").removeClass("active"),
                this.isBgSoundPlaying || this.isGameSoundsPlaying || (this.muteSound = !0,
                t.Howler.mute(this.muteSound),
                this.updateVolumeIndicator())
            },
            addSounds(e) {
                e && e.forEach((e=>{
                    this.sounds[e.key] = {
                        key: e.key,
                        sound: new t.Howl({
                            src: [e.sound + `?version=${UGG.BUILD_ID}`],
                            volume: e.volume,
                            loop: e.loop,
                            onend: ()=>{
                                this.logSounds(e.key, "ended"),
                                "" != e.playOnEnd && this.play(e.key, !1)
                            }
                        }),
                        volume: e.volume,
                        loop: e.loop,
                        exclude: e.exclude,
                        isBgSound: e.isBgSound
                    }
                }
                ))
            },
            replaceSound(e, r, i=1) {
                const n = this.sounds[e];
                n && (n.sound = new t.Howl({
                    src: r,
                    volume: i,
                    loop: n.loop
                }))
            },
            muteBackgroundSound() {
                for (const t in this.sounds)
                    this.sounds[t].isBgSound && this.sounds[t].sound.mute(!this.isBgSoundPlaying)
            },
            muteGameSoundsSound() {
                for (const t in this.sounds)
                    this.sounds[t].isBgSound || this.sounds[t].sound.mute(!this.isGameSoundsPlaying)
            },
            play(t, e=!0) {
                e && this.stopAll(),
                this.sounds[t].sound.playing() ? (this.sounds[t].sound.seek(0),
                this.logSounds(t, "play")) : (this.sounds[t].sound.play(),
                this.logSounds(t, "play"))
            },
            stopAll() {
                for (const t in this.sounds)
                    this.sounds[t].exclude || this.stop(t)
            },
            stop(t) {
                const e = this.sounds[t].sound;
                e && e.playing() && (e.pause(),
                e.seek(0),
                this.logSounds(t, "stop"))
            },
            updateVolumeIndicator() {
                this.muteSound ? $(".volume").addClass("muted") : $(".volume").removeClass("muted")
            },
            activateSoundSettingsPopup(t=!1) {
                this.canOpenSoundSettings = t
            },
            logSounds(t, e) {
                if ("enabled" == UGG.queryString.logsounds) {
                    const r = $("#log")
                      , i = $(`<span class="${e}">sound: '${t}' action: ${e}</span>`);
                    r.prepend(i),
                    $("span:nth-child(200)", r).nextAll().remove()
                }
            }
        },
        function() {
            let t = null
              , e = null
              , r = null
              , i = null
              , n = t=>{
                let e = {
                    index: t,
                    betID: null,
                    amount: 0,
                    autoCashoutOdd: null,
                    autoBet: !1,
                    nextRoundBet: !1,
                    cashoutProcessing: !1,
                    currentBet: function() {
                        return UGG.getGameState().Bets.find((t=>t.GUID == this.betID))
                    },
                    isCashouted: function() {
                        let t = currentBet();
                        return t && t.Finished
                    },
                    reset: function() {
                        this.betID = null,
                        this.amount = 0,
                        this.autoCashoutOdd = null,
                        this.nextRoundBet = !1,
                        this.cashoutProcessing = !1
                    }
                };
                return e.reset(),
                e.betWrapper = $(`.bet-setting:nth-child(${e.index + 1})`),
                e
            }
            ;
            const o = [n(0), n(1)];
            function s(t, e) {
                $(".error-wrapper", t).find(".error").html(e).end().show(),
                setTimeout((function() {
                    !function(t) {
                        $(".error-wrapper", t).hide().find(".error").html("")
                    }(t)
                }
                ), 5e3)
            }
            function a(t) {
                if (!UGG.getUser())
                    return;
                if (!e)
                    return;
                t = parseInt(t);
                let r = !e.fn && e.n > 0
                  , i = o[t];
                if ($(".bet-button", i.betWrapper).hide().removeClass("loading"),
                $(".cashout-button", i.betWrapper).hide().removeClass("loading"),
                $("button.cancel-next-round-bet", i.betWrapper).hide(),
                $("button.next-round-bet", i.betWrapper).hide(),
                $(".cashout-button .button-cashout-amount", i.betWrapper).empty(),
                $(".auto-cashout", i.betWrapper).addClass("disabled"),
                i.betID)
                    $(".cashout-button", i.betWrapper).show().prop("disabled", !1),
                    h(t),
                    u($(".bet-wrapper", i.betWrapper), !0),
                    $(".bet-fixed-amount-wrapper", i.betWrapper).addClass("disabled"),
                    $(".collect-amount-wrapper", i.betWrapper).addClass("disabled");
                else if (r)
                    i.betWrapper.removeClass("accept-bet"),
                    i.nextRoundBet ? ($("button.cancel-next-round-bet", i.betWrapper).show(),
                    u($(".bet-wrapper", i.betWrapper), !0),
                    $(".bet-fixed-amount-wrapper", i.betWrapper).addClass("disabled"),
                    $(".collect-amount-wrapper", i.betWrapper).addClass("disabled")) : ($("button.next-round-bet", i.betWrapper).show(),
                    $(".auto-cashout", i.betWrapper).removeClass("disabled"),
                    u($(".bet-wrapper", i.betWrapper), !1),
                    $(".bet-fixed-amount-wrapper", i.betWrapper).removeClass("disabled"),
                    $(".collect-amount-wrapper", i.betWrapper).removeClass("disabled"));
                else {
                    let t = !e.fn && null == e.n;
                    $(".bet-button", i.betWrapper).show().prop("disabled", !t),
                    t && (i.betWrapper.addClass("accept-bet"),
                    $(".auto-cashout", i.betWrapper).removeClass("disabled"),
                    u($(".bet-wrapper", i.betWrapper), !1),
                    $(".bet-fixed-amount-wrapper", i.betWrapper).removeClass("disabled"),
                    $(".collect-amount-wrapper", i.betWrapper).removeClass("disabled"))
                }
            }
            function u(t, e) {
                e ? (t.addClass("disabled"),
                $("input", t).attr("disabled", "disabled")) : (t.removeClass("disabled"),
                $("input", t).removeAttr("disabled", "disabled"))
            }
            function h(t) {
                const r = o[t];
                if (r.betID) {
                    var i = r.currentBet();
                    if (r.cashoutProcessing)
                        $(".cashout-button .button-cashout-amount", r.betWrapper).text(""),
                        $(".cashout-button span.button-cashout-currency", r.betWrapper).text("");
                    else {
                        var n = i.BetAmount * Math.max(e.n, 1)
                          , s = UGG.getGameState().MaxProfit + i.BetAmount;
                        n > s && (n = s),
                        $(".cashout-button .button-cashout-amount", r.betWrapper).text(GetNumStr(n)),
                        $(".cashout-button span.button-cashout-currency", r.betWrapper).text(i.CurrencyCode)
                    }
                }
            }
            function l(t) {
                if (!e)
                    return;
                let r = o[t];
                if (r.betID)
                    return;
                if (r.reset(),
                r.amount = Number($("input[name=bet-amount]", r.betWrapper).val()),
                r.amount > UGG.getActiveWallet().Amount)
                    return void UI.showInsufficientBalance(!0);
                r.autoCashoutOdd = null;
                const i = UGG.getBetLimits();
                r.amount || ($("input[name=bet-amount]", r.betWrapper).val(i.MinBet),
                r.amount = Number(i.MinBet)),
                $(".bet-button", r.betWrapper).addClass("loading"),
                $(".auto-cashout", r.betWrapper).addClass("disabled"),
                $("input[name=auto-cashout]", r.betWrapper).is(":checked") && (r.autoCashoutOdd = Number(parseFloat($("input[name=auto-cashout-coef]", r.betWrapper).val())),
                (!r.autoCashoutOdd || r.autoCashoutOdd <= 1) && (r.autoCashoutOdd = null)),
                r.nextRoundBet = e.n,
                r.nextRoundBet ? a(t) : UGG.createGameBetAsync({
                    BetAmount: r.amount,
                    SpinID: e.sp,
                    Params: {
                        ac: r.autoCashoutOdd
                    }
                }).then((i=>{
                    $(".bet-button", r.betWrapper).removeClass("loading"),
                    r.betID = i.Bet.GUID,
                    r.nextRoundBet = !1,
                    e.sp == i.Bet.SpinID ? a(t) : (console.log(JSON.stringify(e), JSON.stringify(r), JSON.stringify(i.Bet)),
                    o[t].betID = null)
                }
                )).catch((t=>{
                    UI.drawError(t),
                    $(".bet-button", r.betWrapper).removeClass("loading");
                    let e = "can_not_make_bet";
                    "string" == typeof t.message ? e = t.message : "string" == typeof t.DBError && (e = t.DBError);
                    let i = TRANS.byAnyKey(`error_${e}`);
                    s(r.betWrapper, i)
                }
                ))
            }
            function c(t) {
                if (!e)
                    return;
                let r = o[t];
                if (!r.betID)
                    return r.reset(),
                    void a(t);
                r.cashoutProcessing || ($(".cashout-button", r.betWrapper).addClass("loading"),
                r.cashoutProcessing = !0,
                UGG.createGameStepAsync({
                    BetID: r.betID,
                    Params: {}
                }).then((e=>{
                    $(".cashout-button", r.betWrapper).removeClass("loading"),
                    r.reset(),
                    a(t)
                }
                )).catch(UI.drawError))
            }
            function d() {
                clearInterval(r),
				alert("Se3.");
                r = null,
                a(0),
                a(1),
                $(".crash-anim").removeClass("animated"),
                $(".result").removeClass("animated").empty(),
                $(".bet-loader").removeClass("visible"),
                $(".dino").show(),
                $(".current-num").text(1),
                $(".layer.background").addClass("animated").css("transform", ""),
                $(".layer.landscape").addClass("animated").css("transform", ""),
                $(".layer.rocks").addClass("animated").css("transform", ""),
                $(".layer.ground").addClass("animated").css("transform", ""),
                HowlerSoundManager.play("bg-music", !1, !0),
                HowlerSoundManager.play("dino-steps", !1, !0),
                _()
            }
            function p() {
                HowlerSoundManager.stop("bg-music"),
				o[1].betID = null,
				 a(0),
				  a(1),
				  e.n && ($(".crash-anim").addClass("animated"),
                $(".crash-anim-container").addClass("animated"),
                $(".result").addClass("animated").text(e.n.toFixed(2) + "X"),
                HowlerSoundManager.play("game-finish"),
                clearTimeout(i),
                i = null,
                setTimeout(f, 500))
				
            }
            function f() {
				
                function t(t) {
					
                    var e = $(".layer." + t)
                      , r = (e.css("transform").split(",")[4] || "").trim() || 0;
                    e.removeClass("animated"),
                    e.css("transform", `translateX(${r}px)`)
                }
                t("background"),
                t("landscape"),
                t("rocks"),
                t("ground"),
                $(".dino").hide()
            }
            function _() {
                i = setTimeout((()=>{
                    HowlerSoundManager.play("dino-sound-" + UI.getRandomInt(1, 2), !1),
                    _()
                }
                ), 1e3 * UI.getRandomInt(1, 6))
            }
            const m = ()=>{
                if (!e)
                    return;
                let t = UGG.getGameState();
                for (let e = 0; e < t.Bets.length; e++) {
                    let r = t.Bets[e]
                      , i = o[e];
                    i.amount = r.BetAmount,
                    i.autoCashoutOdd = r.CurrentState.ac,
                    i.betID = r.GUID,
                    $("input[name=bet-amount]", i.betWrapper).val(i.amount),
                    i.autoCashoutOdd && $("input[name=auto-cashout-coef]", i.betWrapper).val(i.autoCashoutOdd + "x"),
                    $("input[name=auto-cashout]", i.betWrapper).prop("checked", i.autoCashoutOdd > 0),
                    a(e)
                }
            }
            ;
            !function() {
                $(".game-container .dino").hide();
                const i = $(".current-bets")[0];
                var n, s = $(i).data("body");
                $(".tab-body").hide(),
                $("." + s).show(),
                $(".rightbar").addClass("hidden"),
                $(".current-bets-wrappe .section-body").addClass("active"),
                "complete" == document.readyState ? $(".game-container .screen-loader").removeClass("visible") : window.addEventListener("load", (function() {
                    $(".game-container .screen-loader").removeClass("visible")
                }
                )),
                UGG.initAsync({
                    GameName: "dino",
                    DisplayName: "Dino",
                    HasSettings: !0
                }).then((()=>{
                    CANVAS_EMITTER.emit(CANVAS_EMITTER.RESOURCES_LOADED, {}),
                    t = UGG.getUser(),
                    $(".bet-wrapper .input-amount input").trigger("change")
                }
                )).catch(UI.drawError),
                n = !1,
                function t() {
                    if (n) {
                        $(".asteroid.small").remove();
                        let t = $("<div class='asteroid small'></div>")
                          , e = $(".game-container").width() / 1.5 * Math.random();
                        t.css("left", Math.floor(e) + "px"),
                        $(".game-container").append(t)
                    }
                    var e = Math.floor(1500 + 3e3 * Math.random());
                    setTimeout(t, e)
                }(),
                function t() {
                    if (n) {
                        $(".asteroid.big").remove();
                        let t = $("<div class='asteroid big'></div>")
                          , e = $(".game-container").height() / 2 * Math.random();
                        t.css("top", Math.floor(e) + "px"),
                        $(".game-container").append(t)
                    }
                    n = !0;
                    var e = Math.floor(2e3 + 4e3 * Math.random());
                    setTimeout(t, e)
                }(),
                UGG.on("game.spin.set", (function(t) {
                    let i = !e;
                    var n, s = e;
                    s && s.sp < t.sp && (s.fn || p(),
                    s = null),
                    e = t,
                    i && m();
                    for (let t = 0; t < 2; t++) {
                        let r = o[t]
                          , i = r.currentBet();
                        i && i.SpinID != e.sp && (r.betID = null,
                        a(t))
                    }
                    if (!e.fn && !e.n)
                        return s || function() {
                            a(0),
                            a(1),
                            f(),
                            $(".current-num").empty(),
                            $(".crash-anim").removeClass("animated"),
                            $(".crash-anim-container").removeClass("animated"),
                            $(".result").removeClass("animated").empty(),
                            $(".bet-loader").addClass("visible"),
                            $(".current-bets-container tbody").empty();
                            for (let t = 0; t < 2; t++) {
                                let e = o[t];
                                (e.nextRoundBet || e.autoBet) && l(t)
                            }
                            r && clearInterval(r)
                        }(),
                        n = e.tm / (1e3 * e.bs) * 100,
                        n = Math.max(Math.min(Math.ceil(n), 100), 0),
                        $(".bet-loader .percent").text(n + "%"),
                        void $(".bet-loader .loader-line .filled").css("width", n + "%");
                    !e.n || e.fn || s && null != s.n || d(),
                    e.n && !e.fn && ($(".current-num").text(GetNumStr(e.n) + "x"),
                    h(0),
                    h(1),
                    function() {
                        if (null != e)
                            for (let t = 0; t < 2; t++) {
                                let r = o[t];
								
                                if (null !== r.betID && !r.cashoutProcessing) {
                                         c(t);
                                        continue
                                    $(".cashout-button").click(),
                                    r.autoCashoutOdd && e.n >= r.autoCashoutOdd && c(t)
                                }
                            }
                    }()),
					 
					 
						 
                    !e.fn || s && s.fn || (1 == e.n && d(),
					 p())
                }
                )),
                UGG.on("msg.history", (function(t) {
                    var e = $("section.prev-numbers .list-wrapper ul").empty()
                      , r = $("#popup-dino-spins .popup-body ul").empty();
                    t.forEach((function(t) {
                        var i = $(`<li>${GetNumStr(t.n)}</li>`);
                        t.n < 3 ? i.addClass("low") : t.n <= 10 ? i.addClass("middle") : i.addClass("high"),
                        e.append(i),
                        r.append(i.clone())
                    }
                    ))
                }
                )),
                UGG.on("msg.bets.current", (function(t) {
                    UI.drawCurrentBets(t)
                }
                )),
                UGG.on("game.settings", (function(t) {
                    console.log("game.settings", t);
                    var e = UGG.getBetLimits()
                      , r = ""
                      , i = "<ul>";
                    let n = t.FastBets || t.Fastbets;
                    if (n && n.forEach((t=>{
                        r = 0 !== t.Amount && (t.Amount < e.MinBet || e.MaxBet < t.Amount) ? "limited" : "",
                        i += `<li amount='${t.Amount}' class='${r}'>${t.DisplayName}</li>`
                    }
                    )),
                    i += "</ul>",
                    $(".bet-fixed-amount-wrapper").html(i),
                    e.MinBet === e.MaxBet)
                        $('[name="bet-amount"]').val(e.MinBet).addClass("disabled").trigger("change");
                    else if ($('[name="bet-amount"]').removeClass("disabled").trigger("change"),
                    n && n.length > 0) {
                        let t = parseFloat(n[0].Amount);
                        t && (t < e.MinBet && (t = e.MinBet),
                        $('[name="bet-amount"]').val(t).trigger("change"))
                    }
                    var o = UGG.getActiveWallet();
                    o && o.FreeBet && o.FreeBet.IsValid && $('input[name="bet-amount"]').val(e.MinBet).trigger("change"),
                    $(".cancel-next-round-bet:visible").trigger("click")
                }
                ))
            }(),
            HowlerSoundManager.activateSoundSettingsPopup(!0),
            HowlerSoundManager.addSounds([new Ws("bg-music","dino/assets/sounds/bg-music.mp3",1,!0,!0,!0), new Ws("dino-steps","dino/assets/sounds/dino-steps.mp3"), new Ws("game-finish","dino/assets/sounds/game-finish.mp3"), new Ws("dino-sound-1","dino/assets/sounds/dino-sound-1.mp3"), new Ws("dino-sound-2","dino/assets/sounds/dino-sound-2.mp3")]),
            function() {
                $(".error-wrapper").on("click", (function() {
                    $(this).hide().find(".error").html("")
                }
                )),
                $(".bet-button").on("click", (function() {
                    let t = $(this).closest(".bet-setting").data("index");
                    s(o[0], "can't make bet"),
                    l(t)
                }
                )),
                $(".cashout-button").on("click", (function() {
                    c($(this).closest(".bet-setting").data("index"))
                }
                )),
                $("button.btn.cancel-next-round-bet").on("click", (function() {
                    let t = $(this).closest(".bet-setting").data("index");
                    o[t].nextRoundBet = !1,
                    a(t)
                }
                )),
                $("button.next-round-bet").on("click", (function() {
                    l($(this).closest(".bet-setting").data("index"))
                }
                )),
                $('.bet-setting [name="auto-bet"]').on("click", (function() {
                    let t = $(this).closest(".bet-setting").data("index");
                    o[t].autoBet = $(this).is(":checked")
                }
                )),
                $(".bet-setting .bet-fixed-amount-wrapper").on("click", "li", (function() {
                    if ($(this).hasClass("limited"))
                        return;
                    const e = $(this).closest(".bet-setting")
                      , r = $(this).closest(".bet-setting").data("index")
                      , i = o[r];
                    let n = parseFloat($(this).attr("amount"));
                    if (0 == n && t) {
                        const t = UGG.getActiveWallet();
                        t && t.Amount && (n = t.Amount)
                    }
                    if (n && !isNaN(n)) {
                        var s = UGG.getBetLimits();
                        s && (n > s.MaxBet && (n = s.MaxBet),
                        n < s.MinBet && (n = s.MinBet)),
                        i.amount = n,
                        $('input[name="bet-amount"]', e).val(i.amount).trigger("change")
                    }
                }
                ));
                var e = 0;
                $(".prev-numbers .arrow").on("click", (function() {
                    var t = $(this);
                    t.hasClass("disabled") || (t.hasClass("left") ? e-- : e > 0 && e++,
                    $(".prev-numbers ul li").width(),
                    $(".prev-numbers ul").css("transform", `translateX(${5.1 * e}rem)`),
                    $(".prev-numbers ul").offset().left,
                    $(".prev-numbers .list-wrapper").offset().left,
                    $(".prev-numbers .material-icons.right").offset().left)
                }
                )),
                $(".prev-numbers .list-wrapper").on("click", (function() {
                    $("#popup-dino-spins").fadeIn("fast")
                }
                )),
                $(".prev-numbers .last-100 .popup-close").on("click", (function() {
                    $("#popup-dino-spins").fadeOut("fast")
                }
                )),
                $("main section.left-content input[type=number]").on("keydown", (function(t) {
                    ("e" == t.key || "." == t.key && ~this.value.indexOf(".")) && t.preventDefault()
                }
                )),
                $(".bet-wrapper .input-amount input").on("change", (t=>{
                    const e = $(t.currentTarget);
                    e.val(parseFloat(e.val()).toFixed(2)),
                    $(".input-overlay .input-val", e.closest(".input-amount")).text(e.val()),
                    $(".input-overlay .input-val-ending", e.closest(".input-amount")).text(UGG.getActiveWallet().CurrencyCode)
                }
                )),
                $("input[name=auto-cashout-coef]").each((function() {
                    let t = 5;
                    const e = $(this);
                    e.on("keyup", (function() {
                        var t = e.val();
                        t && t == t.replace(",", ".") || e.val(t.replace(",", "."))
                    }
                    )).on("focus touchstart", (function() {
                        const e = $(this);
                        let r = parseFloat(e.val());
                        e.attr("type", "decimal"),
                        r ? r += "x" : r = "",
                        t = r,
                        e.val("")
                    }
                    )).on("blur", (function() {
                        const e = $(this);
                        let r = parseFloat(e.val());
                        e.attr("type", "text");
                        const i = UGG.getBetLimits()
                          , n = i.MaxProfit / i.MinBet;
                        r = Math.min(r, n),
                        r && r > 1 ? r += "x" : r = t || 1.01,
                        e.val(r)
                    }
                    ))
                }
                )),
                $(".collect-amount-wrapper .input-amount .minus").on("click", (function() {
                    const t = $(this).closest(".input-amount").find("input");
                    let e = parseFloat(t.val().replace("x", ""));
                    e -= .5,
                    e = Math.floor(10 * e) / 10,
                    e < 1.01 && (e = 1.01),
                    t.val(e + "x").trigger("change")
                }
                )),
                $(".collect-amount-wrapper .input-amount .plus").on("click", (function() {
                    const t = $(this).closest(".input-amount").find("input");
                    let e = parseFloat(t.val().replace("x", ""));
                    e += .5,
                    e = Math.floor(10 * e) / 10;
                    const r = UGG.getBetLimits()
                      , i = r.MaxProfit / r.MinBet;
                    e = Math.min(e, i),
                    t.val(e + "x").trigger("change")
                }
                )),
                $(".betting-inputs-toggle-container").on("click", (function() {
                    if ($(this).toggleClass("closed"),
                    $(".wrapper-left", $(this).closest(".bet-setting")).toggleClass("closed"),
                    console.log($(this).closest(".wrapper-left")),
                    $(this).hasClass("closed")) {
                        const t = $(".bet-wrapper input[type='number']", $(this).closest(".bet-setting")).val();
                        $(".btn-amount-wrapper", $(this).closest(".bet-setting")).show(),
                        $(".bet-button b.value", $(this).closest(".bet-setting")).text(t),
                        $(".btn.next-round-bet .value", $(this).closest(".bet-setting")).text(t)
                    } else
                        $(".btn-amount-wrapper", $(this).closest(".bet-setting")).hide(),
                        $(".bet-button b.value", $(this).closest(".bet-setting")).text(""),
                        $(".btn.next-round-bet .value", $(this).closest(".bet-setting")).text("")
                }
                )),
                $("#rgButton").on("click", (()=>{
                    $("#popup-rg").show()
                }
                ))
            }()
        }()
    }
    )()
}
)();
