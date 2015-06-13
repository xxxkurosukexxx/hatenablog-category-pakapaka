<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>
(function($){
    $(function(){
        var parent$ = $('.hatena-module-category'),
            cUl$ = $('<ul></ul>').addClass('cUl').hide(),
            lUl$ = $('<ul></ul>').addClass('lUl').hide(),
            fUl$ = $('<ul></ul>').addClass('fUl').hide(),
            parentLi$ = $('<li></li>')
                            .append($('<div class="archive-module-button"><span class="archive-module-hide-button">▼</span><span class="archive-module-show-button">▶</span></div>'))
                            .append($('<span></span>').addClass('categoryParent'));

        parent$.find('li').each(function() {
                 if ($(this).text().trim().match(/^\[C\].*/)) { cUl$.append($(this).clone(true)); $(this).remove(); }
            else if ($(this).text().trim().match(/^\[L\].*/)) { lUl$.append($(this).clone(true)); $(this).remove(); }
            else if ($(this).text().trim().match(/^\[F\].*/)) { fUl$.append($(this).clone(true)); $(this).remove(); }
        });

        parent$.find('ul.hatena-urllist')
            .append(
                parentLi$.clone().find('.categoryParent').text('Cameras').end()
                    .append(cUl$)
                    .click(function(){
                        cUl$.slideToggle();
                        $(this).find('.archive-module-button span').toggle();
                    })
            ).append(
                parentLi$.clone().find('.categoryParent').text('Lens').end()
                    .append(lUl$)
                    .click(function(){
                        lUl$.slideToggle();
                        $(this).find('.archive-module-button span').toggle();
                    })
            ).append(
                parentLi$.clone().find('.categoryParent').text('Films').end()
                    .append(fUl$)
                    .click(function(){
                        fUl$.slideToggle();
                        $(this).find('.archive-module-button span').toggle();
                    })
            );

    })
})(jQuery);
</script>
