(function ($) {
    $(document).ready(function () {
        $.get(Drupal.settings.tingSeoFulltext.url, null, SearchExpansionResults);
    });

    var SearchExpansionResults = function (response) {
        $("#ting-seo-fulltext").html(response);
    }

})(jQuery);
