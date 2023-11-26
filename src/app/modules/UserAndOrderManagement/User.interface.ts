import { Model } from 'mongoose'

export type TFullName = {
  firstName: string
  lastName: string
}

export type TAddress = {
  street: string
  city: string
  country: string
}

export type TOrders = {
  productName: string
  price: number
  quantity: number
}

export type TUserAndOrder = {
  userId: number
  username: string
  password: string
  fullName: TFullName
  age: number
  email: string
  isActive: boolean
  hobbies: string[]
  address: TAddress
  orders: TOrders[]
}

export interface UserModel extends Model<TUserAndOrder> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(userId: number | string): Promise<TUserAndOrder | null>
}
