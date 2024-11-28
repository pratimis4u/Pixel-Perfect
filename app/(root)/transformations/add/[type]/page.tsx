import Header from '@/components/shared/Header'
import React from 'react'
import { transformationTypes } from '@/constants'
import TransformationPage from '../../[id]/page';
import TransformationForm from '@/components/shared/TransformationForm';

const AddTransformationTypePage = ({params:{type}}:
  SearchParamProps) => {
    const transformation = transformationTypes[type];
  return (
    <>
    <Header title={transformation.title}
    subtitle={transformation.subTitle} />

    <TransformationPage />
    {/* <section className="mt-10">
      <TransformationForm
      action="Add"
      userId={user._id}
      type={transformation.type as TransformationTypeKey}
      creditBalance={userAgent.creditBalance}
      />
    </section> */}

  
</>
  )
}

export default AddTransformationTypePage
