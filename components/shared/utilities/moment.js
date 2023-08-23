import moment from 'jalali-moment'



const MomentDate = ({ time }) => {
    return (
        <p>
            {moment(time, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
        </p>
    );
}

export default MomentDate;