!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=64)}({64:function(e,t,o){e.exports=o(65)},65:function(e,t){function o(e,t){console.log(e,t);var o,n=[];($(".List-Checkbox:checked").each(function(){n.push($(this).attr("data-id")),$("#RowsToDeletion").val(n)}),$("#RowsToExport").val(n),1==n.length?$("#EditId, #CreateFromAnotherId").val(n):n.length<1?$("#EditId, #CreateFromAnotherId").val(""):(n.length,$("#EditId, #CreateFromAnotherId").val("")),1==(o=$(".List-Checkbox:checkbox:checked").length)?($(".DeleteBtn").removeClass("Hidden"),$(".EditBtn").removeClass("Hidden"),$(".CreateFromAnotherBtn").removeClass("Hidden"),$(".ExportSelectedBtn").removeClass("Hidden")):o>=2?($(".EditBtn").addClass("Hidden"),$(".CreateFromAnotherBtn").addClass("Hidden")):0==o&&($(".DeleteBtn").addClass("Hidden"),$(".EditBtn").addClass("Hidden"),$(".CreateFromAnotherBtn").addClass("Hidden"),$(".ExportSelectedBtn").addClass("Hidden")),"single"==e&&void 0!=t)&&(t.prop("checked")?t.parent().parent().parent().addClass("row-selected"):t.parent().parent().parent().removeClass("row-selected"))}function n(e,t){swal(e,t,"error")}$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$(document).on("click",".List-Checkbox",function(e){e.stopPropagation(),o("single",$(this))}),$(".Select-All-To-Delete").on("click",function(){$(this).prop("checked")?($(".List-Checkbox").prop("checked",!0),$(".List-Checkbox").length>=1&&(o("all"),$(".DeleteBtn").removeClass("Hidden")),$("tbody tr").addClass("row-selected")):($(".List-Checkbox").prop("checked",!1),$(".DeleteBtn").addClass("Hidden"),$("tbody tr").removeClass("row-selected"))}),$(document).scroll(function(e){$(window).scrollTop()>150?($(".DeleteBtn").css({position:"fixed",bottom:"50px",right:"10px","z-index":"999"}),$(".EditBtn").css({position:"fixed",bottom:"50px",right:"130px","z-index":"999"}),$(".CreateFromAnotherBtn").css({position:"fixed",bottom:"50px",right:"235px","z-index":"999"})):($(".DeleteBtn").css({position:"relative",bottom:"auto",right:"auto","z-index":"999"}),$(".EditBtn").css({position:"relative",bottom:"auto",right:"auto","z-index":"999"}),$(".CreateFromAnotherBtn").css({position:"relative",bottom:"auto",right:"auto","z-index":"999"}))}),$("#TableList tbody .CheckBoxes").find('input[type="checkbox"]').each(function(){$(this).prop("checked",!1)}),setOtherToCero=function(e){$(e).val(0)},deleteRecord=function(e,t,o,r){swal({title:o,text:r,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ELIMINAR",cancelButtonText:"Cancelar",confirmButtonClass:"btn btnGreen",cancelButtonClass:"btn btnRed",buttonsStyling:!1}).then(function(){$.ajax({url:t,method:"POST",dataType:"JSON",data:{id:e},beforeSend:function(){},success:function(t){if($("#BatchDeleteBtn").addClass("Hidden"),1==t.success){for($("#Id"+e).hide(200),i=0;i<e.length;i++)$("#Id"+e[i]).hide(200);return swal("Ok!","Eliminación completa","success"),console.log(t),!0}return n("Ups!","Ha ocurrido un error (Puede que este registro tenga relación con otros items en el sistema). Debe eliminar primero los mismos."),console.log(t),!1},error:function(e){$("#Error").html(e.responseText),console.log(e)},complete:function(){}})})},deleteAndReload=function(e,t,o,r){swal({title:o,text:r,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ELIMINAR",cancelButtonText:"Cancelar",confirmButtonClass:"btn btnGreen",cancelButtonClass:"btn btnRed",buttonsStyling:!1}).then(function(){$.ajax({url:t,method:"POST",dataType:"JSON",data:{id:e},beforeSend:function(){},success:function(e){if($("#BatchDeleteBtn").addClass("Hidden"),1!=e.success)return n("Ups!","Ha ocurrido un error (Puede que este registro tenga relación con otros items en el sistema). Debe eliminar primero los mismos."),console.log(e),!1;location.reload()},error:function(e){$("#Error").html(e.responseText),console.log(e)}})})},window.removeFromCart=function(e,t,o,n){$.ajax({url:e,method:"POST",dataType:"JSON",data:{cartItemId:t,action:o},success:function(e){console.log(e),"success"==e.response?n.remove():console.log("ERROR")},error:function(e){$("#Error").html(e.responseText),console.log("Error en removeFromCart()"),console.log(e)}})}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTRkYTRlMzQ4NWUwMzRjNzUxYTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwibiIsIl9fZXNNb2R1bGUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJDaGVja1RvRGVsZXRpb24iLCJ0eXBlIiwicm93IiwiY29uc29sZSIsImxvZyIsImNvdW50U2VsZWN0ZWQiLCJzZWxlY3RlZFJvd3MiLCIkIiwiZWFjaCIsInB1c2giLCJ0aGlzIiwiYXR0ciIsInZhbCIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ1bmRlZmluZWQiLCJwcm9wIiwicGFyZW50IiwiYWxlcnRfZXJyb3IiLCJiaWd0ZXh0Iiwic21hbGx0ZXh0Iiwic3dhbCIsImFqYXhTZXR1cCIsImhlYWRlcnMiLCJYLUNTUkYtVE9LRU4iLCJkb2N1bWVudCIsIm9uIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFRvcCIsImNzcyIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJ6LWluZGV4IiwiZmluZCIsInNldE90aGVyVG9DZXJvIiwib3RoZXIiLCJkZWxldGVSZWNvcmQiLCJpZCIsInJvdXRlIiwidGl0bGUiLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY29uZmlybUJ1dHRvbkNsYXNzIiwiY2FuY2VsQnV0dG9uQ2xhc3MiLCJidXR0b25zU3R5bGluZyIsInRoZW4iLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJkYXRhIiwiYmVmb3JlU2VuZCIsInN1Y2Nlc3MiLCJoaWRlIiwiZXJyb3IiLCJodG1sIiwicmVzcG9uc2VUZXh0IiwiY29tcGxldGUiLCJkZWxldGVBbmRSZWxvYWQiLCJsb2NhdGlvbiIsInJlbG9hZCIsInJlbW92ZUZyb21DYXJ0IiwiY2FydEl0ZW1JZCIsImFjdGlvbiIsImVsZW1lbnQiLCJyZXNwb25zZSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsS0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxJQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFlBVUEsT0FOQUksRUFBQUwsR0FBQU0sS0FBQUosRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUYsR0FHQUcsRUFBQUUsR0FBQSxFQUdBRixFQUFBRCxRQUtBRixFQUFBUSxFQUFBRixFQUdBTixFQUFBUyxFQUFBVixFQUdBQyxFQUFBVSxFQUFBLFNBQUFSLEVBQUFTLEVBQUFDLEdBQ0FaLEVBQUFhLEVBQUFYLEVBQUFTLElBQ0FHLE9BQUFDLGVBQUFiLEVBQUFTLEdBQ0FLLGNBQUEsRUFDQUMsWUFBQSxFQUNBQyxJQUFBTixLQU1BWixFQUFBbUIsRUFBQSxTQUFBaEIsR0FDQSxJQUFBUyxFQUFBVCxLQUFBaUIsV0FDQSxXQUEyQixPQUFBakIsRUFBQSxTQUMzQixXQUFpQyxPQUFBQSxHQUVqQyxPQURBSCxFQUFBVSxFQUFBRSxFQUFBLElBQUFBLEdBQ0FBLEdBSUFaLEVBQUFhLEVBQUEsU0FBQVEsRUFBQUMsR0FBc0QsT0FBQVIsT0FBQVMsVUFBQUMsZUFBQWpCLEtBQUFjLEVBQUFD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QixXQUFZLGFBR1pDLFFBQVMsU0FBU0YsR0FFakIsR0FEQXBELEVBQUUsbUJBQW1CUSxTQUFTLFVBQ1YsR0FBaEI0QyxFQUFLRSxRQU1SLE9BRkExQyxFQUFZLE9BQU8sa0lBQ25CaEIsUUFBUUMsSUFBSXVELElBQ0wsRUFKUFMsU0FBU0MsVUFPWE4sTUFBTyxTQUFTSixHQUVmcEQsRUFBRSxVQUFVeUQsS0FBS0wsRUFBS00sY0FDdEI5RCxRQUFRQyxJQUFJdUQsU0FVaEI1QixPQUFPdUMsZUFBaUIsU0FBVTNCLEVBQU80QixFQUFZQyxFQUFRQyxHQUN6RGxFLEVBQUVnRCxNQUNFQyxJQUFLYixFQUNMYyxPQUFRLE9BQ2RDLFNBQVUsT0FDSkMsTUFBUVksV0FBWUEsRUFBWUMsT0FBUUEsR0FDeENYLFFBQVMsU0FBVUYsR0FDeEJ4RCxRQUFRQyxJQUFJdUQsR0FDa0IsV0FBakJBLEVBQUtlLFNBQ2pCRCxFQUFRRSxTQUVSeEUsUUFBUUMsSUFBSSxVQUdSMkQsTUFBTyxTQUFVSixHQUNicEQsRUFBRSxVQUFVeUQsS0FBS0wsRUFBS00sY0FDdEI5RCxRQUFRQyxJQUFJLDZCQUNaRCxRQUFRQyxJQUFJdUQiLCJmaWxlIjoiL2pzL3ZhZG1pbi1mdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU0ZGE0ZTM0ODVlMDM0Yzc1MWEwIiwiJC5hamF4U2V0dXAoe1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcbiAgICB9XHJcbn0pO1xyXG4gXHJcbi8qXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58IExJU1RTXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG5cclxuXHJcbi8vIFNlbGVjdCBjaGVja2JveCB0byBkZWxldGlvblxyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLkxpc3QtQ2hlY2tib3hcIiwgZnVuY3Rpb24oZSlcclxue1xyXG5cdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0Q2hlY2tUb0RlbGV0aW9uKFwic2luZ2xlXCIsICQodGhpcykpO1xyXG59KTtcclxuXHJcbi8vIFNlbGVjdCBBbGwgcHJlc2VudCBjaGVja2JveGVzIHRvIGRlbGV0aW9uXHJcbiQoJy5TZWxlY3QtQWxsLVRvLURlbGV0ZScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0aWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcblx0XHQkKCcuTGlzdC1DaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdGlmKCQoJy5MaXN0LUNoZWNrYm94JykubGVuZ3RoID49IDEpXHJcblx0XHR7XHJcblx0XHRcdENoZWNrVG9EZWxldGlvbihcImFsbFwiKVxyXG5cdFx0XHQkKCcuRGVsZXRlQnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCQoJ3Rib2R5IHRyJykuYWRkQ2xhc3MoJ3Jvdy1zZWxlY3RlZCcpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcuTGlzdC1DaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHQkKCcuRGVsZXRlQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0JCgndGJvZHkgdHInKS5yZW1vdmVDbGFzcygncm93LXNlbGVjdGVkJyk7XHJcblx0fVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENoZWNrVG9EZWxldGlvbih0eXBlLCByb3cpXHJcbntcclxuXHRjb25zb2xlLmxvZyh0eXBlLCByb3cpO1xyXG5cdHZhciBzZWxlY3RlZFJvd3MgPSBbXTtcclxuXHQkKFwiLkxpc3QtQ2hlY2tib3g6Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uKCkgeyAgICAgICAgICBcclxuXHRcdHNlbGVjdGVkUm93cy5wdXNoKCQodGhpcykuYXR0cignZGF0YS1pZCcpKTtcclxuXHRcdCQoJyNSb3dzVG9EZWxldGlvbicpLnZhbChzZWxlY3RlZFJvd3MpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNSb3dzVG9FeHBvcnQnKS52YWwoc2VsZWN0ZWRSb3dzKTtcclxuXHRpZihzZWxlY3RlZFJvd3MubGVuZ3RoID09IDEpe1xyXG5cdFx0JCgnI0VkaXRJZCwgI0NyZWF0ZUZyb21Bbm90aGVySWQnKS52YWwoc2VsZWN0ZWRSb3dzKTtcclxuXHR9IGVsc2UgaWYoc2VsZWN0ZWRSb3dzLmxlbmd0aCA8IDEpe1xyXG5cdFx0JCgnI0VkaXRJZCwgI0NyZWF0ZUZyb21Bbm90aGVySWQnKS52YWwoJycpO1xyXG5cdH0gZWxzZSBpZihzZWxlY3RlZFJvd3MubGVuZ3RoID4gMSl7XHJcblx0XHQkKCcjRWRpdElkLCAjQ3JlYXRlRnJvbUFub3RoZXJJZCcpLnZhbCgnJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJyNFZGl0SWQsICNDcmVhdGVGcm9tQW5vdGhlcklkJykudmFsKCcnKTtcclxuXHR9XHJcblxyXG5cdHNob3dCdXR0b25zKHRoaXMpO1xyXG5cdGlmKHR5cGUgPT0gJ3NpbmdsZScgJiYgcm93ICE9IHVuZGVmaW5lZClcclxuXHR7XHJcblx0XHR2YXIgY2hlY2tib3ggPSByb3cucHJvcCgnY2hlY2tlZCcpO1xyXG5cdFx0aWYoY2hlY2tib3gpe1xyXG5cdFx0XHRyb3cucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ3Jvdy1zZWxlY3RlZCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cm93LnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdyb3ctc2VsZWN0ZWQnKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dCdXR0b25zKHRyaWdnZXIpIHtcclxuXHRcclxuXHR2YXIgY291bnRTZWxlY3RlZCA9ICQoJy5MaXN0LUNoZWNrYm94OmNoZWNrYm94OmNoZWNrZWQnKS5sZW5ndGg7XHJcblx0aWYoY291bnRTZWxlY3RlZCA9PSAxKSB7XHJcbiAgICAgICAgJCgnLkRlbGV0ZUJ0bicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHRcdCQoJy5FZGl0QnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0JCgnLkNyZWF0ZUZyb21Bbm90aGVyQnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0JCgnLkV4cG9ydFNlbGVjdGVkQnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdH0gZWxzZSBpZihjb3VudFNlbGVjdGVkID49IDIpIHtcclxuXHRcdCQoJy5FZGl0QnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0JCgnLkNyZWF0ZUZyb21Bbm90aGVyQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG4gICAgfSBlbHNlIGlmKGNvdW50U2VsZWN0ZWQgPT0gMCkge1xyXG4gICAgICAgICQoJy5EZWxldGVCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcblx0XHQkKCcuRWRpdEJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuXHRcdCQoJy5DcmVhdGVGcm9tQW5vdGhlckJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuXHRcdCQoJy5FeHBvcnRTZWxlY3RlZEJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gU2hvdyBFZGl0IGFuZCBEZWxldGUgYnV0dG9ucyBpbiBib3R0b20gaWYgc2Nyb2xsZWQgdG8gbXV0Y2hcclxuJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKGUpe1xyXG5cdHZhciBzY3JvbGxBbW91bnQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0aWYoc2Nyb2xsQW1vdW50ID4gMTUwKXtcclxuXHRcdCQoJy5EZWxldGVCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcImZpeGVkXCIsIFwiYm90dG9tXCI6XCI1MHB4XCIsIFwicmlnaHRcIjpcIjEwcHhcIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xyXG5cdFx0JCgnLkVkaXRCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcImZpeGVkXCIsIFwiYm90dG9tXCI6XCI1MHB4XCIsIFwicmlnaHRcIjpcIjEzMHB4XCIsIFwiei1pbmRleFwiOlwiOTk5XCJ9KTtcclxuXHRcdCQoJy5DcmVhdGVGcm9tQW5vdGhlckJ0bicpLmNzcyh7XCJwb3NpdGlvblwiOlwiZml4ZWRcIiwgXCJib3R0b21cIjpcIjUwcHhcIiwgXCJyaWdodFwiOlwiMjM1cHhcIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcuRGVsZXRlQnRuJykuY3NzKHtcInBvc2l0aW9uXCI6XCJyZWxhdGl2ZVwiLCBcImJvdHRvbVwiOlwiYXV0b1wiLCBcInJpZ2h0XCI6XCJhdXRvXCIsIFwiei1pbmRleFwiOlwiOTk5XCJ9KTtcclxuXHRcdCQoJy5FZGl0QnRuJykuY3NzKHtcInBvc2l0aW9uXCI6XCJyZWxhdGl2ZVwiLCBcImJvdHRvbVwiOlwiYXV0b1wiLCBcInJpZ2h0XCI6XCJhdXRvXCIsIFwiei1pbmRleFwiOlwiOTk5XCJ9KTtcclxuXHRcdCQoJy5DcmVhdGVGcm9tQW5vdGhlckJ0bicpLmNzcyh7XCJwb3NpdGlvblwiOlwicmVsYXRpdmVcIiwgXCJib3R0b21cIjpcImF1dG9cIiwgXCJyaWdodFwiOlwiYXV0b1wiLCBcInotaW5kZXhcIjpcIjk5OVwifSk7XHJcblx0XHRcclxuXHR9XHJcbn0pO1xyXG5cclxuLy8gVW5jaGVjayBhbGwgY2hlY2tib3hlcyBvbiByZWxvYWQuXHJcbmZ1bmN0aW9uIHVuY2hlY2tBbGwoKXtcclxuXHQkKCcjVGFibGVMaXN0IHRib2R5IC5DaGVja0JveGVzJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcdFxyXG5cdH0pO1x0XHJcbn1cclxudW5jaGVja0FsbCgpO1xyXG5cclxuLypcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgRlVOQ1RJT05TXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4vLyBSZWNlaXZlIElEIHdpdGggI1xyXG5zZXRPdGhlclRvQ2VybyA9IGZ1bmN0aW9uKG90aGVyKSB7XHJcblx0JChvdGhlcikudmFsKDApO1xyXG59XHJcblxyXG4vLyBEZWxldGUgcm93c1xyXG5kZWxldGVSZWNvcmQgPSBmdW5jdGlvbihpZCwgcm91dGUsIGJpZ3RleHQsIHNtYWxsdGV4dCkge1xyXG5cdHN3YWwoe1xyXG5cdFx0dGl0bGU6IGJpZ3RleHQsXHJcblx0XHR0ZXh0OiBzbWFsbHRleHQsXHJcblx0XHR0eXBlOiAnd2FybmluZycsXHJcblx0XHRzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcblx0XHRjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG5cdFx0Y29uZmlybUJ1dHRvblRleHQ6ICdFTElNSU5BUicsXHJcblx0XHRjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsYXInLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNsYXNzOiAnYnRuIGJ0bkdyZWVuJyxcclxuXHRcdGNhbmNlbEJ1dHRvbkNsYXNzOiAnYnRuIGJ0blJlZCcsXHJcblx0XHRidXR0b25zU3R5bGluZzogZmFsc2VcclxuXHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiBcdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsOiByb3V0ZSxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsICAgICAgICAgICAgIFxyXG5cdFx0XHRkYXRhVHlwZTogJ0pTT04nLFxyXG5cdFx0XHRkYXRhOiB7IGlkOiBpZCB9LFxyXG5cdFx0XHRiZWZvcmVTZW5kOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdC8vICQoJyNNYWluLUxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0JCgnI0JhdGNoRGVsZXRlQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHRcdGlmIChkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0JCgnI0lkJytpZCkuaGlkZSgyMDApO1xyXG5cdFx0XHRcdFx0Zm9yKGk9MDsgaSA8IGlkLmxlbmd0aCA7IGkrKyl7XHJcblx0XHRcdFx0XHRcdCQoJyNJZCcraWRbaV0pLmhpZGUoMjAwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGFsZXJ0X29rKCdPayEnLCdFbGltaW5hY2nDs24gY29tcGxldGEnKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFsZXJ0X2Vycm9yKCdVcHMhJywnSGEgb2N1cnJpZG8gdW4gZXJyb3IgKFB1ZWRlIHF1ZSBlc3RlIHJlZ2lzdHJvIHRlbmdhIHJlbGFjacOzbiBjb24gb3Ryb3MgaXRlbXMgZW4gZWwgc2lzdGVtYSkuIERlYmUgZWxpbWluYXIgcHJpbWVybyBsb3MgbWlzbW9zLicpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24oZGF0YSlcclxuXHRcdFx0e1xyXG4gICAgICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29tcGxldGU6IGZ1bmN0aW9uKClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vICQoJyNNYWluLUxvYWRlcicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59XHJcblxyXG5kZWxldGVBbmRSZWxvYWQgPSBmdW5jdGlvbihpZCwgcm91dGUsIGJpZ3RleHQsIHNtYWxsdGV4dCkge1xyXG5cdHN3YWwoe1xyXG5cdFx0dGl0bGU6IGJpZ3RleHQsXHJcblx0XHR0ZXh0OiBzbWFsbHRleHQsXHJcblx0XHR0eXBlOiAnd2FybmluZycsXHJcblx0XHRzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcblx0XHRjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG5cdFx0Y29uZmlybUJ1dHRvblRleHQ6ICdFTElNSU5BUicsXHJcblx0XHRjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsYXInLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNsYXNzOiAnYnRuIGJ0bkdyZWVuJyxcclxuXHRcdGNhbmNlbEJ1dHRvbkNsYXNzOiAnYnRuIGJ0blJlZCcsXHJcblx0XHRidXR0b25zU3R5bGluZzogZmFsc2VcclxuXHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybDogcm91dGUsXHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLCAgICAgICAgICAgICBcclxuXHRcdFx0ZGF0YVR5cGU6ICdKU09OJyxcclxuXHRcdFx0ZGF0YTogeyBpZDogaWQgfSxcclxuXHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQvLyAkKCcjTWFpbi1Mb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRcdCQoJyNCYXRjaERlbGV0ZUJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0XHRpZiAoZGF0YS5zdWNjZXNzID09IHRydWUpIHtcclxuXHRcdFx0XHRcdC8vIGFsZXJ0X29rKCdPayEnLCdFbGltaW5hY2nDs24gY29tcGxldGEnKTtcclxuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRhbGVydF9lcnJvcignVXBzIScsJ0hhIG9jdXJyaWRvIHVuIGVycm9yIChQdWVkZSBxdWUgZXN0ZSByZWdpc3RybyB0ZW5nYSByZWxhY2nDs24gY29uIG90cm9zIGl0ZW1zIGVuIGVsIHNpc3RlbWEpLiBEZWJlIGVsaW1pbmFyIHByaW1lcm8gbG9zIG1pc21vcy4nKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKGRhdGEpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcdFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn1cclxuXHJcblxyXG4vLyBSZW1vdmUgcHJvZHVjdCBmcm9tIGNhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG53aW5kb3cucmVtb3ZlRnJvbUNhcnQgPSBmdW5jdGlvbiAocm91dGUsIGNhcnRJdGVtSWQsIGFjdGlvbiwgZWxlbWVudCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0ZGF0YVR5cGU6ICdKU09OJyxcclxuICAgICAgICBkYXRhOiB7IGNhcnRJdGVtSWQ6IGNhcnRJdGVtSWQsIGFjdGlvbjogYWN0aW9uIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09ICdzdWNjZXNzJykge1xyXG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFUlJPUlwiKTtcclxuXHRcdFx0fSAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gcmVtb3ZlRnJvbUNhcnQoKVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIElmIGFuIGVycm9yIHBvcHMgd2hlbiBkZXN0cm95aW5nIGFuIGl0ZW0sIHJlbG9hZCBhbmQgcHJldmVudCBiYWQgbWFnaWNcclxuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHR9XHJcbiAgICB9KTtcdFxyXG59XHJcbi8qXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58IEFMRVJUU1xyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGFsZXJ0X29rKGJpZ3RleHQsIHNtYWxsdGV4dCl7XHJcbiAgICBzd2FsKFxyXG4gICAgICAgIGJpZ3RleHQsXHJcbiAgICAgICAgc21hbGx0ZXh0LFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgKTsgICAgXHJcbn1cclxuICAgIFxyXG5mdW5jdGlvbiBhbGVydF9lcnJvcihiaWd0ZXh0LCBzbWFsbHRleHQpe1xyXG4gICAgc3dhbChcclxuICAgICAgICBiaWd0ZXh0LFxyXG4gICAgICAgIHNtYWxsdGV4dCxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGVydF9pbmZvKGJpZ3RleHQsIHNtYWxsdGV4dCl7XHJcblxyXG4gICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBiaWd0ZXh0LFxyXG4gICAgICAgIHR5cGU6ICdpbmZvJyxcclxuICAgICAgICBodG1sOiBzbWFsbHRleHQsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OlxyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJpb24tY2hlY2ttYXJrLXJvdW5kXCI+PC9pPiBPayEnXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbG9zZVBhcmVudCgpe1xyXG5cdCQodGhpcykucGFyZW50KCdoaWRlJyk7XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdmFkbWluLWZ1bmN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=