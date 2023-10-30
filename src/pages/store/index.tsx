import React, { ChangeEvent, useState } from 'react';
import { LandingLayout } from 'layout';
import { ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { ExpandedButton } from 'components/ExpandButton';
import { quickToast } from 'redux/store';

const Store: React.FC<Props> = ({ isMobile, deviceWidth }) => {
  type FormPayload = { name: string; email: string; city: string; designInterests: string[] };
  const [form, setForm] = useState<FormPayload>({ name: '', email: '', city: '', designInterests: [] });

  const SAMPLES = [
    { name: 'JerseyGreen', image: '/assets/wears/wts_jersey_1.png' },
    { name: 'JerseyYellow', image: '/assets/wears/wts_jersey_2.png' },
    { name: 'WhiteTee', image: '/assets/wears/tee_3.png' },
    { name: 'WhiteTeeAlt', image: '/assets/wears/wts_tee_2.png' },
    { name: 'BlackTee', image: '/assets/wears/tee_4.png' },
    { name: 'Hoodie', image: '/assets/wears/wts_hoodie.png' },
    { name: 'Joggers', image: '/assets/wears/joggers.png' }
  ];

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setForm(prevForm => ({ ...prevForm, designInterests: [...prevForm.designInterests, value] }));
    } else {
      setForm(prevForm => ({
        ...prevForm,
        designInterests: prevForm.designInterests.filter(sample => sample !== value)
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      // Validate form
      if (Object.values(form).some(x => !x)) {
        return quickToast({ text: 'All fields are required', actionType: 'error' });
      }
      if (!form.designInterests.length) {
        return quickToast({ text: 'Please select at least one design sample', actionType: 'caution' });
      }
      // Process form
      quickToast({ text: 'Subscribing...' });
      const data = {
        audience: 'store',
        email_address: form.email,
        merge_fields: { FULLNAME: form.name, CITY: form.city, DESIGN_INT: form.designInterests.join(', ') }
      };
      let response: any = await fetch(`/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        quickToast({ text: 'You have successfully joined our waitlist', actionType: 'success' });
        setForm({ name: '', email: '', city: '', designInterests: [] });
      } else {
        response = await response.json();
        quickToast({ text: response.error?.split('. ')[0] || 'Already subscribed', actionType: 'error' });
      }
    } catch (error) {
      quickToast({ text: 'Oops, something went wrong, try again later', actionType: 'error' });
    }
  };

  return (
    <LandingLayout
      headTitle={'WETALKSOUND | STORE'}
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      showFooter={true}
      showHeader={false}
    >
      <ComponentHolder
        className="page-zero no-border page-agency page-store"
        style={{ backgroundImage: `url(assets/background/jerseys.png)` }}
        bodyClass="page-agency-caption"
      >
        <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} active={'/store'} />

        <div className="page-store-subscribe">
          <div className="content">
            <h2>
              Join the waitlist for our upcoming <span>streetwear collection</span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  required
                  value={form.city}
                  onChange={e => setForm({ ...form, city: e.target.value })}
                />
              </div>
              <div className="design_samples">
                {SAMPLES.map(sample => (
                  <div key={sample.name}>
                    <input
                      id={sample.name}
                      type="checkbox"
                      value={sample.name}
                      checked={form.designInterests.includes(sample.name)}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor={sample.name}>
                      <img src={sample.image} alt={sample.name} />
                      <p>{sample.name}</p>
                    </label>
                  </div>
                ))}
              </div>
              <div className="btn">
                <ExpandedButton label="Join our waitlist" onClick={handleSubmit} />
              </div>
            </form>
          </div>
        </div>
      </ComponentHolder>
    </LandingLayout>
  );
};

export default Store;

interface Props {
  isMobile: boolean;
  deviceWidth: number;
}
