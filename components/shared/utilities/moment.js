import moment from 'jalali-moment'



const MomentDate = ({ time }) => {
    return (
        <p>
            {moment(time, 'YYYY/MM/DD HH:mm').locale('fa').format('YYYY/MM/DD HH:mm')}
        </p>
    );
}

export default MomentDate;