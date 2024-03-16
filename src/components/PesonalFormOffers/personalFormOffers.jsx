import { useEffect } from "react";
import YourBookedTables from "../../hooks/yourBookedTables";
import { PersonalFormWrapper, PersonalFormStyled, PersonalTitle } from "../PersonalForm/personalFormStyles";
import { useParams } from "react-router-dom";
import Trash from "../../assets/delete.png"
import { BookingElement, BookingElementText, TrashBox, TrashBoxImage } from "./personalFormOffersStyles";
import useRemoveFromBooked from "../../hooks/removeFromBooked";
const PersonalFormOffers = () => {
    const { id } = useParams()
    const { oneUser, refetch } = YourBookedTables({ id })
  //  const {handleRefetch} = useRemoveFromBooked()

  const {handleRemove} = useRemoveFromBooked()
     useEffect(() => {
        refetch()
    }, [])
    useEffect(()=> {
console.log(JSON.stringify(oneUser))
if(oneUser) {
 //   console.log("ERR"+JSON.stringify(oneUser.getYourBookedTables))
    for( let i=0; i<oneUser.getYourBookedTables.length; i++){
        console.log("ERR"+JSON.stringify(oneUser.getYourBookedTables[i]))
    }
}
    }, [oneUser])


    useEffect(()=> {
refetch()
console.log("is refetching")
    }, [handleRemove])
    return (<>
        <PersonalFormWrapper>
            <PersonalFormStyled>
                <PersonalTitle>Your booked tables</PersonalTitle>
                {oneUser && (
                <>
                 {oneUser.getYourBookedTables.map((itemm)=> (
                   itemm.timeForBooking.map((item, index) => (
                        <BookingElement>
                        <BookingElementText>
                                {index + 1}.  Table №{item.tableID} is booked for {item.timeForBooking}  ({item.dataOfBooking})
                            </BookingElementText>
                            <TrashBox>
                                <TrashBoxImage
                               onClick={()=>handleRemove(item)}
                                    src={Trash}
                                    alt="trash" />
                                    </TrashBox>
                        </BookingElement>
                    )
                    )
                 )) }
                {/*
                    oneUser.getYourBookedTables[0].timeForBooking.map((item, index) => (
                        <BookingElement>
                        <BookingElementText>
                                {index + 1}.  Table №{item.tableID} is booked for {item.timeForBooking}  ({item.dataOfBooking})
                            </BookingElementText>
                            <TrashBox>
                                <TrashBoxImage
                                    src={Trash}
                                    alt="trash" />
                                    </TrashBox>
                        </BookingElement>
                    )
                    )
                    */}
                </>
                    )
                    
                    }
            </PersonalFormStyled>
        </PersonalFormWrapper>
    </>);
}

export default PersonalFormOffers;