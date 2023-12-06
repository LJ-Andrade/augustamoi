/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ({

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

//
// |--------------------------------------------------------------------------
// | Navigation
// |--------------------------------------------------------------------------
//
$('#navfull-top-btn, #navfull-bottom-btn').click(function () {
    toggleNav();
});

window.toggleNav = function () {
    var nav = $('.MobileNavigation');
    var body = $('body');
    var trigger = $('#navfull-top-btn');
    var bottomTrigger = $('#navfull-bottom-btn');
    var contentText = $('.content-effect');

    if (nav.hasClass('navfull-active')) {
        nav.removeClass('navfull-active');
        trigger.removeClass('navfull-top-active');
        bottomTrigger.removeClass('navfull-bottom-active');
        body.css('overflow', 'auto');
        contentText.hide();
    } else {
        nav.addClass('navfull-active');
        trigger.addClass('navfull-top-active');
        bottomTrigger.addClass('navfull-bottom-active');
        body.css('overflow', 'hidden');
        contentText.fadeIn(500);
    }
};

// Loaders
// -------------------------------------------
$(".loader-on-change").on('change', function () {
    $('#full-loader').removeClass('Hidden');
    return true;
});

$(".loader-on-submit").on('submit', function () {
    $('#full-loader').removeClass('Hidden');
    return true;
});

$('.dont-submit-on-enter, .dson').keypress(function (e) {
    console.log("ENTER");
    if (e.which == 13) return false;
    if (e.which == 13) e.preventDefault();
});

window.loaderBars = function (action) {

    var loader = $('#LoaderBars');

    if (action) {
        loader.removeClass('Hidden');
    } else {
        loader.addClass('Hidden');
    }
};

// Store Filters
// -------------------------------------------

window.collapseFilter = function (elem) {
    var filter = elem.siblings('ul');
    if (filter.hasClass('collapsed')) {
        filter.removeClass('collapsed');
        filter.show(100);
        elem.html('-');
    } else {
        filter.addClass('collapsed');
        filter.hide(100);
        elem.html('+');
    }
};

// Modify cart item quantity 
// -------------------------------------------
$('.InputBtnQ').on('change keyup', function () {
    //  Original Article Price
    var value = $(this).siblings('.ArticlePrice').val();
    // Quantity
    var quantity = $(this).val();
    // Ner Value
    var newValue = value * quantity;
    // New Price Target
    var newPriceTarget = $(this).parent().parent().parent().siblings('.TotalItemPrice');

    console.log(value, quantity, newValue);
    modifyCartItemQ($(this), newPriceTarget, newValue);
});

function modifyCartItemQ(e, newPriceTarget, newValue) {
    e.siblings('.InputBtnQ').removeClass('Hidden');
    newPriceTarget.html('$ ' + newValue);
}

$('#MainOverlay').click(function () {
    checkoutSidebar('hide');
});
// Checkout sidebar
// -------------------------------------------		
window.checkoutSidebar = function (state) {

    var sidebar = $('.CheckoutCart');
    var wrapper = $('.main-wrapper');

    var show = function show() {
        sidebar.addClass('active');
        wrapper.addClass('allow-sidebar');
    };

    var hide = function hide() {
        sidebar.removeClass('active');
        wrapper.removeClass('allow-sidebar');
    };

    if (state == undefined) {
        if (sidebar.hasClass('active')) {
            hide();
        } else {
            show();
        }
    } else if (state == 'show') {
        show();
        return false;
    } else if (state == 'hide') {
        hide();
        return false;
    }
};

window.openCheckoutDesktop = function () {
    if ($(window).width() > 768) {
        checkoutSidebar('show');
    }
    return false;
};

window.openFilters = function () {
    var filters = $('#SearchFilters');
    var trigger = $('#SearchFiltersTrigger');
    if (filters.hasClass('active')) {
        filters.removeClass('active');
        trigger.show();
    } else {
        filters.addClass('active');
        trigger.hide();
    }
};

/*
|--------------------------------------------------------------------------
| CART
|--------------------------------------------------------------------------
*/

window.sumAllItems = function () {
    sum = 0;
    $('.TotalItemPrice').each(function (index) {
        sum += parseInt($(this).html());
    });
    $('.SubTotal').html(sum);
};

// Sum divs text
window.sumDivs = function (origins, target) {
    var sum = 0;
    origins.each(function () {
        sum += parseFloat($(this).text());
    });
    target.text(sum);
};

// Check product variant stock
// -------------------------------------------
window.checkVariantStock = function () {
    var form = $('#AddToCartForm');
    var data = form.serialize();
    var allowSubmit = false;
    var submitButton = $('#AddToCartFormBtn');
    $.ajax({
        url: form.data('route'),
        method: 'GET',
        dataType: 'JSON',
        async: false,
        data: data,
        success: function success(data) {
            if (data.response == true) {
                if (data.message == '0') {
                    $('.AvailableStock').html("No hay stock disponible");
                    submitButton.prop('disabled', true);
                } else {
                    // console.log(data);
                    $('.AvailableStock').html("Stock disponible: " + data.message);
                    submitButton.prop('disabled', false);
                    allowSubmit = true;
                    // console.log("Entro en SUCCESS");
                }
                $('#MaxQuantity').prop("max", data.message);
            } else {
                // console.log(data);
                // $('#Error').html(data.responseText);
                $('.AvailableStock').html(data.message);
                submitButton.prop('disabled', true);
            }
        },
        error: function error(data) {
            $('#Error').html(data.responseText);
            location.reload();
            allowSubmit = false;
            submitButton.prop('disabled', true);
            console.log(data);
            console.log("Entro en error 2");
        }
    });
    return allowSubmit;
};

// Set cart items JSON
// -------------------------------------------
window.setItemsData = function () {
    itemData = [];

    $('.Item-Data').each(function () {
        var id = $(this).data('id');
        var price = $(this).data('price');
        var variant_id = $(this).data('variant');
        var quantity = $(this).val();

        item = {};
        item['id'] = id;
        item['variant_id'] = variant_id;
        item['price'] = price;
        item['quantity'] = quantity;
        // Update display total item price
        total = price * quantity;
        $('.' + id + '-TotalItemPrice').html(total);

        itemData.push(item);
    });
    // Update Total
    // console.info(itemData);
    sumAllItems();
    $('#Items-Data').val(itemData);
};

// Add product to cart
// -------------------------------------------
window.addToCart = function (route, data) {

    loaderBars(true);

    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: data,
        success: function success(data) {
            // console.log(data);
            if (data.response == 'success') {

                $('.AvailableStock').html("Stock disponible: " + data.newStock);
                toast_success('Ok!', data.message, 'bottomCenter', '', 2500);
                updateTotals(data.totalCartItems, data.cartSubTotal);
                setItemsData();
                setTimeout(function () {
                    setItemsData();
                    sumAllItems();
                    // openCheckoutDesktop();
                }, 100);
            } else if (data.response == 'warning') {
                toast_success('Ups!', data.message, 'bottomCenter');
            }
        },
        error: function error(data) {
            // $('#Error').html(data.responseText);
            console.log("Error en addtoCart()");
            // location.reload();
            console.log(data);
        },
        complete: function complete() {
            loaderBars(false);
        }
    });
};

