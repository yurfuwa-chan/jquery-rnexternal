(function() {
	 $.fn.extend({
		external: function(options) {
			var opts, self;
			self = $.fn.external;
		 	opts = $.extend({}, self.default_options, options);
			return $(this).each(function(i, el) {
				self.init(el, opts);
			});
		}
	 });
	$.extend($.fn.external, {
		default_options: {
			host:""
		},
		init: function(el, opts) {
			console.log(el)
			$(el).addClass(opts.className);	
		}
	});
	$(function(){
		var opts = {
			host:location.host.match(/(?!w*\.).+/),
			className:"external"
		}
		//hrefに先頭で#つかず、hostを含まず、かつimgを含まないa要素
		$("a[href]:not([href=''],[href^=#],[href*='"+opts.host+"'],:has(img))").external(opts);
	});
}).call(this);

