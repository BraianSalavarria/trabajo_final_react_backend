import ventaRepository from '../repository/VentaRepository.mjs'

export async function obtenerVentasService() {
    return await ventaRepository.getAll();
}

export async function obtenerVentaService(id) {
    return await ventaRepository.getById(id);
}

export async function agregarVentaService(venta) {
    return await ventaRepository.insert(venta);
}

export async function eliminarVentaService(id) {
    return await ventaRepository.delete(id);
}

export async function actualizarVentaService(id,venta) {
    return await ventaRepository.update(id,venta);
}