// Remove product from cart
// -------------------------------------------
window.removeFromCart = function (route, cartItemId, variantId, quantity, div, action) {

    loaderBars(true);

    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { cartItemId: cartItemId, variantId: variantId, quantity: quantity, action: action, method: 'ajax' },
        success: function success(data) {
            if (data.response == 'cart-removed') {
                // console.log(data);
                updateTotals(data.totalCartItems, data.cartSubTotal);
                window.location = window.location.href.split("?")[0];
                setItemsData();
            } else if (data.response == 'success') {
                $(div).hide(100);
                $(div).remove();
                updateTotals(data.totalCartItems, data.cartSubTotal);
                setItemsData();
            }
        },
        error: function error(data) {
            $('#Error').html(data.responseText);
            console.log("Error en removeFromCart()");
            console.log(data);
            // If an error pops when destroying an item, reload and prevent bad magic
            // location.reload();
        },
        complete: function complete() {
            loaderBars(false);
        }
    });
};

function updateTotals(totalCartItems, cartSubtotal) {

    // Live Reloading stuff
    $(".TotalCartItems").html(totalCartItems);
    $(".CartSubTotal").html(cartSubtotal);
    $("#SideContainerItemsFixed").load(window.location.href + " #SideContainerItemsFixed");
    $("#SideContainerItemsFloating").load(window.location.href + " #SideContainerItemsFloating");
    $(".TotalCartItemsSidebar").load(window.location.href + " .TotalCartItemsSidebar");
    $(".AvailableStock").load(window.location.href + " .AvailableStock");
}

// Submit Cart Form to Checkout
// -------------------------------------------
window.submitCartToCheckout = function (route, target, data, action) {

    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { data: data, action: action },
        success: function success(data) {
            console.log(data);
            if (data.response == 'success') {
                // console.log(target);
                if (target == 'reload') {
                    // Refresh page, delete parametters and open checkout sidebar
                    // window.location = window.location.href.split("?")[0] + "?checkout-on";
                } else {
                    window.location.href = target;
                }
            } else {
                console.log('Error en submitForm');
                console.log(data);
                toast_error('', data.message, 'bottomCenter', '');
                $('.SideContainerError').html(data.message);
                // $('#Error').html(data.responseText);
            }
            // $('#Error').html(data.responseText);
        },
        error: function error(data) {
            // $('#Error').html(data.responseText);
            console.log("Error en submitForm()");
            // location.reload();
            console.log(data);
            // location.reload();
        }
    });
};

// Validate and set coupon
// -------------------------------------------
window.validateAndSetCoupon = function (route, code, cartid) {
    var couponDiv = $('#CouponDiv');
    var couponSet = $('#SettedCoupon');
    console.log(code, cartid);
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { code: code, cartid: cartid },
        beforeSend: function beforeSend() {
            console.log("Comprobando cupón...");
            $('.CouponLoader').removeClass('Hidden');
        },
        success: function success(data) {
            if (data.response == true) {
                $('#CouponValidationMessage').html("Cupón aceptado !");
                couponDiv.hide(200, function () {
                    couponSet.removeClass('Hidden');
                });
                location.reload();
            } else if (data.response == null) {
                $('#CouponValidationMessage').html(data.message);
            }
        },
        error: function error(data) {
            $('#CouponValidationMessage').html(data.responseText);
            console.log(data);
        },
        complete: function complete() {
            $('.CouponLoader').addClass('Hidden');
        }
    });
};

