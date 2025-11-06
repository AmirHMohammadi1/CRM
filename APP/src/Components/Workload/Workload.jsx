import React from 'react'
import WorkloadUser from '../WorkloadUser/WorkloadUser'
import ViewAllBtn from '../ViewAllBtn/ViewAllBtn';
import PieChartWithCustomizedLabel from '../PieChart/PieChar';
import ComposedChartWithAxisLabels from '../ComposedChartWithAxisLabels/ComposedChartWithAxisLabels';


import './Workload.css'

export default function Workload() {


    return (
        <div className='workload col-6'>
            <div className='workload__header'>
                <h2>حجم کار</h2>

            </div>


            <div className='chart'>
                <div className='circle--chart d-flex align-items-center justify-content-around'>
                    <PieChartWithCustomizedLabel />

                    <div className='circle--chart__information'>
                        <div>
                            <div className='slice-information d-flex  align-items-center'>
                                <div className='slice-information-color' style={{ backgroundColor: 'red' }}></div>
                                <div className='slice-information-description'>میزان فروش</div>
                            </div>

                            <div className='slice-information d-flex align-items-center'>
                                <div className='slice-information-color' style={{ backgroundColor: 'blue' }}></div>
                                <div className='slice-information-description'>میزان رضایت</div>
                            </div>

                            <div className='slice-information d-flex align-items-center'>
                                <div className='slice-information-color' style={{ backgroundColor: 'black' }}></div>
                                <div className='slice-information-description'>میزان سود</div>
                            </div>

                            <div className='slice-information d-flex align-items-center'>
                                <div className='slice-information-color' style={{ backgroundColor: 'red' }}></div>
                                <div className='slice-information-description'>میزان فروش</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='line--chart'>
                    <ComposedChartWithAxisLabels />
                </div>
            </div>

        </div>
    )
}
