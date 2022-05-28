import { v4 as uuidV4 } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity('users')
class User {

  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  // @Column()
  // username: string

  @Column()
  password: string

  @Column()
  email: string

  @Column({ name: 'driver_license' })
  driverLicense: string

  @Column({ name: 'is_admin' })
  isAdmin: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { User }