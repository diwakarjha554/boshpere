import React, { useState } from 'react';

const YogaSubscription: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

    const handlePlanChange = (plan: 'monthly' | 'yearly') => {
        setSelectedPlan(plan);
    };

    return (
        <div className="max-w-7xl mx-auto p-8 bg-rose-500 rounded-3xl text-white">
            <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="space-y-6 flex-1">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Get unlimited access to everything</h2>
                        <p className="text-lg mb-6">
                            Unlimited Access to all Yoga Teacher Trainings (World's First and Most Affordable and Accessible
                            Trainings)
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex flex-col space-y-3">
                            <p className="flex items-center space-x-2">
                                <span>• 30-Hrs Yoga Nidra Teacher Training</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>• 40-Hrs Chakra Teacher Training</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>• 50-Hrs Pranayama Teacher Training</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>• 60-hrs Yin Yoga Teacher Training</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>• 200-Hrs Yoga Teacher Training</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>• 300-Hrs Yoga Teacher Training</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>• Become Certified Yoga Teachers from the comfort of your home</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>• Unlimited Access to trainings on Ayurveda, Anatomy & Physiology, etc</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>• Unlimited Yoga Classes, Meditations, Pranayama & Music</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>• Free Accreditation by Bodsphere to teach Yoga globally</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-4 text-black shadow-lg w-full lg:w-72">
                    <h3 className="text-xl font-bold mb-4">Become a part of Bodsphere's Yogic Revolution</h3>

                    <div className="space-y-4">
                        <div
                            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${selectedPlan === 'monthly' ? 'bg-rose-200' : 'bg-white'}`}
                            onClick={() => handlePlanChange('monthly')}
                        >
                            <div>
                                <input
                                    type="radio"
                                    id="monthly"
                                    name="subscription"
                                    className="mr-2 text-rose-500"
                                    checked={selectedPlan === 'monthly'}
                                    onChange={() => handlePlanChange('monthly')}
                                />
                                <label htmlFor="monthly">Monthly</label>
                                <div className="text-sm text-gray-600">Pay monthly</div>
                            </div>
                            <div className="font-bold">
                                $5<span className="text-sm">/m</span>
                            </div>
                        </div>

                        <div
                            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${selectedPlan === 'yearly' ? 'bg-rose-200' : 'bg-white'}`}
                            onClick={() => handlePlanChange('yearly')}
                        >
                            <div>
                                <input
                                    type="radio"
                                    id="yearly"
                                    name="subscription"
                                    className="mr-2 text-rose-500"
                                    checked={selectedPlan === 'yearly'}
                                    onChange={() => handlePlanChange('yearly')}
                                />
                                <label htmlFor="yearly">Yearly</label>
                                <div className="text-sm text-gray-600">Pay for full year</div>
                            </div>
                            <div className="font-bold">
                                $49<span className="text-sm">/y</span>
                            </div>
                        </div>

                        <button className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-500 transition-colors">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YogaSubscription;