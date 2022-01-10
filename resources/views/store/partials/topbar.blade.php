<!-- Topbar-->
@if( $settings->pre_topbar_text != '' )
	<div id="PreTopbar" class="pre-topbar">
		<div class="marquee">
			{!! $settings->pre_topbar_text !!}
		</div>
	</div>
@endif
<!-- Topbar-->
<div class="topbar">
	<div class="topbar-column">
		<a class="social-button sb-facebook shape-none sb-dark" href="https://www.facebook.com/augustamoimayorista" target="_blank">
			<i class="socicon-facebook"></i>
		</a>
		<a class="social-button sb-instagram shape-none sb-dark" href="https://www.instagram.com/augusta_moi/" target="_blank">
			<i class="socicon-instagram"></i>
		</a>
		{{-- <a class="social-button sb-instagram shape-none sb-dark" >
			<i class="fa  fa-home"></i> José María moreno 991 2G, 1424 cp
		</a> --}}
	
		<a class="">
			&nbsp; {{ $settings->phone1 }}</a> 
		<a class="e-mail-field" href="mailto:venta@augustamoi.com">
			<i class="far fa-envelope"></i> &nbsp; venta@augustamoi.com
		</a>
		
	</div>
	<div class="topbar-column text-right">
		<a href="{{ url('como-comprar') }}">Como Comprar</a>
	</div>
</div>