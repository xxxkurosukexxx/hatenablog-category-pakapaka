<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>
(function($){
    $(function(){
        var parent$ = $('.hatena-module-category'),
            cUl$ = $('<ul></ul>').addClass('cUl'),
            lUl$ = $('<ul></ul>').addClass('lUl'),
            fUl$ = $('<ul></ul>').addClass('fUl');
        parent$.find('li').each(function() {
                 if ($(this).text().match(/\[C\].*/)) { cUl$.append($(this).clone(true)); $(this).remove(); }
            else if ($(this).text().match(/\[L\].*/)) { lUl$.append($(this).clone(true)); $(this).remove(); }
            else if ($(this).text().match(/\[F\].*/)) { fUl$.append($(this).clone(true)); $(this).remove(); }
        });
        parent$.find('ul.hatena-urllist')
        .append(
              $('<li><div class="archive-module-button"><span class="archive-module-hide-button">▼</span><span class="archive-module-show-button">▶</span></div> Camera</li>')
                .append(cUl$)
                .click(function(){
                    cUl$.slideToggle();
                    $(this).find('.archive-module-button span').toggle();
                })
        ).append(
            $('<li><div class="archive-module-button"><span class="archive-module-hide-button">▼</span><span class="archive-module-show-button">▶</span></div> Lens</li>')
                .append(lUl$)
                .click(function(){
                    lUl$.slideToggle();
                    $(this).find('.archive-module-button span').toggle();
                })
        ).append(
            $('<li><div class="archive-module-button"><span class="archive-module-hide-button">▼</span><span class="archive-module-show-button">▶</span></div> Film</li>')
                .append(fUl$)
                .click(function(){
                    fUl$.slideToggle();
                    $(this).find('.archive-module-button span').toggle();
                })
        );
    })
})(jQuery);
</script>
