import './todo-item.css';
import { useRef, useState } from 'react';
import {Modal} from 'bootstrap';
export function TodoItem({ todo, checkItem, removeItem, todos, setTodos }) {
  const [title, setTitle] = useState(todo.title);
  const modalRef = useRef();
  const showModal = () => {
      const modalEle = modalRef.current
      const bsModal = new Modal(modalEle, {
          backdrop: 'static',
          keyboard: false
      })
      bsModal.show()
  }
  
  const hideModal = () => {
    const modalEle = modalRef.current
    const bsModal = Modal.getInstance(modalEle)
    setTitle(todo.title);
    bsModal.hide()
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    todo.title = title;
    setTodos([...todos]);
    hideModal();
    form.reset();
  }
  return (
    <div className={todo.isDone ? "done__item" : "todo__item" + " d-flex align-items-baseline justify-content-between"} >
      <input type="checkbox" className='form-check-input me-1' onChange={checkItem} />
      { todo.title }
      <button className='btn btn-danger ms-1' onClick={removeItem}>X</button>
      <button type="button" className="btn btn-primary" onClick={showModal}>Edit</button>
      <div className="modal fade" ref={modalRef} tabIndex="-1" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className='form-group mb-3'>
                  <input type="text" className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='d-flex justify-content-center'>
                  <button type="submit" className="btn btn-primary">Update edit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}