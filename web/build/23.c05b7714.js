;(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    876: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ProfilePage', function () {
          return o
        })
      var a = n(0),
        l = n.n(a),
        r = n(3),
        m = n.n(r),
        i = n(2),
        c = n(63),
        o = function (e) {
          var t = e.state,
            n = e.setState,
            a = t.name,
            r = t.username,
            m = t.avt,
            o = t.cover,
            E = t.dob,
            d = t.gender,
            s = t.grade,
            g = t.address,
            h = t.quotes,
            b = t.position,
            T = t.tab,
            C = (t.title, t.missions)
          return l.a.createElement(
            i.Page,
            null,
            l.a.createElement(
              i.Page.MapHeader,
              null,
              l.a.createElement(u, { src: o })
            ),
            l.a.createElement(
              i.Page.Main,
              null,
              l.a.createElement(
                i.Grid.Row,
                null,
                l.a.createElement(
                  i.Grid.Col,
                  { md: 4 },
                  l.a.createElement(
                    i.Profile,
                    {
                      name: a,
                      backgroundURL: o,
                      avatarURL: m,
                      twitterURL: 'ntheanh201'
                    },
                    l.a.createElement('strong', null, b),
                    l.a.createElement('br', null),
                    h
                  )
                ),
                l.a.createElement(
                  i.Grid.Col,
                  { md: 8 },
                  l.a.createElement(
                    c.a,
                    { statusColor: 'blue' },
                    l.a.createElement(
                      c.d,
                      null,
                      l.a.createElement(
                        c.f,
                        null,
                        T ? 'Nhiệm vụ hàng tháng' : 'Thông tin cá nhân'
                      ),
                      l.a.createElement(
                        c.e,
                        null,
                        l.a.createElement(i.Form.Switch, {
                          value: T ? 1 : 0,
                          className: 'm-0',
                          onClick: function () {
                            return n({ tab: !T })
                          }
                        })
                      )
                    ),
                    l.a.createElement(
                      c.b,
                      null,
                      T
                        ? l.a.createElement(function () {
                            return l.a.createElement(
                              i.Table,
                              {
                                responsive: !0,
                                highlightRowOnHover: !0,
                                hasOutline: !0,
                                verticalAlign: 'center',
                                cards: !0,
                                className: 'text-nowrap'
                              },
                              l.a.createElement(
                                i.Table.Header,
                                null,
                                l.a.createElement(
                                  i.Table.Row,
                                  null,
                                  l.a.createElement(
                                    i.Table.ColHeader,
                                    null,
                                    'Tên nhiệm vụ'
                                  ),
                                  l.a.createElement(
                                    i.Table.ColHeader,
                                    null,
                                    'Trạng thái'
                                  ),
                                  l.a.createElement(
                                    i.Table.ColHeader,
                                    { alignContent: 'center' },
                                    l.a.createElement('i', {
                                      className: 'icon-settings'
                                    })
                                  )
                                )
                              ),
                              l.a.createElement(
                                i.Table.Body,
                                null,
                                C.map(function (e) {
                                  var t = e.id,
                                    n = e.content,
                                    a = e.completed
                                  return l.a.createElement(
                                    i.Table.Row,
                                    { key: t },
                                    l.a.createElement(
                                      i.Table.Col,
                                      null,
                                      l.a.createElement('div', null, n)
                                    ),
                                    l.a.createElement(
                                      i.Table.Col,
                                      null,
                                      l.a.createElement(
                                        'strong',
                                        null,
                                        a ? 'Hoàn thành' : 'Chưa hoàn thành'
                                      )
                                    ),
                                    l.a.createElement(
                                      i.Table.Col,
                                      { alignContent: 'center' },
                                      l.a.createElement(i.Icon, {
                                        link: !0,
                                        name: 'check'
                                      })
                                    )
                                  )
                                })
                              )
                            )
                          }, null)
                        : l.a.createElement(function () {
                            return l.a.createElement(
                              i.Timeline,
                              null,
                              l.a.createElement(i.Timeline.Item, {
                                title: 'Họ và tên: ' + a,
                                badgeColor: 'red'
                              }),
                              l.a.createElement(i.Timeline.Item, {
                                title: 'Username: ' + r,
                                badge: !0
                              }),
                              l.a.createElement(i.Timeline.Item, {
                                title: 'Ngày tháng năm sinh: ' + E,
                                badgeColor: 'blue'
                              }),
                              l.a.createElement(i.Timeline.Item, {
                                title: 'Giới tính: ' + d,
                                badgeColor: 'yellow'
                              }),
                              l.a.createElement(i.Timeline.Item, {
                                title: 'Khoá: ' + s,
                                badgeColor: 'wheat'
                              }),
                              l.a.createElement(i.Timeline.Item, {
                                title: 'Quê quán: ' + g,
                                badge: !0
                              }),
                              l.a.createElement(i.Timeline.Item, {
                                title: 'Châm ngôn yêu thích: ' + h,
                                badgeColor: 'green'
                              })
                            )
                          }, null)
                    )
                  )
                )
              )
            )
          )
        },
        u = m.a.img.withConfig({
          displayName: 'ProfilePage__Cover',
          componentId: 'sc-1ji7bfp-0'
        })(['width:100%;height:100%;object-fit:cover;'])
    }
  }
])
