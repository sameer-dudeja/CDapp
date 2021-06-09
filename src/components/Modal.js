import { useState } from 'react'
import { useGlobalContext } from './context'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Modal = () => {
  const btnStyleCancel = {
    color: '#ff5a43',
    borderColor: '#ff5a43',
    backgroundColor: 'white',
  }
  const btnStyleEnd = {
    backgroundColor: '#ff5a43',
    color: 'white',
    borderColor: '#ff5a43',
  }
  const { isModalOpen, closeModal } = useGlobalContext()
  const [checked, setChecked] = useState(false)
  const { stopTimers, resume } = useGlobalContext()
  // const [formData, setformData] = useState({
  //   isInterrupted: 'false',
  //   reason: '',
  // })
  const [other, setOther] = useState(false)
  const handleChange = (e) => {
    // const target = e.target
    // const name = target.name
    // const value = target.type === 'checkbox' ? target.checked : target.value
    // setformData({
    //   ...formData,
    //   reason: value,
    // })
    setChecked(!checked)
  }
  const handleOther = () => {
    setOther(!other)
  }
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <Form className='form'>
          <Form.Check
            className='checkbox'
            type='checkbox'
            name='classCompleted'
            id='classCompleted'
            label='Class Completed'
          />
          <Form.Check
            className='checkbox'
            type='checkbox'
            name='classInterrupted'
            id='classInterrupted'
            label='Class Interrupted'
            checked={checked}
            onChange={handleChange}
          />
          {checked && (
            <div className='secOptions'>
              <Form.Check
                className='checkbox'
                type='checkbox'
                id='Absent'
                name='Absent'
                label='Student didnt show up for class'
              />
              <Form.Check
                className='checkbox'
                type='checkbox'
                id='Interest'
                name='Interest'
                label='Student didnt show any interest'
              />
              <Form.Check
                className='checkbox'
                type='checkbox'
                id='Disconnect'
                name='Disconnect'
                label='Student got disconnected'
              />
              <Form.Check
                className='checkbox'
                type='checkbox'
                id='Disconnect2'
                name='Disconnect2'
                label='I got disconnected'
              />
              <Form.Check
                className='checkbox'
                type='checkbox'
                id='Other'
                name='Other'
                label='Other Reason'
                onChange={handleOther}
              />
              {other && (
                <div>
                  <Form.Control
                    as='textarea'
                    placeholder='Other Reasons'
                    rows={3}
                  />
                </div>
              )}
            </div>
          )}
          <Button
            style={btnStyleEnd}
            onClick={() => {
              closeModal()
              stopTimers()
            }}
          >
            End Class
          </Button>
          <Button
            style={btnStyleCancel}
            onClick={() => {
              closeModal()
              resume()
            }}
          >
            Cancel
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Modal
