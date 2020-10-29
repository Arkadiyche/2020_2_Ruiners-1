(function () {
  const { template } = Handlebars;
  const templates = Handlebars.templates = Handlebars.templates || {};
  templates.Button = template({
    compiler: [8, '>= 4.3.0'],
    main(container, depth0, helpers, partials, data) {
      let helper; const alias1 = depth0 != null ? depth0 : (container.nullContext || {}); const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.escapeExpression; const
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };

      return `<button class="${
        alias4(((helper = (helper = lookupProperty(helpers, 'classname') || (depth0 != null ? lookupProperty(depth0, 'classname') : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
          name: 'classname', hash: {}, data, loc: { start: { line: 1, column: 15 }, end: { line: 1, column: 30 } },
        }) : helper)))
      }">${
        alias4(((helper = (helper = lookupProperty(helpers, 'text') || (depth0 != null ? lookupProperty(depth0, 'text') : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
          name: 'text', hash: {}, data, loc: { start: { line: 1, column: 32 }, end: { line: 1, column: 42 } },
        }) : helper)))
      }</button>`;
    },
    useData: true,
  });
}());

(function () {
  const { template } = Handlebars;
  const templates = Handlebars.templates = Handlebars.templates || {};
  templates.Window = template({
    compiler: [8, '>= 4.3.0'],
    main(container, depth0, helpers, partials, data) {
      return '<div class="okno" id="okno">\n</div>';
    },
    useData: true,
  });
}());

(function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['FilmCard'] = template({"1":function(container,depth0,helpers,partials,data) {
            return "                        <a href=\"#\" class=\"link\"> "
                + container.escapeExpression(container.lambda(depth0, depth0))
                + " </a>\n";
        },"3":function(container,depth0,helpers,partials,data) {
            return "                        <a href=\"#\" class=\"link\">"
                + container.escapeExpression(container.lambda(depth0, depth0))
                + " </a>\n";
        },"5":function(container,depth0,helpers,partials,data) {
            return "                    "
                + container.escapeExpression(container.lambda(depth0, depth0))
                + ",\n";
        },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
            var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
                if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                    return parent[propertyName];
                }
                return undefined
            };

            return "<div class=\"poster\">\n    <div class=\"header\">\n        <a href=\"#\" class=\"header-link\">\n            <b>"
                + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":26}}}) : helper)))
                + "</b>\n        </a>\n    </div>\n    <div class=\"poster-body\">\n        <div class=\"left-block\">\n                <iframe width=\"560\" height=\"315\" src=\""
                + alias4(((helper = (helper = lookupProperty(helpers,"youtube") || (depth0 != null ? lookupProperty(depth0,"youtube") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"youtube","hash":{},"data":data,"loc":{"start":{"line":9,"column":54},"end":{"line":9,"column":67}}}) : helper)))
                + "\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n            <div> <span class=\"rating\">Рейтинг: "
                + alias4(((helper = (helper = lookupProperty(helpers,"rate") || (depth0 != null ? lookupProperty(depth0,"rate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rate","hash":{},"data":data,"loc":{"start":{"line":10,"column":48},"end":{"line":10,"column":58}}}) : helper)))
                + "</span><span class=\"votes\">"
                + alias4(((helper = (helper = lookupProperty(helpers,"votes") || (depth0 != null ? lookupProperty(depth0,"votes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"votes","hash":{},"data":data,"loc":{"start":{"line":10,"column":85},"end":{"line":10,"column":96}}}) : helper)))
                + " голосов</span></div>\n            "
                + ((stack1 = ((helper = (helper = lookupProperty(helpers,"Button") || (depth0 != null ? lookupProperty(depth0,"Button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Button","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":26}}}) : helper))) != null ? stack1 : "")
                + "\n            <a>⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐</a>\n        </div>\n        <div class=\"right-block\">\n            <div class=\"desc\">\n                "
                + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":33}}}) : helper)))
                + "\n            </div>\n            <div class=\"desc info\">\n                <div>\n                    <b>Жанр:</b>\n"
                + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"genres") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":23,"column":29}}})) != null ? stack1 : "")
                + "                </div>\n                <div class=\"roles\">\n                    <b>В ролях:</b>\n"
                + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"actors") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":29,"column":29}}})) != null ? stack1 : "")
                + "                </div>\n"
                + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"countries") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":16},"end":{"line":33,"column":25}}})) != null ? stack1 : "")
                + "            </div>\n        </div>\n    </div>\n</div>";
        },"useData":true});
})();

(function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['FilmPoster'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
            var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
                if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                    return parent[propertyName];
                }
                return undefined
            };

            return "<div class=\"lenta__object\">\n    <a href=\"film/"
                + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":26}}}) : helper)))
                + "\" class=\"href\" id=\""
                + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":45},"end":{"line":2,"column":53}}}) : helper)))
                + "\"><img width=\"270\" height=\"420\" src=\""
                + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":2,"column":90},"end":{"line":2,"column":101}}}) : helper)))
                + "\" alt=\"\" class=\"object__image\">\n        <div class=\"object__hidden\"><span>"
                + alias4(((helper = (helper = lookupProperty(helpers,"genre") || (depth0 != null ? lookupProperty(depth0,"genre") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre","hash":{},"data":data,"loc":{"start":{"line":3,"column":42},"end":{"line":3,"column":53}}}) : helper)))
                + ", "
                + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":3,"column":55},"end":{"line":3,"column":65}}}) : helper)))
                + " год</span></div>\n    </a>\n    <div class=\"image__text\"> "
                + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":41}}}) : helper)))
                + " </div>\n</div>";
        },"useData":true});
})();

(function () {
  const { template } = Handlebars;
  const templates = Handlebars.templates = Handlebars.templates || {};
  templates.FilmLenta = template({
    1(container, depth0, helpers, partials, data) {
      let stack1;

      return `        ${
        (stack1 = container.lambda(depth0, depth0)) != null ? stack1 : ''
      }\n`;
    },
    compiler: [8, '>= 4.3.0'],
    main(container, depth0, helpers, partials, data) {
      let stack1; let helper; const alias1 = depth0 != null ? depth0 : (container.nullContext || {}); const
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };

      return `<h1 class="main__header">${
        container.escapeExpression(((helper = (helper = lookupProperty(helpers, 'genre') || (depth0 != null ? lookupProperty(depth0, 'genre') : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === 'function' ? helper.call(alias1, {
          name: 'genre', hash: {}, data, loc: { start: { line: 1, column: 25 }, end: { line: 1, column: 36 } },
        }) : helper)))
      }</h1>\n<div class="header__lenta">\n${
        (stack1 = lookupProperty(helpers, 'each').call(alias1, (depth0 != null ? lookupProperty(depth0, 'posters') : depth0), {
          name: 'each', hash: {}, fn: container.program(1, data, 0), inverse: container.noop, data, loc: { start: { line: 3, column: 4 }, end: { line: 5, column: 13 } },
        })) != null ? stack1 : ''
      }</div>`;
    },
    useData: true,
  });
}());
