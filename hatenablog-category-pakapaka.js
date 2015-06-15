(function($) {
    /**
     * はてなブログのカテゴリ一覧モジュールを階層っぽくしてぱかぱかするやつ
     *
     * @author xxxkurosukexxx <info [at] kurosuke.org>
     * @license MIT
     *
     * Example:
     *
     * $('.hatena-module-category').pakapaka({
     *     config: [
     *         { regex: /^\[C\]/, title: 'Camera', open: true },
     *         { regex: /^\[F\]/, title: 'Films' }
     *     ]
     * });
     *
     */

    $.fn.pakapaka = function (option) {
        var $this = this,
            config,
            _config,
            $_target,
            $parentLi = $('<li></li>')
                            .append($('<div class="archive-module-button"><span class="archive-module-hide-button">▼</span><span class="archive-module-show-button">▶</span></div>'))
                            .append($('<span></span>').addClass('pakapakaParent')),
            $ulTpl = $('<ul></ul>').addClass('pakapaka'),
            $_parentLi,
            $_ul,
            $_li,
            _lT;

        if (option.config === undefined || ! $.isArray(option.config)) {
            return $this;
        }

        config = option.config;

        return $this.each(function () {
            $_target = $(this);

            $.each(config, function() {
                _config = this;
                $_ul = $ulTpl.clone(true);

                $_target.find('li').each(function () {
                    $_li = $(this);
                    _lT = $_li.text().trim();

                    if (_lT.match(_config.regex)) {
                        $_ul.append($_li.clone(true));
                        $_li.remove();
                    }

                }); //---each-li

                $_parentLi = $parentLi.clone(true)
                                .find('.pakapakaParent').text(_config.name).end()
                                .append($_ul)
                                .click(function () {
                                    $(this).find('ul.pakapaka').slideToggle();
                                    $(this).find('.archive-module-button span').toggle();
                                });
                if (_config.open !== undefined && _config.open === true) {
                    $_parentLi
                        .find('.archive-module-hide-button').show().end()
                        .find('.archive-module-show-button').hide().end()
                        .find('ul.pakapaka').show();
                } else {
                    $_parentLi
                        .find('.archive-module-hide-button').hide().end()
                        .find('.archive-module-show-button').show().end()
                        .find('ul.pakapaka').hide();
                }

                $_target.find('ul.hatena-urllist').append($_parentLi);

            }); //---each-config

        }); //---each-this

    };

})(jQuery);
