

import React from 'react';
import ReactDOM from 'react-dom';
import { OverlayStyles, Modal, ModalWrapper, AgreeButton, DisagreeButton, ButtonBlock } from './SureModalStyles';
import { useMutation, useQuery } from "@apollo/client";
import Calendar from '../calendar/calendar';
import useCalendar from '../../hooks/useCalendar';
import GetTablesInfo from '../../hooks/getTablesInfo';
import { useEffect } from 'react';
import { useState } from 'react';
import { ModalTitle } from '../Modal/ModalStyles';
import { useParams } from 'react-router-dom';
import useHistoryTables from '../../hooks/useHistoryTables';
import "./index.css"
import styles from "./index.module.scss"
export default function SureModalWindow({ isOpen, setIsOpen, item, handleConfirm }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams();
  const { handleReplaceTable, handleRefetchHistory, errMess } = useHistoryTables()

  if (!isOpen) return null;

  const portalElement = document.getElementById('sure');

  const handleClick = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  const handleAgree = () => {
    handleConfirm(item.current);
    setIsSuccess(true);
  };
  const handleRestore = (restoreItem) => {
    setIsSuccess(true);
    handleReplaceTable(restoreItem)
    handleRefetchHistory()
  }

  const handleClose = () => {

    console.log("open")
    setIsOpen(true)
  }
  return ReactDOM.createPortal(
    <>

      {!isSuccess ? (
        <>
          {item.current && (
            <>
              {!item.current.isHistory && (
                <div className={styles.modal}>
                  <div className={styles.modal__inner}>
                    <div className={styles.modal__background}>   </div>
                    <h1 className={styles.modal__title}>

                      Book this table?
                    </h1>
                    <div className={styles.modal__text}>
                      <p className={styles.modal__about}>
                        Are you sure to book table № {item.current.tableID} for {item.current.timeForBooking} <br></br> ({item.current.dataOfBooking})?


                      </p>
                    </div>
                    <button className={styles.modal__btn} 
                      onClick={handleAgree}
                    >
                      Submit
                    </button>
                  </div>
                  <div className={styles.modal__overlay}>

                  </div>
                </div>
              )}

            </>
          )}
          {item.current && (
            <>
              {item.current.isHistory && (
                <div className={styles.modal}>
                  <div className={styles.modal__inner}>
                    <div className={styles.modal__background}>   </div>
                    <h1 className={styles.modal__title}>
                      Restore this booking?
                    </h1>
                    <div className={styles.modal__text}>
                      <p className={styles.modal__about}>
                        Are you sure to restore booking of table N {item.current.tableID} for  <br /> {item.current.from} - {item.current.to}  ({item.current.dataOfBooking})
                      </p>
                    </div>
                    <button className={styles.modal__btn}
                      onClick={() => handleRestore(item.current)}
                    >
                      Submit
                    </button>
                  </div>
                  <div className={styles.modal__overlay}>

                  </div>
                </div>
              )}

            </>
          )}
        </>
      ) : (


        <>
{errMess && (
<>
  {errMess.replaceFromHistory.errorMessage ? (
    <>



<div className={styles.modal}>
            <div className={styles.modal__inner}>
              <div className={styles.modal__background}>   </div>
              <h1 className={styles.modal__title}>
              Error
              </h1>
              <div className={styles.modal__text}>
                <p className={styles.modal__about}>

               This table is already booked <br />
 
                </p>
              </div>
              <button className={styles.modal__btn}
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
            <div className={styles.modal__overlay}>

            </div>
          </div>
  </>
):  (

<>
          <div className={styles.modal}>
            <div className={styles.modal__inner}>
              <div className={styles.modal__background}>   </div>
              <h1 className={styles.modal__title}>
                Contragulation!
              </h1>
              <div className={styles.modal__text}>
                <p className={styles.modal__about}>

                  You have successfully booked
                  this table for 6-4-2024
                  (12:00-14:00) <br />
 
                </p>
              </div>
              <button className={styles.modal__btn}
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
            <div className={styles.modal__overlay}>

            </div>
          </div>

</>

)}






</>
)}

        </>
      )}

    </>,
    portalElement || document.body
  );
}

//DATA{"replaceFromHistory":{"errorMessage":"You cannot reserve this table for the whole day as it is already booked for some time","__typename":"ReplaceFromHistoryResult"}}