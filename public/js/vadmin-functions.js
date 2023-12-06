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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),

/***/ 77:
/***/ (function(module, exports) {

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});

/*
|--------------------------------------------------------------------------
| LISTS
|--------------------------------------------------------------------------
*/

// Select checkbox to deletion
$(document).on("click", ".List-Checkbox", function (e) {
	e.stopPropagation();
	// CheckToDeletion("single", $(this));
	// CheckToShipping($(this));
	selectListItem($(this).attr('data-id'));
});

// Select rows on a list
function selectListItem(rowId) {

	var selectedRows = [];
	$(".List-Checkbox:checked").each(function () {
		selectedRows.push($(this).attr('data-id'));
		$('#SelectedItems').val(selectedRows);
	});

	// Select single item for edition
	if (selectedRows.length == 1) $('#EditId').val(selectedRows);else $('#EditId').val('');

	if (selectedRows.length == 0) $('#SelectedItems').val('');

	toggleActionButtons(selectedRows.length);
}

// Select all rows on a list
$('#SelectAllRows, .Select-All-To-Delete').on("click", function () {

	var selectedRows = [];

	// Select all items
	if ($(this).prop('checked')) {
		$('.List-Checkbox').prop('checked', true);
		if ($('.List-Checkbox').length >= 1) {
			// CheckToDeletion("all")
			$('.DeleteBtn').removeClass('Hidden');
		}

		$('tbody tr').addClass('row-selected');

		// Fill selected items array for actions (Delete, export, etc.)
		$(".List-Checkbox").each(function () {
			selectedRows.push($(this).attr('data-id'));
		});
		$('#SelectedItems').val(selectedRows);

		// Deselect all items
	} else {
		$('.List-Checkbox').prop('checked', false);
		$('.DeleteBtn').addClass('Hidden');
		$('tbody tr').removeClass('row-selected');

		// Empty selected items array
		$('#SelectedItems').val('');
	}
});

function toggleActionButtons(selectedRowsCount) {
	var buttons = $('.ListActionBtn');

	$.each(buttons, function (index, item) {
		var visibility = $(item).data('visibleif');

		if (selectedRowsCount == 1 && visibility == '1') {
			$(item).removeClass('Hidden');
		} else if (selectedRowsCount >= 2 && visibility == '>2') {
			$(item).removeClass('Hidden');
		} else if (selectedRowsCount > 0 && visibility == '>0') {
			$(item).removeClass('Hidden');
		} else {
			$(item).addClass('Hidden');
		}
	});

	// $('.ListActionBtn').each(function(e) {          
	// 	console.log(this.data());
	// });


	// if(selectedRows == 1) {
	//     $('.DeleteBtn').removeClass('Hidden');
	// 	$('.EditBtn').removeClass('Hidden');
	// 	$('.CreateFromAnotherBtn').removeClass('Hidden');
	// 	$('.ExportSelectedBtn').removeClass('Hidden');
	// 	$('.ExportToShippingBtn').removeClass('Hidden');
	// } else if(selectedRows >= 2) {
	// 	$('.EditBtn').addClass('Hidden');
	// 	$('.CreateFromAnotherBtn').addClass('Hidden');
	// } else if(selectedRows > 0 ) {
	// 	$('.ExportToShippingBtn').removeClass('Hidden');
	// } else if(selectedRows == 0) {
	// 	$('.DeleteBtn').addClass('Hidden');
	// 	$('.EditBtn').addClass('Hidden');
	// 	$('.CreateFromAnotherBtn').addClass('Hidden');
	// 	$('.ExportSelectedBtn').addClass('Hidden');
	// 	$('.ExportToShippingBtn').addClass('Hidden');
	// }
}

// Select All present checkboxes to deletion
// $('.Select-All-To-Delete').on("click", function() {
// 	console.log($(this));	
// 	if ($(this).prop('checked')) {
// 		$('.List-Checkbox').prop('checked', true);
// 		if($('.List-Checkbox').length >= 1)
// 		{
// 			CheckToDeletion("all")
// 			$('.DeleteBtn').removeClass('Hidden');
// 		}

// 		$('tbody tr').addClass('row-selected');
// 	} else {
// 		$('.List-Checkbox').prop('checked', false);
// 		$('.DeleteBtn').addClass('Hidden');
// 		$('tbody tr').removeClass('row-selected');
// 	}
// });


// function CheckToShipping(id)
// {
// 	var selectedRows = [];
// 	$(".List-Checkbox:checked").each(function() {          
// 		selectedRows.push($(this).attr('data-id'));
// 		$('#RowsToShipping').val(selectedRows);
// 	});

// 	$('#RowsToExport').val(selectedRows);
// 	if(selectedRows.length == 0){
// 		$('#EditId, #RowsToShipping').val('');
// 	} 	
// }

// function CheckToDeletion(type, row)
// {
// 	// console.log(type, row);
// 	var selectedRows = [];
// 	$(".List-Checkbox:checked").each(function() {          
// 		selectedRows.push($(this).attr('data-id'));
// 		$('#RowsToDeletion').val(selectedRows);
// 	});


// 	$('#RowsToExport').val(selectedRows);
// 	if(selectedRows.length == 1){
// 		$('#EditId, #CreateFromAnotherId').val(selectedRows);
// 	} else if(selectedRows.length < 1){
// 		$('#EditId, #CreateFromAnotherId').val('');
// 	} else if(selectedRows.length > 1){
// 		$('#EditId, #CreateFromAnotherId').val('');
// 	} else {
// 		$('#EditId, #CreateFromAnotherId').val('');
// 	}

