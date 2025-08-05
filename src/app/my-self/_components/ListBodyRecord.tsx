import { listBodyRecordData } from '@/app/constants';
import BodyRecordCard from './BodyRecordCard';

const ListBodyRecord = () => {
  return (
    <div className="grid grid-cols-3 gap-6 md:gap-10">
      {listBodyRecordData.map(record => {
        return (
          <BodyRecordCard
            key={record.id}
            imgSrc={record.imageSrc}
            title={record.title}
            buttonText={record.buttonText}
          />
        );
      })}
    </div>
  );
};

export default ListBodyRecord;
