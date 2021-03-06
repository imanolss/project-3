import React, { Component } from 'react'
import {MyContext} from '../../context'
import {Link} from 'react-router-dom'
import axios from 'axios'
import MEDICINE_SERVICE from '../../services/medicines'
import { PageHeader, Button, Layout,  Form, Input} from 'antd'

export default class Medicines extends Component {

  state = {
    allmedicines: []
  }

  componentDidMount () {
    if (!localStorage.user) return this.props.history.push('/login')
    const userInfo = localStorage.user

    MEDICINE_SERVICE.all()
     .then(response => {
       this.setState({allmedicines : response.data.medicina})
       console.log(response.data.receta)
      })
     .catch(error => this.setState({ error, isLoading: false }))
  }

  delete = async (id, index) => {
  let{allmedicines} = this.state
  await MEDICINE_SERVICE.delete(id)
  allmedicines.splice(index, 1)
  this.setState({allmedicines})
}

  editMedicine = (id) => {
    this.props.history.push(`/medicine/edit/${id}`)
  }

  oneMedicine = (id) => {
    this.props.history.push(`/medicine/${id}`)
  }

  render() {
    const { Footer } = Layout
    const {allmedicines} = this.state

    return (
      <div>
         <PageHeader
            title="MediRecord"
            subTitle="The next step in healthcare"
            avatar={{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iSJt663UDm-lTTFdSAKHgGQwE5PZdDJGA-UK1wPAjKFhUPioZw' }}
             >
          </PageHeader>
        <br/>
         <div>
          Medicamentos que se toma actualmente
       
        </div>
        <br/>
        <Link to="/medicine/create"><button type="submit" value="Login">create</button></Link>
          <br/>

          <br/>
        <Link to="/profile"><button type="submit" value="Login">Profile</button></Link>
        <br/>

       <div> 
         {allmedicines.map((medicine, i) => {
           const {name, quantity, time, days} = medicine
           return (
             <div key={i}>
               <p>{name}</p>
               <p>{quantity}</p>
               <p>{time}</p>
               <p>{days}</p>
               <button type='delete' key="delete" id={medicine.id} onClick={() =>this.delete(medicine._id, i)} >Delete</button>
               <button type='submit' key="singleview" onClick={() =>this.oneMedicine(medicine._id)} >Más información</button>
               <button type='edit' key="edit" onClick={() =>this.editMedicine(medicine._id)} >Edit</button>
             </div>
           )
           })}
       </div>
       <Footer style={{ textAlign: 'center' }}>Ironhack ©2019 Created by Imanol</Footer>

      </div>
    )
  }
}