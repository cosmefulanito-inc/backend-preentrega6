import * as repository from "../repositories/services.repository.js"

export async function getServices() {
  return repository.getAll()
}

export async function getServiceById(id) {
  return repository.getById(id)
}

export async function addService(data) {
  return repository.create(data) // el id es generado por Mongo ahora
}

export async function deleteService(id){
    return repository.remove(id)
}

export async function updateService(id, changes){
    return repository.update(id, changes)
}
