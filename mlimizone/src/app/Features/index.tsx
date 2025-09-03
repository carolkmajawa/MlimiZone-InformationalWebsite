import {MdTextsms, MdAppShortcut, MdOutlineAnalytics, MdPayment, MdAccessTime, MdInsights, MdShoppingCart} from "react-icons/md";

const features = [
 {
   icon: <MdTextsms className="text-green-600" size={36} />,
   title: "SMS Integration",
   desc: "Farmers can post there available crops via simple sms message. No internet required, just basic mobile phone",
 },
 {
   icon: <MdAppShortcut className="text-blue-500" size={36} />,
   title: "Mobile App",
   desc: "Wholesalers get a mobile app to browse available crops , quantity and connect with the farmers",
 },
 {
   icon: <MdOutlineAnalytics className="text-orange-400" size={36} />,
   title: "Real time Analytics",
   desc: "Track market trends,pricing and availability in real-time to make informed business decisions",
 },
 {
   icon: <MdPayment className="text-purple-600" size={36} />,
   title: "Secure Transaction",
   desc: "End to end encrypted communication and secure payment processing all transactions",
 },
 {
   icon: <MdAccessTime className="text-blue-400" size={36} />,
   title: "24/7 Availability",
   desc: "Platform operates round the clock allowing farmers and wholesalers to connect anytime.",
 },
 {
   icon: <MdInsights className="text-purple-400" size={36} />,
   title: "Market Insights",
   desc: "Get valuable insights into market demand, seasonal trends and market prices",
 },
];


const PowerfulFeatures=()=>{
    return (
        <div className="max-w-37xl mx-auto px-10 ">
            <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
                <h1 className="text-3xl font-bold text-black text-center mb-2">Powerful Features</h1>
                <p className="text-center text-black-700 mb-10 text-black">
                    Our platform combines the simplicity of SMS with the power of modern technology
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
                    {features.map((f, i) => (
                        <div key={i} className="flex flex-col items-start bg-gray-50 rounded-lg p-5 shadow-md">
                            <div className="mb-3">{f.icon}</div>
                            <div className="font-bold text-base mb-1 text-black">{f.title}</div>
                            <div className="text-gray-800 text-sm">{f.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PowerfulFeatures