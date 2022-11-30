import moment from 'jalali-moment'



const MomentComment = ({ time }) => {
    return (
        <p>
            {moment(time, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
        </p>
    );
}

export default MomentComment;