// 	toggleActionButtons(selectedRows.length);

// 	// showButtons(this);
// 	// if(type == 'single' && row != undefined)
// 	// {
// 	// 	var checkbox = row.prop('checked');
// 	// 	if(checkbox){
// 	// 		row.parent().parent().parent().addClass('row-selected');
// 	// 	} else {
// 	// 		row.parent().parent().parent().removeClass('row-selected');
// 	// 	}
// 	// }
// }

// function showButtons(trigger) {

// 	var countSelected = $('.List-Checkbox:checkbox:checked').length;

// 	if(countSelected == 1) {
//         $('.DeleteBtn').removeClass('Hidden');
// 		$('.EditBtn').removeClass('Hidden');
// 		$('.CreateFromAnotherBtn').removeClass('Hidden');
// 		$('.ExportSelectedBtn').removeClass('Hidden');
// 		$('.ExportToShippingBtn').removeClass('Hidden');
// 	} else if(countSelected > 0 ) {
// 		$('.ExportToShippingBtn').removeClass('Hidden');
// 	} else if(countSelected >= 2) {
// 		$('.EditBtn').addClass('Hidden');
// 		$('.CreateFromAnotherBtn').addClass('Hidden');
//     } else if(countSelected == 0) {
// 		$('.DeleteBtn').addClass('Hidden');
// 		$('.EditBtn').addClass('Hidden');
// 		$('.CreateFromAnotherBtn').addClass('Hidden');
// 		$('.ExportSelectedBtn').addClass('Hidden');
// 		$('.ExportToShippingBtn').addClass('Hidden');
// 	}

// }

// Show Edit and Delete buttons in bottom if scrolled to mutch
$(document).scroll(function (e) {
	var scrollAmount = $(window).scrollTop();
	// This is VERY ARCHAIC... DON´T JUDGE ME.
	if (scrollAmount > 150) {
		$('.DeleteBtn').css({ "position": "fixed", "bottom": "50px", "right": "10px", "z-index": "999" });
		$('.EditBtn').css({ "position": "fixed", "bottom": "50px", "right": "130px", "z-index": "999" });
		$('.CreateFromAnotherBtn').css({ "position": "fixed", "bottom": "50px", "right": "235px", "z-index": "999" });
		$('.ExportToShippingBtn').css({ "position": "fixed", "bottom": "50px", "right": "236px", "z-index": "999" });
	} else {
		$('.DeleteBtn').css({ "position": "relative", "bottom": "auto", "right": "auto", "z-index": "999" });
		$('.EditBtn').css({ "position": "relative", "bottom": "auto", "right": "auto", "z-index": "999" });
		$('.CreateFromAnotherBtn').css({ "position": "relative", "bottom": "auto", "right": "auto", "z-index": "999" });
		$('.ExportToShippingBtn').css({ "position": "relative", "bottom": "auto", "right": "auto", "z-index": "999" });
	}
});

// Uncheck all checkboxes on reload.
function uncheckAll() {
	$('#TableList tbody .CheckBoxes').find('input[type="checkbox"]').each(function () {
		$(this).prop('checked', false);
	});
}
uncheckAll();

/*
|--------------------------------------------------------------------------
| FUNCTIONS
|--------------------------------------------------------------------------
*/
// Receive ID with #
setOtherToCero = function setOtherToCero(other) {
	$(other).val(0);
};

// Delete rows
deleteRecord = function deleteRecord(id, route, bigtext, smalltext) {
	swal({
		title: bigtext,
		text: smalltext,
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'ELIMINAR',
		cancelButtonText: 'Cancelar',
		confirmButtonClass: 'btn btnGreen',
		cancelButtonClass: 'btn btnRed',
		buttonsStyling: false
	}).then(function () {

		$.ajax({
			url: route,
			method: 'POST',
			dataType: 'JSON',
			data: { id: id },
			beforeSend: function beforeSend() {
				// $('#Main-Loader').removeClass('Hidden');
			},
			success: function success(data) {
				$('#BatchDeleteBtn').addClass('Hidden');
				if (data.success == true) {
					$('#Id' + id).hide(200);
					for (i = 0; i < id.length; i++) {
						$('#Id' + id[i]).hide(200);
					}
					alert_ok('Ok!', 'Eliminación completa');
					console.log(data);
					return true;
				} else {
					alert_error('Ups!', 'Ha ocurrido un error (Puede que este registro tenga relación con otros items en el sistema). Debe eliminar primero los mismos.');
					console.log(data);
					return false;
				}
			},
			error: function error(data) {
				$('#Error').html(data.responseText);
				console.log(data);
			},
			complete: function complete() {
				// $('#Main-Loader').addClass('Hidden');
			}
		});
	});
};

deleteAndReload = function deleteAndReload(id, route, bigtext, smalltext) {
	swal({
		title: bigtext,
		text: smalltext,
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'ELIMINAR',
		cancelButtonText: 'Cancelar',
		confirmButtonClass: 'btn btnGreen',
		cancelButtonClass: 'btn btnRed',
		buttonsStyling: false
	}).then(function () {
		$.ajax({
			url: route,
			method: 'POST',
			dataType: 'JSON',
			data: { id: id },
			beforeSend: function beforeSend() {
				// $('#Main-Loader').removeClass('Hidden');
			},
			success: function success(data) {
				$('#BatchDeleteBtn').addClass('Hidden');
				if (data.success == true) {
					// alert_ok('Ok!','Eliminación completa');
					location.reload();
				} else {
					alert_error('Ups!', 'Ha ocurrido un error (Puede que este registro tenga relación con otros items en el sistema). Debe eliminar primero los mismos.');
					console.log(data);
					return false;
				}
			},
			error: function error(data) {
				$('#Error').html(data.responseText);
				console.log(data);
			}
		});
	});
};

