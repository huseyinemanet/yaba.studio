/*

	A P P L I C A T I O N

	http://yaba.studio

	Project:			yaba.studio
	Project URL:			http://yaba.studio
	Author:				Huseyin Emanet
	Version:			1.0
	Tested On:			Chrome, Safari, Firefox
	File ID:			application.js

	Designed and handcrafted by yaba.studio
	All files, unless otherwise stated, are released under the GNU General Public License
	version 3.0 (http://www.gnu.org/licenses/gpl-3.0.html)

*/

(function () {

	"use strict";

	var YABA = YABA || {};

	YABA.UI = function () {
		YABA.InitSequences();
	}

	// Init Sequences
	YABA.InitSequences = function () {

		"use strict";

		var transitionLayer = $(".yaba-transition-layer"),
			transitionBackground = transitionLayer.children(),
			modalWindow = $(".yaba-modal"),
			frameProportion = 1.78,
			frames = 20,
			resize = false;

		setLayerDimensions();
		$(window).on("resize", function () {
			if (!resize) {
				resize = true;
				(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300): window.requestAnimationFrame(setLayerDimensions);
			}
		});

		$(function () {
			transitionLayer.addClass("visible opening");
			var delay = ($(".no-cssanimations").length > 0) ? 0 : 600;
			setTimeout(function () {
				modalWindow.addClass("visible");
			}, delay);
		});

		function setLayerDimensions() {

			var windowWidth = $(window).width(),
				windowHeight = $(window).height(),
				layerHeight, layerWidth;

			if (windowWidth / windowHeight > frameProportion) {
				layerWidth = windowWidth;
				layerHeight = layerWidth / frameProportion;
			} else {
				layerHeight = windowHeight * 1.2;
				layerWidth = layerHeight * frameProportion;
			}

			transitionBackground.css({
				"width": layerWidth * frames + "px",
				"height": layerHeight + "px"
			});

			resize = false;

		}

	}

	YABA.UI();

})();