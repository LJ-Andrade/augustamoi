
@extends('vadmin.partials.main')
@section('title', 'Vadmin | Métodos de Pago')
{{-- STYLE INCLUDES --}}
@section('styles')
@endsection

{{-- HEADER --}}
@section('header')
	@component('vadmin.components.header-list')
		@slot('breadcrums')
		    <li class="breadcrumb-item"><a href="{{ url('vadmin')}}">Inicio</a></li>
            <li class="breadcrumb-item active">Métodos de Pago</li>
		@endslot
		@slot('actions')
			{{-- Actions --}}
			<div class="list-actions">

				<input id="SelectedItems" type="hidden" name="SelectedItems[]">

				{{--  THIS VALUE MUST BE THE NAME OF THE SECTION CONTROLLER  --}}
				<input id="ModelName" type="hidden" value="payments">
				
				<a href="{{ route('payments.create') }}" class="btn btnMain"><i class="icon-plus-round"></i>  Nuevo método de pago</a>
				<button id="SearchFiltersBtn" class="btn btnMain"><i class="icon-ios-search-strong"></i></button>
				
				{{-- Edit --}}
				<button onclick="listAction({ action: 'edit', id: $('#EditId').val(), model: $('#ModelName').val() })"
					class="ListActionBtn EditBtn btn btnMain Hidden" data-visibleif="1"><i class="icon-pencil2"></i> Editar</button>
				<input id="EditId" type="hidden">

				{{-- Delete --}}
				<button class="ListActionBtn DeleteBtn btn btnRed Hidden" data-visibleif=">0"><i class="icon-bin2"></i> Eliminar</button>
				{{-- If Search --}}
				@if(isset($_GET['name']))
					<a href="{{ url('vadmin/payments') }}"><button type="button" class="btn btnGrey">Mostrar Todos</button></a>
					<div class="results">{{ $items->total() }} resultados de búsqueda</div>
				@endif
			</div>
		@endslot
		@slot('searcher')
			@include('vadmin.catalog.payments.searcher')
		@endslot
	@endcomponent
@endsection

{{-- CONTENT --}}
@section('content')
	<div class="list-wrapper">
		{{-- Search --}}
		{{-- Test --}}
		<div id="TestBox" class="col-xs-12 test-box Hidden">
		</div>
		<div class="row">
			@component('vadmin.components.list')
				@slot('actions', '')
				@slot('title', 'Métodos de Pago')
					@if($items->count() == '0')
						@slot('tableTitles', '')
						@slot('tableContent', '')
					@else
					@slot('tableTitles')
						<th></th>
						<th>Nombre</th>
						<th>Descripción</th>
						<th>Descuento</th>
						<th>Recargo</th>
						<th>Estado</th>
						{{-- <th>Fecha de Creación</th> --}}
						
					@endslot

					@slot('tableContent')
						@foreach($items as $item)
							<tr>
								<td class="w-50">
									<label class="custom-control custom-checkbox list-checkbox">
										<input type="checkbox" class="List-Checkbox custom-control-input row-checkbox" data-id="{{ $item->id }}">
										<span class="custom-control-indicator"></span>
										<span class="custom-control-description"></span>
									</label>
								</td>
								<td class="show-link max-text"><a href="{{ url('vadmin/payments/'.$item->id) }}">{{ $item->name }}</a></td>
								<td class="max-text">{{ $item->description }}</td>
								<td class="max-text">
									@if($item->discount != 0) 
										% {{ $item->discount }}
									@else
										-
									@endif
								</td>
								<td class="max-text">
									@if($item->charge != 0)
										% {{ $item->charge }}
									@else
										-
									@endif
								</td>
								{{-- <td class="w-200">{{ transDateT($item->created_at) }}</td> --}}
								
								<td class="w-50 pad0 centered">
									<label class="switch">
										<input class="UpdateStatus switch-checkbox" type="checkbox" 
										data-model="Payment" data-id="{{ $item->id }}"
										@if($item->status == '1') checked @endif>
										<span class="slider round"></span>
									</label>
								</td>
							</tr>						
						@endforeach
					@endif
				@endslot
			@endcomponent
			
			{{--  Pagination  --}}
			{!! $items->render() !!}
		</div>
		<div id="Error"></div>	
	</div>
@endsection

{{-- SCRIPT INCLUDES --}}
@section('scripts')
	@include('vadmin.components.bladejs')
@endsection

