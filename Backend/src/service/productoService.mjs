import productoRepository from "../repository/productoRepository.mjs";


export async function obtenerProductosService() {
    return await productoRepository.getAll();
}

export async function obtenerProductoService(id) {
    return await productoRepository.getById(id);
}

export async function agregarProductoService(producto) {
    return await productoRepository.insert(producto);
}

export async function eliminarProductoService(id) {
    return await productoRepository.delete(id);
}

export async function actualizarProductoService(id,producto) {
    return await productoRepository.update(id,producto);
}
