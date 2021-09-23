$(function() {
    //-------------------------
    // 共通処理
    //-------------------------

    $('pre').replaceWith(function() {
      $(this).replaceWith("<pre><code>"+$(this).html()+"</code></pre>")
    });

    //-------------------------
    // ページごとの処理
    //-------------------------

    if (document.URL.match("FontAwesome")) {
        $icons = $('.icon-list i[class^=fa]');
        $icons.on({
            'mouseover': function() {
                $('.icon-view').html($(this).prop('outerHTML')).css({'font-size': '90px'});
                $('.icon-tag').text($(this).prop('outerHTML'));
                $(this).css({
                    'color': '#66ffff',
                    'background-color': '#6666ff'
                });
            },
            'mouseleave': function() {
                $(this).css({
                    'color': '',
                    'background-color': ''
                });
            },
            'click': function() {
                navigator.clipboard.writeText($('.icon-tag').text()).then(function() {
                    alert('コピーしました。');
                })
            },
        });
    }

    if (document.URL.match("vue.js")) {
        $('#vue-sample').append(`
            <p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="YzVMWpN" data-user="nop892371" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
              <span>See the Pen <a href="https://codepen.io/nop892371/pen/YzVMWpN">
              vue-sample</a> by nop892371 (<a href="https://codepen.io/nop892371">@nop892371</a>)
              on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
            <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
            `);

        $('#vue-sample2').append(`
            <p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="MWmNZWP" data-user="nop892371" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
              <span>See the Pen <a href="https://codepen.io/nop892371/pen/MWmNZWP">
              </a> by nop892371 (<a href="https://codepen.io/nop892371">@nop892371</a>)
              on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
            <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
            `);
    }

    hljs.initHighlightingOnLoad();
});