// Remove product from cart
// -------------------------------------------
window.removeFromCart = function (route, cartItemId, action, element) {
	$.ajax({
		url: route,
		method: 'POST',
		dataType: 'JSON',
		data: { cartItemId: cartItemId, action: action },
		success: function success(data) {
			console.log(data);
			if (data.response == 'success') {
				element.remove();
			} else {
				console.log("ERROR");
			}
		},
		error: function error(data) {
			$('#Error').html(data.responseText);
			console.log("Error en removeFromCart()");
			console.log(data);
			// If an error pops when destroying an item, reload and prevent bad magic
			// location.reload();
		}
	});
};
/*
|--------------------------------------------------------------------------
| ALERTS
|--------------------------------------------------------------------------
*/

function alert_ok(bigtext, smalltext) {
	swal(bigtext, smalltext, 'success');
}

function alert_error(bigtext, smalltext) {
	swal(bigtext, smalltext, 'error');
}

function alert_info(bigtext, smalltext) {

	swal({
		title: bigtext,
		type: 'info',
		html: smalltext,
		showCloseButton: true,
		showCancelButton: false,
		confirmButtonText: '<i class="ion-checkmark-round"></i> Ok!'
	});
}

function closeParent() {
	$(this).parent('hide');
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWJmMzBkMGRiZTI1NmQ1MmI4YjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbIiQiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsImRvY3VtZW50Iiwib24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwic2VsZWN0TGlzdEl0ZW0iLCJyb3dJZCIsInNlbGVjdGVkUm93cyIsImVhY2giLCJwdXNoIiwidmFsIiwibGVuZ3RoIiwidG9nZ2xlQWN0aW9uQnV0dG9ucyIsInByb3AiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2VsZWN0ZWRSb3dzQ291bnQiLCJidXR0b25zIiwiaW5kZXgiLCJpdGVtIiwidmlzaWJpbGl0eSIsImRhdGEiLCJzY3JvbGwiLCJzY3JvbGxBbW91bnQiLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJjc3MiLCJ1bmNoZWNrQWxsIiwiZmluZCIsInNldE90aGVyVG9DZXJvIiwib3RoZXIiLCJkZWxldGVSZWNvcmQiLCJpZCIsInJvdXRlIiwiYmlndGV4dCIsInNtYWxsdGV4dCIsInN3YWwiLCJ0aXRsZSIsInRleHQiLCJ0eXBlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY29uZmlybUJ1dHRvbkNsYXNzIiwiY2FuY2VsQnV0dG9uQ2xhc3MiLCJidXR0b25zU3R5bGluZyIsInRoZW4iLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsImhpZGUiLCJpIiwiYWxlcnRfb2siLCJjb25zb2xlIiwibG9nIiwiYWxlcnRfZXJyb3IiLCJlcnJvciIsImh0bWwiLCJyZXNwb25zZVRleHQiLCJjb21wbGV0ZSIsImRlbGV0ZUFuZFJlbG9hZCIsImxvY2F0aW9uIiwicmVsb2FkIiwicmVtb3ZlRnJvbUNhcnQiLCJjYXJ0SXRlbUlkIiwiYWN0aW9uIiwiZWxlbWVudCIsInJlc3BvbnNlIiwicmVtb3ZlIiwiYWxlcnRfaW5mbyIsInNob3dDbG9zZUJ1dHRvbiIsImNsb3NlUGFyZW50IiwicGFyZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REFBLEVBQUVDLFNBQUYsQ0FBWTtBQUNSQyxVQUFTO0FBQ0wsa0JBQWdCRixFQUFFLHlCQUFGLEVBQTZCRyxJQUE3QixDQUFrQyxTQUFsQztBQURYO0FBREQsQ0FBWjs7QUFNQTs7Ozs7O0FBTUE7QUFDQUgsRUFBRUksUUFBRixFQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixnQkFBeEIsRUFBMEMsVUFBU0MsQ0FBVCxFQUMxQztBQUNDQSxHQUFFQyxlQUFGO0FBQ0E7QUFDQTtBQUNBQyxnQkFBZVIsRUFBRSxJQUFGLEVBQVFHLElBQVIsQ0FBYSxTQUFiLENBQWY7QUFFQSxDQVBEOztBQVNBO0FBQ0EsU0FBU0ssY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7O0FBRTlCLEtBQUlDLGVBQWUsRUFBbkI7QUFDQVYsR0FBRSx3QkFBRixFQUE0QlcsSUFBNUIsQ0FBaUMsWUFBVztBQUMzQ0QsZUFBYUUsSUFBYixDQUFrQlosRUFBRSxJ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TDtBQUlEd0MsbUJBQWlCLElBSmhCO0FBS0RuQyxvQkFBa0IsS0FMakI7QUFNREcscUJBQ0k7QUFQSCxFQUFMO0FBU0g7O0FBR0QsU0FBU2lDLFdBQVQsR0FBc0I7QUFDckIvRSxHQUFFLElBQUYsRUFBUWdGLE1BQVIsQ0FBZSxNQUFmO0FBQ0EsQyIsImZpbGUiOiIvanMvdmFkbWluLWZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWJmMzBkMGRiZTI1NmQ1MmI4YjkiLCIkLmFqYXhTZXR1cCh7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcclxuICAgIH1cclxufSk7XHJcbiBcclxuLypcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgTElTVFNcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcblxyXG4vLyBTZWxlY3QgY2hlY2tib3ggdG8gZGVsZXRpb25cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5MaXN0LUNoZWNrYm94XCIsIGZ1bmN0aW9uKGUpXHJcbntcclxuXHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdC8vIENoZWNrVG9EZWxldGlvbihcInNpbmdsZVwiLCAkKHRoaXMpKTtcclxuXHQvLyBDaGVja1RvU2hpcHBpbmcoJCh0aGlzKSk7XHJcblx0c2VsZWN0TGlzdEl0ZW0oJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpO1xyXG5cdFxyXG59KTtcclxuXHJcbi8vIFNlbGVjdCByb3dzIG9uIGEgbGlzdFxyXG5mdW5jdGlvbiBzZWxlY3RMaXN0SXRlbShyb3dJZCkge1xyXG5cdFxyXG5cdHZhciBzZWxlY3RlZFJvd3MgPSBbXTtcclxuXHQkKFwiLkxpc3QtQ2hlY2tib3g6Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uKCkgeyAgICAgICAgICBcclxuXHRcdHNlbGVjdGVkUm93cy5wdXNoKCQodGhpcykuYXR0cignZGF0YS1pZCcpKTtcclxuXHRcdCQoJyNTZWxlY3RlZEl0ZW1zJykudmFsKHNlbGVjdGVkUm93cyk7XHJcblx0fSk7XHJcblxyXG5cdC8vIFNlbGVjdCBzaW5nbGUgaXRlbSBmb3IgZWRpdGlvblxyXG5cdGlmKHNlbGVjdGVkUm93cy5sZW5ndGggPT0gMSlcclxuXHRcdCQoJyNFZGl0SWQnKS52YWwoc2VsZWN0ZWRSb3dzKTtcclxuXHRlbHNlXHJcblx0XHQkKCcjRWRpdElkJykudmFsKCcnKTtcclxuXHRcclxuXHRpZihzZWxlY3RlZFJvd3MubGVuZ3RoID09IDApXHJcblx0XHQkKCcjU2VsZWN0ZWRJdGVtcycpLnZhbCgnJyk7XHJcblxyXG5cdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoc2VsZWN0ZWRSb3dzLmxlbmd0aCk7XHJcbn1cclxuXHJcbi8vIFNlbGVjdCBhbGwgcm93cyBvbiBhIGxpc3RcclxuJCgnI1NlbGVjdEFsbFJvd3MsIC5TZWxlY3QtQWxsLVRvLURlbGV0ZScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0bGV0IHNlbGVjdGVkUm93cyA9IFtdO1xyXG5cclxuXHQvLyBTZWxlY3QgYWxsIGl0ZW1zXHJcblx0aWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcblx0XHQkKCcuTGlzdC1DaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdGlmKCQoJy5MaXN0LUNoZWNrYm94JykubGVuZ3RoID49IDEpXHJcblx0XHR7XHJcblx0XHRcdC8vIENoZWNrVG9EZWxldGlvbihcImFsbFwiKVxyXG5cdFx0XHQkKCcuRGVsZXRlQnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCQoJ3Rib2R5IHRyJykuYWRkQ2xhc3MoJ3Jvdy1zZWxlY3RlZCcpO1xyXG5cclxuXHRcdC8vIEZpbGwgc2VsZWN0ZWQgaXRlbXMgYXJyYXkgZm9yIGFjdGlvbnMgKERlbGV0ZSwgZXhwb3J0LCBldGMuKVxyXG5cdFx0JChcIi5MaXN0LUNoZWNrYm94XCIpLmVhY2goZnVuY3Rpb24oKSB7ICAgICAgICAgIFxyXG5cdFx0XHRzZWxlY3RlZFJvd3MucHVzaCgkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSk7XHJcblx0XHR9KTtcclxuXHRcdCQoJyNTZWxlY3RlZEl0ZW1zJykudmFsKHNlbGVjdGVkUm93cyk7XHJcblxyXG5cdC8vIERlc2VsZWN0IGFsbCBpdGVtc1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcuTGlzdC1DaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHQkKCcuRGVsZXRlQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0JCgndGJvZHkgdHInKS5yZW1vdmVDbGFzcygncm93LXNlbGVjdGVkJyk7XHJcblxyXG5cdFx0Ly8gRW1wdHkgc2VsZWN0ZWQgaXRlbXMgYXJyYXlcclxuXHRcdCQoJyNTZWxlY3RlZEl0ZW1zJykudmFsKCcnKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUFjdGlvbkJ1dHRvbnMoc2VsZWN0ZWRSb3dzQ291bnQpIHtcclxuXHRsZXQgYnV0dG9ucyA9ICQoJy5MaXN0QWN0aW9uQnRuJyk7XHJcblx0XHJcblx0JC5lYWNoKGJ1dHRvbnMsIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG5cdFx0bGV0IHZpc2liaWxpdHkgPSAkKGl0ZW0pLmRhdGEoJ3Zpc2libGVpZicpO1xyXG5cdFx0XHJcblx0XHRpZihzZWxlY3RlZFJvd3NDb3VudCA9PSAxICYmIHZpc2liaWxpdHkgPT0gJzEnICkge1xyXG5cdFx0XHQkKGl0ZW0pLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHRcdH0gZWxzZSBpZihzZWxlY3RlZFJvd3NDb3VudCA+PSAyICYmIHZpc2liaWxpdHkgPT0gJz4yJykge1xyXG5cdFx0XHQkKGl0ZW0pLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHRcdH0gZWxzZSBpZihzZWxlY3RlZFJvd3NDb3VudCA+IDAgJiYgdmlzaWJpbGl0eSA9PSAnPjAnKSB7XHJcblx0XHRcdCQoaXRlbSkucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JChpdGVtKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyAkKCcuTGlzdEFjdGlvbkJ0bicpLmVhY2goZnVuY3Rpb24oZSkgeyAgICAgICAgICBcclxuXHQvLyBcdGNvbnNvbGUubG9nKHRoaXMuZGF0YSgpKTtcclxuXHQvLyB9KTtcclxuXHJcblxyXG5cdC8vIGlmKHNlbGVjdGVkUm93cyA9PSAxKSB7XHJcbiAgICAvLyAgICAgJCgnLkRlbGV0ZUJ0bicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHQvLyBcdCQoJy5FZGl0QnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdC8vIFx0JCgnLkNyZWF0ZUZyb21Bbm90aGVyQnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdC8vIFx0JCgnLkV4cG9ydFNlbGVjdGVkQnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdC8vIFx0JCgnLkV4cG9ydFRvU2hpcHBpbmdCdG4nKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcblx0Ly8gfSBlbHNlIGlmKHNlbGVjdGVkUm93cyA+PSAyKSB7XHJcblx0Ly8gXHQkKCcuRWRpdEJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuXHQvLyBcdCQoJy5DcmVhdGVGcm9tQW5vdGhlckJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuICAgIC8vIH0gZWxzZSBpZihzZWxlY3RlZFJvd3MgPiAwICkge1xyXG5cdC8vIFx0JCgnLkV4cG9ydFRvU2hpcHBpbmdCdG4nKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcblx0Ly8gfSBlbHNlIGlmKHNlbGVjdGVkUm93cyA9PSAwKSB7XHJcblx0Ly8gXHQkKCcuRGVsZXRlQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdC8vIFx0JCgnLkVkaXRCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcblx0Ly8gXHQkKCcuQ3JlYXRlRnJvbUFub3RoZXJCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcblx0Ly8gXHQkKCcuRXhwb3J0U2VsZWN0ZWRCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcblx0Ly8gXHQkKCcuRXhwb3J0VG9TaGlwcGluZ0J0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuXHQvLyB9XHJcbn1cclxuXHJcbi8vIFNlbGVjdCBBbGwgcHJlc2VudCBjaGVja2JveGVzIHRvIGRlbGV0aW9uXHJcbi8vICQoJy5TZWxlY3QtQWxsLVRvLURlbGV0ZScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbi8vIFx0Y29uc29sZS5sb2coJCh0aGlzKSk7XHRcclxuLy8gXHRpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuLy8gXHRcdCQoJy5MaXN0LUNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4vLyBcdFx0aWYoJCgnLkxpc3QtQ2hlY2tib3gnKS5sZW5ndGggPj0gMSlcclxuLy8gXHRcdHtcclxuLy8gXHRcdFx0Q2hlY2tUb0RlbGV0aW9uKFwiYWxsXCIpXHJcbi8vIFx0XHRcdCQoJy5EZWxldGVCdG4nKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcbi8vIFx0XHR9XHJcblxyXG4vLyBcdFx0JCgndGJvZHkgdHInKS5hZGRDbGFzcygncm93LXNlbGVjdGVkJyk7XHJcbi8vIFx0fSBlbHNlIHtcclxuLy8gXHRcdCQoJy5MaXN0LUNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuLy8gXHRcdCQoJy5EZWxldGVCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcbi8vIFx0XHQkKCd0Ym9keSB0cicpLnJlbW92ZUNsYXNzKCdyb3ctc2VsZWN0ZWQnKTtcclxuLy8gXHR9XHJcbi8vIH0pO1xyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIENoZWNrVG9TaGlwcGluZyhpZClcclxuLy8ge1xyXG4vLyBcdHZhciBzZWxlY3RlZFJvd3MgPSBbXTtcclxuLy8gXHQkKFwiLkxpc3QtQ2hlY2tib3g6Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uKCkgeyAgICAgICAgICBcclxuLy8gXHRcdHNlbGVjdGVkUm93cy5wdXNoKCQodGhpcykuYXR0cignZGF0YS1pZCcpKTtcclxuLy8gXHRcdCQoJyNSb3dzVG9TaGlwcGluZycpLnZhbChzZWxlY3RlZFJvd3MpO1xyXG4vLyBcdH0pO1xyXG5cclxuLy8gXHQkKCcjUm93c1RvRXhwb3J0JykudmFsKHNlbGVjdGVkUm93cyk7XHJcbi8vIFx0aWYoc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PSAwKXtcclxuLy8gXHRcdCQoJyNFZGl0SWQsICNSb3dzVG9TaGlwcGluZycpLnZhbCgnJyk7XHJcbi8vIFx0fSBcdFxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBDaGVja1RvRGVsZXRpb24odHlwZSwgcm93KVxyXG4vLyB7XHJcbi8vIFx0Ly8gY29uc29sZS5sb2codHlwZSwgcm93KTtcclxuLy8gXHR2YXIgc2VsZWN0ZWRSb3dzID0gW107XHJcbi8vIFx0JChcIi5MaXN0LUNoZWNrYm94OmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbigpIHsgICAgICAgICAgXHJcbi8vIFx0XHRzZWxlY3RlZFJvd3MucHVzaCgkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSk7XHJcbi8vIFx0XHQkKCcjUm93c1RvRGVsZXRpb24nKS52YWwoc2VsZWN0ZWRSb3dzKTtcclxuLy8gXHR9KTtcclxuXHJcblxyXG4vLyBcdCQoJyNSb3dzVG9FeHBvcnQnKS52YWwoc2VsZWN0ZWRSb3dzKTtcclxuLy8gXHRpZihzZWxlY3RlZFJvd3MubGVuZ3RoID09IDEpe1xyXG4vLyBcdFx0JCgnI0VkaXRJZCwgI0NyZWF0ZUZyb21Bbm90aGVySWQnKS52YWwoc2VsZWN0ZWRSb3dzKTtcclxuLy8gXHR9IGVsc2UgaWYoc2VsZWN0ZWRSb3dzLmxlbmd0aCA8IDEpe1xyXG4vLyBcdFx0JCgnI0VkaXRJZCwgI0NyZWF0ZUZyb21Bbm90aGVySWQnKS52YWwoJycpO1xyXG4vLyBcdH0gZWxzZSBpZihzZWxlY3RlZFJvd3MubGVuZ3RoID4gMSl7XHJcbi8vIFx0XHQkKCcjRWRpdElkLCAjQ3JlYXRlRnJvbUFub3RoZXJJZCcpLnZhbCgnJyk7XHJcbi8vIFx0fSBlbHNlIHtcclxuLy8gXHRcdCQoJyNFZGl0SWQsICNDcmVhdGVGcm9tQW5vdGhlcklkJykudmFsKCcnKTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoc2VsZWN0ZWRSb3dzLmxlbmd0aCk7XHJcblxyXG4vLyBcdC8vIHNob3dCdXR0b25zKHRoaXMpO1xyXG4vLyBcdC8vIGlmKHR5cGUgPT0gJ3NpbmdsZScgJiYgcm93ICE9IHVuZGVmaW5lZClcclxuLy8gXHQvLyB7XHJcbi8vIFx0Ly8gXHR2YXIgY2hlY2tib3ggPSByb3cucHJvcCgnY2hlY2tlZCcpO1xyXG4vLyBcdC8vIFx0aWYoY2hlY2tib3gpe1xyXG4vLyBcdC8vIFx0XHRyb3cucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ3Jvdy1zZWxlY3RlZCcpO1xyXG4vLyBcdC8vIFx0fSBlbHNlIHtcclxuLy8gXHQvLyBcdFx0cm93LnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdyb3ctc2VsZWN0ZWQnKTtcclxuLy8gXHQvLyBcdH1cclxuLy8gXHQvLyB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHNob3dCdXR0b25zKHRyaWdnZXIpIHtcclxuXHJcbi8vIFx0dmFyIGNvdW50U2VsZWN0ZWQgPSAkKCcuTGlzdC1DaGVja2JveDpjaGVja2JveDpjaGVja2VkJykubGVuZ3RoO1xyXG5cclxuLy8gXHRpZihjb3VudFNlbGVjdGVkID09IDEpIHtcclxuLy8gICAgICAgICAkKCcuRGVsZXRlQnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG4vLyBcdFx0JCgnLkVkaXRCdG4nKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcbi8vIFx0XHQkKCcuQ3JlYXRlRnJvbUFub3RoZXJCdG4nKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcbi8vIFx0XHQkKCcuRXhwb3J0U2VsZWN0ZWRCdG4nKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcbi8vIFx0XHQkKCcuRXhwb3J0VG9TaGlwcGluZ0J0bicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuLy8gXHR9IGVsc2UgaWYoY291bnRTZWxlY3RlZCA+IDAgKSB7XHJcbi8vIFx0XHQkKCcuRXhwb3J0VG9TaGlwcGluZ0J0bicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuLy8gXHR9IGVsc2UgaWYoY291bnRTZWxlY3RlZCA+PSAyKSB7XHJcbi8vIFx0XHQkKCcuRWRpdEJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuLy8gXHRcdCQoJy5DcmVhdGVGcm9tQW5vdGhlckJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuLy8gICAgIH0gZWxzZSBpZihjb3VudFNlbGVjdGVkID09IDApIHtcclxuLy8gXHRcdCQoJy5EZWxldGVCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcbi8vIFx0XHQkKCcuRWRpdEJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuLy8gXHRcdCQoJy5DcmVhdGVGcm9tQW5vdGhlckJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuLy8gXHRcdCQoJy5FeHBvcnRTZWxlY3RlZEJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuLy8gXHRcdCQoJy5FeHBvcnRUb1NoaXBwaW5nQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG4vLyBcdH1cclxuXHRcclxuLy8gfVxyXG5cclxuLy8gU2hvdyBFZGl0IGFuZCBEZWxldGUgYnV0dG9ucyBpbiBib3R0b20gaWYgc2Nyb2xsZWQgdG8gbXV0Y2hcclxuJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKGUpe1xyXG5cdHZhciBzY3JvbGxBbW91bnQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0Ly8gVGhpcyBpcyBWRVJZIEFSQ0hBSUMuLi4gRE9OwrRUIEpVREdFIE1FLlxyXG5cdGlmKHNjcm9sbEFtb3VudCA+IDE1MCl7XHJcblx0XHQkKCcuRGVsZXRlQnRuJykuY3NzKHtcInBvc2l0aW9uXCI6XCJmaXhlZFwiLCBcImJvdHRvbVwiOlwiNTBweFwiLCBcInJpZ2h0XCI6XCIxMHB4XCIsIFwiei1pbmRleFwiOlwiOTk5XCJ9KTtcclxuXHRcdCQoJy5FZGl0QnRuJykuY3NzKHtcInBvc2l0aW9uXCI6XCJmaXhlZFwiLCBcImJvdHRvbVwiOlwiNTBweFwiLCBcInJpZ2h0XCI6XCIxMzBweFwiLCBcInotaW5kZXhcIjpcIjk5OVwifSk7XHJcblx0XHQkKCcuQ3JlYXRlRnJvbUFub3RoZXJCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcImZpeGVkXCIsIFwiYm90dG9tXCI6XCI1MHB4XCIsIFwicmlnaHRcIjpcIjIzNXB4XCIsIFwiei1pbmRleFwiOlwiOTk5XCJ9KTtcclxuXHRcdCQoJy5FeHBvcnRUb1NoaXBwaW5nQnRuJykuY3NzKHsgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsIFwiYm90dG9tXCI6IFwiNTBweFwiLCBcInJpZ2h0XCI6IFwiMjM2cHhcIiwgXCJ6LWluZGV4XCI6IFwiOTk5XCIgfSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJy5EZWxldGVCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCIsIFwiYm90dG9tXCI6XCJhdXRvXCIsIFwicmlnaHRcIjpcImF1dG9cIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xyXG5cdFx0JCgnLkVkaXRCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCIsIFwiYm90dG9tXCI6XCJhdXRvXCIsIFwicmlnaHRcIjpcImF1dG9cIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xyXG5cdFx0JCgnLkNyZWF0ZUZyb21Bbm90aGVyQnRuJykuY3NzKHtcInBvc2l0aW9uXCI6XCJyZWxhdGl2ZVwiLCBcImJvdHRvbVwiOlwiYXV0b1wiLCBcInJpZ2h0XCI6XCJhdXRvXCIsIFwiei1pbmRleFwiOlwiOTk5XCJ9KTtcclxuXHRcdCQoJy5FeHBvcnRUb1NoaXBwaW5nQnRuJykuY3NzKHsgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsIFwiYm90dG9tXCI6IFwiYXV0b1wiLCBcInJpZ2h0XCI6IFwiYXV0b1wiLCBcInotaW5kZXhcIjogXCI5OTlcIiB9KTtcclxuXHRcdFxyXG5cdH1cclxufSk7XHJcblxyXG4vLyBVbmNoZWNrIGFsbCBjaGVja2JveGVzIG9uIHJlbG9hZC5cclxuZnVuY3Rpb24gdW5jaGVja0FsbCgpe1xyXG5cdCQoJyNUYWJsZUxpc3QgdGJvZHkgLkNoZWNrQm94ZXMnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1x0XHJcblx0fSk7XHRcclxufVxyXG51bmNoZWNrQWxsKCk7XHJcblxyXG4vKlxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCBGVU5DVElPTlNcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi8vIFJlY2VpdmUgSUQgd2l0aCAjXHJcbnNldE90aGVyVG9DZXJvID0gZnVuY3Rpb24ob3RoZXIpIHtcclxuXHQkKG90aGVyKS52YWwoMCk7XHJcbn1cclxuXHJcbi8vIERlbGV0ZSByb3dzXHJcbmRlbGV0ZVJlY29yZCA9IGZ1bmN0aW9uKGlkLCByb3V0ZSwgYmlndGV4dCwgc21hbGx0ZXh0KSB7XHJcblx0c3dhbCh7XHJcblx0XHR0aXRsZTogYmlndGV4dCxcclxuXHRcdHRleHQ6IHNtYWxsdGV4dCxcclxuXHRcdHR5cGU6ICd3YXJuaW5nJyxcclxuXHRcdHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcblx0XHRjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuXHRcdGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXHJcblx0XHRjb25maXJtQnV0dG9uVGV4dDogJ0VMSU1JTkFSJyxcclxuXHRcdGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWxhcicsXHJcblx0XHRjb25maXJtQnV0dG9uQ2xhc3M6ICdidG4gYnRuR3JlZW4nLFxyXG5cdFx0Y2FuY2VsQnV0dG9uQ2xhc3M6ICdidG4gYnRuUmVkJyxcclxuXHRcdGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG5cdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG5cclxuIFx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmw6IHJvdXRlLFxyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJywgICAgICAgICAgICAgXHJcblx0XHRcdGRhdGFUeXBlOiAnSlNPTicsXHJcblx0XHRcdGRhdGE6IHsgaWQ6IGlkIH0sXHJcblx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Ly8gJCgnI01haW4tTG9hZGVyJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdFx0XHQkKCcjQmF0Y2hEZWxldGVCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcblx0XHRcdFx0aWYgKGRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XHJcblx0XHRcdFx0XHQkKCcjSWQnK2lkKS5oaWRlKDIwMCk7XHJcblx0XHRcdFx0XHRmb3IoaT0wOyBpIDwgaWQubGVuZ3RoIDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0JCgnI0lkJytpZFtpXSkuaGlkZSgyMDApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YWxlcnRfb2soJ09rIScsJ0VsaW1pbmFjacOzbiBjb21wbGV0YScpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWxlcnRfZXJyb3IoJ1VwcyEnLCdIYSBvY3VycmlkbyB1biBlcnJvciAoUHVlZGUgcXVlIGVzdGUgcmVnaXN0cm8gdGVuZ2EgcmVsYWNpw7NuIGNvbiBvdHJvcyBpdGVtcyBlbiBlbCBzaXN0ZW1hKS4gRGViZSBlbGltaW5hciBwcmltZXJvIGxvcyBtaXNtb3MuJyk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yOiBmdW5jdGlvbihkYXRhKVxyXG5cdFx0XHR7XHJcbiAgICAgICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb21wbGV0ZTogZnVuY3Rpb24oKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gJCgnI01haW4tTG9hZGVyJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn1cclxuXHJcbmRlbGV0ZUFuZFJlbG9hZCA9IGZ1bmN0aW9uKGlkLCByb3V0ZSwgYmlndGV4dCwgc21hbGx0ZXh0KSB7XHJcblx0c3dhbCh7XHJcblx0XHR0aXRsZTogYmlndGV4dCxcclxuXHRcdHRleHQ6IHNtYWxsdGV4dCxcclxuXHRcdHR5cGU6ICd3YXJuaW5nJyxcclxuXHRcdHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcblx0XHRjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuXHRcdGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXHJcblx0XHRjb25maXJtQnV0dG9uVGV4dDogJ0VMSU1JTkFSJyxcclxuXHRcdGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWxhcicsXHJcblx0XHRjb25maXJtQnV0dG9uQ2xhc3M6ICdidG4gYnRuR3JlZW4nLFxyXG5cdFx0Y2FuY2VsQnV0dG9uQ2xhc3M6ICdidG4gYnRuUmVkJyxcclxuXHRcdGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG5cdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsOiByb3V0ZSxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsICAgICAgICAgICAgIFxyXG5cdFx0XHRkYXRhVHlwZTogJ0pTT04nLFxyXG5cdFx0XHRkYXRhOiB7IGlkOiBpZCB9LFxyXG5cdFx0XHRiZWZvcmVTZW5kOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdC8vICQoJyNNYWluLUxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0JCgnI0JhdGNoRGVsZXRlQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHRcdGlmIChkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0Ly8gYWxlcnRfb2soJ09rIScsJ0VsaW1pbmFjacOzbiBjb21wbGV0YScpO1xyXG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFsZXJ0X2Vycm9yKCdVcHMhJywnSGEgb2N1cnJpZG8gdW4gZXJyb3IgKFB1ZWRlIHF1ZSBlc3RlIHJlZ2lzdHJvIHRlbmdhIHJlbGFjacOzbiBjb24gb3Ryb3MgaXRlbXMgZW4gZWwgc2lzdGVtYSkuIERlYmUgZWxpbWluYXIgcHJpbWVybyBsb3MgbWlzbW9zLicpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24oZGF0YSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1x0XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufVxyXG5cclxuXHJcbi8vIFJlbW92ZSBwcm9kdWN0IGZyb20gY2FydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbndpbmRvdy5yZW1vdmVGcm9tQ2FydCA9IGZ1bmN0aW9uIChyb3V0ZSwgY2FydEl0ZW1JZCwgYWN0aW9uLCBlbGVtZW50KSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogcm91dGUsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcblx0XHRkYXRhVHlwZTogJ0pTT04nLFxyXG4gICAgICAgIGRhdGE6IHsgY2FydEl0ZW1JZDogY2FydEl0ZW1JZCwgYWN0aW9uOiBhY3Rpb24gfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XHJcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVSUk9SXCIpO1xyXG5cdFx0XHR9ICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiByZW1vdmVGcm9tQ2FydCgpXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgLy8gSWYgYW4gZXJyb3IgcG9wcyB3aGVuIGRlc3Ryb3lpbmcgYW4gaXRlbSwgcmVsb2FkIGFuZCBwcmV2ZW50IGJhZCBtYWdpY1xyXG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdH1cclxuICAgIH0pO1x0XHJcbn1cclxuLypcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgQUxFUlRTXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gYWxlcnRfb2soYmlndGV4dCwgc21hbGx0ZXh0KXtcclxuICAgIHN3YWwoXHJcbiAgICAgICAgYmlndGV4dCxcclxuICAgICAgICBzbWFsbHRleHQsXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICApOyAgICBcclxufVxyXG4gICAgXHJcbmZ1bmN0aW9uIGFsZXJ0X2Vycm9yKGJpZ3RleHQsIHNtYWxsdGV4dCl7XHJcbiAgICBzd2FsKFxyXG4gICAgICAgIGJpZ3RleHQsXHJcbiAgICAgICAgc21hbGx0ZXh0LFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsZXJ0X2luZm8oYmlndGV4dCwgc21hbGx0ZXh0KXtcclxuXHJcbiAgICBzd2FsKHtcclxuICAgICAgICAgICAgdGl0bGU6IGJpZ3RleHQsXHJcbiAgICAgICAgdHlwZTogJ2luZm8nLFxyXG4gICAgICAgIGh0bWw6IHNtYWxsdGV4dCxcclxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6XHJcbiAgICAgICAgICAgICc8aSBjbGFzcz1cImlvbi1jaGVja21hcmstcm91bmRcIj48L2k+IE9rISdcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsb3NlUGFyZW50KCl7XHJcblx0JCh0aGlzKS5wYXJlbnQoJ2hpZGUnKTtcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZnVuY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==