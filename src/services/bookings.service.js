import { randomUUID } from "crypto"
import * as repository from "../repositories/bookings.repository.js"

export async function getBookings(){
    return repository.getAll()
}

export async function getBookingById(id){
    return repository.getById(id)
}

export async function createBooking(data){
    
    const newBooking = {
        id: randomUUID(),
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        date: data.date,
        time: data.time,
        status: "pending",
        services: []
    }
    
    return repository.create(newBooking)
}

export async function updateBooking(id, changes){
    return repository.update(id, allowedChanges)
}


export async function deleteBooking(id){
    return repository.remove(id)
}

