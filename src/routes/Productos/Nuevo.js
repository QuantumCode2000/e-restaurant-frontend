const Nuevo = () => {
    return(<div>

    <h2>AGREGAR PRODUCTO</h2>
    
    <form method="post" action="datos.js">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Producto</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Precio</label>
            <input type="number" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Fecha</label>
            <input type="date" class="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" class="btn btn-primary">Agregar Producto</button>
    </form>
    
    </div>);
};

export default Nuevo