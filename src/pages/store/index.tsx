import React, { useState } from 'react';
import { LandingLayout } from 'layout';
import { ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { ExpandedButton } from 'components/ExpandButton';
import { quickToast } from 'redux/store';

const Store: React.FC<Props> = ({ isMobile, deviceWidth }) => {
  const [form, setForm] = useState({ name: '', email: '', city: '' });

  const handleSubmit = () => {
    if (Object.values(form).some(x => !x)) {
      quickToast({ text: 'All fields are required', actionType: 'error' });
    } else {
      quickToast({ text: 'You have successfully subscribed', actionType: 'success' });
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
              Join the waitlist for our upcoming <span>streetwear collection</span>{' '}
            </h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  required
                  placeholder="Jude Gavi"
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
                  placeholder="Judegaviria@gmail.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <select id="city" required value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}>
                  {['Lagos', 'Abuja'].map(opt => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
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