// Favs
// -------------------------------------------
window.addArticleToFavs = function (route, favid, articleid, action, displayButton) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { fav_id: favid, article_id: articleid },
        success: function success(data) {
            if (data.response == true && data.result == 'added') {
                switch (action) {
                    case 'reload':
                        location.reload();
                        break;
                    case 'show':
                        displayButton.removeClass('fav-icon-nofav');
                        displayButton.addClass('fav-icon-isfav');
                        toast_success('<i class="fas fa-check"></i>', 'Producto agregado a favoritos', 'bottomCenter', '', 122000);
                        break;
                    case 'none':
                        console.log('Actualizado - Sin Acción');
                    default:
                        console.log('No hay acción');
                        break;
                }
            } else if (data.response == true && data.result == 'removed') {
                displayButton.addClass('fav-icon-nofav');
                displayButton.removeClass('fav-icon-isfav');
                toast_success('<i class="fas fa-times"></i>', 'Producto eliminado de favoritos', 'bottomCenter', '', 1000);
            }
            setFavsTotalIcon(data.favsCount);
        },
        error: function error(data) {
            $('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

function setFavsTotalIcon(favs) {
    if (favs > 0) {
        $('.FavMainIcon').removeClass('far');
        $('.FavMainIcon').addClass('fa');
    } else if (favs == 0) {
        $('.FavMainIcon').removeClass('fa');
        $('.FavMainIcon').addClass('far');
    } else {
        $('.FavMainIcon').removeClass('fa');
        $('.FavMainIcon').removeClass('far');
        $('.FavMainIcon').addClass('fa');
        console.log("Error en setFavsTotalIcon()");
    }
}

window.removeArticleFromFavs = function (route, favid, action) {
    var doaction = action;
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { fav_id: favid },
        success: function success(data) {
            $('#Error').html(data.responseText);
            console.log(data);
            if (data.response == true) {
                console.log(doaction);
                switch (doaction) {
                    case 'reload':
                        var action = 'reload';
                        toast_success('Ok!', 'Producto eliminado de favoritos', 'bottomCenter', action, 1000);
                        break;
                    default:
                        console.log('No hay acción');
                        break;
                }
            } else {
                //$('#Error').html(data.message['errorInfo']);
                console.log(data);
            }
        },
        error: function error(data) {
            //$('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

window.removeAllArticlesFromFavs = function (route, customerid, action) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { customer_id: customerid },
        success: function success(data) {
            console.log(data);
            //$('#Error').html(data.responseText);
            if (data.response == true) {
                switch (action) {
                    case 'reload':
                        location.reload();
                        break;
                    default:
                        console.log('No hay acción');
                        break;
                }
            } else {
                $('#Error').html(data.message['errorInfo']);
                console.log(data);
            }
        },
        error: function error(data) {
            //$('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

/*
|--------------------------------------------------------------------------
| LOGIN AND REGISTER
|--------------------------------------------------------------------------
*/

$('#ResellerBox').hide();

window.openResellerRegistration = function () {
    $('#IsResellerCheckbox').prop('checked', true);
    $('.IfResellerEnable').prop('disabled', false);
    $('#ResellerBox').show(100);
    $('#ResellerCTA').hide(0);
    $('.NormaClientTitle').hide(0);
    $('.ResellerTitle').show(0);
};

window.closeResellerRegistration = function () {
    $('#IsResellerCheckbox').prop('checked', false);
    $('.IfResellerEnable').prop('disabled', true);
    $('#ResellerBox').hide(0);
    $('#ResellerCTA').show(100);
    $('.NormaClientTitle').show(0);
    $('.ResellerTitle').hide(0);
};

$(document).ready(function () {
    $('.GeoProvSelect').on('change', function () {
        var prov_id = $(this).val();
        getGeoLocs(prov_id);
    });
});

/*
|--------------------------------------------------------------------------
| MIX FUNCTIONS
|--------------------------------------------------------------------------
*/

window.closeElement = function (selector) {
    $(selector).hide(100);
};

window.getParam = function (parameterName) {
    var result = null,
        tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
};

window.getParams = function (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWJmMzBkMGRiZTI1NmQ1MmI4YjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbIiQiLCJjbGljayIsInRvZ2dsZU5hdiIsIndpbmRvdyIsIm5hdiIsImJvZHkiLCJ0cmlnZ2VyIiwiYm90dG9tVHJpZ2dlciIsImNvbnRlbnRUZXh0IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNzcyIsImhpZGUiLCJhZGRDbGFzcyIsImZhZGVJbiIsIm9uIiwia2V5cHJlc3MiLCJlIiwiY29uc29sZSIsImxvZyIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJsb2FkZXJCYXJzIiwiYWN0aW9uIiwibG9hZGVyIiwiY29sbGFwc2VGaWx0ZXIiLCJlbGVtIiwiZmlsdGVyIiwic2libGluZ3MiLCJzaG93IiwiaHRtbCIsInZhbHVlIiwidmFsIiwicXVhbnRpdHkiLCJuZXdWYWx1ZSIsIm5ld1ByaWNlVGFyZ2V0IiwicGFyZW50IiwibW9kaWZ5Q2FydEl0ZW1RIiwiY2hlY2tvdXRTaWRlYmFyIiwic3RhdGUiLCJzaWRlYmFyIiwid3JhcHBlciIsInVuZGVmaW5lZCIsIm9wZW5DaGVja291dERlc2t0b3AiLCJ3aWR0aCIsIm9wZW5GaWx0ZXJzIiwiZmlsdGVycyIsInN1bUFsbEl0ZW1zIiwic3VtIiwiZWFjaCIsImluZGV4IiwicGFyc2VJbnQiLCJzdW1EaXZzIiwib3JpZ2lucyIsInRhcmdldCIsInBhcnNlRmxvYXQiLCJ0ZXh0IiwiY2hlY2tWYXJpYW50U3RvY2siLCJmb3JtIiwiZGF0YSIsInNlcmlhbGl6ZSIsImFsbG93U3VibWl0Iiwic3VibWl0QnV0dG9uIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiYXN5bmMiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwicHJvcCIsImVycm9yIiwicmVzcG9uc2VUZXh0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzZXRJdGVtc0RhdGEiLCJpdGVtRGF0YSIsImlkIiwicHJpY2UiLCJ2YXJpYW50X2lkIiwiaXRlbSIsInRvdGFsIiwicHVzaCIsImFkZFRvQ2FydCIsInJvdXRlIiwibmV3U3RvY2siLCJ0b2FzdF9zdWNjZXNzIiwidXBkYXRlVG90YWxzIiwidG90YWxDYXJ0SXRlbXMiLCJjYXJ0U3ViVG90YWwiLCJzZXRUaW1lb3V0IiwiY29tcGxldGUiLCJyZW1vdmVGcm9tQ2FydCIsImNhcnRJdGVtSWQiLCJ2YXJpYW50SWQiLCJkaXYiLCJocmVmIiwic3BsaXQiLCJyZW1vdmUiLCJjYXJ0U3VidG90YWwiLCJsb2FkIiwic3VibWl0Q2FydFRvQ2hlY2tvdXQiLCJ0b2FzdF9lcnJvciIsInZhbGlkYXRlQW5kU2V0Q291cG9uIiwiY29kZSIsImNhcnRpZCIsImNvdXBvbkRpdiIsImNvdXBvblNldCIsImJlZm9yZVNlbmQiLCJhZGRBcnRpY2xlVG9GYXZzIiwiZmF2aWQiLCJhcnRpY2xlaWQiLCJkaXNwbGF5QnV0dG9uIiwiZmF2X2lkIiwiYXJ0aWNsZV9pZCIsInJlc3VsdCIsInNldEZhdnNUb3RhbEljb24iLCJmYXZzQ291bnQiLCJmYXZzIiwicmVtb3ZlQXJ0aWNsZUZyb21GYXZzIiwiZG9hY3Rpb24iLCJyZW1vdmVBbGxBcnRpY2xlc0Zyb21GYXZzIiwiY3VzdG9tZXJpZCIsImN1c3RvbWVyX2lkIiwib3BlblJlc2VsbGVyUmVnaXN0cmF0aW9uIiwiY2xvc2VSZXNlbGxlclJlZ2lzdHJhdGlvbiIsImRvY3VtZW50IiwicmVhZHkiLCJwcm92X2lkIiwiZ2V0R2VvTG9jcyIsImNsb3NlRWxlbWVudCIsInNlbGVjdG9yIiwiZ2V0UGFyYW0iLCJwYXJhbWV0ZXJOYW1lIiwidG1wIiwic2VhcmNoIiwic3Vic3RyIiwiZm9yRWFjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsImdldFBhcmFtcyIsInBhcmFtcyIsInBhcnNlciIsImNyZWF0ZUVsZW1lbnQiLCJxdWVyeSIsInN1YnN0cmluZyIs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RUFBc0M7QUFDckMsWUFBSUUsT0FBT0gsS0FBS0MsQ0FBTCxFQUFRakQsS0FBUixDQUFjLEdBQWQsQ0FBWDtBQUNBMkMsZUFBT1EsS0FBSyxDQUFMLENBQVAsSUFBa0JWLG1CQUFtQlUsS0FBSyxDQUFMLENBQW5CLENBQWxCO0FBQ0E7QUFDRCxXQUFPUixNQUFQO0FBQ0EsQ0FYRCxDIiwiZmlsZSI6Ii9qcy9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhYmYzMGQwZGJlMjU2ZDUyYjhiOSIsIi8vXHJcbi8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyB8IE5hdmlnYXRpb25cclxuLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vXHJcbiQoJyNuYXZmdWxsLXRvcC1idG4sICNuYXZmdWxsLWJvdHRvbS1idG4nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIHRvZ2dsZU5hdigpO1xyXG59KTtcclxuXHJcbndpbmRvdy50b2dnbGVOYXYgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGNvbnN0IG5hdiA9ICQoJy5Nb2JpbGVOYXZpZ2F0aW9uJyk7XHJcbiAgICBjb25zdCBib2R5ID0gJCgnYm9keScpO1xyXG4gICAgY29uc3QgdHJpZ2dlciA9ICQoJyNuYXZmdWxsLXRvcC1idG4nKTtcclxuICAgIGNvbnN0IGJvdHRvbVRyaWdnZXIgPSAkKCcjbmF2ZnVsbC1ib3R0b20tYnRuJyk7XHJcbiAgICBjb25zdCBjb250ZW50VGV4dCA9ICQoJy5jb250ZW50LWVmZmVjdCcpO1xyXG5cclxuICAgIGlmKG5hdi5oYXNDbGFzcygnbmF2ZnVsbC1hY3RpdmUnKSlcclxuICAgIHtcclxuICAgICAgICBuYXYucmVtb3ZlQ2xhc3MoJ25hdmZ1bGwtYWN0aXZlJyk7XHJcbiAgICAgICAgdHJpZ2dlci5yZW1vdmVDbGFzcygnbmF2ZnVsbC10b3AtYWN0aXZlJyk7XHJcbiAgICAgICAgYm90dG9tVHJpZ2dlci5yZW1vdmVDbGFzcygnbmF2ZnVsbC1ib3R0b20tYWN0aXZlJyk7XHJcbiAgICAgICAgYm9keS5jc3MoJ292ZXJmbG93JywnYXV0bycpO1xyXG4gICAgICAgIGNvbnRlbnRUZXh0LmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2LmFkZENsYXNzKCduYXZmdWxsLWFjdGl2ZScpO1xyXG4gICAgICAgIHRyaWdnZXIuYWRkQ2xhc3MoJ25hdmZ1bGwtdG9wLWFjdGl2ZScpO1xyXG4gICAgICAgIGJvdHRvbVRyaWdnZXIuYWRkQ2xhc3MoJ25hdmZ1bGwtYm90dG9tLWFjdGl2ZScpO1xyXG4gICAgICAgIGJvZHkuY3NzKCdvdmVyZmxvdycsJ2hpZGRlbicpO1xyXG4gICAgICAgIGNvbnRlbnRUZXh0LmZhZGVJbig1MDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gTG9hZGVyc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiQoXCIubG9hZGVyLW9uLWNoYW5nZVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2Z1bGwtbG9hZGVyJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuJChcIi5sb2FkZXItb24tc3VibWl0XCIpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjZnVsbC1sb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4kKCcuZG9udC1zdWJtaXQtb24tZW50ZXIsIC5kc29uJykua2V5cHJlc3MoZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRU5URVJcIik7XHJcbiAgICBpZiAoZS53aGljaCA9PSAxMykgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKGUud2hpY2ggPT0gMTMpIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG53aW5kb3cubG9hZGVyQmFycyA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgIFxyXG4gICAgY29uc3QgbG9hZGVyID0gJCgnI0xvYWRlckJhcnMnKTtcclxuXHJcbiAgICBpZihhY3Rpb24pIHtcclxuICAgICAgICBsb2FkZXIucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsb2FkZXIuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbi8vIFN0b3JlIEZpbHRlcnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxud2luZG93LmNvbGxhcHNlRmlsdGVyID0gZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgY29uc3QgZmlsdGVyID0gZWxlbS5zaWJsaW5ncygndWwnKTtcclxuICAgIGlmKGZpbHRlci5oYXNDbGFzcygnY29sbGFwc2VkJykpXHJcbiAgICB7XHJcbiAgICAgICAgZmlsdGVyLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcclxuICAgICAgICBmaWx0ZXIuc2hvdygxMDApO1xyXG4gICAgICAgIGVsZW0uaHRtbCgnLScpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGZpbHRlci5hZGRDbGFzcygnY29sbGFwc2VkJyk7XHJcbiAgICAgICAgZmlsdGVyLmhpZGUoMTAwKTtcclxuICAgICAgICBlbGVtLmh0bWwoJysnKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIE1vZGlmeSBjYXJ0IGl0ZW0gcXVhbnRpdHkgXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJCgnLklucHV0QnRuUScpLm9uKCdjaGFuZ2Uga2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgT3JpZ2luYWwgQXJ0aWNsZSBQcmljZVxyXG4gICAgbGV0IHZhbHVlID0gJCh0aGlzKS5zaWJsaW5ncygnLkFydGljbGVQcmljZScpLnZhbCgpO1xyXG4gICAgLy8gUXVhbnRpdHlcclxuICAgIGxldCBxdWFudGl0eSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAvLyBOZXIgVmFsdWVcclxuICAgIGxldCBuZXdWYWx1ZSA9ICh2YWx1ZSAqIHF1YW50aXR5KTtcclxuICAgIC8vIE5ldyBQcmljZSBUYXJnZXRcclxuICAgIGxldCBuZXdQcmljZVRhcmdldCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2libGluZ3MoJy5Ub3RhbEl0ZW1QcmljZScpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHZhbHVlLCBxdWFudGl0eSwgbmV3VmFsdWUpO1xyXG4gICAgbW9kaWZ5Q2FydEl0ZW1RKCQodGhpcyksIG5ld1ByaWNlVGFyZ2V0LCBuZXdWYWx1ZSk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBtb2RpZnlDYXJ0SXRlbVEoZSwgbmV3UHJpY2VUYXJnZXQsIG5ld1ZhbHVlKSB7XHJcbiAgICBlLnNpYmxpbmdzKCcuSW5wdXRCdG5RJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG4gICAgbmV3UHJpY2VUYXJnZXQuaHRtbCgnJCAnICsgbmV3VmFsdWUpO1xyXG59XHJcblxyXG5cclxuJCgnI01haW5PdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIGNoZWNrb3V0U2lkZWJhcignaGlkZScpO1xyXG59KVxyXG4vLyBDaGVja291dCBzaWRlYmFyXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cdFx0XHJcbndpbmRvdy5jaGVja291dFNpZGViYXIgPSBmdW5jdGlvbiAoc3RhdGUpIHtcclxuXHJcbiAgICBjb25zdCBzaWRlYmFyID0gJCgnLkNoZWNrb3V0Q2FydCcpO1xyXG4gICAgY29uc3Qgd3JhcHBlciA9ICQoJy5tYWluLXdyYXBwZXInKTtcclxuXHJcbiAgICBjb25zdCBzaG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ2FsbG93LXNpZGViYXInKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2FsbG93LXNpZGViYXInKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHN0YXRlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChzaWRlYmFyLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICBoaWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gJ3Nob3cnKSB7XHJcbiAgICAgICAgc2hvdygpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gJ2hpZGUnKSB7XHJcbiAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG53aW5kb3cub3BlbkNoZWNrb3V0RGVza3RvcCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XHJcbiAgICAgICAgY2hlY2tvdXRTaWRlYmFyKCdzaG93Jyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbndpbmRvdy5vcGVuRmlsdGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGZpbHRlcnMgPSAkKCcjU2VhcmNoRmlsdGVycycpO1xyXG4gICAgY29uc3QgdHJpZ2dlciA9ICQoJyNTZWFyY2hGaWx0ZXJzVHJpZ2dlcicpO1xyXG4gICAgaWYoZmlsdGVycy5oYXNDbGFzcygnYWN0aXZlJykpXHJcbiAgICB7XHJcbiAgICAgICAgZmlsdGVycy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgdHJpZ2dlci5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgZmlsdGVycy5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgdHJpZ2dlci5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLypcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgQ0FSVFxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuXHJcblxyXG53aW5kb3cuc3VtQWxsSXRlbXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzdW0gPSAwO1xyXG4gICAgJCgnLlRvdGFsSXRlbVByaWNlJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoJCh0aGlzKS5odG1sKCkpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuU3ViVG90YWwnKS5odG1sKHN1bSk7XHJcbn1cclxuXHJcblxyXG4vLyBTdW0gZGl2cyB0ZXh0XHJcbndpbmRvdy5zdW1EaXZzID0gZnVuY3Rpb24gKG9yaWdpbnMsIHRhcmdldCkge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcbiAgICBvcmlnaW5zLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN1bSArPSBwYXJzZUZsb2F0KCQodGhpcykudGV4dCgpKTtcclxuICAgIH0pO1xyXG4gICAgdGFyZ2V0LnRleHQoc3VtKTtcclxufVxyXG5cclxuXHJcbi8vIENoZWNrIHByb2R1Y3QgdmFyaWFudCBzdG9ja1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbndpbmRvdy5jaGVja1ZhcmlhbnRTdG9jayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGZvcm0gPSAkKCcjQWRkVG9DYXJ0Rm9ybScpO1xyXG4gICAgbGV0IGRhdGEgPSBmb3JtLnNlcmlhbGl6ZSgpO1xyXG4gICAgbGV0IGFsbG93U3VibWl0ID0gZmFsc2U7XHJcbiAgICBsZXQgc3VibWl0QnV0dG9uID0gICQoJyNBZGRUb0NhcnRGb3JtQnRuJyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogZm9ybS5kYXRhKCdyb3V0ZScpLFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcclxuICAgICAgICBhc3luYzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZihkYXRhLnJlc3BvbnNlID09IHRydWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSAnMCcpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuQXZhaWxhYmxlU3RvY2snKS5odG1sKFwiTm8gaGF5IHN0b2NrIGRpc3BvbmlibGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLkF2YWlsYWJsZVN0b2NrJykuaHRtbChcIlN0b2NrIGRpc3BvbmlibGU6IFwiICsgZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1N1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRW50cm8gZW4gU1VDQ0VTU1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkKCcjTWF4UXVhbnRpdHknKS5wcm9wKFwibWF4XCIsIGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgJCgnLkF2YWlsYWJsZVN0b2NrJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIGFsbG93U3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbnRybyBlbiBlcnJvciAyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFsbG93U3VibWl0O1xyXG59XHJcblxyXG4vLyBTZXQgY2FydCBpdGVtcyBKU09OXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxud2luZG93LnNldEl0ZW1zRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGl0ZW1EYXRhID0gW107XHJcblxyXG4gICAgJCgnLkl0ZW0tRGF0YScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuICAgICAgICBsZXQgcHJpY2UgPSAkKHRoaXMpLmRhdGEoJ3ByaWNlJyk7XHJcbiAgICAgICAgbGV0IHZhcmlhbnRfaWQgPSAkKHRoaXMpLmRhdGEoJ3ZhcmlhbnQnKTtcclxuICAgICAgICBsZXQgcXVhbnRpdHkgPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICAgICBpdGVtID0ge307XHJcbiAgICAgICAgaXRlbVsnaWQnXSA9IGlkO1xyXG4gICAgICAgIGl0ZW1bJ3ZhcmlhbnRfaWQnXSA9IHZhcmlhbnRfaWQ7XHJcbiAgICAgICAgaXRlbVsncHJpY2UnXSA9IHByaWNlO1xyXG4gICAgICAgIGl0ZW1bJ3F1YW50aXR5J10gPSBxdWFudGl0eTtcclxuICAgICAgICAvLyBVcGRhdGUgZGlzcGxheSB0b3RhbCBpdGVtIHByaWNlXHJcbiAgICAgICAgdG90YWwgPSBwcmljZSAqIHF1YW50aXR5O1xyXG4gICAgICAgICQoJy4nICsgaWQgKyAnLVRvdGFsSXRlbVByaWNlJykuaHRtbCh0b3RhbCk7XHJcblxyXG4gICAgICAgIGl0ZW1EYXRhLnB1c2goaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIC8vIFVwZGF0ZSBUb3RhbFxyXG4gICAgLy8gY29uc29sZS5pbmZvKGl0ZW1EYXRhKTtcclxuICAgIHN1bUFsbEl0ZW1zKCk7XHJcbiAgICAkKCcjSXRlbXMtRGF0YScpLnZhbChpdGVtRGF0YSk7XHJcbn1cclxuXHJcbi8vIEFkZCBwcm9kdWN0IHRvIGNhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG53aW5kb3cuYWRkVG9DYXJ0ID0gZnVuY3Rpb24gKHJvdXRlLCBkYXRhKSB7XHJcbiAgICBcclxuICAgIGxvYWRlckJhcnModHJ1ZSk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICQoJy5BdmFpbGFibGVTdG9jaycpLmh0bWwoXCJTdG9jayBkaXNwb25pYmxlOiBcIiArIGRhdGEubmV3U3RvY2spO1xyXG4gICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnT2shJywgZGF0YS5tZXNzYWdlLCAnYm90dG9tQ2VudGVyJywgJycsIDI1MDApO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlVG90YWxzKGRhdGEudG90YWxDYXJ0SXRlbXMsIGRhdGEuY2FydFN1YlRvdGFsKTtcclxuICAgICAgICAgICAgICAgIHNldEl0ZW1zRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VtQWxsSXRlbXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvcGVuQ2hlY2tvdXREZXNrdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3dhcm5pbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdVcHMhJywgZGF0YS5tZXNzYWdlLCAnYm90dG9tQ2VudGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiBhZGR0b0NhcnQoKVwiKTtcclxuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsb2FkZXJCYXJzKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8vIFJlbW92ZSBwcm9kdWN0IGZyb20gY2FydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbndpbmRvdy5yZW1vdmVGcm9tQ2FydCA9IGZ1bmN0aW9uIChyb3V0ZSwgY2FydEl0ZW1JZCwgdmFyaWFudElkLCBxdWFudGl0eSwgZGl2LCBhY3Rpb24pIHtcclxuXHJcbiAgICBsb2FkZXJCYXJzKHRydWUpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxyXG4gICAgICAgIGRhdGE6IHsgY2FydEl0ZW1JZDogY2FydEl0ZW1JZCwgdmFyaWFudElkOiB2YXJpYW50SWQsIHF1YW50aXR5OiBxdWFudGl0eSwgYWN0aW9uOiBhY3Rpb24sIG1ldGhvZDogJ2FqYXgnIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ2NhcnQtcmVtb3ZlZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlVG90YWxzKGRhdGEudG90YWxDYXJ0SXRlbXMsIGRhdGEuY2FydFN1YlRvdGFsKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVswXTtcclxuICAgICAgICAgICAgICAgIHNldEl0ZW1zRGF0YSgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAkKGRpdikuaGlkZSgxMDApO1xyXG4gICAgICAgICAgICAgICAgJChkaXYpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlVG90YWxzKGRhdGEudG90YWxDYXJ0SXRlbXMsIGRhdGEuY2FydFN1YlRvdGFsKTtcclxuICAgICAgICAgICAgICAgIHNldEl0ZW1zRGF0YSgpO1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gcmVtb3ZlRnJvbUNhcnQoKVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIElmIGFuIGVycm9yIHBvcHMgd2hlbiBkZXN0cm95aW5nIGFuIGl0ZW0sIHJlbG9hZCBhbmQgcHJldmVudCBiYWQgbWFnaWNcclxuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsb2FkZXJCYXJzKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG90YWxzKHRvdGFsQ2FydEl0ZW1zLCBjYXJ0U3VidG90YWwpIHtcclxuXHJcbiAgICAvLyBMaXZlIFJlbG9hZGluZyBzdHVmZlxyXG4gICAgJChcIi5Ub3RhbENhcnRJdGVtc1wiKS5odG1sKHRvdGFsQ2FydEl0ZW1zKTtcclxuICAgICQoXCIuQ2FydFN1YlRvdGFsXCIpLmh0bWwoY2FydFN1YnRvdGFsKTtcclxuICAgICQoXCIjU2lkZUNvbnRhaW5lckl0ZW1zRml4ZWRcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiICNTaWRlQ29udGFpbmVySXRlbXNGaXhlZFwiKTtcclxuICAgICQoXCIjU2lkZUNvbnRhaW5lckl0ZW1zRmxvYXRpbmdcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiICNTaWRlQ29udGFpbmVySXRlbXNGbG9hdGluZ1wiKTtcclxuICAgICQoXCIuVG90YWxDYXJ0SXRlbXNTaWRlYmFyXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAuVG90YWxDYXJ0SXRlbXNTaWRlYmFyXCIpO1xyXG4gICAgJChcIi5BdmFpbGFibGVTdG9ja1wiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLkF2YWlsYWJsZVN0b2NrXCIpO1xyXG59XHJcblxyXG4vLyBTdWJtaXQgQ2FydCBGb3JtIHRvIENoZWNrb3V0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxud2luZG93LnN1Ym1pdENhcnRUb0NoZWNrb3V0ID0gZnVuY3Rpb24gKHJvdXRlLCB0YXJnZXQsIGRhdGEsIGFjdGlvbikge1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxyXG4gICAgICAgIGRhdGE6IHsgZGF0YSwgYWN0aW9uOiBhY3Rpb24gfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCA9PSAncmVsb2FkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggcGFnZSwgZGVsZXRlIHBhcmFtZXR0ZXJzIGFuZCBvcGVuIGNoZWNrb3V0IHNpZGViYXJcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMF0gKyBcIj9jaGVja291dC1vblwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbiBzdWJtaXRGb3JtJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0X2Vycm9yKCcnLCBkYXRhLm1lc3NhZ2UsICdib3R0b21DZW50ZXInLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuU2lkZUNvbnRhaW5lckVycm9yJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gc3VibWl0Rm9ybSgpXCIpO1xyXG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBWYWxpZGF0ZSBhbmQgc2V0IGNvdXBvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbndpbmRvdy52YWxpZGF0ZUFuZFNldENvdXBvbiA9IGZ1bmN0aW9uIChyb3V0ZSwgY29kZSwgY2FydGlkKSB7XHJcbiAgICBsZXQgY291cG9uRGl2ID0gJCgnI0NvdXBvbkRpdicpO1xyXG4gICAgbGV0IGNvdXBvblNldCA9ICQoJyNTZXR0ZWRDb3Vwb24nKTtcclxuICAgIGNvbnNvbGUubG9nKGNvZGUsIGNhcnRpZCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogcm91dGUsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcclxuICAgICAgICBkYXRhOiB7IGNvZGU6IGNvZGUsIGNhcnRpZDogY2FydGlkIH0sXHJcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXByb2JhbmRvIGN1cMOzbi4uLlwiKTtcclxuICAgICAgICAgICAgJCgnLkNvdXBvbkxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICQoJyNDb3Vwb25WYWxpZGF0aW9uTWVzc2FnZScpLmh0bWwoXCJDdXDDs24gYWNlcHRhZG8gIVwiKTtcclxuICAgICAgICAgICAgICAgIGNvdXBvbkRpdi5oaWRlKDIwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdXBvblNldC5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgJCgnI0NvdXBvblZhbGlkYXRpb25NZXNzYWdlJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgJCgnI0NvdXBvblZhbGlkYXRpb25NZXNzYWdlJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLkNvdXBvbkxvYWRlcicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gRmF2c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbndpbmRvdy5hZGRBcnRpY2xlVG9GYXZzID0gZnVuY3Rpb24gKHJvdXRlLCBmYXZpZCwgYXJ0aWNsZWlkLCBhY3Rpb24sIGRpc3BsYXlCdXR0b24pIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxyXG4gICAgICAgIGRhdGE6IHsgZmF2X2lkOiBmYXZpZCwgYXJ0aWNsZV9pZDogYXJ0aWNsZWlkIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSAmJiBkYXRhLnJlc3VsdCA9PSAnYWRkZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbG9hZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzaG93JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5yZW1vdmVDbGFzcygnZmF2LWljb24tbm9mYXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5hZGRDbGFzcygnZmF2LWljb24taXNmYXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+JywgJ1Byb2R1Y3RvIGFncmVnYWRvIGEgZmF2b3JpdG9zJywgJ2JvdHRvbUNlbnRlcicsICcnLCAxMjIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdub25lJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FjdHVhbGl6YWRvIC0gU2luIEFjY2nDs24nKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gaGF5IGFjY2nDs24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlICYmIGRhdGEucmVzdWx0ID09ICdyZW1vdmVkJykge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5hZGRDbGFzcygnZmF2LWljb24tbm9mYXYnKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Zhdi1pY29uLWlzZmF2Jyk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCc8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT4nLCAnUHJvZHVjdG8gZWxpbWluYWRvIGRlIGZhdm9yaXRvcycsICdib3R0b21DZW50ZXInLCAnJywgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0RmF2c1RvdGFsSWNvbihkYXRhLmZhdnNDb3VudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGYXZzVG90YWxJY29uKGZhdnMpIHtcclxuICAgIGlmIChmYXZzID4gMCkge1xyXG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLnJlbW92ZUNsYXNzKCdmYXInKTtcclxuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5hZGRDbGFzcygnZmEnKTtcclxuICAgIH0gZWxzZSBpZiAoZmF2cyA9PSAwKSB7XHJcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykucmVtb3ZlQ2xhc3MoJ2ZhJyk7XHJcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykuYWRkQ2xhc3MoJ2ZhcicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5yZW1vdmVDbGFzcygnZmEnKTtcclxuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5yZW1vdmVDbGFzcygnZmFyJyk7XHJcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykuYWRkQ2xhc3MoJ2ZhJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiBzZXRGYXZzVG90YWxJY29uKClcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5yZW1vdmVBcnRpY2xlRnJvbUZhdnMgPSBmdW5jdGlvbiAocm91dGUsIGZhdmlkLCBhY3Rpb24pIHtcclxuICAgIHZhciBkb2FjdGlvbiA9IGFjdGlvbjtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxyXG4gICAgICAgIGRhdGE6IHsgZmF2X2lkOiBmYXZpZCB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9hY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChkb2FjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbG9hZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSAncmVsb2FkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnT2shJywgJ1Byb2R1Y3RvIGVsaW1pbmFkbyBkZSBmYXZvcml0b3MnLCAnYm90dG9tQ2VudGVyJywgYWN0aW9uLCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGhheSBhY2Npw7NuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEubWVzc2FnZVsnZXJyb3JJbmZvJ10pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LnJlbW92ZUFsbEFydGljbGVzRnJvbUZhdnMgPSBmdW5jdGlvbiAocm91dGUsIGN1c3RvbWVyaWQsIGFjdGlvbikge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXHJcbiAgICAgICAgZGF0YTogeyBjdXN0b21lcl9pZDogY3VzdG9tZXJpZCB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbG9hZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gaGF5IGFjY2nDs24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEubWVzc2FnZVsnZXJyb3JJbmZvJ10pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLypcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgTE9HSU4gQU5EIFJFR0lTVEVSXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG5cclxuJCgnI1Jlc2VsbGVyQm94JykuaGlkZSgpO1xyXG5cclxud2luZG93Lm9wZW5SZXNlbGxlclJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgJCgnI0lzUmVzZWxsZXJDaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICQoJy5JZlJlc2VsbGVyRW5hYmxlJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAkKCcjUmVzZWxsZXJCb3gnKS5zaG93KDEwMCk7XHJcbiAgICAkKCcjUmVzZWxsZXJDVEEnKS5oaWRlKDApO1xyXG4gICAgJCgnLk5vcm1hQ2xpZW50VGl0bGUnKS5oaWRlKDApO1xyXG4gICAgJCgnLlJlc2VsbGVyVGl0bGUnKS5zaG93KDApO1xyXG59XHJcblxyXG53aW5kb3cuY2xvc2VSZXNlbGxlclJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgJCgnI0lzUmVzZWxsZXJDaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAkKCcuSWZSZXNlbGxlckVuYWJsZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAkKCcjUmVzZWxsZXJCb3gnKS5oaWRlKDApO1xyXG4gICAgJCgnI1Jlc2VsbGVyQ1RBJykuc2hvdygxMDApO1xyXG4gICAgJCgnLk5vcm1hQ2xpZW50VGl0bGUnKS5zaG93KDApO1xyXG4gICAgJCgnLlJlc2VsbGVyVGl0bGUnKS5oaWRlKDApO1xyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgJCgnLkdlb1Byb3ZTZWxlY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgcHJvdl9pZCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgZ2V0R2VvTG9jcyhwcm92X2lkKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuLypcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgTUlYIEZVTkNUSU9OU1xyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuXHJcbndpbmRvdy5jbG9zZUVsZW1lbnQgPSBmdW5jdGlvbihzZWxlY3Rvcilcclxue1xyXG4gICAgJChzZWxlY3RvcikuaGlkZSgxMDApO1xyXG59XHJcblxyXG53aW5kb3cuZ2V0UGFyYW0gPSBmdW5jdGlvbihwYXJhbWV0ZXJOYW1lKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gbnVsbCxcclxuICAgICAgICB0bXAgPSBbXTtcclxuICAgIGxvY2F0aW9uLnNlYXJjaFxyXG4gICAgICAgIC5zdWJzdHIoMSlcclxuICAgICAgICAuc3BsaXQoXCImXCIpXHJcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICB0bXAgPSBpdGVtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICBpZiAodG1wWzBdID09PSBwYXJhbWV0ZXJOYW1lKSByZXN1bHQgPSBkZWNvZGVVUklDb21wb25lbnQodG1wWzFdKTtcclxuICAgICAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbndpbmRvdy5nZXRQYXJhbXMgPSBmdW5jdGlvbih1cmwpIHtcclxuICAgIHZhciBwYXJhbXMgPSB7fTtcclxuXHR2YXIgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdHBhcnNlci5ocmVmID0gdXJsO1xyXG5cdHZhciBxdWVyeSA9IHBhcnNlci5zZWFyY2guc3Vic3RyaW5nKDEpO1xyXG5cdHZhciB2YXJzID0gcXVlcnkuc3BsaXQoJyYnKTtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHZhcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdCgnPScpO1xyXG5cdFx0cGFyYW1zW3BhaXJbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xyXG5cdH1cclxuXHRyZXR1cm4gcGFyYW1zO1xyXG59XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==