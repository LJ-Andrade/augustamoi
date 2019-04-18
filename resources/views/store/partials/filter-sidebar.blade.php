<div class="FilterSidebar filter-sidebar">
    {!! Form::open(['route' => 'store', 'method' => 'GET', 'class' => 'input-group form-group search-input']) !!}
        <span class="input-group-btn">
            <button type="submit"><i class="icon-search"></i></button>
        </span>
        <input class="form-control" name="buscar" type="search" placeholder="BUSCAR...">
    {!! Form::close() !!}
    {{-- <div class="featured-text"> --}}
        {{-- <div class="text text-1"><a href="{{ route('store.search.tag', 'Edición Limitada') }}">#EDICIÓN LIMITADA</a></div>
        <div class="text text-2"><a href="{{ route('store.search.tag', 'nuevo') }}">#NUEVOS INGRESOS</a></div>
        <div class="text text-1"><a href="{{ route('store', ['filtrar' => 'descuentos']) }}">#CON DESCUENTO</a></div> --}}
    {{-- </div> --}}

    <div class="filter-item">
        <a class="collapse-icon" onclick="collapseFilter($(this))">-</a>
        <div class="sub-title">ORDENAR POR</div>
        <ul class="filter-content">
            <li><a href="{{ route('store', ['precio' => 'menor']) }}"><i class="fas fa-sort-amount-down"></i> Menor precio</a></li>
            <li><a href="{{ route('store', ['precio' => 'mayor']) }}"><i class="fas fa-sort-amount-up"></i> Mayor precio</a></li>
            <li><a href="{{ route('store', ['filtrar' => 'descuentos']) }}"><i class="fas fa-percentage"></i> Con Descuento</a></li>
            <li><a href="{{ route('store', ['filtrar' => 'populares']) }}"><i class="fas fa-fire"></i> Populares</a></li>
        </ul>
    </div>


    <div class="filter-item">
        <a class="collapse-icon" onclick="collapseFilter($(this))">-</a>
        <div class="sub-title">CATEGORÍAS</div>
        <ul>
            @foreach($categories as $category)
                <li><a onchange="location = this.value;" href="{{ route('store', 'categoria=').$category->id }}"> {{ $category->name }} </a></li>
            @endforeach
        </ul>
    </div>


    <div class="filter-item">
        <a class="collapse-icon" onclick="collapseFilter($(this))">-</a>
        <div class="sub-title">ETIQUETAS</div>
        <ul>
            @foreach($tags as $tag)
                <span class="badge"><a href="{{ route('store.search.tag', $tag->name) }}"> {{ $tag->name }}</a></span>
            @endforeach
        </ul>
    </div>
</div>