import { MdShoppingCart} from "react-icons/md";
import { FaLeaf } from "react-icons/fa";

const farmerSteps = [
  {
    step: 1,
    label: "Send SMS",
    desc: "Text your available crops and quantities using your basic mobile phone.",
  },
  {
    step: 2,
    label: "Get Listed",
    desc: "Your crops automatically are displayed on the wholesalers platform with your contact information.",
  },
  {
    step: 3,
    label: "Connect and sell",
    desc: "Interested wholesalers contact you directly to negotiate and complete transactions.",
  },
];

const wholesalerSteps = [
  {
    step: 1,
    label: "Download App",
    desc: "Install our mobile app and create your wholesaler profile to get started.",
  },
  {
    step: 2,
    label: "Browse Crops",
    desc: "View real-time listing of available crops , quantities and farmers information.",
  },
  {
    step: 3,
    label: "Connect and sell",
    desc: "Contact farmers directly through the app to negotiate prices and arrange purchases.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <h2 className="text-2xl font-bold text-center mb-2">How it Works</h2>
      <p className="text-center text-gray-700 mb-8">Simple steps to connect farmers with wholesalers</p>
      <div className="flex flex-col md:flex-row gap-8 justify-center mt-8">
        <div className="flex-1 bg-gray-100 rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4 font-semibold text-green-700 text-lg">
            <FaLeaf size={32} className="mr-12" />
            For Farmers
          </div>
          <ol className="list-decimal list-inside pl-2 space-y-5">
            {farmerSteps.map((s, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-7 h-7 bg-green-700 text-white rounded-full flex items-center justify-center font-bold">
                    {s.step}
                  </div>
                </div>
                <div>
                  <div className="font-semibold">{s.label}</div>
                  <div className="text-gray-700 text-sm">{s.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex-1 bg-gray-100 rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4 font-semibold text-blue-700 text-lg">
            <MdShoppingCart size={32} className="mr-10" />
            For Wholesalers
          </div>
          <ol className="list-decimal list-inside pl-2 space-y-5">
            {wholesalerSteps.map((s, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {s.step}
                  </div>
                </div>
                <div>
                  <div className="font-semibold">{s.label}</div>
                  <div className="text-gray-700 text-sm">{s.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
