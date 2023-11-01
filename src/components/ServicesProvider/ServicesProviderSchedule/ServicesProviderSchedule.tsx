
interface BusinessHours {
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
  }


const ServicesProviderSchedule = ({ businessHours }: { businessHours: BusinessHours }) => {
  return (
    <div className="max-w-md mx-auto rounded-lg">
      <h2 className="text-xl font-bold text-textPrimary mb-4">Business Hours</h2>
      <table className="table-fixed w-full">
        <tbody>
          {Object.entries(businessHours).map(([day, hours]) => (
            <tr key={day}>
              <td className="w-1/2 py-2 text-gray-600 font-semibold">{day}</td>
              <td className="w-1/2 py-2 text-gray-800">{hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesProviderSchedule;
